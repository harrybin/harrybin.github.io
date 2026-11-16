---
name: generate-blog-image
description: Use when the user asks to create or replace an illustrative image for a specific blog post section. Do not use for alt text, visual brainstorming, or image editing without a generation request.
---

# Generate a blog image

## Inputs and boundaries

- Work from the specific post section and visual intent supplied or clearly identified by the user. If either is unclear, ask before generating.
- Before sending text to Gemini or another external image service, show the exact text or prompt and destination and obtain approval unless the user already specified that exact data and destination.
- Never ask for, handle, or store credentials. If authentication or an account/permission prompt appears, stop and tell the user; do not bypass the prompt.
- Generate only the requested image. Do not edit the blog post to insert it unless the user asked for that change.

## Workflow

1. Read the target section and nearby heading. Use only the context needed to create the requested visual; do not include unrelated or sensitive article text in the external prompt.
2. Create a concise prompt describing the subject, tone, composition, and intended article placement. Ask the image model to avoid text unless the user requests text.
3. Use an available browser or image-generation tool to submit the approved prompt. If unavailable, stop and report the limitation. Review the result for relevance and obvious visual defects; retry at most twice with a more specific prompt.
4. Save the selected image as a kebab-case file in `public/assets/`. Check that the exact destination does not already exist before saving; do not overwrite existing files.
5. Verify the saved file and report its path and suggested served URL (`/assets/<filename>`). Add an image reference and alt text only when insertion into the post was requested.

## Failure handling

If approval is declined, authentication is required, generation fails, or the file cannot be saved or verified, stop and report what remains incomplete. Do not silently substitute another service, destination, or existing asset. Do not modify this skill as part of a task.
