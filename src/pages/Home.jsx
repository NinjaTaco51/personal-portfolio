import PageShell from "../components/PageShell";

function Home() {
  return (
    <PageShell>
      <section className="mx-auto max-w-[1400px] px-6 py-32 lg:px-10">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          00 / Home
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
          David Lam
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-text-secondary">
          [HOMEPAGE CONTENT WILL BE ADDED]
        </p>
      </section>
    </PageShell>
  );
}

export default Home;