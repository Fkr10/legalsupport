# Architecture & Application Overview — LegalSupportNow

This document outlines the architecture, technology stack, folder structure, and future scope of the LegalSupportNow application. This serves as a reference for developers and AI agents to quickly understand the project's foundation and direction.

## 1. About the Application

**LegalSupportNow** is a premium, minimal, and conversion-focused legal support website built specifically for a criminal defense law firm serving the Delhi NCR region. 

The application is designed to communicate **authority, trust, precision, and urgency** to clients who are often in legal distress. Its design language relies heavily on a "Navy and Gold" theme, utilizing deep navy for gravitas, gold for prestige, and pure white for transparency. The interface emphasizes usability and accessibility, ensuring clients can easily navigate services, read insights, and quickly reach out for legal assistance.

## 2. Technology Stack

The application is built using a modern, fast, and scalable frontend stack:

- **Core Framework**: React 19 + JavaScript
- **Build Tool**: Vite (for rapid development, HMR, and optimized production builds)
- **Styling & CSS**: Tailwind CSS (with a custom design system configured via `tailwind.config.js`)
- **Routing**: React Router DOM (v7)
- **Animations**: Framer Motion (used for page transitions and micro-interactions)
- **Forms**: React Hook Form (for robust, performant contact and inquiry forms)
- **Icons**: Lucide React (clean, consistent SVG icons)
- **SEO & Meta Tags**: React Helmet Async (for dynamic head tag management)
- **Production Serving**: Nginx as a reverse proxy, managed via PM2 for the Node.js static server (`serve`), or Dockerized for deployment.

## 3. Folder Structure

The repository follows a clean, modular structure typical of modern React/Vite applications:

```text
legalsupportnow/
├── public/                 # Static assets that don't need bundling
│   └── storage/            # Images and media (brand, blogs, lawyer, documents)
├── src/                    # Application source code
│   ├── components/         # Reusable UI components (Buttons, Navbar, Cards, etc.)
│   ├── context/            # React Contexts for global state management
│   ├── data/               # Static data and content
│   │   └── blogs/          # Individual blog posts stored as JSON files
│   ├── pages/              # Top-level page components (Home, About, Services, etc.)
│   ├── routes/             # Route configurations and definitions
│   ├── utils/              # Helper functions and utilities
│   ├── App.jsx             # Main application component and layout wrapper
│   ├── index.css           # Global CSS and Tailwind directives
│   └── main.jsx            # Application entry point
├── Dockerfile              # Docker container definition
├── docker-compose.yml      # Docker compose configuration
├── ecosystem.config.cjs    # PM2 configuration for production deployment
├── package.json            # Project dependencies and npm scripts
├── tailwind.config.js      # Tailwind design system configuration (colors, fonts)
└── vite.config.js          # Vite build configuration
```

## 4. Content & Data Architecture

Currently, the application operates primarily as a static frontend with file-based data:

- **Blog Content**: Managed as individual JSON files under `src/data/blogs/`. This acts as a headless, file-based CMS.
- **Static Assets**: All public-facing imagery, PDFs, and media are served from `public/storage/` to maintain organized file paths.
- **Hardcoded Data**: Practice areas, testimonials, the lawyer profile, and contact details are currently maintained directly within page components. 

## 5. Deployment Architecture

The application can be deployed using several methods:

1. **VPS with PM2 & Nginx**:
   - The app is built statically (`npm run build`).
   - PM2 runs a lightweight node server (`serve -s dist -l 5000`) defined in `ecosystem.config.cjs`.
   - Nginx acts as a reverse proxy, mapping port 80/443 to the local port 5000.
2. **Dockerized Environment**:
   - The application can be built into a Docker image (`docker build -t legalsupportnow:latest .`).
   - `docker-compose.yml` provides a declarative way to spin up the containerized application.

## 6. Future Scope & Roadmap

As the application grows, the following architectural improvements and features are planned:

- **API Integration**: Transition hardcoded data (practice areas, testimonials, profiles) into a backend CMS (like Strapi, Sanity, or a custom Node.js/Express API) or a database (PostgreSQL/MongoDB).
- **Dynamic Blog System**: Move away from JSON files to a fully managed database for blog posts to enable better search, categorization, and author management.
- **Internationalization (i18n)**: Implement multi-language support (specifically Hindi, utilizing `Noto Sans Devanagari` as per the design guidelines) to better serve the diverse Delhi NCR demographic.
- **Advanced SEO**: Pre-rendering or Server-Side Rendering (SSR) to improve search engine indexing, potentially migrating to a framework like Next.js or Remix if SEO needs become highly demanding.
- **Client Portal**: Introduce an authenticated dashboard for clients to securely upload documents, view case status, and communicate with their legal team.
- **Automated Deployments**: Set up CI/CD pipelines (e.g., GitHub Actions) to automatically run linting (`npm run lint`), build, and deploy the application upon merging to the main branch.
