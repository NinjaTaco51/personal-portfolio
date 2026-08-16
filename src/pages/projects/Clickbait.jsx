import PageShell from "../../components/PageShell";
import ProjectHeroSingle from "../../components/projectComponents/ProjectHeroSingle";
import ProjectMeta from "../../components/projectComponents/ProjectMeta";
import ProjectSection from "../../components/projectComponents/ProjectSection";
import ProjectVisual from "../../components/projectComponents/ProjectVisual";
import TechStack from "../../components/projectComponents/TechStack";
import ProjectNavigation from "../../components/projectComponents/ProjectNavigation";

import { projects } from "../../data/projects";

function Clickbait() {
  const project = projects.find(
    (item) => item.id === "clickbait"
  );

  return (
    <PageShell>
      <ProjectHeroSingle project={project} />

      {/* Overview */}
      <ProjectSection title="Overview">
        <p className="text-xl leading-9 text-text-primary md:text-2xl">
          {project.overview}
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Developed as a four-person hackathon project, the application
          combines short educational lessons, video demonstrations,
          interactive scenarios, and quizzes covering phishing, scam
          calls, and fake advertisements.
        </p>

        <br />
        <TechStack technologies={project.technologies} />

        <div className="mt-12">
          <ProjectMeta project={project} />
        </div>
      </ProjectSection>

      {/* My Role */}
      <ProjectSection title="My Role">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Developer — Interactive UI / Web Development
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          As a developer on a four-person team, I contributed across the
          frontend, interactive experiences, and UI design. I worked on
          the quiz system and navigation while also helping shape the
          interface around our target audience.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          My work included developing reusable React components,
          implementing quiz interactions, working on the navigation
          experience, contributing to the interactive fake-advertisement
          experience, and debugging UX issues as the application evolved.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          I also contributed to the visual design of the application,
          working with the team to keep the experience simple and
          approachable for elderly and non-technical users.
        </p>
      </ProjectSection>

      {/* The Problem */}
      <ProjectSection title="The Problem">
        <p className="text-lg leading-8 text-text-secondary">
          Deceptive online content can resemble legitimate websites,
          advertisements, messages, and communications. For users who
          are less familiar with common online scams, recognizing the
          warning signs can be difficult.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          We wanted to explore whether a simple interactive website could
          introduce these warning signs without overwhelming users with
          technical information.
        </p>
      </ProjectSection>

      {/* The Solution */}
      <ProjectSection title="The Solution">
        <p className="mt-6 text-lg leading-8 text-text-secondary">
          We created a guided training experience that combines
          educational content with simulated online interactions.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Each module begins with a short explanation of the topic and a
          YouTube demonstration before allowing the user to test their
          understanding through a short quiz.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Learn
            </p>
            <p className="mt-3 text-lg text-text-primary">
              Short educational explanations
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Watch
            </p>
            <p className="mt-3 text-lg text-text-primary">
              Video demonstrations
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Interact
            </p>
            <p className="mt-3 text-lg text-text-primary">
              Simulated deceptive website
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Test
            </p>
            <p className="mt-3 text-lg text-text-primary">
              Short quizzes
            </p>
          </div>
        </div>
      </ProjectSection>

      {/* User Experience */}
      <ProjectSection title="User Experience">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          A Guided Learning Experience
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The application uses a sectional navigation structure that
          allows users to progress through the training experience while
          also providing tabs at the top of the page for jumping between
          modules.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The landing page intentionally resembles the type of suspicious
          page a user might encounter after clicking a deceptive popup.
          This introduces the subject matter through the interface itself
          before the user begins the educational modules.
        </p>

        <div className="mt-10 border border-border p-6">
          <div className="grid gap-6 text-center sm:grid-cols-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                01
              </p>
              <p className="mt-3 text-lg text-text-primary">
                Learn
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                02
              </p>
              <p className="mt-3 text-lg text-text-primary">
                Watch
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                03
              </p>
              <p className="mt-3 text-lg text-text-primary">
                Interact
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                04
              </p>
              <p className="mt-3 text-lg text-text-primary">
                Test
              </p>
            </div>
          </div>
        </div>

        <ProjectVisual
          label="[MODULE PAGE SAMPLE]"
          src={`${import.meta.env.BASE_URL}images/projects/clickbait/info.png`}
        />

        <ProjectVisual
          label="[QUIZ SAMPLE]"
          src={`${import.meta.env.BASE_URL}images/projects/clickbait/quiz.png`}
        />
      </ProjectSection>

      {/* Training Modules */}
      <ProjectSection title="Training Modules">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Phishing
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The phishing module introduces common signs and behaviors
          associated with phishing attempts. Users receive a short
          educational explanation followed by a video demonstration
          showing how phishing can appear in practice.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The section concludes with a two-question quiz that allows
          users to test their understanding of the material.
        </p>

        <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">
          Scam Calls
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The scam-call module focuses on common behaviors and warning
          signs associated with fraudulent phone calls. Similar to the
          phishing section, users first receive concise information and
          a video demonstration before completing a short quiz.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The quiz contains two questions and provides a simple
          correct-or-incorrect result after submission.
        </p>

        <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">
          Fake Advertisements
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The fake-advertisement module introduces common characteristics
          of deceptive websites before allowing users to explore a
          controlled simulation.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The section combines educational information with an
          interactive demonstration and concludes with a two-question
          quiz.
        </p>
      </ProjectSection>

      {/* Interactive Fake Website */}
      <ProjectSection title="Interactive Experience">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Simulating a Deceptive Website
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The fake-advertisement module contains the project's primary
          interactive experience. Instead of only explaining deceptive
          behavior, the simulation gives users a controlled environment
          where they can interact with elements commonly associated with
          suspicious websites.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The interface includes pop-ups, highlighted sections, and
          clickable buttons. When users interact with an intentionally
          incorrect element, the application provides feedback to help
          demonstrate why the action may be suspicious.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The simulation is intentionally controlled and educational.
          It does not attempt to reproduce a functioning malicious
          website or collect real user information.
        </p>

        <ProjectVisual
          label="[INTERACTIVE WEBSITE SCREENSHOT]"
          src={`${import.meta.env.BASE_URL}images/projects/clickbait/fake-website.png`}
        />
      </ProjectSection>

      {/* Quiz System */}
      <ProjectSection title="Quiz System">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Reusable React Components
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          I worked on the quiz functionality as a reusable part of the
          frontend rather than creating completely separate quiz
          implementations for each training module.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Questions are represented using a consistent data structure
          containing the question, available options, and correct answer.
          The same quiz components can therefore be used across the
          phishing, scam-call, and fake-advertisement modules.
        </p>

        <div className="mt-10 border border-border p-6">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            Question Structure
          </p>

          <pre className="mt-5 overflow-x-auto font-mono text-sm leading-7 text-text-secondary">
            {`{
              question: "...",
              options: ["...", "...", "..."],
              answer: "..."
            }`}
          </pre>
        </div>

        <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">
          Quiz State & Navigation
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          React state is used to manage the current quiz experience while
          the user remains on the page. Users can move between questions,
          select an answer, submit the quiz, and restart the current
          quiz.
        </p>

        <div className="mt-10 border border-border p-6">
          <div className="grid gap-6 text-center sm:grid-cols-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                01
              </p>
              <p className="mt-3 text-lg text-text-primary">
                Question
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                02
              </p>
              <p className="mt-3 text-lg text-text-primary">
                Selection
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                03
              </p>
              <p className="mt-3 text-lg text-text-primary">
                Submit
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                04
              </p>
              <p className="mt-3 text-lg text-text-primary">
                Result
              </p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                05
              </p>
              <p className="mt-3 text-lg text-text-primary">
                Continue
              </p>
            </div>
          </div>
        </div>

        <ProjectVisual
          label="[QUIZ SCREENSHOT]"
          src={`${import.meta.env.BASE_URL}images/projects/clickbait/quiz-results.png`}
        />
      </ProjectSection>

      {/* Design */}
      <ProjectSection title="Design">

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The interface was designed around the project's target audience
          of elderly and non-technical users. Rather than prioritizing
          visual complexity, our team focused on creating a simple,
          approachable experience that made the educational content easy
          to follow.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          We also considered color-blind users during the visual design
          process, keeping the interface focused on clear presentation
          and straightforward interaction.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The project was developed primarily as a desktop demonstration.
          A dedicated mobile and tablet adaptation was outside the scope
          of the available hackathon development time.
        </p>
      </ProjectSection>

      {/* Challenges */}
      <ProjectSection title="Challenges">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Managing React Effects
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          One of my primary technical challenges was getting React
          useEffect behavior to work as expected while building the
          interactive experience. Understanding when effects should run
          and how changes in component state affected them required
          iterative debugging.
        </p>

        <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">
          Routing During Development
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          As the application grew, routing became another area that
          required debugging. Adding and changing sections throughout
          development meant ensuring that navigation continued to lead
          users to the intended parts of the application.
        </p>

        <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">
          Responsive Layout
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The team also encountered situations where the interface did
          not behave as expected at different screen sizes. Working
          through these issues gave me additional experience debugging
          layout behavior and considering how frontend decisions affect
          the overall user experience.
        </p>
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection title="Outcome">
        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The project resulted in a complete interactive frontend
          demonstration that combines educational content, simulated
          scenarios, quizzes, and guided navigation into a single
          experience.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Working on the project strengthened my frontend development
          skills, particularly in React component design, state
          management, navigation, and interactive UI development.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          More importantly, the hackathon gave me experience taking an
          initial concept and turning it into a functioning frontend
          application as part of a collaborative development team.
        </p>

        <div className="mt-10">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-border px-5 py-3 font-mono text-xs uppercase tracking-wider text-text-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            View GitHub Repository ↗
          </a>
        </div>
      </ProjectSection>

      {/* Project Navigation */}
      <ProjectNavigation
        previous={{
          title: "Credit Lending",
          path: "/work/credit-lending",
        }}
        next={{
          title: "Classdle",
          path: "/work/classdle",
        }}
      />
    </PageShell>
  );
}

export default Clickbait;