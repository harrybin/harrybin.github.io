---
name: create-new-post
description: Turn the new post prompt into a reusable Copilot skill that creates a complete blog post from proposed content.
---

# Create New Post

Create a new blog post from the proposed content in context.

## Workflow

1. Read the proposed content describing the topic.
2. Do focused web research to validate and enrich important claims.
3. Create the blog post markdown file in `src/content/blog/`.

## Content requirements

1. Add all required frontmatter fields for the blog collection.
2. Improve, complete, and structure the content for readability and flow.
3. Translate any German sentences to English.
4. Rephrase awkward wording.
5. Add missing but relevant context based on research.
6. Add anything else needed for a complete, publishable post.

## Style rules

1. Do not use dashes for sentence parts.
2. Do not put colons before an "and".

## Project conventions

1. Follow instructions in `.github/copilot-instructions.md`.
2. Follow markdown rules in `.github/instructions/content-md.instructions.md`.
3. Use `author: Harald Binkle`.
4. Keep `description` in the 150 to 160 character range.
5. Use a kebab-case filename unless `postSlug` requires a custom slug.
6. Place blog posts only under `src/content/blog/`.

## Output

1. Create or update the target markdown file.
2. Provide a short summary of what was added or improved.
