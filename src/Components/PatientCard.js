import React from "react";
import "../assets/css/CardStyles.css";
function PatientCard({ patient }) {
  return (
    <div className="card patient-card">
      <div className="card-header">
        <h5>Patient ID: {patient.patientId}</h5>
      </div>
      <div className="card-body">
        <p><strong>Name:</strong> {patient.patientName}</p>
        <p><strong>PhoneNo:</strong> {patient.patientPhoneNo}</p>
        <p><strong>Address:</strong> {patient.patientAddress}</p>
        <p><strong>Insurance ID:</strong> {patient.insuranceId}</p>
      </div>
    </div>
  );
}

export default PatientCard;
