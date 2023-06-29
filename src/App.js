// Defining imports for the counting application
import './App.css';
import { React, useState, useEffect } from 'react';

// Defining a function to house the logic for the application
function App() {
  // Defining variables to store state for the counter
  const [counter, setCounter] = useState(0);

  // Define a function to handle incrementing
  function handleIncrement() {
    // Increase the counter
    setCounter(counter + 1);
  }


  // UI for the counting application 
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      {/* Increment Button */}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
