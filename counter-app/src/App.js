import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  let color = count > 0 ? "green" : count < 0 ? "red" : "black";

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div id="counter-app" className="container">
      <h1 id="counter-title">Counter</h1>
      <p style={{ color }} id="counter-number">
        {count}
      </p>
      <div className="button-group">
        <button onClick={decreaseCount} className="btn decrease-btn">
          DECREASE
        </button>
        <button onClick={resetCount} className="btn reset-btn">
          RESET
        </button>
        <button onClick={increaseCount} className="btn increase-btn">
          INCREASE
        </button>
      </div>
    </div>
  );
}

export default App;
