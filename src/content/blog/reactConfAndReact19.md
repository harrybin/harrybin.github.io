---
author: Harald Binkle
pubDatetime: 2024-05-16T08:54:00Z
title: Hot news from React Conf 2024 - React 19 RC!
postSlug: ReactConfAndReact19
featured: false
draft: false
tags:
  - React 19
  - compiler
  - memoization
  - rules of react
  - forwardref
description: Yesterday, React Conf 2024 started and really great hot news and insights about React 19 were spread
---

## React <img alt="React-icon" src="../../../public/assets/React-icon.svg" style="all: unset;height: 20px"> Conf 2024 is ongoing!

When React Conf 2024 started yesterday (15.05.2024), the keynote already gave a cool summary of what we as developers will gain when using the new major React version.
Since this keynote, React 19 officially changed its state from beta to RC. 🎉

## Future of React

If you now think, why or when should I start using React 19 and the more interesting question, is it worth starting to use it?
Will React still be there when my app has grown up in some years?
From my personal point of view - YES.
But there are also some facts not to be ignored:

- React npm downloads have grown over the years constantly and reached an amazing number of over **1 billion downloads** in 2023
- a StackOverflow survey pointed out that **40% of the devs are using React**
- and the community is still growing a lot: **36% of people learning** to code do that by using React

## But what's new in React 19?

I haven't written about React 19 in my blog until now. I will not repeat what you can find detailed in the [React 19 blog post](https://react.dev/blog/2024/04/25/react-19#whats-new-in-react-19) for some weeks.
But let me give you bullet points:

- React 19 is now **RC** and will be released in a few weeks
- **Server-side rendering** is supported
- **Suspense** API extended
- Improved **Hydration**
- Introduced **Actions**
- **ref** is now **a prop**, you no longer need to use _forwardRef_
- There is a new [react-compiler](http://fb.me/react-compiler), which integrates into your bundler and does magic optimizations of components and hooks
  - Auto-memoization, you no longer need to use _memo_, _useMemo_, or _useCallback_)
  - Great performance optimizations, even for existing React code
  - There are also babel & eslint plugins for the compiler to get first-class hints and improvement suggestions right from that compiler

### Be prepared for React 19

The big question is: do I need to change anything when migrating from React 18 to React 19?
There is a little [migration guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) but most breaking changes are related to the usage of hooks and components which are already deprecated since years.
So if you already take of warnings and get rid of them there shoud not be much work if there will be any at all.

> Please don't forget to keep on following the [rules of React](https://react.dev/reference/rules)

Let's see what the React Conf 2024 bings up today...
