# Repository guidance

This repository is a static Astro blog using TypeScript, React, Tailwind CSS, and Markdown/MDX content collections. The blog collection schema is in `src/content.config.ts`; site configuration is in `src/config.ts` and `astro.config.ts`. Pages, layouts, components, utilities, styles, and posts live under `src/`.

## Validation

Use the scripts in `package.json`:

- `npm run check` for Astro and TypeScript diagnostics.
- `npm run lint` for ESLint.
- `npm run format:check` to check formatting.
- `npm run build` for the production build and Jampack processing.
- `npm run sync` to regenerate Astro types after relevant schema or configuration changes.

There is no test script in `package.json`. Run relevant checks and report their actual results. If a check cannot be run, say so; do not simulate it or claim it passed.

GitHub Pages CI uses `.github/workflows/deploy-to-gh-pages.yml` and `withastro/action@v4` to build and deploy. The local Docker development image is configured in `docker-compose.yml`. The npm lockfile is `package-lock.json`; use npm and keep it consistent with `package.json`.

## Blog content

Create posts under `src/content/blog/`. For content-specific rules, schema details, and authoring examples, see `.github/instructions/content-md.instructions.md`. Prefer existing utilities and semantic Tailwind tokens when changing application code. Keep changes focused and validate the affected behavior.
