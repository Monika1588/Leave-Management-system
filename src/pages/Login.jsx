import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>Leave Management System</h1>

      <select onChange={e => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>

      <br /><br />
      <button onClick={() => role && navigate(`/${role}`)}>Login</button>
    </div>
  );
}
