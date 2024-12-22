import React from "react";
import "../assets/css/CardStyles.css";
function PhysicianCard({ physician }) {
  return (
    <div className="card physician-card">
      <div className="card-header">
        <h5>Physician ID: {physician.physicianId}</h5>
      </div>
      <div className="card-body">
        <p><strong>Name:</strong> {physician.name}</p>
        <p><strong>Specialty:</strong> {physician.position}</p>
        <p><strong>PhoneNo:</strong> {physician.ssn}</p>
      </div>
    </div>
  );
}

export default PhysicianCard;
