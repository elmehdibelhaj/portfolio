import type { Project } from "@/types/content/project";

export const projects: Project[] = [
  {
    id: "ELMS-1",
    title: "Enterprise Learning Management System",

    description:
      "Large-scale Learning Management System composed of multiple interconnected modules, with a strong focus on scalability, accessibility, performance, and maintainability.",

    highlights: [
      "Migrated legacy PHP/Twig interfaces to React across multiple interconnected modules.",
      "Built reusable components using a Cegid design system based on MUI.",
      "Integrated React applications with Symfony APIs and complex frontend workflows.",
      "Improved accessibility and frontend performance while contributing to architecture decisions.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Symfony",
      "MUI",
      "Jest",
      "React Testing Library",
    ],

    featured: true,
  },

  {
    id: "CMA-2",
    title: "Enterprise Content Migration Automation",

    description:
      "Large-scale content migration automation built to move pages, documents, and media from SharePoint 2013 to SharePoint Online.",

    highlights: [
      "Automated the migration of more than 25,000 pages, documents, and media assets.",
      "Built the UiPath workflow from scratch to automate extraction, transformation, and upload.",
      "Handled multiple document and media types through controlled migration batches.",
      "Implemented error handling and retry mechanisms for reliable migration processing.",
    ],

    technologies: ["UiPath", "RPA", "SharePoint 2013", "SharePoint Online"],

    featured: true,
  },

  {
    id: "CC-3",
    title: "Course Catalog & Enrollment Platform",

    description:
      "Internal course catalog application built from scratch to help employees discover and access learning opportunities across the organization.",

    highlights: [
      "Built the application from scratch using Vue.js.",
      "Integrated REST APIs to retrieve and display course information.",
      "Implemented course search, filtering, and SSO authentication.",
      "Built enrollment workflows connecting users to an external learning platform.",
    ],

    technologies: ["Vue.js", "JavaScript", "REST APIs", "SSO"],

    featured: true,
  },

  {
    id: "ESP-4",
    title: "Enterprise SharePoint Platform",

    description:
      "Enterprise communication platform serving a global organization of more than 450,000 users.",

    highlights: [
      "Built reusable enterprise solutions for a large-scale SharePoint environment.",
      "Integrated business workflows and application functionality.",
      "Worked across React, PHP, and SQL to support enterprise requirements.",
      "Improved application performance and overall user experience.",
    ],

    technologies: ["React", "SharePoint", "PHP", "SQL"],

    featured: true,
  },

  {
    id: "VL-5",
    title: "Internal Video Library",

    description:
      "Internal video library built for company employees and administrators to discover and access shared video content.",

    highlights: [
      "Built the application interface with Laravel Blade.",
      "Integrated SSO authentication and role-based permissions.",
      "Implemented video categorization, search, and embedded playback.",
      "Used Amazon S3 for media storage.",
    ],

    technologies: ["Laravel", "PHP", "Blade", "MySQL", "Amazon S3"],
  },

  {
    id: "CA-6",
    title: "GitHub Authentication with Convex",

    description:
      "Small Next.js project built to explore GitHub authentication, reactive data, and Convex's real-time data model.",

    highlights: [
      "Implemented GitHub OAuth authentication with Convex Auth.",
      "Stored authenticated user data in the Convex users table.",
      "Built reactive Convex queries to update the UI automatically.",
      "Implemented sign-in, sign-out, and connection status flows.",
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

    featured: false,
  },

  {
    id: "DP-7",
    title: "Developer Portfolio",

    description:
      "Modern portfolio built with a reusable design system and component-driven architecture.",

    highlights: [
      "Built reusable UI components with a type-safe, feature-oriented architecture.",
      "Implemented responsive design with light and dark themes.",
      "Built accessibility-first interactions with reduced-motion support.",
      "Implemented static SEO, structured data, and performance optimizations.",
    ],

    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],

    github: "https://github.com/elmehdibelhaj/portfolio",

    featured: false,
  },
];