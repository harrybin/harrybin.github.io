---
name: generate-blog-image
description: "Generate an AI image for a blog post section. Use when: creating visuals for blog articles, generating featured section artwork, adding illustrative images to posts, or replacing image placeholders in blog content. Triggers: generate image, blog image, create post visual, add article artwork."
argument-hint: "Provide the blog paragraph context or reference the section in context"
---

# Generate Blog Image

Generate an AI image for a blog post section using Gemini via the integrated browser, then save it to the repository.

## When to Use

- A blog paragraph or section needs an illustrative image
- The user asks to generate, create, or add an image/visual for a post
- Image placeholders in blog content need to be filled

## Procedure

### 1. Analyse the blog context

- Read the target blog paragraph and nearby headings from the context provided by the user.
- Determine the image concept from that paragraph context (topic, tone, metaphor, key message).
- Do not ask the user for an image description; infer it from the paragraph.
- Inspect existing blog images in `public/assets/` to align style and tone across the site.

### 2. Craft an image-generation prompt

Write a detailed prompt that captures:

- The blog paragraph's topic and key message
- The inferred visual concept based on the paragraph context
- A visual style consistent with existing blog imagery (modern, clean, tech-oriented)
- Instruction to **avoid text on the image** (text in generated images is usually unreadable)
- Composition suitable for blog usage (clear focal point, readable at typical article widths)

### 3. Open Gemini in the integrated browser

Use the integrated VS Code browser tools to interact with Gemini:

1. **Open the page**
   - Navigate to `https://gemini.google.com/app?hl=de`
   - Take a screenshot to verify the page loaded.
   - If a login wall appears, **ask the user to log in** and wait before continuing.

> **Parallel generation:** When multiple images are requested, open up to **3 browser tabs** at a time (`https://gemini.google.com/app?hl=de` in each tab). Authenticate in the first tab; once logged in the session cookie applies to all tabs. Submit prompts in parallel—one per tab—and process the results (quality check -> copy -> save) as each tab finishes. If more than 3 images are needed, process them in batches of 3.

2. **Enter the prompt**
   - Locate the chat input field and type the crafted image-generation prompt.
   - Submit the prompt.

3. **Wait for image generation**
   - Take periodic screenshots to check whether an image has been generated.
   - Once an image appears, take a screenshot and evaluate quality.

4. **Quality check**
   - If the image contains illegible or incorrect text, regenerate with an updated prompt that explicitly forbids text.
   - If still unsatisfactory after one retry, adjust the prompt further (simplify, change angle, etc.) and try once more.

5. **Copy the image to clipboard**
   - Click the **copy image** button on the generated image (not the download button).
   - The image is now in the system clipboard.

### 4. Save the image from clipboard

- Use a PowerShell command to read the clipboard image and save it to `public/assets/`:
  ```powershell
  Add-Type -AssemblyName System.Windows.Forms
  $img = [System.Windows.Forms.Clipboard]::GetImage()
   if ($img) { $img.Save("<absolute-path-to-public-assets>/<filename>.png", [System.Drawing.Imaging.ImageFormat]::Png) }
  ```
- Use a kebab-case filename derived from the blog section topic (e.g. `requirements-to-tests-flow.png`).
- Update the blog markdown to reference the new image with an absolute path: `/assets/requirements-to-tests-flow.png`.
- Add meaningful alt text derived from the same paragraph context.

### 5. Verify

- Confirm the image file exists in `public/assets/`.
- Confirm the blog markdown references it correctly.
- Confirm the selected image matches the paragraph intent and article tone.

### 6. Self-improve

If any step in this procedure fails or requires manual user intervention to fix, observe what the user does to work around the problem. Then update this SKILL.md file with the corrected instructions so the issue does not recur in future invocations.
