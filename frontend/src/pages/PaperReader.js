import { useState } from "react";

const pages = [
  "Page 1: Introduction to Web Tech",
  "Page 2: HTML Basics",
  "Page 3: CSS Styling",
  "Page 4: JavaScript",
  "Page 5: React Overview",
  "Page 6: Mongo DB",
  "Page 7: Node JS",
  "Page 8: Express JS"
];

export default function PaperReader() {
  const [mode, setMode] = useState("single");
  const [index, setIndex] = useState(0);

  return (
    <div className="card">
      <h2>Paper Reader</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setMode("single")} style={{marginRight:"5px", background:"#3b82f6", color:"#ffffff"}}>Single</button>
        <button onClick={() => setMode("double")} style={{margin:"5px", background:"#3b82f6", color:"#ffffff"}}>Double</button>
        <button onClick={() => setMode("grid")} style={{margin:"5px", background:"#3b82f6", color:"#ffffff"}}>Grid</button>
      </div>

      {mode === "single" && (
        <div className="card" style={{height:"20rem",width:"auto"}}>{pages[index]}</div>
      )}

      {mode === "double" && (
        <div style={{ display: "flex", gap: "10px" }}>
          <div className="card" style={{height:"20rem",width:"50%"}}>{pages[index]}</div>
          <div className="card" style={{height:"20rem",width:"50%"}}>{pages[index + 1]}</div>
        </div>
      )}

      {mode === "grid" && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}>
          {pages.map((p, i) => (
            <div key={i} className="card" style={{height:"10rem",width:"80%"}}>{p}</div>
          ))}
        </div>
      )}

      <div style={{ marginTop: "15px" }}>
        <button onClick={() => setIndex(i => Math.max(i - 1, 0))} style={{marginRight:"5px", background:"#3b82f6", color:"#ffffff"}}>
          Prev
        </button>
        <button onClick={() => setIndex(i => Math.min(i + 1, pages.length - 1))} style={{margin:"5px", background:"#3b82f6", color:"#ffffff"}}>
          Next
        </button>
      </div>
    </div>
  );
}