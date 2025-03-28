# `@rescui/use-glow-hover` Documentation

## Overview
The `@rescui/use-glow-hover` is a npm package that provides a custom React hook to add a glowing hover effect to your React components. This package is useful for enhancing the user interface and user experience of your application by adding visually appealing hover effects to your components.

## Installation
You can install the package using npm or yarn.

With npm:
```bash
npm install @rescui/use-glow-hover
```

With yarn:
```bash
yarn add @rescui/use-glow-hover
```

## Compatibility
This package is specifically designed for React and is compatible with React version 16.8 and above due to its use of hooks. 

The package does not specify any particular browser support or Node version requirements. However, as it is a React-based package, it is recommended to use a Node version that is compatible with your React version.

## API Reference
The main export of this package is the `useGlowHover` hook. 

| Function | Parameters | Type | Description | Return Type |
|----------|------------|------|-------------|-------------|
| useGlowHover | ref | React.RefObject | The reference to the React element you want to apply the glow hover effect to. | Object |

The returned object contains two properties:

| Property | Type | Description |
|----------|------|-------------|
| isHovered | Boolean | Indicates whether the element is currently being hovered over. |
| glowStyles | Object | An object containing the CSS styles for the glow effect. |

## Usage Examples

### Basic Example
```jsx
import React, { useRef } from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useRef();
  const { glowStyles } = useGlowHover(ref);

  return <div ref={ref} style={glowStyles}>Hover over me!</div>;
}
```

In this example, we import the `useGlowHover` hook and apply it to a `div` element. When you hover over the `div`, it will glow.

### Advanced Example
```jsx
import React, { useRef } from 'react';
import { useGlowHover } from '@rescui/use-glow-hover';

function MyComponent() {
  const ref = useRef();
  const { isHovered, glowStyles } = useGlowHover(ref);

  return (
    <div ref={ref} style={glowStyles}>
      Hover over me!
      {isHovered && <p>I'm glowing!</p>}
    </div>
  );
}
```

In this advanced example, we also use the `isHovered` property from the `useGlowHover` hook. We display a `p` element with the text "I'm glowing!" when the `div` is being hovered over.

## Additional Notes
Please note that the `useGlowHover` hook should only be used in functional components due to the nature of React hooks. Also, the hook should be called at the top level of your React function. 

As this hook applies CSS styles, it may override any existing styles on your component. It is recommended to use this hook on components that do not have any existing hover styles. 

For performance considerations, as with any other hooks, avoid putting heavy computations or side effects within the hook as it may cause unnecessary re-renders.