---
author: Harald Binkle
pubDatetime: 2023-22-16T45:22:00Z
title: readability of react useEffect hook usage
postSlug: first-post
featured: false
draft: false
tags:
  - react
  - custom hooks
  - useEffect
  - harrybin/react-common
  - componentDidMount
  - componentDidUpdate
  - componentWillUnmount
description: Hot to improve the readability of useEffect usages in react components
---

## React<img alt="React-icon" src="../../../public/assets/React-icon.svg" style="all: unset;height: 20px"> with hooks is great

Since Facebook introduced hooks for react in 2019 and this way enabled pure functional React component development, building React Web-Apps feels much better than before.
You don't longer need to bind class methods/functions to access members in the own class.
But, yes, you now follow functional programming paradigms instead of object orientated.
Is that really that different when thinking of components instead of classes? - Tell me your opinion.

## lifecycle of react component

But since the cool `useEffect` hook, there are no clear lifecycle methods any more, or are they?
`useEffect` covers all three mainly used lifecycle methods and they can be implemented separately within a single functional component like:

```typescript
function MyComponent()=>{
  [...]
  // componentDidMount() equivalent
  useEffect(() => {
    //code here
  }, []); // the empty dependency array causes first time rendering execution only

  // componentDidUpdate() equivalent
  useEffect(() => {
    //code here
  }, [someStateVariable, anotherOne]);

  // componentWillUnmount() equivalent
  useEffect(() => {
    return () => {
      //code here
    };
  }, []);

  return <>[...]</>
}
```

When looking at this code, is it really clear?</br>
No, not for me at least. So you should consider creating you own custom hooks wrapping at least two of the method.

## better readability

So what about having that component like this:

```typescript
function MyComponent()=>{
  [...]
  useDidMount(() => {
    //code here
  });

  useEffect(() => {
    //code here
  }, [someStateVariable, anotherOne]);

  useWillUnmount(() => {
      //code here
  });

  return <>[...]</>
}
```

This is much more readable. You don't need to have a look at the dependency array to determine if a `useEffect` method is only executed once (on did mount) and you no longer call the same hook up to three times in a different way.

If you like this you can either achieve it by creating your own custo hooks, or consider using them from my npm package [@harrybin/react-common](https://www.npmjs.com/package/@harrybin/react-common):

- [useDidMount](https://harrybin.github.io/react-common/typedoc/functions/utils.useDidMount.html)
- [useWillUnmount](https://harrybin.github.io/react-common/typedoc/functions/utils.useWillUnmount.html)
