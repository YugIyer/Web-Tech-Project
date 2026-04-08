import { Link, useNavigate } from "react-router-dom";

export default function NavbarTop() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      style={{
        background: "#1e293b",
        color: "#fff",
        padding: "1px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h3>Yug Iyer</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/home" style={linkStyle}>Home</Link>
        <Link to="/calculator" style={linkStyle}>Calculator</Link>
        <Link to="/tax" style={linkStyle}>Tax</Link>
        <Link to="/reader" style={linkStyle}>Reader</Link>
        <Link to="/student" style={linkStyle}>Students</Link>

        <button
          onClick={logout}
          style={{
            background: "#ef4444",
            color: "#fff",
            padding: "5px 10px",
            borderRadius: "6px"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const linkStyle = {
  color: "#cbd5f5",
  textDecoration: "none",
};