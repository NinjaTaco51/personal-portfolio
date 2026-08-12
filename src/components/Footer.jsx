import { personal } from "../data/personal";

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-mono text-sm text-text-primary">
              {personal.name}
            </p>

            <p className="mt-2 text-sm text-text-muted">
              Software · Web · Cloud · AI
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-text-secondary hover:text-accent"
            >
              GitHub ↗
            </a>

            <a
              href={personal.linkedin}
              className="font-mono text-xs text-text-secondary hover:text-accent"
            >
              LinkedIn ↗
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="font-mono text-xs text-text-secondary hover:text-accent"
            >
              Email ↗
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="font-mono text-xs text-text-muted">
            © 2026 {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;