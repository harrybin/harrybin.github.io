---
author: Harald Binkle
pubDatetime: 2024-05-28T23:33:00Z
title: visual debugging of unit/component tests with vitest-preview
postSlug: vitestPreview
featured: false
draft: false
tags:
  - react
  - vite
  - tests
  - component tests
  - vitetest
  - vitest-preview
description: A common issue that occurs during the writing of React components is solved...
---

# Writing component tests is mandatory

No matter which web framework you are using, writing tests for your UI components is a necessity.
Component tests ensure that your component is rendered as expected and behaves as expected, even in the future when you may need to make modifications or fixes to your components.

# How do you write your component tests?

When writing component tests for React components, there are some common steps you can follow:

1. Import the necessary dependencies: You'll need to import the testing library for React, such as `@testing-library/react`, and any other libraries or utilities you may need for your tests.

2. Render the component: Use the testing library's `render` function to render your component. Pass any required props or context values as needed.

3. Interact with the component: Simulate user interactions or trigger events on the rendered component using the testing library's API. This can include clicking buttons, entering text, or navigating through the component's UI.

4. Assert the expected behavior: Use the testing library's assertions to verify that the component behaves as expected. This can include checking if certain elements are present, if the component's state or props are updated correctly, or if certain actions result in the expected side effects.

5. Clean up: After each test, make sure to clean up any resources or state that may have been modified during the test. This can include resetting the component's state, restoring mocked functions, or cleaning up any temporary data.

6. Repeat for different scenarios: Write multiple tests to cover different scenarios and edge cases for your component. This can help ensure that your component works correctly in various situations.

Remember to follow best practices for testing, such as keeping your tests focused and independent, using descriptive test names, and organizing your tests into logical groups.

## What if step 2 or 3 doesn't yield the expected results, so step 4 will fail?

What if the test you are writing fails and you are pretty sure that the problem is somewhere in the test and not caused by the component?
Say your component has different renderings depending you may start guessing which mistake you did, right?

## An elegant solution would be...

...being able to look at the DOM rendered for that component after step 2 and/or step 3.
Therefore, you can use [vitest-preview](https://www.vitest-preview.com/).

# Vitest-Preview

`vitest-preview` is not a preview for the next vitest version; it is an additional tool to be installed alongside vitest to help you debug your tests.

**Vitest Preview** is a powerful tool for visual testing in JavaScript applications. Here's how you can get started with it:

1. **Installation**:
   - Add `vitest-preview` as a dev dependency to your project:
     ```bash
     npm install --save-dev vitest-preview
     ```
2. **Configuration** (optinal):
   - Configure Vitest to process CSS by updating your `vite.config.js`:
     ```javascript
     export default defineConfig({
       test: {
         css: true,
         setupFiles: "./src/test/setup.ts",
       },
     });
     ```
   - Import your global CSS files in `setup.ts`.
3. **Usage**:
   - Place `debug()` wherever you want to see the UI in your tests:
     ```javascript
     import { debug } from "vitest-preview";
     describe("App", () => {
       it("should work as expected", () => {
         render(<App />);
         debug();
       });
     });
     ```
4. **Preview Dashboard**:
   - Run the CLI command to open the Vitest Preview Dashboard:
     ```bash
     npm run vitest-preview
     ```
   - Execute your tests containing `debug()`, and **you'll see the UI** at `localhost:5006`, giving you the option to examine the DOM of the rendered component right at the visual state the component has when/where you put the `debug()` statement.

Vitest Preview is built on top of Vite, making it blazing fast and easy to use. Give it a try for effortless visual debugging! 🚀🔍
