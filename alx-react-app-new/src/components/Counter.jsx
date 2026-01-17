import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter Application</h2>

      {/* Display the Current Count */}
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Current Count: {count}
      </p>

      {/* Buttons for Counter Actions */}
      <div style={{ gap: "10px", display: "flex", justifyContent: "center" }}>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
