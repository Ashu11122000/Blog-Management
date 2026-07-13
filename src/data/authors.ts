import type { Author } from "@/types/author";

export const authors: Author[] = [
  {
    id: "1",

    name: "John Doe",

    username: "johndoe",

    email: "john@example.com",

    avatar: "https://randomuser.me/api/portraits/men/32.jpg",

    bio: "Full Stack Developer passionate about modern web technologies.",

    role: "Senior Software Engineer",

    company: "Open Source",

    location: "New York",

    website: "https://johndoe.dev",

    twitter: "johndoe",

    linkedin: "john-doe",

    github: "johndoe",

    featured: true,
  },
  {
    id: "2",

    name: "Jane Smith",

    username: "janesmith",

    email: "jane@example.com",

    avatar: "https://randomuser.me/api/portraits/women/44.jpg",

    bio: "Frontend Engineer specializing in React and Next.js.",

    role: "Frontend Engineer",

    company: "Tech Studio",

    location: "London",

    website: "https://janesmith.dev",

    twitter: "janesmith",

    linkedin: "jane-smith",

    github: "janesmith",
  },
];