import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";

import { projects } from "../data/projects";

function Work() {
  return (
    <PageShell>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Selected Work
              </p>
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-9xl">
              Projects
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">
              A collection of projects exploring software development,
              artificial intelligence, mobile applications, and interactive
              user experiences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.id}>
              <Link
                to={`/work/${project.id}`}
                className="group block"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden border border-border bg-surface">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt=""
                      className="h-[300px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] md:h-[450px]"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-[300px] items-center justify-center md:h-[450px]">
                      <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                        [PROJECT IMAGE]
                      </span>
                    </div>
                  )}

                  {/* Project Number */}
                  <div className="absolute left-5 top-5 border border-border bg-background/90 px-3 py-2 backdrop-blur-sm">
                    <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                      {project.number}
                    </span>
                  </div>
                </div>

                {/* Project Information */}
                <div className="mt-8 grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-8">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-accent" />

                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                        {project.category}
                      </p>
                    </div>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-accent md:text-5xl">
                      {project.heroTitle}
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-text-secondary md:text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-start justify-start md:col-span-4 md:justify-end">
                    <span className="inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-secondary transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:text-accent">
                      View Project
                      <span className="text-base">↗</span>
                    </span>
                  </div>
                </div>

                {/* Technologies */}
                {project.technologies?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </Link>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="mt-20 h-px bg-border" />
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export default Work;