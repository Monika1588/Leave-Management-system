export default function Navbar({ role }) {
  return (
    <nav style={{ padding: "15px", background: "#111", color: "#fff" }}>
      <h2>College Leave Management</h2>
      <p>Role: {role}</p>
    </nav>
  );
}
