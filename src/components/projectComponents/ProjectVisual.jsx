import Reveal from "../Reveal";

function ProjectVisual({
  label = "[PROJECT VISUAL]",
  aspect = "",
  src = null,
  alt = "",
  caption = null,
}) {
  return (
    <Reveal className="mt-12">
      <figure>
        <div
          className={`relative overflow-hidden border border-border bg-surface ${aspect}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              {label}
            </span>
          </div>

          {src && (
            <img
              src={src}
              alt={alt}
              className="relative z-10 h-full w-full object-cover"
            />
          )}
        </div>

        {caption && (
          <figcaption className="mt-3 max-w-2xl font-mono text-xs leading-6 text-text-muted">
            {caption}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}

export default ProjectVisual;