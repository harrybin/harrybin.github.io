---
author: Harald Binkle
pubDatetime: 2024-03-13T18:55:00Z
title: unify JSX code by avoiding javascript/typescript if statements
postSlug: ifcomponent
featured: false
draft: false
tags:
  - react
  - harrybin/react-common
  - JSX
  - if   
  - memoization
description: How to unify JSX code by avoiding javascript if statements breaking XML syntax
---

## Avoid JSX code being interrupted by javascript/typescript syntax in React <img alt="React-icon" src="../../../public/assets/React-icon.svg" style="all: unset;height: 20px">

When writing JSX code in React you may have recognized that you can't use javascript/typescript if statements directly in your JSX code.
You need to use javascript syntax like the ternary operator instead.
This is because JSX is a XML-like syntax and not a javascript syntax:

```typescript
function MyComponent({condition})=>{
  return (
    <div>
      {condition ? <p>condition is true</p> : <p>condition is false</p>}
    </div>
  )
}
```
☝️ As you can see this breakes the XML syntax and makes the code less readable.

## What if there was a way to use if statements directly in JSX code?

There is some way to use if statements in JSX code without breaking the XML syntax:
Simply use the `If` component from my npm package [@harrybin/react-common](https://www.npmjs.com/package/@harrybin/react-common) / [If](https://harrybin.de/react-common/typedoc/classes/.components.If.html).

For using the `If` component you simply
> - install and import it from [@harrybin/react-common](https://www.npmjs.com/package/@harrybin/react-common)

Then use it in your JSX code:

```typescript
import {If} from "@harrybin/react-common";

function MyComponent({condition})=>{
  return (
    <div>
      <If condition={condition} else={<p>condition is false</p>}>
        <p>condition is true</p>
      </If>
    </div>
  )
}
```
*Of course the else case is optional.*

This makes the code more readable and unifies the JSX code.

But the `If` component is not only a simple if statement replacement.
It also provides a memoization feature for the condition and the else case by using the `useMemo` hook inside.
This means that the childcomponent and the else component are only rendered when the condition really changes.
This is a significant performance improvement when complex components are used. 

But you still need to be aware that the condition calculation is done on every render and may still be needed to be memoized by `useCallback`.