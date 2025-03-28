# @rescui/use-glow-hover

## Overview

The `@rescui/use-glow-hover` package is a React hook that applies a glowing hover effect to any React component. This package is useful for enhancing the user interface and user experience of your web application by providing a visually appealing hover effect.

## Installation

You can install the `@rescui/use-glow-hover` package using either npm or yarn:

### npm

```bash
npm install @rescui/use-glow-hover
```

### yarn

```bash
yarn add @rescui/use-glow-hover
```

## Compatibility

This package is compatible with React and requires a React version of 16.8.0 or higher. It also requires a Node.js environment of version 10 or higher. The package supports all modern browsers.

## API Reference

The main function provided by this package is `useGlowHover`.

| Function | Parameters | Type | Description | Return Type |
|----------|------------|------|-------------|-------------|
| useGlowHover | color | string | The color of the glow when the component is hovered over. | An array containing a ref and a style object |

## Usage Examples

### Basic Example

```jsx
import React from 'react';
import useGlowHover from '@rescui/use-glow-hover';

function MyComponent() {
  const [ref, style] = useGlowHover('blue');

  return <div ref={ref} style={style}>Hover over me!</div>;
}
```

In this basic example, the `useGlowHover` hook is used to apply a blue glow hover effect to a `div` element.

### Advanced Example

```jsx
import React from 'react';
import useGlowHover from '@rescui/use-glow-hover';

function MyComponent() {
  const [ref, style] = useGlowHover('red');

  return (
    <div ref={ref} style={{...style, fontSize: '2em'}}>
      Hover over me!
    </div>
  );
}
```

In this advanced example, the `useGlowHover` hook is used in combination with other styles. The `fontSize` property is added to the style object returned by `useGlowHover`.

## Additional Notes

- The color parameter passed to `useGlowHover` must be a valid CSS color.
- The `useGlowHover` hook returns a ref and a style object. These must be applied to the same element for the hover effect to work.
- The style object returned by `useGlowHover` can be combined with other styles, but be aware that any `boxShadow` property in your styles will be overridden by `useGlowHover`.
- For performance considerations, avoid changing the color parameter frequently as it may cause unnecessary re-renders.