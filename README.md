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

## Deploy to GitHub Pages

1. `npm run build`
2. Push the contents of `dist/` to a `gh-pages` branch, or use a GitHub Action
   (e.g. `actions/deploy-pages`) to publish `dist/` automatically on push to `main`.
