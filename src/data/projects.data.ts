import type { Project } from "@/types/content/project";

export const projects: Project[] = [
  {
    id: "ELMS-1",
    title: "Enterprise Learning Management System",

    description:
      "Large-scale Learning Management System designed for hundreds of thousands of users with a strong focus on scalability, accessibility, and maintainability.",

    highlights: [
      "Migrated legacy PHP/Twig interfaces to React.",
      "Developed AI-powered reporting and PDF generation.",
      "Built reusable packages inside a shared monorepo.",
      "Improved accessibility to WCAG standards.",
    ],

    technologies: ["React", "TypeScript", "Symfony", "Jest", "RTL"],

    featured: true,
  },

  {
    id: "DP-2",
    title: "Developer Portfolio",

    description:
      "Modern portfolio built with a reusable design system and component-driven architecture.",

    highlights: [
      "Reusable UI components.",
      "Type-safe architecture.",
      "Responsive design.",
      "Optimized for accessibility and SEO.",
    ],

    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],

    github: "https://github.com/elmehdibelhaj/portfolio",

    featured: true,
  },

  {
    id: "ESP-3",
    title: "Enterprise SharePoint Platform",

    description:
      "Enterprise communication platform supporting more than 400,000 daily users.",

    highlights: [
      "Built reusable enterprise solutions.",
      "Improved performance and SEO.",
      "Integrated business workflows.",
    ],

    technologies: ["React", "SharePoint", "PHP", "SQL"],
  },

  {
    id: "CA-4",
    title: "GitHub Authentication with Convex",

    description:
      "Small Next.js project built to explore GitHub authentication, reactive data, and Convex's real-time data model.",

    highlights: [
      "Implemented GitHub OAuth authentication with Convex Auth.",
      "Stored authenticated user data in the Convex users table.",
      "Built reactive Convex queries to update the UI automatically.",
      "Stored connection status directly in the user document.",
      "Displayed authenticated GitHub avatar, name, and email.",
      "Implemented sign-in and sign-out flows.",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Convex",
      "Convex Auth",
      "GitHub OAuth",
      "Tailwind CSS",
      "shadcn/ui",
      "Bun",
    ],

    github: "https://github.com/elmehdibelhaj/convex-github-auth",

    featured: true,
  },
];