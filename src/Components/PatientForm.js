import React, { useState } from "react";
import ApiService from "../Service/ApiService";  // Import ApiService
import { useNavigate } from "react-router-dom";

const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    patientName: "",
    patientAddress: "",
    patientPhoneNo: "",
    insuranceId: "",
    ssn: "",
  });

  // Create an instance of ApiService
  const apiService = new ApiService();
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the addPatient method from ApiService
      const response = await apiService.addPatient(patientData);  
      console.log("Patient added:", response);
      // Optionally show a success message or reset the form
      navigate("/home/patientdetails");
    } catch (error) {
      console.error("Error adding patient:", error);
      alert('Error adding patient. Please try again.');
    }
  };

  return (
    <>
      <div className="form-container">
        <h2>Add Patient</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Patient Name:</label>
            <input
              type="text"
              name="patientName"
              value={patientData.patientName}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Patient Address:</label>
            <input
              type="text"
              name="patientAddress"
              value={patientData.patientAddress}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Patient Phone No:</label>
            <input
              type="number"
              name="patientPhoneNo"
              value={patientData.patientPhoneNo}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Insurance ID:</label>
            <input
              type="number"
              name="insuranceId"
              value={patientData.insuranceId}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>SSN:</label>
            <input
              type="number"
              name="ssn"
              value={patientData.ssn}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>

      <style jsx>{`
        .form-container {
          width: 40%;  /* Reduced width for smaller form */
          margin: 50px auto;
          padding: 15px;  /* Reduced padding */
          background-color: #f7f7f7;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
        }

        .form-group {
          margin-bottom: 10px;  /* Reduced margin */
        }

        label {
          display: block;
          font-size: 14px;  /* Reduced font size */
          color: #555;
          margin-bottom: 5px;  /* Reduced margin */
        }

        .input-field {
          width: 100%;
          padding: 8px;  /* Reduced padding */
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        .input-field:focus {
          outline: none;
          border-color: #5b9bd5;
        }

        .submit-btn {
          width: 100%;
          padding: 10px;  /* Reduced padding */
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;  /* Reduced font size */
          margin-top: 15px;  /* Reduced margin */
        }

        .submit-btn:hover {
          background-color: #45a049;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .form-container {
            width: 70%;
          }
        }
      `}</style>
    </>
  );
};

export default PatientForm;
