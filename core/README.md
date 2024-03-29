<!--rehype:ignore:start-->
<h1 align="center">React Mac Keyboard</h1>
<p align="center">
  <a href="https://uiwjs.github.io/react-mac-keyboard">
    <img alt="react-mac-keyboard" src="https://user-images.githubusercontent.com/1680273/80699566-c2aad500-8b0e-11ea-8d37-7e5537949d73.png">
  </a>
</p>

<!--rehype:ignore:end-->

<!--dividing-->
[![CI](https://github.com/uiwjs/react-mac-keyboard/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-mac-keyboard/actions/workflows/ci.yml)
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
npm run install
npm run build

npm run start
```

Builds the app for production to the build folder.

```bash
npm run build
npm run doc
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-mac-keyboard/graphs/contributors">
  <img src="https://uiwjs.github.io/react-mac-keyboard/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.