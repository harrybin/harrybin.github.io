---
author: Harald Binkle
pubDatetime: 2024-05-08T07:40:00Z
title: fit text vertically into a box when using Typography of MUI
postSlug: verticaltextwithmui
featured: false
draft: false
tags:
  - react
  - CSS
  - vertical-lr
  - rotate(180deg)
  - Typography
  - MUI
description: How to make text vertically fit into a box when using Typography of MUI
---

## Getting a MUI <img alt="MUI-icon" src="../../../public/assets/mui-logo.svg" style="all: unset;height: 20px"> `Typography` vertically fit into a box in your React <img alt="React-icon" src="../../../public/assets/React-icon.svg" style="all: unset;height: 20px"> compoent

When trying to fit text vertically into a box, you may have recognized that the `Typography` component of MUI does not provide a prop for that.
So how can you achieve this?
Searching the web will find several solutions, but most of them are not working with the `Typography` component of MUI.
So let me show you a simple solution that works with the `Typography` component of MUI:

```typescript
import { Grid, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

const VerticalTypography = ({ className, children }: { className?: string; children: ReactNode }) => {
    return (
        <Grid container className={className} maxWidth="2rem" justifyContent="center" alignItems="center">
            <Typography variant="body2" sx={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }} noWrap>
                {children}
            </Typography>
        </Grid>
    );
};

export default React.memo(VerticalTypography);
```

## What is done here...

The box is a `Grid` component with a maxwidth of `2rem` to make the text fit and have some kinf of spacing around. the `Grid` component as a flexbox also provides the `justifyContent` and `alignItems` props to center the text vertically and horizontally. I also added a `className` prop to make the `VerticalTypography` component reusable with custom styles.

Finally the `Typography` component is used with `noWrap` to prevent the text from wrapping. The magic for getting the text vertically is done by the `writingMode` and `transform` props of the `sx` prop of the `Typography` component.
I also chose `variant="body2"` for the `Typography` component, but you can choose any other variant you like. I my case the font I'm using show less clitches with `body2` than with `body1`.

Passing the `children` prop to the `Typography` component makes the `VerticalTypography` component reusable for any text you want to fit vertically into a box. If you like to have more strict typing, you can also pass a `string` instead of `ReactNode` to the `children` prop.
