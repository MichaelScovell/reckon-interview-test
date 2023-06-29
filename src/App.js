// Defining imports for the counting application
import { React, useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // Defining variables to store state for the counter
  const [counter, setCounter] = useState(0);
  // Defined a useRef for referencing the counter within the setInterval function
  const counterRef = useRef(counter);
  counterRef.current = counter;

  // Defining a useEffect hook to invoke setInterval at 2 seconds and update the counter
  useEffect(() => {
    const timer = setInterval(() => {
      // Increment the counter using the reference
      setCounter(counterRef.current + 1);
      return () => clearInterval(timer);
    }, 2000);
  }, []);

  // Define a function to handle manual incrementing
  function handleIncrement() {
    // Increase the counter
    setCounter(counterRef.current + 1);
  }

  // UI for the counting application 
  return (
    <div className="App">
      <h1>Counter: {counterRef.current}</h1>
      {/* Increment Button */}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
