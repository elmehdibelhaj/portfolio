import type { ExperienceEntry } from "@/types/content/experience";

export const experiences: ExperienceEntry[] = [
  {
    company: "Globant",
    role: "Software Engineer",
    period: "Apr 2024 – Present",
    location: "Casablanca, Morocco",

    summary:
      "Designing and building scalable enterprise Learning Management Systems using React, TypeScript and Symfony while contributing to a shared component architecture across multiple applications.",

    highlights: [
      "Built enterprise React applications supporting complex learning and evaluation workflows.",
      "Modernized legacy PHP/Twig interfaces by migrating them to React using the Cegid Design System.",
      "Integrated AI-powered reporting capabilities and collaborated with backend teams on prompt design, output requirements, and frontend presentation.",
      "Integrated React frontends with Symfony REST APIs across multiple business domains.",
      "Improved accessibility by implementing WCAG-compliant interfaces, achieving accessibility scores up to 98%.",
      "Improved software quality through automated testing with Jest and React Testing Library.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Symfony",
      "REST APIs",
      "Jest",
      "RTL",
      "Monorepo",
    ],
  },

  {
    company: "Deloitte",

    role: "Full Stack Developer",

    period: "Oct 2017 – Mar 2024",

    location: "Casablanca, Morocco",

    summary:
      "Designed, modernized and maintained enterprise web applications for international clients using modern frontend technologies and PHP-based backend solutions.",

    highlights: [
      "Developed enterprise applications using React, Vue.js, Laravel and PHP.",
      "Modernized legacy platforms by introducing reusable React and Vue.js architectures.",
      "Built Vue 3 applications using Pinia and Vite for improved maintainability and developer experience.",
      "Delivered SharePoint Online solutions supporting more than 450,000 daily users.",
      "Introduced Git workflows and code review practices that improved collaboration across development teams.",
      "Automated internal business processes using UiPath, reducing repetitive manual work.",
      "Improved Lighthouse performance scores from 66 to 97 through frontend performance and optimization work.",
    ],

    technologies: [
      "React",
      "Vue.js",
      "Laravel",
      "PHP",
      "SQL",
      "SharePoint",
      "Vite",
    ],
  },
];
