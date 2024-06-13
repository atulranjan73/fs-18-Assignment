import ProgressBar from './ProgressBar';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 100);
  }, []);

  return (
    <div className="App">
      <h1>Progress Bar Example</h1>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default App;
