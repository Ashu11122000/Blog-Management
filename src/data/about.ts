import type { AboutData } from "@/types/about";

export const aboutData: AboutData = {
  hero: {
    title: "About Blog Management",
    subtitle: "A Modern Next.js Learning Project",
    description:
      "Blog Management is a production-style content management application built with the latest Next.js App Router, TypeScript, and Tailwind CSS. The project demonstrates real-world architecture, reusable components, internationalization, responsive design, server-side rendering, and modern frontend best practices. It is designed as a portfolio-quality application that showcases scalable software engineering principles.",
  },

  story: {
    title: "Our Story",
    content: [
      "The idea behind Blog Management was to build far more than a simple blogging application. The goal was to create a project that mirrors the structure, coding standards, and architecture used in professional software development.",
      "Throughout the development process, the application evolved into a feature-rich platform covering modern Next.js capabilities including the App Router, layouts, nested routes, dynamic routing, route groups, parallel routes, intercepting routes, server actions, metadata generation, and internationalization.",
      "Every feature has been implemented with maintainability in mind. Components are reusable, TypeScript ensures strong type safety, and the project follows a modular folder structure that makes future enhancements straightforward.",
      "Whether used as a learning resource, portfolio project, or starting point for a real CMS, Blog Management demonstrates how modern web applications can be built with clean architecture, excellent performance, and an exceptional developer experience.",
    ],
  },

  stats: [
    {
      id: 1,
      label: "Development Phases",
      value: "10+",
    },
    {
      id: 2,
      label: "Reusable Components",
      value: "50+",
    },
    {
      id: 3,
      label: "Pages & Routes",
      value: "25+",
    },
    {
      id: 4,
      label: "App Router Features",
      value: "15+",
    },
    {
      id: 5,
      label: "TypeScript Coverage",
      value: "100%",
    },
    {
      id: 6,
      label: "Responsive Design",
      value: "Fully",
    },
    {
      id: 7,
      label: "Dark Mode Support",
      value: "Yes",
    },
    {
      id: 8,
      label: "Languages",
      value: "2",
    },
  ],

  values: [
    {
      id: 1,
      title: "Scalability",
      description:
        "The application follows a modular architecture that allows new features and modules to be added without affecting existing functionality.",
      icon: "Layers",
    },
    {
      id: 2,
      title: "Performance",
      description:
        "Built using Next.js Server Components, optimized rendering, image optimization, lazy loading, and efficient routing for excellent performance.",
      icon: "Zap",
    },
    {
      id: 3,
      title: "Accessibility",
      description:
        "Semantic HTML, keyboard accessibility, proper color contrast, and inclusive design ensure the application is usable for everyone.",
      icon: "Accessibility",
    },
    {
      id: 4,
      title: "Developer Experience",
      description:
        "TypeScript, reusable utilities, clean folder organization, and consistent coding patterns improve development speed and maintainability.",
      icon: "Code2",
    },
    {
      id: 5,
      title: "Modern Architecture",
      description:
        "Uses the latest Next.js App Router with layouts, server components, route groups, metadata, and server actions.",
      icon: "LayoutDashboard",
    },
    {
      id: 6,
      title: "Clean UI",
      description:
        "Built with Tailwind CSS using reusable UI components, responsive layouts, dark mode support, and modern design principles.",
      icon: "Palette",
    },
  ],

  timeline: [
    {
      id: 1,
      year: "Phase 1",
      title: "Project Initialization",
      description:
        "Set up the application with Next.js App Router, TypeScript, Tailwind CSS, ESLint, Prettier, project structure, and development tooling.",
    },
    {
      id: 2,
      year: "Phase 2",
      title: "Core Foundation",
      description:
        "Created reusable UI components, global layouts, theme switching, utility functions, data models, and project constants.",
    },
    {
      id: 3,
      year: "Phase 3",
      title: "Blog Module",
      description:
        "Developed the blog listing page, category filtering, reusable blog cards, dynamic routes, metadata generation, and content organization.",
    },
    {
      id: 4,
      year: "Phase 4",
      title: "Dashboard",
      description:
        "Implemented a modern dashboard featuring statistics, navigation, reusable cards, recent posts, and responsive layouts.",
    },
    {
      id: 5,
      year: "Phase 5",
      title: "Advanced Search",
      description:
        "Built a smart search experience with debounced searching, filtering, recent searches, highlighted results, and reusable search components.",
    },
    {
      id: 6,
      year: "Phase 6",
      title: "Contact Module",
      description:
        "Added a responsive contact page using Server Actions, reusable form components, validation, and modern form handling.",
    },
    {
      id: 7,
      year: "Phase 7",
      title: "Gallery",
      description:
        "Created a responsive image gallery featuring modal previews, route groups, parallel routes, intercepting routes, and optimized image loading.",
    },
    {
      id: 8,
      year: "Phase 8",
      title: "About Page",
      description:
        "Introduced detailed project information, statistics, timeline, development philosophy, and reusable informational components.",
    },
    {
      id: 9,
      year: "Phase 9",
      title: "Internationalization",
      description:
        "Integrated next-intl for multilingual support, localized routing, translations, and language-aware navigation.",
    },
    {
      id: 10,
      year: "Phase 10",
      title: "Production Ready",
      description:
        "Final optimization, code cleanup, responsive polishing, performance improvements, SEO enhancements, and deployment preparation.",
    },
  ],
};