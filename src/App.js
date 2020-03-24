import React from 'react';
import './App.css';
import './MemoryCard.css'
import MemoryCard from "./components/MemoryCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Memory Game</h2>
        <h4>Match Cards To Win</h4>
      </header>
      <div class="board">
      <div className="row">
        <MemoryCard  />
        <MemoryCard  />
        <MemoryCard  />
        <MemoryCard  />
      </div>
      <div className="row">
        <MemoryCard  />
        <MemoryCard  />
        <MemoryCard  />
        <MemoryCard  />
      </div>
      <div className="row">
        <MemoryCard  />
        <MemoryCard  />
        <MemoryCard  />
        <MemoryCard  />
      </div>
      <div className="row">
        <MemoryCard  />
        <MemoryCard  />
        <MemoryCard  />
        <MemoryCard  />
      </div>
      </div>
    </div>
  );
}

export default App;
