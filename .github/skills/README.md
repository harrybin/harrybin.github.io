# Project Skills

This folder contains reusable, task-specific project skills. Prompt files in `.github/prompts/` should be short entry points to a canonical skill when both surfaces are needed, rather than duplicate procedures.

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
   - Path: `.github/skills/generate-blog-image/SKILL.md`
   - Purpose: Generate a requested blog image with explicit external-data and file-write boundaries.

## Suggested combinations

1. Draft flow: `create-blog-post-from-brief` -> `review-blog-post-and-fix-issues`
2. Promotion flow: `linkedin-post-from-blog`
3. Visual enrichment flow: `create-blog-post-from-brief` -> `generate-blog-image` -> `review-blog-post-and-fix-issues`

## Maintenance

The repository maintainer owns reviewing these skills and instructions. Recheck them when the runtime, package scripts, content schema, architecture, CI workflow, or supported Copilot client/model surfaces change, and when recurring agent failures, false activations, missed activations, or user corrections provide evidence of drift.

Prefer existing CI, scripts, tests, and linters for deterministic checks. Add permanent automation only when a repeatable, mechanically verifiable failure justifies its maintenance cost. Evaluate behavior with fresh, comparable baseline and proposed sessions, including positive tasks and near-miss prompts; record false activations, missed activations, output regressions, unnecessary tool calls, and duration/token/cost data only when observable.
