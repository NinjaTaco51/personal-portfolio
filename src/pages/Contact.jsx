import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import { personal } from "../data/personal";

function Contact() {
  return (
    <PageShell>
      <section className="min-h-[calc(100vh-80px)] border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Contact
              </p>
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-9xl">
              Let's Connect.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
              Have a question, opportunity, or just want to connect?
              Feel free to reach out.
            </p>
          </Reveal>

          {/* Primary Contact */}
          <Reveal className="mt-16">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-4 border border-border px-6 py-4 font-mono text-xs uppercase tracking-wider text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Email Me
              <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </Reveal>

          {/* Contact Information */}
          <Reveal className="mt-24">
            <div className="grid gap-12 border-t border-border pt-8 md:grid-cols-3">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  Email
                </p>

                <a
                  href="mailto:your-email@example.com"
                  className="mt-3 block text-lg text-text-primary transition-colors hover:text-accent"
                >
                  dlam2022510@gmail.com
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  GitHub
                </p>

                <a
                  href="https://github.com/NinjaTaco51"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-lg text-text-primary transition-colors hover:text-accent"
                >
                  github.com/NinjaTaco51 ↗
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  LinkedIn
                </p>

                <a
                  href="https://www.linkedin.com/in/david-lam-936283340/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-lg text-text-primary transition-colors hover:text-accent"
                >
                  linkedin.com/in/david-lam ↗
                </a>
              </div>
            </div>
          </Reveal>

          {/* Areas of Interest */}
          <Reveal className="mt-20">
            <div className="border-t border-border pt-8">
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Interested In
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Software Engineering",
                  "AI / ML",
                  "Full-Stack Development",
                  "Cloud",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-text-secondary"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

export default Contact;