import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import data from '@uiw/react-mac-keyboard/README.md';
import App from './App';

const Github = MarkdownPreviewExample.Github;
const Example = MarkdownPreviewExample.Example;

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    description="Macbook computer keyboard style for react component."
    title={<a href="https://github.com/uiwjs/react-mac-keyboard">React Mac Keyboard</a>}
    version={`v${VERSION}`}
  >
    <Github href="https://github.com/uiwjs/react-mac-keyboard" />
    <Example>
      <App />
    </Example>
  </MarkdownPreviewExample>,
);
