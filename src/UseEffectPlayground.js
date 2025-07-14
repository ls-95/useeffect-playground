import "./UseEffectPlayground.css";
import { useState, useEffect, use } from "react";

export default function UseEffectPlayground() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("This runs on every render, Current count: ", count);
  });

  useEffect(() => {
    console.log(
      "This runs ONCE when the component first loads because of the []."
    );
    console.log("This is a good for initial data fetching.");
  }, []);

  useEffect(() => {
    console.log("The count has changed. New value: ", count);
    if (count === 0) {
      document.title = "useEffect Playground";
    } else {
      document.title = `Count: ${count}`;
    }
  }, [count]);

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
            <p>useEffect can be seen in the console</p>
          </div>
        </div>
      </div>
    </div>
  );
}
