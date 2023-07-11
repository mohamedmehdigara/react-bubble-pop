import React from 'react';

const GameOver = ({ score, restartGame }) => {
  return (
    <div className="game-over">
      <h1>Game Over!</h1>
      <h2>Final Score: {score}</h2>
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
}

export default GameOver;
