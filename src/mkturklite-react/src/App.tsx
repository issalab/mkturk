import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Editor } from './features/editor/Editor';
import { Charts } from './features/charts/Charts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        {/* <Editor /> */}
      </header>
      <Charts />
      <Editor />
    </div>
  );
}

export default App;
