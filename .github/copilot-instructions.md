## AI Coding Agent Instructions (harrybin.github.io)

Goal: Maintain and extend a developer blog built on Astro (AstroPaper base) with TypeScript, React islands, Tailwind, and content collections. Prioritize consistency, performance, SEO, and authoring conventions.

### 1. Architecture Snapshot

| Layer      | Location                                                                                                                                      | Notes                                                                                                    |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Content    | `src/content/blog`, `src/content/docs`                                                                                                        | Markdown/MDX validated by Zod schema in `src/content/config.ts` (blog collection only)                   |
| Layouts    | `src/layouts/*.astro`                                                                                                                         | `Layout.astro` wraps pages (SEO, global scripts). `PostDetails.astro` renders blog posts.                |
| Components | `src/components/`                                                                                                                             | Mix of `.astro` (structure) + React (`Card.tsx`, `Search.tsx`, `Datetime.tsx`) hydrated with `client:*`. |
| Utils      | `src/utils/`                                                                                                                                  | Post sorting, tag extraction, OG image generation (uses `satori`, `@resvg/resvg-js`).                    |
| Styling    | Tailwind via `@astrojs/tailwind`; custom design tokens via CSS variables (see skin-\* usage) in `base.css` + config in `tailwind.config.cjs`. |
| Config     | `astro.config.ts`, `src/config.ts`, `tsconfig.json` (path aliases), `package.json` (scripts).                                                 |

Key integration plugins: Tailwind, MDX, React, Sitemap, remark-toc + remark-collapse (collapses "Table of contents"), Shiki code highlighting theme `one-dark-pro`.

### 2. Content Authoring Rules

Must follow blog collection schema (see `src/content/config.ts`):
Required frontmatter: `author` (always "Harald Binkle"), `pubDatetime` (ISO 8601 date), `title`, `description`, `tags` (string array), optional: `postSlug`, `featured`, `draft`, `ogImage`, `canonicalURL`.
File placement: ONLY under `src/content/blog/` for blog posts. Use kebab-case filenames (`my-topic.md`). Use `.mdx` when React/JSX needed.
Images: Place under `public/assets/`; reference with path `/assets/<file>`; include descriptive alt text.
Description length: 150–160 chars (SEO meta). Headings: Start article body with level 2 (`##`) unless there is a deliberate top `#` title conflict—prefer leaving H1 to layout.

Checklist before committing a post:

1. Filename + path correct.
2. Frontmatter satisfies schema (run `npm run sync` if schema changed).
3. `pubDatetime` uses full ISO string with timezone `Z` if UTC intended.
4. Tags reused from existing where possible (see prior posts for canonical casing).
5. Code blocks specify language; avoid inline style attributes.
6. No broken relative links (prefer absolute `/posts/<slug>` for internal nav).
7. OG image either auto-generated or valid dimensions (>= 1200x630).

### 3. Development Workflows

Install: `npm install`
Dev server: `npm run dev` (alias `npm start`) -> http://localhost:4321
Type / schema sync: `npm run sync`
Static build: `npm run build` (runs `astro build` then `jampack` to post-process assets)
Preview prod build: `npm run preview`
Lint & format: `npm run lint`, `npm run format:check`, `npm run format`
Commit convention: Use `npm run cz` (commitizen) for standardized messages; husky + lint-staged auto-format staged files.

### 4. Coding Conventions

Imports: Prefer path aliases (`@utils/...`, `@config`) instead of long relative paths.
React components: Keep them small; hydrate only when necessary (e.g. search). Avoid adding global state libs—static-first mindset.
Styling: Use Tailwind utility classes; for color, prefer semantic `text-skin-*`, `bg-skin-*` tokens (maps to CSS vars). Don’t inline hex colors unless introducing new design token (then update Tailwind config + base CSS vars).
Content logic: Sorting & tag logic lives in `src/utils/`; extend there instead of duplicating logic in components.
OG Images: Use existing patterns in `src/utils/generateOgImages.tsx`; any new dynamic image template belongs under `src/utils/og-templates/`.

### 5. Markdown / MDX Patterns

Use MDX only if embedding components (e.g., `Hint.astro`). For admonitions, import `Hint` at top of file. Keep frontmatter minimal—avoid unused keys. Avoid raw HTML unless required; prefer markdown + components.
Table of Contents: Automatic via `remark-toc`; ensure a `## Table of contents` heading if you want collapsible section generated.

### 6. Performance & SEO

Keep images optimized (supply WebP variant if large PNG/JPEG—see existing examples). Reference smallest necessary asset. Let `jampack` post-process—avoid manual inlining of large SVG unless essential.
Add canonical URL only when cross-posting. Use meaningful slugs; if `postSlug` omitted, AstroPaper auto-derives from filename.

### 7. Safe Changes / Pitfalls

Do NOT rename existing path aliases without updating `tsconfig.json` & searching usages.
Do NOT move `src/content/config.ts`—breaks collection validation.
When adding dependencies, ensure they’re static-build friendly (no server-only APIs). Avoid large client-side libs; prefer build-time solutions.
If altering `astro.config.ts` remark plugins, confirm build passes and TOC collapse still functions.

### 8. Example Frontmatter Template

```yaml
---
author: Harald Binkle
pubDatetime: 2025-08-15T12:00:00Z
title: Descriptive Post Title
postSlug: descriptive-post-title
featured: false
draft: false
tags:
	- Astro
	- TypeScript
description: One-line 150–160 char summary explaining the value proposition for SEO and previews.
---
```

### 9. Agent Behavior Summary

When asked to create/update a post: enforce schema & placement. When refactoring: centralize logic in utils, preserve semantic Tailwind tokens. When adding an image: place under `public/assets/` and use WebP variant if possible. Always run formatting & lint tasks conceptually before final output (simulate). Provide diffs only for changed files.

---

For detailed blog prose style and extended formatting rules, see `content-md.instructions.md` (referenced but not included here). Keep instructions concise—extend this file only for concrete, repeated patterns.
