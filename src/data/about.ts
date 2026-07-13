import type { AboutData } from "@/types/about";

export const aboutData: AboutData = {
  hero: {
    title: "About Blog Management",
    subtitle: "Modern Content Management",
    description:
      "Blog Management is a production-style application built with Next.js App Router, TypeScript, and Tailwind CSS. It demonstrates modern web development practices while providing a clean, scalable architecture for managing blog content.",
  },

  story: {
    title: "Our Story",
    content: [
      "This project was created to explore the latest features of the Next.js App Router while following real-world software architecture principles.",
      "It emphasizes reusable components, strong TypeScript typing, server components, responsive design, accessibility, and clean code practices.",
      "The application is designed as a portfolio-ready project that showcases modern frontend development techniques and scalable project organization.",
    ],
  },

  stats: [
    {
      id: 1,
      label: "Project Phases",
      value: "10+",
    },
    {
      id: 2,
      label: "Reusable Components",
      value: "30+",
    },
    {
      id: 3,
      label: "App Router Features",
      value: "15+",
    },
    {
      id: 4,
      label: "TypeScript Coverage",
      value: "100%",
    },
  ],

  values: [
    {
      id: 1,
      title: "Scalability",
      description:
        "Designed with a modular architecture that grows with the application.",
      icon: "Layers",
    },
    {
      id: 2,
      title: "Performance",
      description:
        "Leverages Server Components, optimized images, and modern rendering techniques.",
      icon: "Zap",
    },
    {
      id: 3,
      title: "Accessibility",
      description:
        "Built with semantic HTML, keyboard navigation, and inclusive design principles.",
      icon: "Accessibility",
    },
    {
      id: 4,
      title: "Developer Experience",
      description:
        "Strong typing, reusable utilities, and maintainable code improve productivity.",
      icon: "Code2",
    },
  ],

  timeline: [
    {
      id: 1,
      year: "Phase 1",
      title: "Project Setup",
      description:
        "Initialized the project with Next.js App Router, TypeScript, and Tailwind CSS.",
    },
    {
      id: 2,
      year: "Phase 2",
      title: "Foundation",
      description:
        "Implemented reusable UI components, layout, navigation, and theme support.",
    },
    {
      id: 3,
      year: "Phase 3",
      title: "Blog Module",
      description:
        "Developed blog listing, dynamic routes, metadata, and reusable blog components.",
    },
    {
      id: 4,
      year: "Phase 4–7",
      title: "Advanced Features",
      description:
        "Added dashboard, search, contact form with server actions, and responsive image gallery.",
    },
  ],
};