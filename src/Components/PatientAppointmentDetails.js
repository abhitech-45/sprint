
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';  // Import useParams hook
// import ApiService from '../Service/ApiService';

// const PatientAppointmentDetails = () => {
//   const { patientId } = useParams();  // Access patientId from the URL params
//   const [patientAppointment, setPatientAppointment] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Check if patientId is available before making the API call
//     if (!patientId) {
//       setError("Invalid patient ID");
//       setLoading(false);
//       return;
//     }

//     const fetchPatientAppointmentDetails = async () => {
//       try {
//         let api = new ApiService();
//         const response = await api.getPatientHasAppointmentDetails(patientId);

//         if (response.data) {
//           setPatientAppointment(response.data);
//         } else {
//           setError('No appointment details found');
//         }
//       } catch (err) {
//         setError('Error fetching patient appointment details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPatientAppointmentDetails();
//   }, [patientId]);  // Use patientId as a dependency for re-fetching data

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!patientAppointment) {
//     return <div>No appointment details found</div>;
//   }

//   return (
//     <div>
//       <h2>Patient Appointment Details</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Patient Name</th>
//             <th>Patient Address</th>
//             <th>Phone No</th>
//             <th>Insurance ID</th>
//             <th>Appointment ID</th>
//             <th>Start Time</th>
//             <th>End Time</th>
//             <th>Has Appointment</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>{patientAppointment.patientName}</td>
//             <td>{patientAppointment.patientAddress}</td>
//             <td>{patientAppointment.patientPhoneNo}</td>
//             <td>{patientAppointment.insuranceId}</td>
//             <td>{patientAppointment.appointmentId}</td>
//             <td>{patientAppointment.appointment.startTime}</td>
//             <td>{patientAppointment.appointment.endTime}</td>
//             <td>{patientAppointment.hasAppointment ? 'Yes' : 'No'}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default PatientAppointmentDetails;
