import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LeaveForm from "../components/LeaveForm";
import LeaveCard from "../components/LeaveCard";
import { getLeaves, saveLeaves } from "../utils/storage";

export default function StudentDashboard() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    setLeaves(getLeaves());
  }, []);

  const handleSubmit = (data) => {
    const updated = [
      ...leaves,
      {
        id: Date.now(),
        ...data,
        status: "Pending",
      },
    ];

    saveLeaves(updated);
    setLeaves(updated);
  };

  return (
    <>
      <Navbar role="Student" />

      <LeaveForm onSubmit={handleSubmit} />

      {leaves.length > 0 && (
        <div >
          <h2 >   Leave History</h2>

          {leaves.map((leave) => (
            <LeaveCard key={leave.id} leave={leave} />
          ))}
        </div>
      )}
    </>
  );
}
