import Reveal from "../Reveal";

function ProjectSection({
  title,
  children,
  className = "",
}) {
  return (
    <section
      className={`mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32 ${className}`}
    >
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-border" />
            </div>

            <h2 className="mt-4 text-sm font-medium uppercase tracking-wider text-text-muted">
              {title}
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8 md:col-start-5">
          <Reveal>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;