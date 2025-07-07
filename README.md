# Developer blog of harrybin

Here you will find short developer posts all around my daily work. 📄

## 🏗️ Architecture & Theme

This blog is built using the **[AstroPaper](https://github.com/satnaing/astro-paper)** theme, a minimal, responsive, and accessible blog theme for Astro. The theme provides:

- **Static Site Generation (SSG)** with Astro's island architecture
- **Responsive design** optimized for mobile and desktop
- **SEO-friendly** with proper meta tags and Open Graph support
- **Accessibility** features following WCAG guidelines
- **Dark/Light mode** toggle with system preference detection
- **Fast search** functionality powered by FuseJS
- **RSS feed** generation for blog posts
- **Sitemap** generation for better SEO

## 💻 Tech Stack

**Main Framework** - [Astro](https://astro.build/) - Static site generator with islands architecture  
**Theme** - [AstroPaper](https://github.com/satnaing/astro-paper) - Minimal, responsive blog theme  
**Type Checking** - [TypeScript](https://www.typescriptlang.org/) - Static type checking  
**Component Framework** - [ReactJS](https://reactjs.org/) - Interactive components (search, theme toggle)  
**Styling** - [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework  
**Content Management** - [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) - Type-safe content management  
**Markdown Processing** - [Remark](https://remark.js.org/) & [Rehype](https://github.com/rehypejs/rehype) - Markdown to HTML processing  
**UI/UX** - [Figma](https://figma.com) - Design and prototyping  
**Fuzzy Search** - [FuseJS](https://fusejs.io/) - Client-side search functionality  
**Icons** - [Boxicons](https://boxicons.com/) | [Tablers](https://tabler-icons.io/) - Icon libraries  
**Code Formatting** - [Prettier](https://prettier.io/) - Code formatting  
**Deployment** - [Cloudflare Pages](https://pages.cloudflare.com/) - Static site hosting  
**Illustration in About Page** - [https://freesvgillustration.com](https://freesvgillustration.com/)  
**Linting** - [ESLint](https://eslint.org) - JavaScript/TypeScript linting

### Content & Features:

**[giscus](https://giscus.app/)** - GitHub Discussions-powered comments system  
**Social Media Integration** - Configurable social links and sharing  
**Open Graph Images** - Dynamic OG image generation for posts  
**Analytics Ready** - Easy integration with Google Analytics or other services

## 🚀 Astro Features Used

### Islands Architecture

- **Hydration Strategy**: Components are hydrated only when needed using Astro's `client:*` directives
- **Performance**: Minimal JavaScript shipped to the client, better Core Web Vitals
- **Framework Agnostic**: Can use React, Vue, Svelte, or vanilla JavaScript components

### Content Collections

- **Type Safety**: Strongly typed frontmatter validation using Zod schemas
- **Content Management**: Organized blog posts with automatic slug generation
- **Markdown Support**: Extended markdown with custom remark/rehype plugins

### Static Site Generation

- **Build Time**: All pages are pre-rendered at build time
- **SEO Optimization**: Perfect SEO scores with proper meta tags and structured data
- **Fast Loading**: Optimized assets and minimal JavaScript for blazing fast performance

### Custom Integrations

- **RSS Feed**: Automatically generated RSS feed for blog subscribers
- **Sitemap**: Dynamic sitemap generation for search engines
- **Open Graph**: Custom OG image generation for social media sharing

## � Project Structure

```
/
├── public/                 # Static assets
│   ├── assets/            # Images, icons, and media files
│   ├── favicon.svg        # Site favicon
│   └── toggle-theme.js    # Theme toggle functionality
├── src/
│   ├── components/        # Reusable Astro and React components
│   │   ├── Card.tsx       # Blog post cards (React)
│   │   ├── Search.tsx     # Search functionality (React)
│   │   └── *.astro        # Astro components (Header, Footer, etc.)
│   ├── content/           # Content collections
│   │   ├── blog/          # Blog posts (Markdown/MDX)
│   │   ├── docs/          # Documentation pages
│   │   └── config.ts      # Content collection schemas
│   ├── layouts/           # Page layouts
│   │   ├── Layout.astro   # Base layout with head, SEO
│   │   ├── PostDetails.astro # Blog post layout
│   │   └── Posts.astro    # Blog listing layout
│   ├── pages/             # File-based routing
│   │   ├── index.astro    # Homepage
│   │   ├── about.md       # About page
│   │   ├── posts/         # Blog post pages
│   │   ├── tags/          # Tag-based filtering
│   │   └── og.png.ts      # Dynamic OG image generation
│   ├── styles/            # Global styles
│   │   └── base.css       # Base styles and Tailwind imports
│   └── utils/             # Utility functions
│       ├── getSortedPosts.ts # Blog post sorting
│       ├── getUniqueTags.ts  # Tag extraction
│       └── og-templates/     # OG image templates
├── astro.config.ts        # Astro configuration
├── tailwind.config.cjs    # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## �👨🏻‍💻 Running Locally

The easiest way to run this project locally is to run the following command in your desired directory.

```bash
# npm 6.x
npm create astro@latest --template satnaing/astro-paper

# npm 7+, extra double-dash is needed:
npm create astro@latest -- --template satnaing/astro-paper

# yarn
yarn create astro --template satnaing/astro-paper
```

## Google Site Verification (optional)

You can easily add your [Google Site Verification HTML tag](https://support.google.com/webmasters/answer/9008080#meta_tag_verification&zippy=%2Chtml-tag) in AstroPaper using environment variable. This step is optional. If you don't add the following env variable, the google-site-verification tag won't appear in the html `<head>` section.

```bash
# in your environment variable file (.env)
PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-site-verification-value
```

## 📊 Analytics: Microsoft Clarity

This project uses **[Microsoft Clarity](https://clarity.microsoft.com/)** for privacy-friendly, in-depth analytics and user behavior insights.

### What is Microsoft Clarity?

Microsoft Clarity is a free analytics tool that provides:

- **Session recordings**: See how real users interact with your site
- **Heatmaps**: Visualize where users click, scroll, and spend time
- **User journey analysis**: Understand navigation paths and drop-off points
- **Performance metrics**: Identify slow pages and usability issues
- **Privacy-first**: No sampling, GDPR-compliant, and does not track personal data

### Why use Clarity?

- **Improve UX**: Discover friction points and optimize user experience
- **Content insights**: See which blog posts and features attract the most attention
- **Debugging**: Replay sessions to reproduce and fix bugs
- **No cost**: 100% free, no traffic limits

### How is Clarity integrated?

- The official Clarity tracking script is injected globally in the main layout (`src/layouts/Layout.astro`).
- Each page view is tracked, and a unique user/session ID is used (from localStorage or fallback to 'anonymous').
- The current page path is sent as a custom page ID, so you can analyze single blog post views in Clarity's dashboard.
- No personal data is collected; all analytics are anonymous and privacy-friendly.

**Integration snippet:**

```html
<script type="text/javascript">
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "<your projectID here>");
</script>
<script>
  const clarityUserId = window.localStorage.getItem("userId") || "anonymous";
  const clarityPageId = window.location.pathname;
  if (window.clarity && typeof window.clarity.identify === "function") {
    window.clarity.identify(clarityUserId, undefined, clarityPageId);
  }
</script>
```

For more, see [clarity.microsoft.com](https://clarity.microsoft.com/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

> **_Note!_** For `Docker` commands we must have it [installed](https://docs.docker.com/engine/install/) in your machine.

| Command                              | Action                                                                                                                           |
| :----------------------------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `npm install`                        | Installs dependencies                                                                                                            |
| `npm run dev`                        | Starts local dev server at `localhost:4321`                                                                                      |
| `npm run build`                      | Build your production site to `./dist/`                                                                                          |
| `npm run preview`                    | Preview your build locally, before deploying                                                                                     |
| `npm run format:check`               | Check code format with Prettier                                                                                                  |
| `npm run format`                     | Format codes with Prettier                                                                                                       |
| `npm run sync`                       | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `npm run cz`                         | Commit code changes with commitizen                                                                                              |
| `npm run lint`                       | Lint with ESLint                                                                                                                 |
| `docker compose up -d`               | Run AstroPaper on docker, You can access with the same hostname and port informed on `dev` command.                              |
| `docker compose run app npm install` | You can run any command above into the docker container.                                                                         |

> **_Warning!_** Windows PowerShell users may need to install the [concurrently package](https://www.npmjs.com/package/concurrently) if they want to [run diagnostics](https://docs.astro.build/en/reference/cli-reference/#astro-check) during development (`astro check --watch & astro dev`). For more info, see [this issue](https://github.com/satnaing/astro-paper/issues/113).

---

## 📜 License

Licensed under the MIT License, Copyright © 2025
