import React from "react";
import "../assets/css/CardStyles.css";
function NurseCard({ nurse }) {
  return (
    <div className="card nurse-card">
      <div className="card-header">
        <h5>Nurse ID: {nurse.nurseId}</h5>
      </div>
      <div className="card-body">
        <p><strong>Name:</strong> {nurse.nurseName}</p>
        <p><strong>Position:</strong> {nurse.positionName}</p>
      </div>
    </div>
  );
}

export default NurseCard;
