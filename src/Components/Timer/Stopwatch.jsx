import React, { useState } from 'react';

const Stopwatch = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  
  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setSecond((prevSecond) => prevSecond + 1);
      }, 1000);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    stopTimer();
    setSecond(0);
    setMinute(0);
    setHour(0);
  };

  return (
    <div>
      <p id='timer'>{hour} : {minute} : {second}</p>
      <button onClick={startTimer} disabled={!!intervalId}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!intervalId}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
