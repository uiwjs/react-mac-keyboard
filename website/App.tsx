import React, { useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { Npm, Github } from '@uiw/react-shields';
import '@uiw/github-corners';
import '@wcj/dark-mode';
import logo from './logo.svg';
import MacKeyboard from '../';
import MDStr from '../README.md';
import './App.css';

const APP =  () => {
  const [keyCode, setKeyCode] = useState<number[]>([]);
  return (
    <div className="App">
      <dark-mode light="Light" dark="Light" style={{ position: 'fixed', top: 8, left: 10 }}></dark-mode>
      <github-corners href="https://github.com/uiwjs/react-mac-keyboard" position="fixed" target="__blank"></github-corners>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://github.com/uiwjs/react-mac-keyboard" target="_blank" rel="noopener noreferrer">
          React Mac Keyboard
        </a>
        <p>
          Macbook computer keyboard style for react component.
        </p>
      </header>
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
      <MarkdownPreview className="App-markdown" source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')} />
      <div className="App-footer">
        <Github user="uiwjs" repo="react-mac-keyboard">
          <Github.Social type="forks" href="https://github.com/uiwjs/react-mac-keyboard" />
          <Github.Social type="stars" href="https://github.com/uiwjs/react-mac-keyboard/stargazers" />
          <Github.Social type="watchers" href="https://github.com/uiwjs/react-mac-keyboard/watchers" />
        </Github>
        <Npm.Version scope="@uiw" packageName="react-mac-keyboard" href="https://www.npmjs.com/package/@uiw/react-mac-keyboard" />
      </div>
    </div>
  );
}

export default APP;
