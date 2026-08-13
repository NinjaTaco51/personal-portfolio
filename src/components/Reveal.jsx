import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all
        duration-1000
        ease-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Reveal;