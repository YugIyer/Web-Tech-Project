import { Link } from "react-router-dom";

export default function NavbarSide() {
  return (
    <div style={{
      width: "180px",
      background: "#0f172a",
      color: "#fff",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {[
          { name: "Home", path: "/home" },
          { name: "Calculator", path: "/calculator" },
          { name: "Tax Calculator", path: "/tax" },
          { name: "Paper Reader", path: "/reader" },
          { name: "Student Form", path: "/student" }
        ].map((item) => (
          <li key={item.path} style={{ margin: "15px 0" }}>
            <Link to={item.path} style={{ color: "#cbd5f5", textDecoration: "none" }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}