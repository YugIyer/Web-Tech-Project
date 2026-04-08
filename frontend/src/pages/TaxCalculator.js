import { useState } from "react";

export default function TaxCalculator() {
  const [income, setIncome] = useState("");
  const [tax, setTax] = useState(null);

  const calculateTax = () => {
    const inc = parseFloat(income);

    console.log("Income entered:", inc); 

    if (isNaN(inc) || inc <= 0) {
      alert("Please enter a valid income");
      return;
    }

    let t = 0;

    if (inc <= 300000) {
      t = 0;
    } else if (inc <= 600000) {
      t = (inc - 300000) * 0.05;
    } else if (inc <= 900000) {
      t = 15000 + (inc - 600000) * 0.1;
    } else if (inc <= 1200000) {
      t = 45000 + (inc - 900000) * 0.15;
    } else if (inc <= 1500000) {
      t = 90000 + (inc - 1200000) * 0.2;
    } else {
      t = 150000 + (inc - 1500000) * 0.3;
    }

    console.log("Calculated tax:", t); // DEBUG

    setTax(t);
  };

  return (
    <div >
      <div className="card" style={{ width: "400px", textAlign: "center" }}>
        <h2>Tax Calculator (FY 2025-26)</h2>

        <input
          className="input-field"
          type="number"
          placeholder="Enter Annual Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />

        <button
          onClick={calculateTax}
          style={{ background: "#3b82f6", color: "#fff", width: "90%" }}
        >
          Calculate
        </button>

        {tax !== null && (
          <h3 style={{ marginTop: "15px" }}>
            Tax: ₹ {tax.toLocaleString()}
          </h3>
        )}
      </div>
    </div>
  );
}