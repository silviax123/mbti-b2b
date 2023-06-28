import React from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>M16 Personality Test</p>
        <ProgressBar value={40}/>
      </header>
    </div>
  );
}

export default App;
