import PageShell from "../../components/PageShell";
import ProjectHeroSingle from "../../components/projectComponents/ProjectHeroSingle";
import ProjectMeta from "../../components/projectComponents/ProjectMeta";
import ProjectSection from "../../components/projectComponents/ProjectSection";
import ProjectVisual from "../../components/projectComponents/ProjectVisual";
import MobileProjectVisual from "../../components/projectComponents/MobileProjectVisual";
import TechStack from "../../components/projectComponents/TechStack";
import ProjectNavigation from "../../components/projectComponents/ProjectNavigation";

import { projects } from "../../data/projects";

function Classdle() {
  const project = projects.find(
    (item) => item.id === "classdle"
  );

  return (
    <PageShell>
      <ProjectHeroSingle project={project} mobile />

      {/* Overview */}
      <ProjectSection title="Overview">
        <p className="text-xl leading-9 text-text-primary md:text-2xl">
          {project.overview}
        </p>

        <br />
        <TechStack technologies={project.technologies} />

        <div className="mt-12">
          <ProjectMeta project={project} />
        </div>
      </ProjectSection>

      {/* The Concept */}
      <ProjectSection title="The Concept">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Wordle, Reimagined for CPP
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Our four-person team wanted to recreate the familiar Wordle
          experience as a fun mobile application while giving it a
          Cal Poly Pomona-specific twist. Each puzzle challenges the
          player to identify a course from CPP's course catalog.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Players can participate in a daily challenge or select a
          category, then search for and submit courses as guesses.
          Each guess is evaluated against the target course using
          several course criteria.
        </p>

        <MobileProjectVisual
          src="../public/images/projects/classdle/daily.png"
          alt="Classdle gameplay screen"
        />
      </ProjectSection>

      {/* How It Works */}
      <ProjectSection title="How It Works">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Course-Based Guessing
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Instead of comparing letters, Classdle compares information
          associated with each course. The result of each guess is
          represented through visual feedback that helps players narrow
          down the target.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Correct
            </p>
            <p className="mt-3 text-lg text-text-primary">
              Green
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              The course criterion matches the target.
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Partial
            </p>
            <p className="mt-3 text-lg text-text-primary">
              Orange
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              The criterion partially matches the target.
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Wrong
            </p>
            <p className="mt-3 text-lg text-text-primary">
              Grey
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              The criterion does not match the target.
            </p>
          </div>
        </div>

        <MobileProjectVisual
          src="../public/images/projects/classdle/landing-ext.png"
          alt="Classdle gameplay screen"
        />
      </ProjectSection>

      {/* My Contribution */}
      <ProjectSection title="My Contribution">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Frontend & Game Development
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          I worked alongside the rest of the team across the frontend
          and game systems, contributing to the design of the interface,
          course-selection behavior, game logic, and user interaction.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Game Logic
            </p>
            <p className="mt-3 text-lg leading-7 text-text-primary">
              Helped define how course criteria were compared and how
              correct, partial, and incorrect results were represented.
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Course Selection
            </p>
            <p className="mt-3 text-lg leading-7 text-text-primary">
              Contributed to how courses were selected for players to
              guess and how game modes were presented.
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Fuzzy Search
            </p>
            <p className="mt-3 text-lg leading-7 text-text-primary">
              Worked on matching player input with available CPP
              courses without requiring an exact text match.
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              UI / UX
            </p>
            <p className="mt-3 text-lg leading-7 text-text-primary">
              Participated in designing the interface and deciding how
              gameplay information and feedback should be presented.
            </p>
          </div>
        </div>
      </ProjectSection>

      {/* Course Data */}
      <ProjectSection title="Course Data">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          From Course Catalog to Gameplay
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Classdle uses course information sourced from the Cal Poly
          Pomona catalog and stored locally within the application.
          One of the more challenging parts of development was separating
          the relevant information from the CSV data and connecting the
          selected course to the game's comparison logic.
        </p>

        <div className="mt-10 grid gap-3 text-center sm:grid-cols-5">
          {[
            "CPP Catalog",
            "CSV Data",
            "Data Parsing",
            "Course Selection",
            "Game Comparison",
          ].map((step, index) => (
            <div
              key={step}
              className="border border-border px-4 py-5"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                0{index + 1}
              </p>
              <p className="mt-3 text-sm text-text-primary">
                {step}
              </p>
            </div>
          ))}
        </div>

        <MobileProjectVisual
          src="../public/images/projects/classdle/win.png"
          alt="Classdle gameplay screen"
        />
      </ProjectSection>

      {/* Fuzzy Search */}
      <ProjectSection title="Technical Challenge">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Making Course Search More Flexible
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Players need to be able to search through a large collection
          of CPP courses when making a guess. We worked on fuzzy-search
          behavior so that course selection did not depend entirely on
          entering an exact course name.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Understanding how the fuzzy-search logic evaluated and matched
          user input was one of the more difficult technical challenges
          of the project. Working through it gave me a better understanding
          of handling imperfect user input and connecting search behavior
          to an interactive application.
        </p>

        <MobileProjectVisual
          src="../public/images/projects/classdle/game-in-progress.png"
          alt="Classdle gameplay screen"
        />
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection title="Outcome">
        <p className="text-xl leading-9 text-text-primary md:text-2xl">
          Classdle resulted in a playable mobile application that
          reimagines Wordle around Cal Poly Pomona's course catalog.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Working as part of a four-person team gave me practical
          experience contributing to UI design, game logic, course
          selection, routing, and fuzzy search while learning how to
          build an application with Flutter.
        </p>

        {project.github && (
          <div className="mt-10">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              View Project ↗
            </a>
          </div>
        )}
      </ProjectSection>

      {/* Project Navigation */}
      <ProjectNavigation
        previous={{
          title: "Credit Lending",
          path: "/work/credit-lending",
        }}
        next={{
          title: "Clickbait Simulation",
          path: "/work/clickbait",
        }}
      />
    </PageShell>
  );
}

export default Classdle;