import React, { useEffect, useState } from "react";
import ApiService from "../Service/ApiService";  // Import ApiService

const PatientDetails = () => {
  const [patients, setPatients] = useState([]);  // State to hold the list of patients
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiService = new ApiService();

  // Fetch all patients' details from the API
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await apiService.getAllPatients();  // Assuming getAllPatients fetches all patients
        setPatients(response.data);  // Store all patients in state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching patient details:", error);
        setError("Error fetching patient details.");
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);  // Empty dependency array means this runs once on component mount

  if (loading) {
    return <div>Loading patient details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="patient-details-container">
      <h2>Patients Details</h2>

      {patients.length === 0 ? (
        <div>No patients found.</div>
      ) : (
        <table className="patients-table">
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Patient Address</th>
              <th>Phone Number</th>
              <th>Insurance ID</th>
              <th>SSN</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.patientId}>
                <td>{patient.patientName}</td>
                <td>{patient.patientAddress}</td>
                <td>{patient.patientPhoneNo}</td>
                <td>{patient.insuranceId}</td>
                <td>{patient.ssn}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <style jsx>{`
        .patient-details-container {
          width: 80%;
          margin: 50px auto;
          padding: 20px;
          background-color: #f7f7f7;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
        }

        .patients-table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
        }

        .patients-table th,
        .patients-table td {
          padding: 12px;
          text-align: left;
          border: 1px solid #ddd;
        }

        .patients-table th {
          background-color: #4CAF50;
          color: white;
        }

        .patients-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        .patients-table tr:hover {
          background-color: #ddd;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .patient-details-container {
            width: 95%;
          }

          .patients-table {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default PatientDetails;
