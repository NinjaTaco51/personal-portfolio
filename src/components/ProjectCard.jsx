import { Link } from "react-router-dom";
import TechTag from "./TechTag";
import Reveal from "./Reveal";

function ProjectCard({ project, featured = false }) {
  return (
    <Reveal
      className={featured ? "md:col-span-12" : "md:col-span-6"}
    >
      <article
        className={`group border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent ${
          featured ? "" : ""
        }`}
      >
        <Link
          to={`/work/${project.id}`}
          className="block overflow-hidden border-b border-border"
        >
          <div
            className={`relative overflow-hidden bg-surface-hover ${
              featured
                ? "aspect-[16/7]"
                : "aspect-[16/10]"
            }`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                [PROJECT SCREENSHOT]
              </span>
            </div>

            {project.image && (
              <img
                src={project.image}
                alt=""
                className="relative z-10 h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            )}

            <div className="absolute bottom-4 right-4 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="border border-border bg-background/90 px-3 py-2 font-mono text-xs text-text-primary backdrop-blur-sm">
                VIEW →
              </span>
            </div>
          </div>
        </Link>

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                {project.number} / {project.category}
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                {project.title}
              </h3>
            </div>

            <span className="hidden font-mono text-xs text-text-muted md:block">
              0{project.number}
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-text-secondary md:text-base">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology, index) => (
              <TechTag key={`${technology}-${index}`}>
                {technology}
              </TechTag>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-6">
            <Link
              to={`/work/${project.id}`}
              className="font-mono text-xs uppercase tracking-wider text-text-primary transition-colors hover:text-accent"
            >
              View Project →
            </Link>

            {project.github &&
              !project.github.startsWith("[") && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-wider text-text-secondary transition-colors hover:text-accent"
                >
                  GitHub ↗
                </a>
              )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default ProjectCard;