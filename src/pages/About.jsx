import PageShell from "../components/PageShell";

function About() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-6 py-32 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          01 / About
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
          About
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-text-secondary">
          [ABOUT PAGE CONTENT WILL BE ADDED]
        </p>
      </section>
    </PageShell>
  );
}

export default About;