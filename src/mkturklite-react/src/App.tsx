import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Firebase } from './features/firebase/Firebase';
import { MkFinder } from './features/mkfinder/MkFinder';
import { Editor } from './features/editor/Editor';
import './App.css';
import auth from './firebaseApp';
import { GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

function App() {
  Firebase();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MkFinder />
        <Counter />
        {/* <Editor /> */}
      </header>
      <Editor />
    </div>
  );
}

export default App;
