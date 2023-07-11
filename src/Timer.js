import React, { useState, useEffect } from 'react';

const Timer = ({ time, setTime, setGameOver }) => {
  useEffect(() => {
    if (time === 0) {
      setGameOver(true);
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, setTime, setGameOver]);

  return (
    <div className="timer">
      <h2>Time: {time}</h2>
    </div>
  );
}

export default Timer;
