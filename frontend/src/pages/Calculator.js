import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","+","=",
  ];

  const handleClick = (val) => {
    if (val === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + val);
    }
  };

  const clear = () => setInput("");
  const del = () => setInput(input.slice(0, -1));

  return (
    <div >
      <div className="card" style={{ width: "300px" }}>
        <h2>Calculator</h2>

        <input value={input} readOnly className="input-field" />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px"
        }}>
          {buttons.map((btn) => (
            <button key={btn} onClick={() => handleClick(btn)}>
              {btn}
            </button>
          ))}

          {/* EXTRA BUTTONS */}
          <button onClick={clear} style={{ background: "#ef4444", color: "#fff" }}>
            C
          </button>

          <button onClick={del} style={{ background: "#f59e0b", color: "#fff" }}>
            DEL
          </button>
        </div>
      </div>
    </div>
  );
}