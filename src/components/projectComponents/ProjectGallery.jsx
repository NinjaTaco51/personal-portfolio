import { useEffect, useRef } from "react";

function ProjectGallery({ images = [] }) {
    const galleryRef = useRef(null);

    useEffect(() => {
        const gallery = galleryRef.current;

        if (!gallery || images.length === 0) return;

        let animationFrame;
        let position = 0;

        const speed = 0.4;

        const animate = () => {
            position += speed;

            if (position >= gallery.scrollWidth / 2) {
                position = 0;
            }

            gallery.scrollLeft = position;

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [images]);

    return (
        <div
            ref={galleryRef}
            className="mt-16 overflow-x-hidden"
        >
            <div className="flex w-max gap-6">
                {[...images, ...images].map((image, index) => (
                    <div
                        key={`${image.src}-${index}`}
                        className="w-[420px] h-[300px] shrink-0 overflow-hidden border border-border cursor-pointer transition-transform hover:scale-105"
                        onClick={() => handleImageClick(image)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || ""}
                            className="block w-full h-full object-cover object-top"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectGallery;