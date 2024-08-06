import React, { useState, useEffect } from 'react';
import './Timer.css'; // Importando o arquivo de estilo CSS

const App = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  const startTimer = (duration) => {
    setTimeLeft(duration);
  };

  const getBackgroundColor = () => {
    return timeLeft > 0 ? 'green' : 'black';
  };

  return (
    <div className="timer-container" style={{ backgroundColor: getBackgroundColor() }}>
      {timeLeft > 0 && <h1>Tempo restante: {timeLeft} segundo(s)</h1>}
      <div>
      <button onClick={() => startTimer(30)}>Enxágue</button>
      <button onClick={() => startTimer(120)}>Lavagem</button>
      </div>
    </div>
  );
};

export default App;
