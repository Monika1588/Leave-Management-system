import { useState, useEffect } from "react";
import "./LeaveForm.css";

export default function LeaveForm({ onSubmit }) {
  const [rollNo, setRollNo] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");

  const [leaveType, setLeaveType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [leaveDays, setLeaveDays] = useState(0);
  const [dayType, setDayType] = useState("Full Day");
  const [reason, setReason] = useState("");

  const [teacher, setTeacher] = useState("");
  const [requiresHOD, setRequiresHOD] = useState(false);

  const [document, setDocument] = useState(null);
  const [contact, setContact] = useState("");

  useEffect(() => {
    if (fromDate && toDate) {
      const diff =
        (new Date(toDate) - new Date(fromDate)) /
          (1000 * 60 * 60 * 24) +
        1;
      setLeaveDays(diff > 0 ? diff : 0);
      setRequiresHOD(diff > 3);
    }
  }, [fromDate, toDate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!rollNo || !course || !year || !section || !leaveType || !fromDate || !toDate || !reason) {
      alert("Please fill all required fields");
      return;
    }

    onSubmit({
      rollNo,
      course,
      year,
      section,
      leaveType,
      fromDate,
      toDate,
      leaveDays,
      dayType,
      reason,
      teacher,
      requiresHOD,
      documentName: document ? document.name : "Not Uploaded",
      contact,
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for Leave</h2>

      <input placeholder="Roll No" onChange={e => setRollNo(e.target.value)} />
      <input placeholder="Course" onChange={e => setCourse(e.target.value)} />
      <input placeholder="Year / Sem" onChange={e => setYear(e.target.value)} />
      <input placeholder="Section" onChange={e => setSection(e.target.value)} />

      <select onChange={e => setLeaveType(e.target.value)}>
        <option value="">Leave Category</option>
        <option>Medical</option>
        <option>Personal</option>
        <option>Academic</option>
        <option>Emergency</option>
      </select>

      <select onChange={e => setDayType(e.target.value)}>
        <option>Full Day</option>
        <option>Half Day</option>
      </select>

      <input type="date" onChange={e => setFromDate(e.target.value)} />
      <input type="date" onChange={e => setToDate(e.target.value)} />

      <p>
        Total Days: <b>{leaveDays}</b>
        {requiresHOD && " (HOD Approval Required)"}
      </p>

      <textarea placeholder="Reason" onChange={e => setReason(e.target.value)} />

      <input placeholder="Teacher Name" onChange={e => setTeacher(e.target.value)} />
      <input type="file" onChange={e => setDocument(e.target.files[0])} />
      <input placeholder="Contact Number" onChange={e => setContact(e.target.value)} />

      <button type="submit">Submit Leave</button>
    </form>
  );
}
