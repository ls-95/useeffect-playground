import "./UseEffectPlayground.css";
import { useState, useEffect } from "react";

export default function UseEffectPlayground() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">useEffect Playground</h1>
      <div className="card">
        <h2 className="subtitle"></h2>
        <div className="grid">
          <div className="section blue">
            <h3>Counter (useEffect with [count])</h3>
            <p>Count: {count}</p>
            <div className="btn-group">
              <button onClick={() => setCount(count + 1)}>+1</button>
              <button onClick={() => setCount(count - 1)}>-1</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
