import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  // const [isRunning, setIsRunning] = useState(false);
  // const [elapsedTime, setElapsedTime] = useState(0);

  // useEffect(() => {
  //   let interval;

  //   if (isRunning) {
  //     interval = setInterval(() => {
  //       setElapsedTime(prevTime => prevTime + 1);
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }

  //   return () => clearInterval(interval);
  // }, [isRunning]);

  // const startStop = () => {
  //   setIsRunning(!isRunning);
  // };

  // const reset = () => {
  //   setIsRunning(false);
  //   setElapsedTime(0);
  // };

  // const formatTime = (timeInSeconds) => {
  //   const minutes = Math.floor(timeInSeconds / 60);
  //   const seconds = timeInSeconds % 60;
  //   return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  // };

  const [millisec, setMillisec] = useState(0);
  let milliseond = 0;
  let second = 0;
  let minute = 0;
  let hours = 0;
  let interval;

  const start = () => {
    interval = setInterval(() => {
      milliseond++

    })
  }
  start()
  return (
    <div>
      <p id='millisecond'>{milliseond}</p>
      {/* <h1>Stopwatch</h1>
      <p>{formatTime(elapsedTime)}</p>
      <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset}>Reset</button> */}
    </div>
  );
};

export default Stopwatch;
