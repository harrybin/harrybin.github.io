---
author: Harald Binkle
pubDatetime: 2026-05-08T12:00:00Z
title: From Vague Ideas to Testable Outcomes with BMAD and GitHub Copilot
postSlug: bmad-anforderungen-tests-demo
featured: false
draft: false
tags:
  - GitHub Copilot
  - BMAD
  - ATDD
  - Testing
  - Requirements Engineering
  - AI
description: How GitHub Copilot can turn vague requirements into PRDs, context, test design, and traceable ATDD artifacts.
---

How do we move from a vague product idea to a testable and reviewable outcome without losing context on the way?

![BMAD workflow from idea to PRD, context, architecture, tests, and traceability](/assets/bmad-hero-requirements-to-tests.svg)

## The problem addressed...

Most teams do not fail because they cannot code.

They fail because requirements are fuzzy, assumptions stay implicit, and tests arrive too late.

In the presentation, I showed a common gap.

Business asks for authentication.
Developers implement a happy path login.
Tests validate only the obvious path.
Production reveals missing MFA, missing lockout behavior, or weak tenant isolation.

That gap is expensive.

## What BMAD adds to the process

BMAD is an open source, AI guided workflow for software delivery that supports tools like GitHub Copilot.

Let's focuse on a practical sequence:

1. Clarify and pressure test requirements.
2. Create a PRD with structured prompts and checkpoints.
3. Generate project context so later agents do not work blind.
4. Break work into epics and stories.
5. Align architecture decisions with the requirements.
6. Create risk based test design and traceability.

This is not a magic prompt.

It is a method with checkpoints.

## What was done

The repo branch is:

- <https://github.com/harrybin/todo-react--playwright/tree/bmad_all-steps-atdd_no-impl>

The exported chat sessions that back the story are in:

- <https://github.com/harrybin/todo-react--playwright/tree/bmad_all-steps-atdd_no-impl/bmad-atdd-chat-histroy>

Yes, the folder name contains the `histroy` typo in the branch.

### 1. PRD creation with guided refinement

![Flow from vague idea to reviewed PRD via guided refinement](/assets/bmad-chapter-1-prd.svg)

The flow started with `/bmad-create-prd` for an enterprise authentication expansion.

From there, the process used explicit continue steps and interactive refinement.

Two elements from the chat exports are especially useful:

1. Party mode rounds where multiple perspectives challenged the current classification.
2. Advanced elicitation steps that forced clearer domain boundaries and assumptions.

This changed the output from a generic request into a sharper scope around workforce IAM concerns such as tenant isolation, MFA, role mapping, and auditability.

### 2. Context engineering as a first class artifact

![Project context as a shared source for requirements, architecture, epics, testing, and traceability](/assets/bmad-chapter-2-context.svg)

Next, `/bmad-generate-project-context` created `project-context.md`.

This matters because later generation quality depends on stable context.

When context is explicit, code and test generation become more consistent, and the output follows project conventions instead of inventing random structure.

### 3. Epics and stories from approved requirements

![Approved scope decomposed into epics and reviewable stories](/assets/bmad-chapter-3-epics.svg)

The `/bmad-create-epics-and-stories` flow then produced and expanded planning artifacts.

In the exported chats, you can see incremental confirmations and updates to `epics.md`.

That sequence is important because it keeps decisions reviewable instead of producing one giant untraceable answer.

### 4. Architecture update tied to real requirements

![Architecture decisions aligned with tenant model, auth, RBAC, audit logging, and error handling](/assets/bmad-chapter-4-architecture.svg)

The `/bmad-create-architecture update` step resumed an existing architecture workflow and aligned implementation patterns with the new scope.

The chat output highlights concrete decisions around multi tenant data modeling, authentication flow, MFA details, RBAC, immutable audit logging, and error handling.

This is where many teams usually drift.

In the flow, architecture stayed connected to the earlier requirements and risk discussion.

### 5. TEA for risk based test design

![Risk matrix highlighting critical paths like cross tenant data leakage and authorization failures](/assets/bmad-chapter-5-tea.svg)

With `/bmad-tea`, the workflow moved into test architecture.

The generated guidance prioritized high risk paths first.

For example, cross tenant data leakage and authorization boundary failures were treated as critical scenarios and mapped to layered test strategies.

This is a good bridge to ATDD because test intent is defined before implementation details grow.

### 6. Traceability and non functional checks

![Traceability links between requirements, test ideas, and non functional quality checks](/assets/bmad-chapter-6-traceability.svg)

The flow then used `/bmad-testarch-trace` and `/bmad-testarch-nfr`.

Even in the partial exports, you can see the system loading PRD, epics, and test design artifacts to build traceability context.

The practical value is simple.

You can verify whether each major requirement has a corresponding test idea and whether non functional quality concerns have been discussed early.

## Why this workflow works in practice

The strength is not one command.

The strength is the chain.

Each step creates artifacts the next step can consume.

That produces continuity from business intent to engineering decisions and test strategy.

In other words, BMAD plus Copilot can reduce the classic requirement to test gap when the team follows the method instead of skipping checkpoints.

## What to copy for your own team

If you want to try the same pattern, start small.

1. Pick one feature with clear business risk.
2. Run PRD creation with explicit review checkpoints.
3. Generate project context before broad code generation.
4. Create epics and architecture updates from the approved scope.
5. Run risk based test design and traceability before implementation accelerates.

You do not need a big process rollout on day one.

A single well documented feature is enough to prove the value.

## Links

- Presentation overview: <https://presentations.harrybin.de/bmad--anforderungen-tests>
- Direct deck route used in the live site: <https://presentations.harrybin.de/bmad-anforderungen-tests/>
- Demo branch: <https://github.com/harrybin/todo-react--playwright/tree/bmad_all-steps-atdd_no-impl>
- Exported chats: <https://github.com/harrybin/todo-react--playwright/tree/bmad_all-steps-atdd_no-impl/bmad-atdd-chat-histroy>

If you tested this workflow in your own project, I would love to hear where it helped most and where it still needs friction reduction.
