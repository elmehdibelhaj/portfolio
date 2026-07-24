import type { ExperienceEntry } from "@/types/content/experience";

export const experiences: ExperienceEntry[] = [
  {
    company: "Globant",
    role: "Software Engineer",
    period: "Apr 2024 – Present",
    location: "Casablanca, Morocco",

    summary:
      "Designing and developing scalable enterprise Learning Management Systems using React, TypeScript and Symfony while contributing to a shared monorepo architecture.",

    highlights: [
      "Designed and developed enterprise React applications supporting complex learning workflows.",
      "Migrated legacy PHP/Twig interfaces to React using the Cegid Design System.",
      "Built reusable shared packages within a monorepo architecture.",
      "Developed AI-powered reporting with interactive visualizations and PDF exports.",
      "Integrated REST APIs between React frontends and Symfony services.",
      "Improved accessibility with WCAG-compliant interfaces reaching accessibility scores up to 98%.",
      "Implemented automated testing using Jest and React Testing Library.",
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
      "Designed, modernized and maintained enterprise applications for international clients across frontend and backend technologies.",

    highlights: [
      "Built enterprise solutions using React, Vue.js, Laravel and PHP.",
      "Modernized legacy applications with React and Vue.js architectures.",
      "Developed applications using Vue 3, Pinia and Vite.",
      "Built SharePoint Online solutions serving more than 412,000 daily users.",
      "Established Git workflows and code review practices reducing merge conflicts.",
      "Automated internal business processes using UiPath.",
      "Improved Lighthouse scores from 66 to 97 through performance optimization.",
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
