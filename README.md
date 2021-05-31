<h3 align="center">React Mac Keyboard</h3>
<p align="center">
  <a href="https://uiwjs.github.io/react-mac-keyboard">
    <img alt="react-mac-keyboard" src="https://user-images.githubusercontent.com/1680273/80699566-c2aad500-8b0e-11ea-8d37-7e5537949d73.png">
  </a>
</p>

<!--dividing-->
[![Build & Deploy](https://github.com/uiwjs/react-mac-keyboard/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-mac-keyboard/actions)
[![issues](https://img.shields.io/github/issues/uiwjs/react-mac-keyboard.svg)](https://github.com/uiwjs/react-mac-keyboard/issues)
[![Forks](https://img.shields.io/github/forks/uiwjs/react-mac-keyboard.svg)](https://github.com/uiwjs/react-mac-keyboard/network)
[![Stars](https://img.shields.io/github/stars/uiwjs/react-mac-keyboard.svg)](https://github.com/uiwjs/react-mac-keyboard/stargazers)
[![Release](https://img.shields.io/github/release/uiwjs/react-mac-keyboard)](https://github.com/uiwjs/react-mac-keyboard/releases)
[![npm version](https://img.shields.io/npm/v/@uiw/react-mac-keyboard.svg)](https://www.npmjs.com/package/@uiw/react-mac-keyboard)

Macbook computer keyboard style for react component.

## Quick Start

```js
import { useState } from "react";
import MacKeyboard from "@uiw/react-mac-keyboard";

function Demo() {
  const [keyCode, setKeyCode] = useState([]);
  return (
    <MacKeyboard
      keyCode={keyCode}
      onMouseDown={(e, item) => {
        if (item.keycode > -1) {
          setKeyCode([item.keycode]);
        }
      }}
      onMouseUp={() =>{
        setKeyCode([]);
      }}
    />
  );
}
```

## Options Props

```typescript
type KeyCodeData = {
  keycode: number;
  name: string[];
}

interface MacKeyBoardProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  keyCode?: number[];
  onMouseDown?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: KeyCodeData) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>, item: KeyCodeData) => void;
}
```

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
npm run ts:watch
# Step 2, listen for compilation output type .d.ts file
npm run types:watch
# Step 3, development mode, listen to compile preview website instance
npm run doc:dev
```

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
