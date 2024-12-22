import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../Service/ApiService';

const PatientList = () => {
  const [patients, setPatients] = useState([]);  // State to store the list of patients
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch patient list from the backend
    const fetchPatients = async () => {
      try {
        let api = new ApiService();
        const response = await api.getAllPatients();
        setPatients(response.data);  // Update state with the fetched patients
      } catch (err) {
        setError('Error fetching patient list');
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  if (!patients.length) {
    return <div style={styles.noPatients}>No patients found</div>;
  }

  return (
    <div style={styles.patientListContainer}>
      <h5 style={styles.heading}>Check Patient Appointment Here</h5>
      <div style={styles.patientCardsContainer}>
        {patients.map((patient) => (
          <div key={patient.patientId} style={styles.patientCard}>
            <h3 style={styles.patientName}>{patient.patientName}</h3>
            <p style={styles.patientInfo}><strong>Address:</strong> {patient.patientAddress}</p>
            <p style={styles.patientInfo}><strong>Phone No:</strong> {patient.patientPhoneNo}</p>
            <p style={styles.patientInfo}><strong>Insurance ID:</strong> {patient.insuranceId}</p>
           <p style={styles.patientInfo}>
  <strong>Has Appointment:</strong> {patient.hasAppointment ? 'Yes' : 'No'}
</p>


            <Link to={`/home/list/${patient.patientId}`} style={styles.checkAppointmentsBtn}>
              Check Appointments
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  patientListContainer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: '2em',
    textAlign: 'center',
    marginBottom: '20px',
  },
  patientCardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
  },
  patientCard: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    transition: 'transform 0.3s ease',
  },
  patientCardHover: {
    transform: 'translateY(-5px)',
  },
  patientName: {
    fontSize: '1.5em',
    color: '#333',
  },
  patientInfo: {
    fontSize: '1em',
    color: '#555',
    margin: '8px 0',
  },
  checkAppointmentsBtn: {
    display: 'inline-block',
    marginTop: '15px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    textAlign: 'center',
  },
  checkAppointmentsBtnHover: {
    backgroundColor: '#0056b3',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.2em',
    color: '#666',
    marginTop: '50px',
  },
  error: {
    textAlign: 'center',
    fontSize: '1.2em',
    color: 'red',
    marginTop: '50px',
  },
  noPatients: {
    textAlign: 'center',
    fontSize: '1.2em',
    color: '#666',
    marginTop: '50px',
  },
};

export default PatientList;
