---
name: create-blog-post-from-brief
description: Use when asked to turn a supplied topic brief or draft into a publishable post in this Astro blog. Do not use for editing an existing post only, social promotion, or general technical questions.
---

# Create a blog post from a brief

## Inputs

Use the proposed topic or draft supplied in the conversation. If no topic or source material is available, ask for it rather than inventing the subject. Research technical claims only when needed; prefer primary, current sources and distinguish facts from opinion.

## Workflow

1. Read the brief and identify its audience, purpose, and claims that need verification.
2. Read `.github/instructions/content-md.instructions.md` and check `src/content.config.ts` for current content schema requirements.
3. Draft a clear, useful article in English. Translate German source sentences, improve flow, and add only relevant, substantiated context.
4. Create the post under `src/content/blog/` using a kebab-case `.md` filename, or `.mdx` only when JSX is needed. Do not overwrite an existing post without checking it and preserving its content.
5. Include `author: Harald Binkle`, `pubDatetime`, `title`, `description`, and `tags`. Keep the description between 150 and 160 characters. Start the article body at `##`; specify code fence languages and meaningful image alt text.
6. Check frontmatter against the schema, internal paths, links, and Markdown/MDX structure. Run relevant validation when available and report checks that could not be run.

## Style

- Write in a conversational, developer-friendly tone with practical examples.
- Do not use dashes as sentence asides.
- Do not put a colon before "and".

## Output

Create the post file and summarize its path and the main content added. Do not publish, commit, or promote it unless separately requested.
