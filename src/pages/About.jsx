import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";

function About() {
  return (
    <PageShell>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                About Me
              </p>
            </div>

            <h1 className="mt-8 max-w-6xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-9xl">
              Building software
              <br />
              with purpose.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">
              A aspiring developer looking to creating apps, websites, or take the reins on data.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-border" />
              </div>

              <h2 className="mt-4 text-sm font-medium uppercase tracking-wider text-text-muted">
                Introduction
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <Reveal>
              <p className="text-xl leading-9 text-text-primary md:text-2xl">
                Hello! I am David Lam, and I studied computer science because I like to see my creations come to life and the results of my actions.
              </p>

              <p className="mt-6 text-lg leading-8 text-text-secondary">
                Throughout my college experience, I have learned numerous concepts and developed a variety of programs to explore this interest, whether its working as a solo developer or working with a team.
              </p>

              <div className="mt-12 mx-auto max-w-md overflow-hidden rounded-full border border-border bg-surface shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src="../public/images/misc/self.jpg"
                    alt="Portrait of me"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What I Build */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              What I Build
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Turning ideas into complete applications.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
            <Reveal>
              <div className="h-full bg-background p-8">
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  01
                </p>

                <h3 className="mt-6 text-2xl font-semibold">
                  Frontend Development
                </h3>

                <p className="mt-4 leading-7 text-text-secondary">
                  Building interactive interfaces, responsive layouts, navigation systems, and user-focused web experiences.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="h-full bg-background p-8">
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  02
                </p>

                <h3 className="mt-6 text-2xl font-semibold">
                  Application Development
                </h3>

                <p className="mt-4 leading-7 text-text-secondary">
                  Developing and integrating machine-learning models, preprocessing data, engineering features, and evaluating model behavior.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="h-full bg-background p-8">
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                  03
                </p>

                <h3 className="mt-6 text-2xl font-semibold">
                  Exploring Technology
                </h3>

                <p className="mt-4 leading-7 text-text-secondary">
                  Developing applications with Flutter and React while connecting interfaces to application logic, APIs, and data sources.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Experience / Journey */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-border" />
              </div>

              <h2 className="mt-4 text-sm font-medium uppercase tracking-wider text-text-muted">
                My Journey
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8 md:col-start-5">
            <Reveal>
              <div className="space-y-12">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    2022-2026
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    B.S. in Computer Science
                  </h3>

                  <p className="mt-3 leading-7 text-text-secondary">
                    California State Polytechnic University, Pomona
                  </p>
                </div>

                <div>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Experience
                  </h3>

                  <p className="mt-3 leading-7 text-text-secondary">
                    I participated in a few competitions and worked on various class projects to build programming skills. These experiences helped refine programming practices and learn new tricks for development.
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    Now
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    Continuing to Build
                  </h3>

                  <p className="mt-3 leading-7 text-text-secondary">
                    After graduation, I continue to work on personal projects to refine my skills further and proceeded to explore more options in the cloud, namely Google Cloud Platform and Amazon Web Services.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Beyond Code */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-border" />
                </div>

                <h2 className="mt-4 text-sm font-medium uppercase tracking-wider text-text-muted">
                  Beyond the Screen
                </h2>
              </Reveal>
            </div>

            <div className="md:col-span-8 md:col-start-5">
              <Reveal>
                <p className="text-xl leading-9 text-text-primary md:text-2xl">
                  Outside of the endless streams of code, I do enjoy playing video games, going on small hikes, exploring restaurants, working out, tennis, and watching movies/shows.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Currently
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
            Always learning. Always building.
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">
            Moving forward, I will always be focusing to expand my skills and looking for opportunities to build applications, handle data, and meeting new people!
          </p>
        </Reveal>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Let's Connect
            </p>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Interested in working together?
            </h2>

            <a
              href="/contact"
              className="mt-8 inline-flex border border-border px-6 py-3 font-mono text-xs uppercase tracking-wider text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              Contact Me ↗
            </a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

export default About;