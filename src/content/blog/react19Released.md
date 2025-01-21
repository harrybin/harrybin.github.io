---
author: Harald Binkle
pubDatetime: 2025-01-21T17:22:00Z
title: React 19 Released - Time to Upgrade?
postSlug: react19Released
featured: false
draft: false
tags:
  - react
  - upgrade
  - migration
  - react compiler
description: React 19 has been released for over a month now. Many third-party libraries and components support it, so it's time to consider using it for your projects.
---

## <img alt="React-icon" src="../../../public/assets/React-icon.svg" style="all: unset;height: 20px"> React 19 is now officially released!

React **19** has been out for more than a month and many third-party libraries and components have started supporting it. It's time to think about upgrading your projects to React **19**.

Surprisingly, the hype around the official release is much smaller compared to the preview release in April. But nevertheless, it is released and you may think of doing the upgrade.
If so, have a look at the migration/upgrade guide: [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide).

## Key Changes in React 19

While it doesn't make sense to [repeat](https://react.dev/blog/2024/12/05/react-19) all the changes here, let's summarize the three most important ones for me:

- **Actions** have been introduced, providing a new way to handle side effects in a more declarative manner.
- New hooks like **useTransition** and **useDeferredValue** have been added to improve state management and performance by deferring updates.
- The **Suspense** API has been extended to support more use cases and improve data fetching.

Unfortunately, the big advantage promoted together with React **19**, the [react compiler](https://react.dev/blog/2024/10/21/react-compiler-beta-release), is still only in beta and shouldn't be used in production. So, you still need to take care of memoization yourself. For instance, have a look at my post from last year: [Memoization in React](https://harrybin.de/posts/ifcomponent/).

> Please don't forget to keep on following the [rules of React](https://react.dev/reference/rules).

Happy coding!
