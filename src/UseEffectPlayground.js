import "./UseEffectPlayground.css";
import { useState, useEffect, use } from "react";

export default function UseEffectPlayground() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    console.log("Name changed! New name: ", name);
    if (name.length > 0) {
      console.log(`Hello, ${name}`);
    }
  }, [name]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="title">useEffect Playground</h1>
      <div className="card">
        <div className="grid">
          <div className="section blue">
            <h3>Counter (useEffect with [count])</h3>
            <p className="count">Count: {count}</p>
            <div className="btn-group">
              <button
                onClick={() => setCount(count + 1)}
                className="btn primary"
              >
                +1
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="btn primary"
              >
                -1
              </button>
              <button onClick={() => setCount(0)} className="btn secondary">
                Reset
              </button>
            </div>
            <p className="note">useEffect can be seen in the console</p>
          </div>
          <div className="section green">
            <h3>Name input (useEffect with [name])</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name..."
              className="input"
            />
            <p className="note">
              {name ? `Hello, ${name}!` : "Type something please"}
            </p>
          </div>
          <div className="section yellow">
            <h3>Window Width (useEffect with cleanup)</h3>
            <p className="info">Window Width: {windowWidth}px</p>
            <p className="note">Resize the browser window</p>
          </div>
          <div className="section red"></div>
        </div>
      </div>
    </div>
  );
}
