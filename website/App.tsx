import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import GitHubCorners from '@uiw/react-github-corners';
import { Npm, Github } from '@uiw/react-shields';
import logo from './logo.svg';
import MacKeyboard from '../';
import MDStr from '../README.md';
import './App.css';

export default () => {
  return (
    <div className="App">
      <GitHubCorners zIndex={9999} fixed target="__blank" href="https://github.com/uiwjs/react-mac-keyboard" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://github.com/uiwjs/react-mac-keyboard" target="_blank" rel="noopener noreferrer">
          React Mac Keyboard
        </a>
        <p>
          Macbook computer keyboard style for react component.
        </p>
      </header>
      <MacKeyboard />
      <MarkdownPreview className="App-markdown" source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')} />
      <div className="App-footer">
        <Github user="uiwjs" repo="react-mac-keyboard">
          <Github.Social type="forks" href="https://github.com/uiwjs/react-mac-keyboard" />
          <Github.Social type="stars" href="https://github.com/uiwjs/react-mac-keyboard/stargazers" />
          <Github.Social type="watchers" href="https://github.com/uiwjs/react-mac-keyboard/watchers" />
        </Github>
        <Npm.Version scope="@uiw" packageName="react-shields" href="https://www.npmjs.com/package/@uiw/react-mac-keyboard" />
      </div>
    </div>
  );
}
