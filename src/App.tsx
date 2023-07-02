import React from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';
import AnimalWithContainer from './components/AnimalWithContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>M16 Personality Test</p>

      </header>
      <body className='App-body'>
        <ProgressBar value={40}/>
        <AnimalWithContainer>
          <p> this is the content inside the container</p>
        </AnimalWithContainer>
      </body>
      <footer>
        <p>©️ M16人格研究所.</p>
      </footer>
    </div>
  );
}

export default App;
