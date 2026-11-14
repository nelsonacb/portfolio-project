# 🚀 Personal Portfolio

Modern, bilingual (Spanish / English) personal portfolio website with light/dark mode support. Built with **Astro**, **React**, **Tailwind CSS v4**, and **TypeScript**, with a strong focus on performance, accessibility, and best practices.

---

## ✨ Features

- 🌍 **Multilingual (i18n)** — Spanish and English with Astro's native routing (`/` and `/en/`).
- 🌗 **Light / dark mode** — No flash of unstyled content (anti-FOUC), persisted in `localStorage`, and respects the system preference.
- 📱 **Responsive design** — Adaptive navbar with a mobile menu and sections optimized for all screen sizes.
- 🖼️ **Optimized images** — Uses Astro's `<Image />` component to serve WebP/AVIF with `srcset` and `loading="lazy"`.
- 📄 **CV download** — Bilingual button that automatically serves the correct PDF based on the active language.
- ⚡ **Exceptional performance** — Islands architecture: almost the entire site is server-rendered with **0 KB of JS** per section.
- ♿ **Accessibility** — Keyboard navigation, `aria-label` on interactive elements, and adequate color contrast.
- 🔍 **SEO-friendly** — Semantic HTML, metadata, and per-language titles.

---

## 🧩 Site sections

| Section          | Description                                                                       |
| ---------------- | --------------------------------------------------------------------------------- |
| **Hero**         | Personal introduction with a CV download CTA and quick access to projects.        |
| **About me**     | Biography, highlights, and professional statistics.                               |
| **Projects**     | Cards with image, description, technologies, and a link to the GitHub repository. |
| **Technologies** | Grouped by Frontend, Backend, and Other, with logos and hover interactions.       |
| **Contact**      | Clickable cards with phone, email, LinkedIn, and GitHub.                          |
| **Footer**       | Social links, copyright, and technology attribution.                              |

---

## 🛠️ Tech Stack

### Core

- **[Astro](https://astro.build/)** — Main framework, static site generation (SSG), and islands architecture.
- **[React](https://react.dev/)** — For components that require targeted interactivity.
- **[TypeScript](https://www.typescriptlang.org/)** — Strict typing across the entire project.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling with custom theme tokens.

### Libraries and tools

- **[@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/)** — React integration for Astro.
- **[@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite)** — Official Tailwind v4 plugin for Vite.
- **astro:assets** — Automatic image optimization.

### Structure and architecture

- **Astro's native i18n** — Multilingual routing with `getRelativeLocaleUrl`.
- **Vanilla JS** for the theme toggle (no frameworks, no FOUC).
- **`.astro` components** as the main unit for server-side rendering.
