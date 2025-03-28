# @rescui/use-glow-hover Documentation

## Overview
The `@rescui/use-glow-hover` is a React Hook that allows you to add a glowing hover effect to your React components. This package is useful for enhancing user interaction and visual aesthetics of your web application.

## Installation
You can install the package using npm or yarn:

With npm:
```bash
npm install @rescui/use-glow-hover
```

With yarn:
```bash
yarn add @rescui/use-glow-hover
```

## Compatibility
This package is specifically designed for React and is compatible with React version 16.8 and above. It requires Node.js version 10 or later. The package is browser-agnostic and should work in any environment where React is supported.

## API Reference
The `useGlowHover` hook takes in three parameters:

| Function | Parameter | Type | Description |
| --- | --- | --- | --- |
| useGlowHover | ref | React.RefObject | The React ref to the element you want to apply the glow effect to. |
|  | options | object | An optional object containing configuration options for the glow effect. |
|  | options.color | string | The color of the glow effect. Default is 'white'. |
|  | options.intensity | number | The intensity of the glow effect. Default is 1. |

The `useGlowHover` hook does not return any value.

## Usage Examples

**Basic Example:**

```jsx
import React, { useRef } from 'react';
import useGlowHover from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useRef();
  useGlowHover(ref);

  return <div ref={ref}>Hover over me!</div>;
}
```

In this basic example, we're applying the glow effect to a `div` element. The glow color will be white and the intensity will be 1, which are the default values.

**Advanced Example:**

```jsx
import React, { useRef } from 'react';
import useGlowHover from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useRef();
  useGlowHover(ref, { color: 'blue', intensity: 2 });

  return <div ref={ref}>Hover over me!</div>;
}
```

In this advanced example, we're applying a blue glow effect with an intensity of 2 to a `div` element.

## Additional Notes
- The glow effect is applied using CSS filters, so it may not work in browsers that do not support CSS filters.
- The intensity of the glow effect is controlled by the `blur` CSS filter. Higher intensity values will result in a larger blur radius.
- The color of the glow effect is controlled by the `drop-shadow` CSS filter. You can use any CSS color value.