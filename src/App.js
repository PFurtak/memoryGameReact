import React from 'react';
import './App.css';
import './MemoryCard.css'
import MemoryCard from "./components/MemoryCard";

const generateDeck = () => {
  const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`]
  let deck = []
  
  for (let i = 0; i < 16; i++){
    deck.push({
      isFlipped: false, 
      symbol: symbols[i % 8]
    });
}
return shuffle(deck)
}

const shuffle = () => {
  let j = '';
  let temp = '';
  for (let i = deck.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}


function App() {
  constructor() {
    super();
    this.state = {
      deck: [],
      pickedCards: []
    };
  }
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
