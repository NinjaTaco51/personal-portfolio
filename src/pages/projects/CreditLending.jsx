import PageShell from "../../components/PageShell";
import ProjectHero from "../../components/projectComponents/ProjectHero";
import ProjectMeta from "../../components/projectComponents/ProjectMeta";
import ProjectSection from "../../components/projectComponents/ProjectSection";
import ProjectVisual from "../../components/projectComponents/ProjectVisual";
import TechStack from "../../components/projectComponents/TechStack";
import ProjectNavigation from "../../components/projectComponents/ProjectNavigation";

import { projects } from "../../data/projects";

function CreditLending() {
  const project = projects.find(
    (item) => item.id === "credit-lending"
  );

  return (
    <PageShell>
      <ProjectHero project={project} />

      {/* Overview */}
      <ProjectSection title="Overview">
        <p className="text-xl leading-9 text-text-primary md:text-2xl">
          {project.overview}
        </p>

        <div className="mt-12">
          <ProjectMeta project={project} />
        </div>
      </ProjectSection>

      {/* My Role */}
      <ProjectSection title="My Role">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Project Lead / AI Developer
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          As project lead, I coordinated a nine-person team divided
          between AI/full-stack development and blockchain development.
          I primarily led development of the AI credit-risk model while
          also contributing frontend formatting, documentation, testing,
          and deployment.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          I coordinated progress between the two teams and helped ensure
          that their contributions came together as a functioning
          application. Although I did not directly implement the blockchain
          component, I worked with the blockchain team to understand its
          functionality and how it fit within the broader lending platform.
        </p>
      </ProjectSection>

      {/* The Problem */}
      <ProjectSection title="The Problem">
        <p className="text-lg leading-8 text-text-secondary">
          Traditional lending decisions can require evaluating multiple
          factors about a borrower before determining an appropriate
          level of credit risk. This project explored how an AI-based
          credit-risk assessment could be incorporated into a broader
          lending platform while also demonstrating the use of
          blockchain technology for lending-related functionality.
        </p>
      </ProjectSection>

      {/* The Solution */}
      <ProjectSection title="The Solution">
        <p className="text-lg leading-8 text-text-secondary">
          The project was designed as a demonstration lending platform
          that combines an AI-based credit-risk assessment with a
          blockchain-based lending workflow.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Borrowers can enter financial information and receive a
          simulated credit assessment containing a score, classification,
          confidence information, and explanations for higher-risk results.
          After receiving an assessment, borrowers can use the platform's
          lending workflow to request loans.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Lenders can view loan requests through their lender experience
          and use a connected cryptocurrency wallet to fund loans. Borrowers
          can subsequently use their wallet to repay active loans.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The AI and blockchain components were developed as separate
          parts of the overall application. The value of the project was
          bringing these components together with the rest of the
          application into a functioning lending-platform demonstration.
        </p>

        <ProjectVisual
          label="[PLATFORM OVERVIEW VISUAL]"
          caption="[SHOW A SCREENSHOT OR COMPOSITE OF THE MAIN USER EXPERIENCE.]"
        />
      </ProjectSection>

      {/* System Architecture */}
      <ProjectSection title="System Architecture">
        <p className="text-lg leading-8 text-text-secondary">
          The project was organized as several components that worked
          together to demonstrate a complete lending workflow. The frontend
          handled the user-facing experience, while the AI and blockchain
          components provided separate capabilities within the application.
        </p>
        
        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The AI component was implemented as a dedicated Python service.
          User-provided information is converted into the structure expected
          by the credit-risk model, transformed into numerical and categorical
          features, and passed through the PyTorch model before the resulting
          risk is combined with additional rule-based calculations.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The blockchain portion operates as a separate component of the
          demonstration platform. Solidity smart contracts provide the
          blockchain-based lending functionality while the rest of the
          application provides the user interface and supporting services.
        </p>

        <ProjectVisual
          label="[ARCHITECTURE DIAGRAM]"
          caption="[SHOW THE RELATIONSHIP BETWEEN THE CLIENT, APPLICATION SERVICES, AI CREDIT MODEL, LENDING APPLICATION, AND BLOCKCHAIN COMPONENTS.]"
        />
      </ProjectSection>

      <ProjectSection title="Artificial Intelligence">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          AI-Driven Credit Risk Assessment
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          I led development of the project's AI credit-risk component,
          building and tuning a PyTorch-based neural network to classify
          simulated borrower risk. The project uses a Kaggle dataset as
          mock financial data and is intended as a demonstration rather
          than a production credit-scoring system.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The model processes both numerical and categorical borrower
          information. Numerical features are standardized while
          categorical features are transformed using one-hot encoding
          before being passed into the neural network.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Framework
            </p>
            <p className="mt-3 text-lg text-text-primary">
              PyTorch
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Architecture
            </p>
            <p className="mt-3 text-lg text-text-primary">
              MLP
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Classification
            </p>
            <p className="mt-3 text-lg text-text-primary">
              3 Classes
            </p>
          </div>

          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">
              Output
            </p>
            <p className="mt-3 text-lg text-text-primary">
              300–850
            </p>
          </div>
        </div>

        <ProjectVisual
          label="[AI PIPELINE VISUAL]"
          caption="[SHOW USER INPUT → FEATURE PROCESSING → PYTORCH MODEL → RISK CALCULATION → CREDIT SCORE.]"
        />

        <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">
          Model Tuning
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          One of my primary technical challenges was tuning the relative
          influence of different features within the prediction system.
          I adjusted feature scores within the prediction equation and
          evaluated how those changes affected the resulting risk
          assessments.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The system considers factors such as income, monthly obligations,
          credit utilization, outstanding debt, loan counts, and loan types.
          These signals are used to produce a simulated risk assessment
          rather than relying on a single financial characteristic.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The neural network produces probabilities for Poor, Standard,
          and Good classifications. The model output is then combined
          with a rule-based risk calculation before being mapped to a
          simulated credit score and score band.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          This process gave me practical experience with feature
          engineering, model behavior, iterative tuning, and interpreting
          how individual inputs can influence a machine-learning system's
          output.
        </p>
      </ProjectSection>

      <ProjectSection title="Blockchain">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Blockchain-Based Lending
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The blockchain team developed a Solidity-based lending component
          that demonstrates lender registration, loan requests, funding,
          repayment, and loan status management within the platform.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          While I did not directly implement the blockchain functionality,
          I worked closely with the blockchain team as project lead and
          developed a working understanding of how the smart-contract
          workflow supported the broader lending application.
        </p>

        <ProjectVisual
          label="[BLOCKCHAIN WORKFLOW VISUAL]"
          caption="[SHOW THE LOAN REQUEST → FUNDING → REPAYMENT WORKFLOW IMPLEMENTED BY THE BLOCKCHAIN TEAM.]"
        />

        <h3 className="mt-16 text-3xl font-semibold tracking-tight md:text-4xl">
          Cross-Team Integration
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The project was divided between an AI/full-stack team and a
          blockchain team. One of my responsibilities as project lead was
          coordinating progress between the two groups and helping ensure
          that their work contributed to a functioning application.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Although the AI and blockchain components operated as separate
          parts of the application rather than directly interacting,
          understanding both sides of the system was important for
          coordinating development and delivering the completed platform.
        </p>
      </ProjectSection>

      {/* Implementation */}
      <ProjectSection title="Implementation">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          From User Input to Credit Score
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The AI pipeline begins by converting the application's user
          input into a DataFrame matching the structure expected by the
          training data. This allows the same preprocessing pipeline to
          be used when generating predictions from new user information.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Numerical and categorical features are separated and transformed
          using the preprocessing artifacts saved with the trained model.
          Numerical features are standardized while categorical features
          are converted using one-hot encoding before being combined into
          the model input.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The processed input is passed through the PyTorch MLP, which
          produces probabilities for the Poor, Standard, and Good classes.
          The probability of poor credit is then combined with a separate
          rule-based risk calculation before being converted into a
          300–850 credit score and corresponding score band.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          The prediction response includes the resulting decision,
          confidence, raw class probabilities, blended risk probability,
          credit score, score band, and explanations for potentially
          higher-risk results.
        </p>

        <ProjectVisual
          label="[IMPLEMENTATION FLOW VISUAL]"
          caption="[SHOW THE DATA FLOW FROM USER INPUT THROUGH PREPROCESSING, MODEL INFERENCE, RISK BLENDING, AND FINAL CREDIT SCORE.]"
        />
      </ProjectSection>

      {/* Technology */}
      <ProjectSection title="Technology">
        <TechStack technologies={project.technologies} />
      </ProjectSection>

      {/* Challenges */}
      <ProjectSection title="Challenges">
        <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Calibrating Model Behavior
        </h3>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          One of the most significant challenges was getting the model to
          produce credit-risk predictions that behaved reasonably across
          different borrower profiles. A technically functioning model was
          not enough; the relative influence of individual features needed
          to produce outputs that aligned with the intended relationships
          between financial factors and credit risk.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          I iteratively adjusted the feature scores and risk weights used
          throughout the prediction pipeline, evaluating how changes in
          factors such as income, debt, loan types, and occupation affected
          the resulting assessment. It was a challenge calibrating the model
          to produce reasonable predictions using a mock credit dataset.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          This process required balancing the learned neural-network
          prediction with the additional rule-based risk layer. The goal
          was to produce a system that remained responsive to the model's
          learned behavior while incorporating explicit financial
          relationships into the final risk assessment.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Working through this tuning process also gave me practical
          experience with the importance of feature engineering, model
          behavior, and interpretability when building an AI system for
          a user-facing application.
        </p>
      </ProjectSection>

      {/* Outcome */}
      <ProjectSection title="Outcome">
        <p className="text-xl leading-9 text-text-primary md:text-2xl">
          The project resulted in a functioning lending platform that
          brought together the work of two development teams into a
          complete web application.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          Although the AI and blockchain components operate as separate
          parts of the overall system rather than directly interacting,
          the completed application demonstrates both components
          working within the broader lending platform.
        </p>

        <p className="mt-6 text-lg leading-8 text-text-secondary">
          As project lead, I am particularly proud of bringing the
          different areas of development together into a working
          product while leading the development of the AI component.
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
          title: "Classdle",
          path: "/work/classdle",
        }}
        next={{
          title: "Clickbait Simulation",
          path: "/work/clickbait",
        }}
      />
    </PageShell>
  );
}

export default CreditLending;