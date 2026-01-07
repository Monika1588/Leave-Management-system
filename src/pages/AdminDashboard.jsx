import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LeaveCard from "../components/LeaveCard";
import { getLeaves, saveLeaves } from "../utils/storage";

export default function AdminDashboard() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setLeaves(getLeaves());
  }, []);

  const handleAction = (id, status) => {
    const allLeaves = getLeaves();
    const updated = allLeaves.map(l => l.id === id ? { ...l, status } : l);
    saveLeaves(updated);
    setLeaves(updated);
  };

  return (
    <div>
      <Navbar role="Admin" />
      <div>
        <h2>Pending Leave Requests</h2>
        {leaves.filter(l => l.status === "Pending").length === 0 ? <p>No pending leaves.</p> :
          leaves.filter(l => l.status === "Pending").map(l =>
            <LeaveCard key={l.id} leave={l} onAction={handleAction} isAdmin={true} />
          )}

        <h2>All Leave Requests</h2>
        {leaves.length === 0 ? <p>No leaves yet.</p> :
          leaves.map(l => <LeaveCard key={l.id} leave={l} />)}
      </div>
    </div>
  );
}
