import React, { useState, useEffect } from 'react';
import './App.css';

const colors = ['red', 'green', 'blue', 'yellow'];

function App() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Generate initial bubbles
    generateBubbles();
  }, []);

  const generateBubbles = () => {
    const newBubbles = [];
    for (let i = 0; i < 25; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      newBubbles.push({ id: i, color: randomColor });
    }
    setBubbles(newBubbles);
  };

  const handleClick = (bubbleId) => {
    const updatedBubbles = bubbles.filter((bubble) => bubble.id !== bubbleId);
    setBubbles(updatedBubbles);
  };

  return (
    <div className="App">
      <h1>Bubble Pop</h1>
      <div className="bubble-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`bubble ${bubble.color}`}
            onClick={() => handleClick(bubble.id)}
          />
        ))}
      </div>
      <button onClick={generateBubbles}>Reset</button>
    </div>
  );
}

export default App;
