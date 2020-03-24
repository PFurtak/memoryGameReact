import React from 'react';
import './App.css';
import MemoryCard from "./components/MemoryCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h2>Memory Game</h2>
        <h4>Match Cards To Win</h4>
      </header>
      <MemoryCard />
    </div>
  );
}

export default App;
