# LegalSupportNow (Vite + React + Tailwind)

Premium, minimal, conversion-focused lawyer website built with:

- React (Vite) + JavaScript
- Tailwind CSS
- React Router DOM
- Framer Motion
- React Hook Form
- Lucide React
- React Helmet (via `react-helmet-async`)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Serve the build (static)

```bash
npm run start
```

Then open `http://localhost:3000`.

## Deploy on a VPS (PM2 + Nginx)

### 1) Build on the server

```bash
npm ci
npm run build
```

### 2) Start with PM2

```bash
npx pm2 start ecosystem.config.cjs
npx pm2 save
```

### 3) Nginx reverse proxy

- Copy `nginx/legalsupportnow.conf` into `/etc/nginx/sites-available/legalsupportnow.conf`
- Symlink into `sites-enabled`
- Reload Nginx

```bash
sudo ln -s /etc/nginx/sites-available/legalsupportnow.conf /etc/nginx/sites-enabled/legalsupportnow.conf
sudo nginx -t
sudo systemctl reload nginx
```

## Content & data architecture

- Blog content lives in `src/data/blogs/` as individual JSON files
- Static assets live in `public/storage/` (brand, blogs, lawyer, documents)
- Practice areas, testimonials, lawyer profile, and contact details are kept inside page components for now (ready to move to APIs later)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
