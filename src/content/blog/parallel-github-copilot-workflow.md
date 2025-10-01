---
author: Harald Binkle
pubDatetime: 2025-10-01T21:31:00Z
title: Using GitHub Copilot for Multiple Tasks in Parallel
postSlug: parallel-github-copilot-workflow
featured: false
draft: false
tags:
  - GitHub Copilot
  - GitHub Copilot CLI
  - GitHub Copilot Coding Agent
  - VSCode
  - Productivity
  - Developer Tools
  - Automation
description: Discover how to break free from the sequential developer workflow and use GitHub Copilot, Copilot CLI, and the coding agent to run multiple independent tasks in parallel—boosting your productivity and speeding up project delivery.
---

## Why Wait? Unlocking Parallelism with GitHub Copilot

When working with GitHub Copilot, have you ever wondered: _Why do I have to wait for my current prompt to finish before starting the next task?_ The traditional developer workflow is often sequential - one step at a time, waiting for each to complete. But what if you could break this pattern and run multiple independent tasks in parallel, letting Copilot do more for you, faster?

## Table of contents

### The Myth: Copilot Can’t Work in Parallel

At first glance, it seems like Copilot (especially in chat mode) only handles one thing at a time. But that’s not the whole story. With a little creativity and the right tools you can orchestrate several Copilot-powered workflows at once.

## A Real-World Example: Bootstrapping a New Project

Let’s say you’re starting a new app or module. Here’s a typical to-do list:

- Scaffold the project file structure (source code folders, config)
- Add essential files: `README.md`, `LICENSE`, etc.
- Implement initial logic, UI, or core features
- Write project-specific Copilot instructions
- Set up GitHub Actions workflows for CI/CD
- Create documentation

Looking at this list, you’ll notice several tasks are independent, they don’t need to wait for each other. So why not run them in parallel?

## The Trick: Copilot CLI and Multiple Terminals

Here’s an example how you can do it:

1. **Scaffold the project structure**: Use Copilot (chat) to generate your folders and starter files. If you use a context-aware prompt (like context7), you’ll often get a `copilot-instructions` file right away.
2. **Open a terminal**: Install the [GitHub Copilot CLI](https://docs.github.com/en/copilot/github-copilot-cli/getting-started-with-github-copilot-cli) (having NodeJS installed)

   ```sh
   npm install -g @githubnext/github-copilot-cli
   ```

   and start a new Copilot CLI session using:

   ```sh
   copilot
   ```

   ![copilot-cli](/assets/copilot-cli.png)

3. **You may open more terminals** and start a new Copilot CLI session in each terminal.

   Now, in one terminal, prompt Copilot CLI to create your `README.md`. In another, generate your `LICENSE`.

   In a second start on documentation or config files. Each Copilot CLI instance works independently.

4. **Commit early**: As soon as the basic structure is ready, make your initial git commit and push to GitHub. This unlocks even more automation.
5. **Leverage the Copilot coding agent**: For tasks like setting up GitHub Actions workflows, use the Copilot **coding agent**. It runs asynchronously on the GitHub platform, so you can delegate long-running or background tasks while you keep working locally.
   ![coding agent button](/assets/cp-coding-agent-button.png)
6. **Continue in parallel**: While **Copilot CLI** and the **coding agent** are working, you can still use Copilot chat for implementation details, bug fixes, or further enhancements.

## Four Copilots, One Developer

With this approach, you can have:

- Multiple Copilot CLI sessions (each in its own terminal)
- Copilot chat in your editor
- The Copilot coding agent running tasks asynchronously on GitHub

That’s up to four Copilots working for you at once supercharging your productivity and letting you focus on higher-level design and decision-making.

## Try It Yourself!

Next time you start a project, see how many Copilots you can coordinate in parallel. Break your work into independent tasks, open a few terminals, and let Copilot handle the busywork. You’ll be amazed at how much faster you can move.

_How many Copilots can you manage at once? Let me know your record!_
