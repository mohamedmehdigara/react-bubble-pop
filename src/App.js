import React, { useState, useEffect } from 'react';
import './App.css';
import Score from './Score';
import Timer from './Timer';
import GameOver from './GameOver';

const colors = ['red', 'green', 'blue', 'yellow'];

function App() {
  const [bubbles, setBubbles] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    generateBubbles();
  }, []);

  useEffect(() => {
    if (gameOver) {
      // Game over logic (e.g., show high score, save data, etc.)
    }
  }, [gameOver]);

  const generateBubbles = () => {
    const newBubbles = [];
    for (let i = 0; i < 25; i++) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      newBubbles.push({ id: i, color: randomColor });
    }
    setBubbles(newBubbles);
  };

  const handleClick = (bubbleId, bubbleColor) => {
    const updatedBubbles = bubbles.filter((bubble) => bubble.id !== bubbleId);
    setBubbles(updatedBubbles);
    setScore((prevScore) => prevScore + 1);

    // Optional: Add logic for matching colors and additional scoring
  };

  const restartGame = () => {
    setScore(0);
    setTime(60);
    setGameOver(false);
    generateBubbles();
  };

  return (
    <div className="App">
      <h1>Bubble Pop</h1>
      {!gameOver && (
        <div>
          <Score score={score} />
          <Timer time={time} setTime={setTime} setGameOver={setGameOver} />
        </div>
      )}
      {!gameOver ? (
        <div className="bubble-container">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className={`bubble ${bubble.color}`}
              onClick={() => handleClick(bubble.id, bubble.color)}
            />
          ))}
        </div>
      ) : (
        <GameOver score={score} restartGame={restartGame} />
      )}
      {!gameOver && <button onClick={generateBubbles}>Reset</button>}
    </div>
  );
}

export default App;
