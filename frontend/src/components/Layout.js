import NavbarTop from "./NavbarTop";
import NavbarSide from "./NavbarSide";

export default function Layout({ children }) {
  return (
    <div>
      <NavbarTop />

      <div style={{ display: "flex" }}>
        <NavbarSide />

<div
  style={{
    flex: 1,
    padding: "30px",
    overflowY: "auto",
  }}
>
          {children}
        </div>
      </div>
    </div>
  );
}