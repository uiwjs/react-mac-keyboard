React Mac Keyboard
---
<!--dividing-->
[![](https://img.shields.io/github/issues/uiwjs/react-mac-keyboard.svg)](https://github.com/uiwjs/react-mac-keyboard/issues)
[![](https://img.shields.io/github/forks/uiwjs/react-mac-keyboard.svg)](https://github.com/uiwjs/react-mac-keyboard/network)
[![](https://img.shields.io/github/stars/uiwjs/react-mac-keyboard.svg)](https://github.com/uiwjs/react-mac-keyboard/stargazers)
[![](https://img.shields.io/github/release/uiwjs/react-mac-keyboard)](https://github.com/uiwjs/react-mac-keyboard/releases)
[![](https://img.shields.io/npm/v/@uiw/react-mac-keyboard.svg)](https://www.npmjs.com/package/@uiw/react-mac-keyboard)

Macbook computer keyboard style for react component.

## Quick Start

```js
import MarkdownPreview from '@uiw/react-mac-keyboard';

function Demo() {
  return (
    <MacKeyboard />
  );
}
```

## Options Props

```typescript
interface MacKeyBoardProps {
  prefixCls?: string;
  className?: string;
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

production

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
