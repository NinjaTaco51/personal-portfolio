import PageShell from "../components/PageShell";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import Hero from "../components/Hero";
import TechnologySection from "../components/TechnologySection";
import AboutPreview from "../components/AboutPreview";
import EducationSection from "../components/EducationSection";
import ContactCTA from "../components/ContactCTA";

import { projects } from "../data/projects";

function Home() {
  const featuredProject = projects.find((project) => project.featured);

  const secondaryProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <PageShell>
      <Hero />

      {/* Selected Work */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <SectionHeader number="01" title="Selected Work" />

        {featuredProject && (
          <ProjectCard project={featuredProject} featured />
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <TechnologySection />

      <AboutPreview />

      <EducationSection />

      <ContactCTA />
    </PageShell>
  );
}

export default Home;