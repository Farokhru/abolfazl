import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  // const [count, setCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
