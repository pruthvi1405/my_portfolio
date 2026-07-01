# Pruthvi Niranjan — Portfolio

Dark-mode, terminal-inspired portfolio built with Vue 3 + Vite.

## Edit your content

All text content lives in one place: `src/data/portfolio.js`. Update your
name, summary, skills, experience, projects, education, and contact links
there — no component code needs to change.

Note: `profile.linkedin` in that file is a placeholder — replace it with your
real LinkedIn URL before deploying.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it with:

```bash
npm run preview
```

## Deploy to GitHub Pages (already wired up)

This repo includes `.github/workflows/deploy.yml`, which builds and deploys
`dist/` to GitHub Pages automatically on every push to `main`. One-time setup:

1. Push this project to your `my_portfolio` GitHub repo (see below).
2. On GitHub: Settings → Pages → Build and deployment → Source → select
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab). Once it
   finishes, your site is live at `https://<your-username>.github.io/my_portfolio/`.

## Alternative: Vercel or Netlify

Both auto-detect Vite with zero config:

1. Push the repo to GitHub.
2. Go to vercel.com or netlify.com → "Add New Project" / "Import from Git" →
   select the repo → Deploy.
3. You get a live URL immediately, plus a free custom-domain option.
