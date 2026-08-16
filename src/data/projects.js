export const projects = [
  {
    id: "credit-lending",
    number: "01",
    category: "AI / FINTECH / BLOCKCHAIN",

    title: "AI + Credit Lending Platform",

    heroTitle: "AI + CREDIT LENDING PLATFORM",

    description:
      "A software engineering project combining AI-driven credit-risk assessment with a blockchain-based lending platform.",

    overview:
      "A nine-person software engineering project that combines artificial intelligence for credit-risk assessment with blockchain-based lending. The project was developed across two collaborating teams: five members focused on AI and full-stack development, while four members focused on the blockchain component.",

    role:
      "Project Lead / AI Developer",

    type: "Team Software Engineering Project",

    status:
      "Completed",

    technologies: [
      "Python",
      "FastAPI",
      "JavaScript",
      "Solidity",
      "Hardhat",
      "Supabase",
      "Ethereum",
    ],

    github:
      "https://github.com/NinjaTaco51/credit-lending-ai-blockchain",

    image: `${import.meta.env.BASE_URL}images/projects/credit-lending/credit-assessment-dashboard.png`,

    gallery: [
      `${import.meta.env.BASE_URL}images/projects/credit-lending/individuals-loans.png`,
      `${import.meta.env.BASE_URL}images/projects/credit-lending/loan-payment-req.png`,
      `${import.meta.env.BASE_URL}images/projects/credit-lending/make-loan-req.png`,
      `${import.meta.env.BASE_URL}images/projects/credit-lending/profile-page.png`,
    ],

    featured: true,
  },

  {
    id: "clickbait",
    number: "02",
    title: "Clickbait Simulation",
    heroTitle: "CLICKBAIT SIMULATION",
    shortTitle: "Clickbait Simulation",
    category: "WEB · REACT · JAVASCRIPT",

    description:
      "A hackathon experience designed to help elderly and non-technical users recognize common online scams with informative modules and quizzes.",

    overview: "Clickbait Simulation is an interactive educational website designed to help elderly and non-technical users recognize common forms of deceptive online content.",

    role:
      "Web Developer",

    type: "Team Hackathon Experience",

    status:
      "Completed",

    image: `${import.meta.env.BASE_URL}images/projects/clickbait/landing.png`,

    gallery: null,

    technologies: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    github: "https://github.com/NinjaTaco51/BroncoHacks2025",

    featured: false,
  },

  {
    id: "classdle",
    number: "03",
    title: "Classdle",
    heroTitle: "CLASSDLE",
    shortTitle: "Classdle",
    category: "MOBILE · DART · ANDROID",

    overview:
      "Classdle is a mobile game that reimagines the mechanics of Wordle using courses from Cal Poly Pomona. Players attempt to identify the correct course while receiving feedback based on multiple course criteria.",

    description:
      "Wordle, reimagined around Cal Poly Pomona courses.",

    image: `${import.meta.env.BASE_URL}images/projects/classdle/landing.png`,

    imageType: "mobile",

    gallery: null,

    role:
      "App Developer",

    type: "Class Project",

    status:
      "Completed",

    technologies: [
      "Dart",
      "Flutter",
      "Android Studio",
    ],

    github: "https://github.com/NinjaTaco51/classdle_app",

    featured: false,
  },
];