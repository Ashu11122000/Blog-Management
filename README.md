# Blog Management System

A modern **Blog Management System** built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. This project is being developed as a production-style application while covering all major concepts of the Next.js App Router.

---

## Project Overview

This project serves two purposes:

* Learn and implement modern **Next.js App Router** features.
* Build a professional, portfolio-ready Blog Management System.

The application is designed using scalable architecture, reusable components, and best development practices.

---

# Tech Stack

### Frontend

* Next.js (Latest App Router)
* React
* TypeScript
* Tailwind CSS

### Packages

* Lucide React
* clsx
* tailwind-merge
* class-variance-authority
* react-hook-form
* zod
* @hookform/resolvers
* next-themes

---

# Current Progress

## Phase 1 — Project Setup (Completed)

### Project Initialization

* Created project using `create-next-app`
* Enabled App Router
* Enabled TypeScript
* Enabled Tailwind CSS
* Enabled ESLint
* Enabled Turbopack
* Configured `src` directory
* Using import alias `@/*`

---

### Dependencies Installed

```text
lucide-react
clsx
tailwind-merge
class-variance-authority
react-hook-form
zod
@hookform/resolvers
next-themes
```

---

### Folder Structure Created

```text
blog-management/
│
├── public/
│   ├── images/
│   │   ├── blog/
│   │   ├── gallery/
│   │   ├── authors/
│   │   ├── logo/
│   │   └── placeholders/
│   │
│   ├── icons/
│   ├── favicon.ico
│   ├── site.webmanifest
│   └── robots.txt
│
├── src/
│   │
│   ├── app/
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   │
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── gallery/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   │
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── posts/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── categories/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── gallery/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   │
│   │   ├── search/
│   │   │   └── page.tsx
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   ├── (gallery)/
│   │   │   └── gallery/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   ├── @modal/
│   │   │   ├── default.tsx
│   │   │   └── (.)gallery/
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       ├── about/
│   │       ├── blog/
│   │       └── contact/
│   │
│   ├── actions/
│   │   ├── contact.ts
│   │   ├── blog.ts
│   │   └── auth.ts
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Textarea.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Skeleton.tsx
│   │   │   ├── Spinner.tsx
│   │   │   └── EmptyState.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── Container.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedPosts.tsx
│   │   │   ├── Categories.tsx
│   │   │   └── CTA.tsx
│   │   │
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogGrid.tsx
│   │   │   ├── BlogContent.tsx
│   │   │   ├── BlogSidebar.tsx
│   │   │   ├── BlogAuthor.tsx
│   │   │   ├── BlogTags.tsx
│   │   │   ├── RelatedPosts.tsx
│   │   │   └── SearchBar.tsx
│   │   │
│   │   ├── dashboard/
│   │   │   ├── DashboardHeader.tsx
│   │   │   ├── DashboardSidebar.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   ├── RecentPosts.tsx
│   │   │   └── ActivityCard.tsx
│   │   │
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.tsx
│   │   │   ├── GalleryCard.tsx
│   │   │   ├── GalleryModal.tsx
│   │   │   └── GalleryImage.tsx
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── SearchForm.tsx
│   │   │
│   │   └── providers/
│   │       ├── ThemeProvider.tsx
│   │       └── LocaleProvider.tsx
│   │
│   ├── constants/
│   │   ├── navigation.ts
│   │   ├── routes.ts
│   │   ├── site.ts
│   │   └── dashboard.ts
│   │
│   ├── data/
│   │   ├── blogs.ts
│   │   ├── categories.ts
│   │   ├── gallery.ts
│   │   └── authors.ts
│   │
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useSearch.ts
│   │   └── useDebounce.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── metadata.ts
│   │   ├── validations.ts
│   │   └── i18n.ts
│   │
│   ├── styles/
│   │   └── animations.css
│   │
│   ├── types/
│   │   ├── blog.ts
│   │   ├── author.ts
│   │   ├── category.ts
│   │   ├── gallery.ts
│   │   ├── contact.ts
│   │   └── dashboard.ts
│   │
│   └── middleware.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

# Development Roadmap

## Phase 1 — Project Setup 

* Project initialization
* Dependency installation
* Folder structure
* Development environment setup

---

## Phase 2 — Project Foundation

* Global Layout
* Navigation Bar
* Footer
* Theme Support
* Reusable UI Components
* Typography
* Global Styling

---

## Phase 3 — Blog Module

* Blog Listing
* Blog Card
* Dynamic Routes
* Single Blog Page
* generateStaticParams
* Server Components

---

## Phase 4 — Dashboard

* Nested Layouts
* Dashboard Sidebar
* Dashboard Pages
* Statistics Cards
* Recent Activity

---

## Phase 5 — Search

* Search Bar
* URL Search Parameters
* Real-Time Filtering

---

## Phase 6 — Contact

* Contact Page
* Contact Form
* Server Actions
* Form Validation

---

## Phase 7 — Gallery

* Responsive Image Gallery
* Optimized Images
* Blur Placeholder
* Parallel Routes
* Intercepting Routes

---

## Phase 8 — Middleware

* Route Protection
* Authentication Check
* Cookie-Based Redirection

---

## Phase 9 — Internationalization

* Multiple Languages
* Language Switcher
* Localized Routing
* Loading States
* Error Boundaries
* SEO Metadata
* Performance Optimization

---

# Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project:

```bash
cd blog-management
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000
```

---

# Architecture Goals

This project follows a scalable architecture based on:

* Feature-based organization
* Reusable UI components
* Server Components where appropriate
* Server Actions instead of unnecessary API routes
* Strong TypeScript typing
* Responsive design
* Clean code practices

---