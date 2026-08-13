import Reveal from "../Reveal";

function ProjectHero({ project }) {
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
          <div className="relative aspect-[16/8] overflow-hidden border border-border bg-surface">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                [HERO PROJECT SCREENSHOT]
              </span>
            </div>

            {project.image && (
              <img
                src={project.image}
                alt=""
                className="relative z-10 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectHero;