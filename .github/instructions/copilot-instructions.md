# GitHub Copilot Instructions for harrybin.github.io

## Blog Post Creation Guidelines

When creating new blog posts for this Astro-based developer blog, you **MUST** follow these strict requirements:

### File Location and Format

- **MANDATORY**: All new blog posts must be created as `.md` files in `/src/content/blog/`
- **NO EXCEPTIONS**: Do not create blog posts in any other directory
- **File Extension**: Use `.md` for standard markdown or `.mdx` for markdown with JSX components
- **Naming**: Use kebab-case for filenames (e.g., `my-new-blog-post.md`)

### Content Structure Requirements

- **Reference Document**: Follow ALL guidelines specified in `content-md.instructions.md`
- **Frontmatter**: Every blog post MUST include complete YAML frontmatter with all required fields
- **Author**: Always use "Harald Binkle" as the author
- **Date Format**: Use ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ) for `pubDatetime`
- **Tags**: Include relevant tags from the approved tag list
- **Description**: Write SEO-friendly descriptions (150-160 characters)

### Enforcement Rules

1. **File Creation**: When asked to create a blog post, ALWAYS create it in `/src/content/blog/`
2. **Template Usage**: Use the exact template structure from `content-md.instructions.md`
3. **Validation**: Ensure all required frontmatter fields are present and correctly formatted
4. **Content Quality**: Follow the writing style and structure guidelines
5. **SEO Compliance**: Include proper meta descriptions, tags, and heading hierarchy

### Example Workflow

When creating a new blog post:

1. Create the file in `/src/content/blog/` with a descriptive kebab-case filename
2. Add complete frontmatter using the template from `content-md.instructions.md`
3. Structure content with proper headings (start with H2)
4. Include code examples with syntax highlighting
5. Add relevant tags and SEO-optimized description
6. Verify all links and image references work correctly

### Quality Checklist

Before considering a blog post complete:

- [ ] File is located in `/src/content/blog/`
- [ ] All required frontmatter fields are present
- [ ] Date is in correct ISO format
- [ ] Tags are relevant and consistent with existing posts
- [ ] Description is SEO-optimized (150-160 characters)
- [ ] Content follows the writing style guidelines
- [ ] Code blocks have proper language specification
- [ ] Images have alt text and proper paths
- [ ] Image files are located in `/public/assets/`
- [ ] Links are functional and properly formatted

## Project Context

This is an Astro-based static site using the AstroPaper theme with:

- TypeScript for type safety
- React components for interactive elements
- Tailwind CSS for styling
- Astro Content Collections for blog management
- FuseJS for search functionality
- Deployment on Cloudflare Pages

## Additional Guidelines

- Maintain consistency with existing blog posts
- Use the same tone and style as Harald Binkle's writing
- Focus on developer-friendly content with practical examples
- Ensure all content is technically accurate and up-to-date
- Consider SEO best practices for better discoverability

**REMEMBER**: Always reference and follow the detailed guidelines in `content-md.instructions.md` for complete blog post creation requirements.
