---
applyTo: "/src/content/blog/*.md"
---

# Blog Content Creation Instructions

This document outlines the guidelines and structure for creating blog posts in Astro markdown files for the harrybin developer blog.

## File Structure and Naming

- **Location**: All blog posts must be placed in `src/content/blog/`
- **File Extension**: Use `.md` for standard markdown or `.mdx` for markdown with JSX components
- **Naming Convention**: Use kebab-case for filenames (e.g., `my-awesome-blog-post.md`)
- **Slug**: The filename will be used as the URL slug unless overridden in frontmatter

## Required Frontmatter

Every blog post must include YAML frontmatter at the top of the file with the following required fields:

```yaml
---
author: Harald Binkle
pubDatetime: 2024-01-20T14:23:00Z
title: Your Blog Post Title
postSlug: optional-custom-slug
featured: false
draft: false
tags:
  - tag1
  - tag2
  - tag3
description: A brief description of your blog post that appears in meta tags and post previews
---
```

### Frontmatter Field Descriptions

- **author**: Author name (default: "Harald Binkle")
- **pubDatetime**: Publication date and time in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)
- **title**: The blog post title (used in SEO and navigation)
- **postSlug**: Optional custom URL slug (defaults to filename if not provided)
- **featured**: Boolean indicating if post should be featured on homepage
- **draft**: Boolean indicating if post is a draft (won't be published if true)
- **tags**: Array of tags for categorization and filtering
- **description**: Brief description for SEO meta tags and post previews
- **ogImage**: Optional custom Open Graph image (path or URL)
- **canonicalURL**: Optional canonical URL for SEO

## Content Guidelines

### Writing Style

- Write in a conversational, developer-friendly tone
- Use clear, concise language
- Include practical examples and code snippets
- Explain technical concepts with context

### Structure

- Start with a clear introduction
- Use descriptive headings (H2, H3) to organize content
- Include code examples with proper syntax highlighting
- End with a conclusion or key takeaways

### Code Blocks

Use fenced code blocks with language specification:

```typescript
// Example TypeScript code
function example(): string {
  return "Hello, World!";
}
```

### Images and Assets

- Place images in `public/assets/` directory
- Reference images using relative paths: `../../../public/assets/image.png`
- Use inline styles for image sizing: `<img alt="description" src="path" style="all: unset; height: 20px">`
- Always include meaningful alt text for accessibility

### Links

- Use descriptive link text
- For external links, consider opening in new tab
- Internal links should use relative paths

### Hints

- use the hint component from `src/components/Hint.astro` like it's done in `src/content/blog/give-it-a-face-to-talk-to.mdx` (lines 445-460)
- use the types of the components appropriate: "success" | "warning" | "info" | "error"
- put the import for hint component at the top of the file
- if the file is a `.mdx` file, you can use the component directly in the markdown content, else rename the file-extension from `md` to `mdx`

## Tag Guidelines

Common tags to use:

- **Languages**: `react`, `typescript`, `javascript`, `astro`, `css`
- **Frameworks**: `nextjs`, `astro`, `mui`, `tailwind`
- **Tools**: `github`, `vscode`, `docker`, `testing`
- **Concepts**: `performance`, `accessibility`, `seo`, `debugging`
- **Personal**: `harrybin`, `speaking`, `events`

## SEO Best Practices

- Write compelling titles (50-60 characters)
- Create descriptive meta descriptions (150-160 characters)
- Use relevant tags for better discoverability
- Include proper heading hierarchy (H1 is the title, start content with H2)
- Add alt text to all images

## Example Template

````markdown
---
author: Harald Binkle
pubDatetime: 2024-01-20T14:23:00Z
title: How to Create Amazing React Components
postSlug: amazing-react-components
featured: false
draft: false
tags:
  - react
  - components
  - best-practices
description: Learn how to create reusable and maintainable React components with modern patterns and best practices.
---

## Introduction

Brief introduction explaining what this post covers and why it's important.

## Main Content

### Subheading 1

Content with explanations, examples, and code snippets.

```typescript
// Example code with proper syntax highlighting
function MyComponent(): JSX.Element {
  return <div>Hello, World!</div>;
}
```
````

### Subheading 2

More content with images if needed:

<img alt="React logo" src="../../../public/assets/React-icon.svg" style="all: unset; height: 20px">

## Conclusion

Summary of key points and next steps.

```

## Publication Checklist

Before publishing, ensure:
- [ ] All required frontmatter fields are filled
- [ ] Date is in correct ISO format
- [ ] Tags are relevant and consistent
- [ ] Images have proper alt text
- [ ] Code blocks have language specification
- [ ] Links are working and properly formatted
- [ ] Content is proofread for grammar and spelling
- [ ] Description accurately summarizes the post
- [ ] Draft is set to `false` when ready to publish
```
