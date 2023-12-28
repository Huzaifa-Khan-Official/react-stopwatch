import React, { useState } from 'react';
import "./Stopwatch.css";

const Stopwatch = () => {
  let [second, setSecond] = useState(0);
  let [millisecond, setMillisecond] = useState(0);
  let [minute, setMinute] = useState(0);
  let [hour, setHour] = useState(0);
  const [intervalId, setIntervalId] = useState(null);


  const startTimer = () => {
    const startBtn = document.getElementById("startBtn");

    if (!intervalId) {
      startBtn.setAttribute("class", "active");
      const id = setInterval(() => {
        millisecond = millisecond + 1;
        setMillisecond(millisecond);
        if (millisecond >= 100) {
          second = second + 1;
          setSecond(second);

          millisecond = 0;
          setMillisecond(millisecond)
          if (second >= 60) {
            minute = minute + 1;
            setMinute(minute);

            second = 0;
            setSecond(second);
            if (minute >= 60) {
              hour = hour + 1;
              setHour(hour);

              minute = 0;
              setMinute(minute);
            }
          }
        }

      }, 10);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    const startBtn = document.getElementById("startBtn");
    startBtn.removeAttribute("class", "active");

    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    const startBtn = document.getElementById("startBtn");
    startBtn.removeAttribute("class", "active");

    stopTimer();
    setMillisecond(0);
    setSecond(0);
    setMinute(0);
    setHour(0);
  };

  return (
    <div className='contentDiv'>
      <div id='timer'>
        <p>
          <span style={hour < 10 ? { display: "block" } : { display: "none" }}>0</span>
          {hour}
        </p> :
        <p>
          <span style={minute < 10 ? { display: "block" } : { display: "none" }}>0</span>
          {minute}
        </p> :
        <p>
          <span style={second < 10 ? { display: "block" } : { display: "none" }}>0</span>
          {second}
        </p> :
        <p>
          <span style={millisecond < 10 ? { display: "block" } : { display: "none" }}>0</span>{millisecond}
        </p>
      </div>
      <div className="buttons">
        <button onClick={startTimer} disabled={!!intervalId} id='startBtn'>
          Start
        </button>
        <button onClick={stopTimer} disabled={!intervalId}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
