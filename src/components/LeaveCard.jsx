export default function LeaveCard({ leave, onAction, isAdmin }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 15 }}>
      <h3>Leave Details</h3>

      <p><b>Roll No:</b> {leave.rollNo}</p>
      <p><b>Course:</b> {leave.course}</p>
      <p><b>Year / Sem:</b> {leave.year}</p>
      <p><b>Section:</b> {leave.section}</p>

      <hr />

      <p><b>Leave Type:</b> {leave.leaveType}</p>
      <p><b>Day Type:</b> {leave.dayType}</p>
      <p><b>From:</b> {leave.fromDate}</p>
      <p><b>To:</b> {leave.toDate}</p>
      <p><b>Total Days:</b> {leave.leaveDays}</p>

      {leave.requiresHOD && (
        <p style={{ color: "red" }}>
          <b>HOD Approval Required</b>
        </p>
      )}

      <hr />

      <p><b>Reason:</b> {leave.reason}</p>
      <p><b>Teacher:</b> {leave.teacher || "Not Mentioned"}</p>
      <p><b>Document:</b> {leave.documentName}</p>
      <p><b>Contact:</b> {leave.contact}</p>

      <hr />

      <p><b>Status:</b> {leave.status}</p>

      {isAdmin && leave.status === "Pending" && (
        <div style={{ marginTop: 10 }}>
          <button onClick={() => onAction(leave.id, "Approved")}>
            Approve
          </button>
          <button
            onClick={() => onAction(leave.id, "Rejected")}
            style={{ marginLeft: 10 }}
          >
            Reject
          </button>
        </div>
      )}
    </div>
  );
}
