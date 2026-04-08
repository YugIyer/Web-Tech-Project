import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="Login">
      <div className="card" style={{ width:"400px",textAlign: "center" }}>
        <h2>Login</h2>

        <input
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <button
          onClick={login}
          style={{ background: "#3b82f6", color: "#fff", width: "auto" }}
        >
          Login
        </button>
        <p style={{ marginTop: "10px" }}>
            Don’t have an account?{" "}
            <span
                style={{ color: "#3b82f6", cursor: "pointer" }}
                onClick={() => navigate("/register")}
            >
            Register
             </span>
        </p>
      </div>
    </div>
  );
}