import Reveal from "../Reveal";

function MobileProjectVisual({
  src,
  alt = "",
  caption,
  className = "",
}) {
  return (
    <Reveal className={`mt-12 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-sm">
          <img
            src={src}
            alt={alt}
            className="block h-auto w-full"
          />
        </div>

        {caption && (
          <p className="mt-4 max-w-[320px] text-center font-mono text-xs uppercase tracking-wider text-text-muted">
            {caption}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default MobileProjectVisual;