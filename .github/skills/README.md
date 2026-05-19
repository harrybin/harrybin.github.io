# Project Skills

This folder contains reusable project skills that mirror the predefined prompt files in `.github/prompts/`.

Use these skills when you want better composability in agent mode.

## Available skills

1. `linkedin-post-from-blog`
   - Path: `.github/skills/linkedin-post-from-blog/SKILL.md`
   - Purpose: Generate a concise, engaging LinkedIn post from a blog post in context.

2. `create-blog-post-from-brief`
   - Path: `.github/skills/create-blog-post-from-brief/SKILL.md`
   - Purpose: Turn a topic brief into a complete blog post markdown file with improved content.

3. `review-blog-post-and-fix-issues`
   - Path: `.github/skills/review-blog-post-and-fix-issues/SKILL.md`
   - Purpose: Review a blog post and fix language and clarity issues.

4. `generate-blog-image`
   - Path: `.github/skills/generate-image/SKILL.md`
   - Purpose: Generate a blog image from paragraph context, inferring the visual concept automatically and saving it under `public/assets/`.

## Suggested combinations

1. Draft flow: `create-blog-post-from-brief` -> `review-blog-post-and-fix-issues`
2. Promotion flow: `review-blog-post-and-fix-issues` -> `linkedin-post-from-blog`
3. Visual enrichment flow: `create-blog-post-from-brief` -> `generate-blog-image` -> `review-blog-post-and-fix-issues`
