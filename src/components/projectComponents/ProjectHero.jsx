import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal";

function ProjectHero({ project }) {
  const galleryRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (!gallery || !project.gallery?.length) return;

    let animationFrame;
    const speed = 0.4;

    const animate = () => {
      if (!isPaused) {
        positionRef.current += speed;

        // Get the width of one complete loop (all images once)
        const scrollWidth = gallery.scrollWidth;
        const oneLoop = scrollWidth / 2; // Since we duplicated images

        if (positionRef.current >= oneLoop) {
          positionRef.current = 0;
        }

        gallery.scrollLeft = positionRef.current;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [project.gallery, isPaused]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
  };

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-accent" />

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {project.number} / {project.category}
            </p>
          </div>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-9xl">
            {project.heroTitle}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">
            {project.description}
          </p>
        </Reveal>

        <Reveal className="mt-16">
          <div
            ref={galleryRef}
            className="overflow-x-hidden scrollbar-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="flex w-max gap-6">
              {[...project.gallery, ...project.gallery].map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="w-[420px] h-[300px] shrink-0 overflow-hidden border border-border bg-surface cursor-pointer transition-transform hover:scale-105"
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="block w-full h-full object-cover object-top"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={handleCloseZoom}
        >
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Zoomed view"
              className="h-auto w-full object-contain"
            />
            <button
              onClick={handleCloseZoom}
              className="absolute -right-10 -top-10 rounded-full bg-white p-2 text-black hover:bg-gray-200 transition-colors"
              aria-label="Close zoom"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectHero;