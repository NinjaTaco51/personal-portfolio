import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "PHP",
      "Dart",
    ],
  },
  {
    title: "Frontend & Web",
    skills: [
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "FastAPI",
    ],
  },
  {
    title: "AI & Data",
    skills: [
      "PyTorch",
      "Pandas",
      "scikit-learn",
      "Machine Learning",
      "Feature Engineering",
      "Data Preprocessing",
    ],
  },
  {
    title: "Application Development",
    skills: [
      "Flutter",
      "Mobile Development",
      "UI / UX",
      "Game Logic",
      "Fuzzy Search",
      "API Integration",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Supabase",
      "MongoDB",
      "AWS",
      "GCP",
    ],
  },
];

function Skills() {
  return (
    <PageShell>
      {/* Header */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" />

              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Skills
              </p>
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-7xl lg:text-9xl">
              Technical Skills
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
              Technologies and development skills I've worked with through
              academic projects, team development, and application development.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
        <div className="space-y-16">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-12">
                <div className="md:col-span-3">
                  <h2 className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
                    {group.title}
                  </h2>
                </div>

                <div className="md:col-span-9">
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-border px-4 py-2.5 text-sm text-text-secondary transition-colors duration-200 hover:border-accent hover:text-accent"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Areas of Experience */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-10 lg:py-24">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-border" />

              <p className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Areas of Experience
              </p>
            </div>

            <div className="mt-10 grid gap-12 md:grid-cols-3">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Frontend Development
                </h3>

                <p className="mt-4 text-base leading-7 text-text-secondary">
                  Building interactive interfaces, responsive layouts,
                  navigation systems, and user-focused web experiences.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  AI & Machine Learning
                </h3>

                <p className="mt-4 text-base leading-7 text-text-secondary">
                  Developing and integrating machine-learning models,
                  preprocessing data, engineering features, and evaluating
                  model behavior.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Application Development
                </h3>

                <p className="mt-4 text-base leading-7 text-text-secondary">
                  Developing applications with Flutter and React while
                  connecting interfaces to application logic, APIs, and
                  data sources.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

export default Skills;