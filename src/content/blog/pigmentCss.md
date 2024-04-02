---
author: Harald Binkle
pubDatetime: 2024-04-02T08:50:00Z
title: Pigment-css, the better alternative to tss-react/emotion?
postSlug: pigment-css
featured: false
draft: true
tags:
  - react
  - typescript
  - vite
  - mui
  - pigment-css
  - typed-css
description: Is pigment-css from mui really the better alternative to tss-react/emotion?
---

## CSS styling in React <img alt="React-icon" src="../../../public/assets/React-icon.svg" style="all: unset;height: 20px"> when using MUI <img alt="MUI-icon" src="../../../public/assets/mui-logo.svg" style="all: unset;height: 20px">

When using MUI with React, you may know there are several ways to style your components:

- Using the `makeStyles` hook (recommended, it's the most performant way)
- Using the `styled` function (if you want to create a styled component, some may still know it as withStyles)
- Using the `className` prop directly with global CSS classes (not recommended, as it's not scoped)
- Using the `sx` prop providing a tailwind-like syntax (not recommended in any case as it is slower than, e.g., using classnames with `makeStyles`)
- Using inline styles (not recommended, as it's not performant, hard to maintain, and not reusable)

So let's have a look at the first option, `makeStyles`, the hook returning a function. Within that function, you can define your scoped styles. The hook itself can be called with an optional argument, and provides the theme object of MUI. This theme object can be used to access the theme values, which are defined in the theme object of the `ThemeProvider` component. This way you can access colors, spacings, etc. of the theme and use them throughout your application. <br>
But the best thing with `makeStyles` is that the **CSS you define within is typed**. So you get autocompletion and type checking for your CSS properties.<br>
This is achieved by `tss-react` or `emotion`, which are used by MUI under the hood.

## But there is a new player in town, [pigment-css](https://github.com/mui/material-ui/tree/master/packages/pigment-css-react).

It's a new CSS-in-JS library from MUI. It's still in beta, but it's already very powerful. It's a bit different from `tss-react` or `emotion`, as it's a **zero-runtime CSS library**.
This means that the CSS is totally generated at build time and not at runtime.<br>
Coming from `emotion`, you need to be aware of the zero-runtime library fact, which means, for example, you can't do javascrit/typescript conditional styling within your css definitions with `pigment-css`; you need to define all required cases side-by-side.
For more about this, please have a look at [coming-from-emotion-or-styled-components](https://github.com/mui/material-ui/tree/master/packages/pigment-css-react#coming-from-emotion-or-styled-components)

### One big advantage of pigment-css is that it can provide a theme object.

Originally, the `theme` object came from MUI and is only available within the `ThemeProvider` component. But with `pigment-css`, you can define your own `theme` object and access it in every component.
That `theme` object can be used to define your _colors_, _spacings_, etc. in one place and use them throughout your application. As the theme object is also zero-runtime, you can also use it with frameworks like `next.js` or `gatsby`; that's the intention of `pigment-css`.

### Outlook into the future

The zero-runtime design of `pigment-css` not only makes it faster than `tss-react` or `emotion`, it also makes it future-proof.
With React 19, server-side components will be introduced, like what `next.js` is currently doing. Currently `tss-react` or `emotion` are not able to generate css at build time, so they are not able to generate css for server side components or use the MUI `theme` object.
With `pigment-css` you can use the `theme` object in your server side components, as the css is generated at build time and not at runtime.
[Read more about this here.](https://github.com/mui/material-ui/tree/master/packages/pigment-css-react#theming)
