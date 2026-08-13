import { Link } from "react-router-dom";

function ProjectNavigation({ previous, next }) {
  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
        <Link
          to={previous.path}
          className="group border-b border-border p-8 transition-colors hover:bg-surface md:border-b-0 md:border-r md:p-12"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
            ← Previous Project
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight group-hover:text-accent md:text-4xl">
            {previous.title}
          </h3>
        </Link>

        <Link
          to={next.path}
          className="group p-8 transition-colors hover:bg-surface md:p-12"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
            Next Project →
          </p>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight group-hover:text-accent md:text-4xl">
            {next.title}
          </h3>
        </Link>
      </div>
    </section>
  );
}

export default ProjectNavigation;