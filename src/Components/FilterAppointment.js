// // import { useState, useEffect } from "react";
// // import ApiService from "../Service/ApiService";
// // import AppointmentCard from "./AppointmentCard";

// // function FilterAppointment() {
// //   const [appointments, setAppointments] = useState([]); // All appointments
// //   const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered appointments
// //   const [startTo, setStartTo] = useState(""); // State for selected date
// //   const [msg, setMsg] = useState(""); // Message for feedback

// //   const apiService = new ApiService();

// //   // Fetch all appointments when the component is mounted
// //   useEffect(() => {
// //     apiService.getAllAppointments()
// //       .then((response) => {
// //         setAppointments(response.data); // Store all appointments
// //         // setFilteredAppointments(response.data); // Initially show all appointments
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching appointments:", error);
// //         setMsg("Failed to fetch appointments.");
// //       });
// //   }, []); // Empty dependency array means this will run once when the component mounts

// //   // Handle the date input change
// //   const handleDateChange = (e) => {
// //     setStartTo(e.target.value);
// //   };

// //   // Handle the filter submit action
// //   const handleFilterSubmit = (e) => {
// //     e.preventDefault();

// //     if (!startTo) {
// //       setMsg("Please select a date to filter.");
// //       setFilteredAppointments([]); // Clear the displayed appointments
// //       return;
// //     }

// //     // Filter appointments based on the selected startTo date
// //     const filtered = appointments.filter((appointment) => {
// //       return appointment.startTo === startTo; // Compare the dates in YYYY-MM-DD format
// //     });

// //     if (filtered.length === 0) {
// //       setFilteredAppointments([]); // Clear the displayed appointments if no matches
// //       setMsg("No appointments found for this date.");
// //     } else {
// //       setFilteredAppointments(filtered);
// //       setMsg(""); // Clear any previous messages
// //     }
// //   };

// //   // Inbuilt styles
// //   const styles = {
// //     container: {
// //       padding: "20px",
// //       marginTop: "20px",
// //       backgroundColor: "#f9f9f9",
// //       borderRadius: "8px",
// //       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
// //     },
// //     header: {
// //       color: "#333",
// //       marginBottom: "20px",
// //       fontSize: "1.8rem",
// //       textAlign: "center",
// //     },
// //     form: {
// //       display: "flex",
// //       justifyContent: "center",
// //       marginBottom: "20px",
// //     },
// //     input: {
// //       padding: "10px",
// //       fontSize: "1rem",
// //       border: "1px solid #ccc",
// //       borderRadius: "4px",
// //     },
// //     button: {
// //       padding: "10px 20px",
// //       backgroundColor: "#007bff",
// //       color: "white",
// //       border: "none",
// //       borderRadius: "4px",
// //       cursor: "pointer",
// //       marginLeft: "10px",
// //     },
// //     buttonHover: {
// //       backgroundColor: "#0056b3",
// //     },
// //     msg: {
// //       color: "#d9534f",
// //       textAlign: "center",
// //       marginBottom: "20px",
// //     },
// //     appointmentsContainer: {
// //       display: "flex",
// //       flexWrap: "wrap",
// //       gap: "20px",
// //       justifyContent: "flex-start",
// //     },
// //     noAppointments: {
// //       textAlign: "center",
// //       color: "#555",
// //       fontSize: "1.2rem",
// //     },
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.header}>Filter Appointments by Start Date</h1>

// //       {/* Filter Form */}
// //       <form onSubmit={handleFilterSubmit} style={styles.form}>
// //         <input
// //           type="date"
// //           value={startTo}
// //           onChange={handleDateChange}
// //           style={styles.input}
// //         />
// //         <button
// //           type="submit"
// //           style={styles.button}
// //           onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
// //           onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
// //         >
// //           Filter
// //         </button>
// //       </form>

// //       {/* Message */}
// //       {msg && <p style={styles.msg}>{msg}</p>}

// //       {/* Display the filtered appointments */}
// //       <div style={styles.appointmentsContainer}>
// //         {filteredAppointments.length > 0 ? (
// //           filteredAppointments.map((appointment) => (
// //             <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
// //           ))
// //         ) : (
// //           <p style={styles.noAppointments}>No appointments to display.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default FilterAppointment;





// import { useState } from "react";
// import ApiService from "../Service/ApiService";
// import AppointmentCard from "./AppointmentCard";

// function FilterAppointment() {
//   const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered appointments
//   const [startTo, setStartTo] = useState(""); // State for selected date
//   const [msg, setMsg] = useState(""); // Message for feedback

//   const apiService = new ApiService();

//   // Handle the date input change
//   const handleDateChange = (e) => {
//     setStartTo(e.target.value);
//   };

//   // Handle the filter submit action (Fetch appointments by startTo)
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!startTo) {
//       setMsg("Please select a date to filter.");
//       setFilteredAppointments([]); // Clear the displayed appointments
//       return;
//     }

//     // Call the API to fetch appointments by startTo date
//     apiService.getAppointmentsByStartTo(startTo)
//       .then((response) => {
//         const appointments = response.data;
//         if (appointments.length === 0) {
//           setFilteredAppointments([]); // Clear the displayed appointments if no matches
//           setMsg("No appointments found for this date.");
//         } else {
//           setFilteredAppointments(appointments);
//           setMsg(""); // Clear any previous messages
//         }
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch appointments.");
//         console.error("Error fetching appointments:", error);
//       });
//   };

//   // Inbuilt styles
//   const styles = {
//     container: {
//       padding: "20px",
//       marginTop: "20px",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     header: {
//       color: "#333",
//       marginBottom: "20px",
//       fontSize: "1.8rem",
//       textAlign: "center",
//     },
//     form: {
//       display: "flex",
//       justifyContent: "center",
//       marginBottom: "20px",
//     },
//     input: {
//       padding: "10px",
//       fontSize: "1rem",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//     },
//     button: {
//       padding: "10px 20px",
//       backgroundColor: "#007bff",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       marginLeft: "10px",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     msg: {
//       color: "#d9534f",
//       textAlign: "center",
//       marginBottom: "20px",
//     },
//     appointmentsContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "20px",
//       justifyContent: "flex-start",
//     },
//     noAppointments: {
//       textAlign: "center",
//       color: "#555",
//       fontSize: "1.2rem",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Filter Appointments by Start Date</h1>

//       {/* Filter Form */}
//       <form onSubmit={handleFilterSubmit} style={styles.form}>
//         <input
//           type="date"
//           value={startTo}
//           onChange={handleDateChange}
//           style={styles.input}
//         />
//         <button
//           type="submit"
//           style={styles.button}
//           onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
//           onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
//         >
//           Filter
//         </button>
//       </form>

//       {/* Message */}
//       {msg && <p style={styles.msg}>{msg}</p>}

//       {/* Display the filtered appointments */}
//       <div style={styles.appointmentsContainer}>
//         {filteredAppointments.length > 0 ? (
//           filteredAppointments.map((appointment) => (
//             <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
//           ))
//         ) : (
//           <p style={styles.noAppointments}>No appointments to display.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FilterAppointment;



// // import { useState } from "react";
// // import AppointmentSection from "./AppointmentSection";
// // import NurseSection from "./NurseSection";
// // import PhysicianSection from "./PhysicianSection";
// // // import RoomSection from "./RoomSection";

// // function FilterAppointment() {
// //   const [activeTab, setActiveTab] = useState("appointments");

// //   return (
// //     <div>
// //       <div>
// //         {/* Tabs for navigating sections */}
// //         <button onClick={() => setActiveTab("appointments")}>Appointments</button>
// //         <button onClick={() => setActiveTab("nurse")}>Nurse</button>
// //         <button onClick={() => setActiveTab("physician")}>Physician</button>
// //         <button onClick={() => setActiveTab("room")}>Room Info</button>
// //       </div>

// //       {/* Render corresponding section based on the active tab */}
// //       {activeTab === "appointments" && <AppointmentSection />}
// //     {activeTab === "nurse" && <NurseSection />}
// //    {activeTab === "physician" && <PhysicianSection />}
// //     {/* //   {activeTab === "room" && <RoomSection />}   */}
// //     </div>
// //   );
// // }

// // export default FilterAppointment;
// import { useState } from "react";
// import ApiService from "../Service/ApiService";
// import AppointmentCard from "./AppointmentCard"; // Component for appointments
// import PhysicianCard from "./PhysicianCard"; // Component for physician details
// import NurseCard from "./NurseCard"; // Component for nurse details
// import PatientCard from "./PatientCard"; // Component for patient details


// function FilterAppointment() {
//   const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered results
//   const [startTo, setStartTo] = useState(""); // State for selected date
//   const [appointmentId, setAppointmentId] = useState(""); // State for appointment ID
//   const [patientId, setPatientId] = useState(""); // State for patient ID
//   const [msg, setMsg] = useState(""); // Message for feedback
//   const [filterType, setFilterType] = useState(""); // State to track the active filter type

//   const apiService = new ApiService();

//   // Handle input changes
//   const handleDateChange = (e) => setStartTo(e.target.value);
//   const handleAppointmentIdChange = (e) => setAppointmentId(e.target.value);
//   const handlePatientIdChange = (e) => setPatientId(e.target.value);

//   // Handle the filter submit action for appointments by date
//   const handleDateFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!startTo) {
//       setMsg("Please select a date to filter.");
//       setFilteredAppointments([]);
//       setFilterType("");
//       return;
//     }

//     setFilterType("date");
//     apiService
//       .getAppointmentsByStartTo(startTo)
//       .then((response) => {
//         const appointments = response.data;
//         if (appointments.length === 0) {
//           setFilteredAppointments([]);
//           setMsg("No appointments found for the selected date.");
//         } else {
//           setFilteredAppointments(appointments);
//           setMsg("");
//         }
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch appointments by date.");
//         console.error("Error fetching appointments by date:", error);
//       });
//   };

//   // Handle the filter submit action for physician details
//   const handlePhysicianFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!appointmentId) {
//       setMsg("Please enter an appointment ID to fetch physician details.");
//       setFilteredAppointments([]);
//       setFilterType("");
//       return;
//     }

//     setFilterType("physician");
//     apiService
//       .getPhysicianByAppointmentId(appointmentId)
//       .then((response) => {
//         const physicianDetails = response.data;
//         if (!physicianDetails) {
//           setFilteredAppointments([]);
//           setMsg("No physician found for the given appointment ID.");
//         } else {
//           setFilteredAppointments([physicianDetails]);
//           setMsg("");
//         }
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch physician details.");
//         console.error("Error fetching physician details:", error);
//       });
//   };

//   // Handle the filter submit action for nurse details
//   const handleNurseFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!patientId) {
//       setMsg("Please enter a patient ID to fetch nurse details.");
//       setFilteredAppointments([]);
//       setFilterType("");
//       return;
//     }

//     setFilterType("nurse");
//     apiService
//       .getNursesByPatientId(patientId)
//       .then((response) => {
//         const nurseDetails = response.data;
//         if (nurseDetails.length === 0) {
//           setFilteredAppointments([]);
//           setMsg("No nurses found for the given patient ID.");
//         } else {
//           setFilteredAppointments(nurseDetails);
//           setMsg("");
//         }
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch nurse details.");
//         console.error("Error fetching nurse details:", error);
//       });
//   };

//   // Handle the filter submit action for patient details
//   const handlePatientFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!appointmentId) {
//       setMsg("Please enter an appointment ID to fetch patient details.");
//       setFilteredAppointments([]);
//       setFilterType("");
//       return;
//     }

//     setFilterType("patient");
//     apiService
//       .getPatientByAppointmentId(appointmentId)
//       .then((response) => {
//         const patientDetails = response.data;
//         if (!patientDetails) {
//           setFilteredAppointments([]);
//           setMsg("No patient found for the given appointment ID.");
//         } else {
//           setFilteredAppointments([patientDetails]);
//           setMsg("");
//         }
//       })
//       .catch((error) => {
//         setMsg("Failed to fetch patient details.");
//         console.error("Error fetching patient details:", error);
//       });
//   };

//   // Inbuilt styles
//   const styles = {
//     container: {
//       padding: "20px",
//       marginTop: "20px",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     header: {
//       color: "#333",
//       marginBottom: "20px",
//       fontSize: "1.8rem",
//       textAlign: "center",
//     },
//     form: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       marginBottom: "20px",
//     },
//     input: {
//       padding: "10px",
//       fontSize: "1rem",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       marginBottom: "10px",
//       width: "100%",
//       maxWidth: "400px",
//     },
//     button: {
//       padding: "10px 20px",
//       backgroundColor: "#17a2b8", // Updated background color
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       marginBottom: "10px",
//     },
//     msg: {
//       color: "#d9534f",
//       textAlign: "center",
//       marginBottom: "20px",
//     },
//     appointmentsContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "20px",
//       justifyContent: "flex-start",
//     },
//     physicianContainer: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "20px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Filter Appointments</h1>

//       {/* Filter Form for Date */}
//       <form onSubmit={handleDateFilterSubmit} style={styles.form}>
//         <input
//           type="date"
//           value={startTo}
//           onChange={handleDateChange}
//           placeholder="Start Date"
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Filter by Date</button>
//       </form>

//       {/* Filter Form for Physician */}
//       <form onSubmit={handlePhysicianFilterSubmit} style={styles.form}>
//         <input
//           type="text"
//           value={appointmentId}
//           onChange={handleAppointmentIdChange}
//           placeholder="Appointment ID"
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Fetch Physician</button>
//       </form>

//       {/* Filter Form for Nurse */}
//       <form onSubmit={handleNurseFilterSubmit} style={styles.form}>
//         <input
//           type="text"
//           value={patientId}
//           onChange={handlePatientIdChange}
//           placeholder="Patient ID"
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Fetch Nurses</button>
//       </form>

//       {/* Filter Form for Patient */}
//       <form onSubmit={handlePatientFilterSubmit} style={styles.form}>
//         <input
//           type="text"
//           value={appointmentId}
//           onChange={handleAppointmentIdChange}
//           placeholder="Appointment ID for Patient"
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Fetch Patient</button>
//       </form>

//       {/* Message */}
//       {msg && <p style={styles.msg}>{msg}</p>}

//       {/* Display Filtered Results */}
//       {filterType === "date" && (
//         <div style={styles.appointmentsContainer}>
//           {filteredAppointments.length > 0 ? (
//             filteredAppointments.map((appointment) => (
//               <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
//             ))
//           ) : (
//             <p>No appointments found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "physician" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             <PhysicianCard key={filteredAppointments[0].physicianId} physician={filteredAppointments[0]} />
//           ) : (
//             <p>No physician found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "nurse" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             filteredAppointments.map((nurse) => (
//               <NurseCard key={nurse.nurseId} nurse={nurse} />
//             ))
//           ) : (
//             <p>No nurses found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "patient" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             <PatientCard key={filteredAppointments[0].patientId} patient={filteredAppointments[0]} />
//           ) : (
//             <p>No patient found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FilterAppointment;




// import { useState } from "react";
// import ApiService from "../Service/ApiService";
// import AppointmentCard from "./AppointmentCard"; // Component for appointments
// import PhysicianCard from "./PhysicianCard"; // Component for physician details
// import NurseCard from "./NurseCard"; // Component for nurse details
// import PatientCard from "./PatientCard"; // Component for patient details

// function FilterAppointment() {
//   const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered results
//   const [startTo, setStartTo] = useState(""); // State for selected date
//   const [appointmentId, setAppointmentId] = useState(""); // State for appointment ID
//   const [patientId, setPatientId] = useState(""); // State for patient ID
//   const [msg, setMsg] = useState(""); // Message for feedback
//   const [filterType, setFilterType] = useState(""); // State to track the active filter type

//   const apiService = new ApiService();

//   // Handle input changes
//   const handleDateChange = (e) => setStartTo(e.target.value);
//   const handleAppointmentIdChange = (e) => setAppointmentId(e.target.value);
//   const handlePatientIdChange = (e) => setPatientId(e.target.value);

//   // Handle the filter submit action for appointments by date
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!startTo && !appointmentId && !patientId) {
//       setMsg("Please fill at least one field to filter.");
//       setFilteredAppointments([]);
//       return;
//     }

//     if (startTo) {
//       setFilterType("date");
//       apiService.getAppointmentsByStartTo(startTo)
//         .then((response) => {
//           const appointments = response.data;
//           if (appointments.length === 0) {
//             setFilteredAppointments([]);
//             setMsg("No appointments found for the selected date.");
//           } else {
//             setFilteredAppointments(appointments);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch appointments by date.");
//           console.error("Error fetching appointments by date:", error);
//         });
//     } else if (appointmentId) {
//       setFilterType("physician");
//       apiService.getPhysicianByAppointmentId(appointmentId)
//         .then((response) => {
//           const physicianDetails = response.data;
//           if (!physicianDetails) {
//             setFilteredAppointments([]);
//             setMsg("No physician found for the given appointment ID.");
//           } else {
//             setFilteredAppointments([physicianDetails]);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch physician details.");
//           console.error("Error fetching physician details:", error);
//         });
//     } else if (patientId) {
//       setFilterType("nurse");
//       apiService.getNursesByPatientId(patientId)
//         .then((response) => {
//           const nurseDetails = response.data;
//           if (nurseDetails.length === 0) {
//             setFilteredAppointments([]);
//             setMsg("No nurses found for the given patient ID.");
//           } else {
//             setFilteredAppointments(nurseDetails);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch nurse details.");
//           console.error("Error fetching nurse details:", error);
//         });
//     }
//   };

//   // Inbuilt styles
//   const styles = {
//     container: {
//       padding: "20px",
//       marginTop: "20px",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     header: {
//       color: "#333",
//       marginBottom: "20px",
//       fontSize: "1.8rem",
//       textAlign: "center",
//     },
//     form: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "20px",
//       gap: "10px",
//     },
//     input: {
//       padding: "10px",
//       fontSize: "1rem",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       width: "150px",
//     },
//     button: {
//       padding: "10px 20px",
//       backgroundColor: "#17a2b8",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//     },
//     msg: {
//       color: "#d9534f",
//       textAlign: "center",
//       marginBottom: "20px",
//     },
//     appointmentsContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "20px",
//       justifyContent: "flex-start",
//     },
//     physicianContainer: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "20px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Filter Appointments</h1>

//       {/* Filter Form for Date, Appointment ID, or Patient ID */}
//       <form onSubmit={handleFilterSubmit} style={styles.form}>
//         <input
//           type="date"
//           value={startTo}
//           onChange={handleDateChange}
//           placeholder="Start Date"
//           style={styles.input}
//         />
//         <input
//           type="text"
//           value={appointmentId}
//           onChange={handleAppointmentIdChange}
//           placeholder="Appointment ID"
//           style={styles.input}
//         />
//         <input
//           type="text"
//           value={patientId}
//           onChange={handlePatientIdChange}
//           placeholder="Patient ID"
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Filter</button>
//       </form>

//       {/* Message */}
//       {msg && <p style={styles.msg}>{msg}</p>}

//       {/* Display Filtered Results */}
//       {filterType === "date" && (
//         <div style={styles.appointmentsContainer}>
//           {filteredAppointments.length > 0 ? (
//             filteredAppointments.map((appointment) => (
//               <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
//             ))
//           ) : (
//             <p>No appointments found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "physician" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             <PhysicianCard key={filteredAppointments[0].physicianId} physician={filteredAppointments[0]} />
//           ) : (
//             <p>No physician found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "nurse" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             filteredAppointments.map((nurse) => (
//               <NurseCard key={nurse.nurseId} nurse={nurse} />
//             ))
//           ) : (
//             <p>No nurses found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "patient" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             <PatientCard key={filteredAppointments[0].patientId} patient={filteredAppointments[0]} />
//           ) : (
//             <p>No patient found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FilterAppointment;



// import { useState } from "react";
// import ApiService from "../Service/ApiService";
// import AppointmentCard from "./AppointmentCard"; // Component for appointments
// import PhysicianCard from "./PhysicianCard"; // Component for physician details
// import NurseCard from "./NurseCard"; // Component for nurse details
// import PatientCard from "./PatientCard"; // Component for patient details

// function FilterAppointment() {
//   const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered results
//   const [startTo, setStartTo] = useState(""); // State for selected date
//   const [appointmentId, setAppointmentId] = useState(""); // State for appointment ID
//   const [patientId, setPatientId] = useState(""); // State for patient ID
//   const [msg, setMsg] = useState(""); // Message for feedback
//   const [filterType, setFilterType] = useState(""); // State to track the active filter type

//   const apiService = new ApiService();

//   // Handle input changes
//   const handleDateChange = (e) => {
//     setStartTo(e.target.value);
//     setAppointmentId(""); // Reset appointment ID field
//     setPatientId(""); // Reset patient ID field
//   };
  
//   const handleAppointmentIdChange = (e) => {
//     setAppointmentId(e.target.value);
//     setStartTo(""); // Reset date field
//     setPatientId(""); // Reset patient ID field
//   };
  
//   const handlePatientIdChange = (e) => {
//     setPatientId(e.target.value);
//     setStartTo(""); // Reset date field
//     setAppointmentId(""); // Reset appointment ID field
//   };

//   // Handle the filter submit action for appointments by date
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!startTo && !appointmentId && !patientId) {
//       setMsg("Please fill at least one field to filter.");
//       setFilteredAppointments([]);
//       return;
//     }

//     if (startTo) {
//       setFilterType("date");
//       apiService.getAppointmentsByStartTo(startTo)
//         .then((response) => {
//           const appointments = response.data;
//           if (appointments.length === 0) {
//             setFilteredAppointments([]);
//             setMsg("No appointments found for the selected date.");
//           } else {
//             setFilteredAppointments(appointments);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch appointments by date.");
//           console.error("Error fetching appointments by date:", error);
//         });
//     } else if (appointmentId) {
//       setFilterType("physician");
//       apiService.getPhysicianByAppointmentId(appointmentId)
//         .then((response) => {
//           const physicianDetails = response.data;
//           if (!physicianDetails) {
//             setFilteredAppointments([]);
//             setMsg("No physician found for the given appointment ID.");
//           } else {
//             setFilteredAppointments([physicianDetails]);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch physician details.");
//           console.error("Error fetching physician details:", error);
//         });
//     } else if (patientId) {
//       setFilterType("nurse");
//       apiService.getNursesByPatientId(patientId)
//         .then((response) => {
//           const nurseDetails = response.data;
//           if (nurseDetails.length === 0) {
//             setFilteredAppointments([]);
//             setMsg("No nurses found for the given patient ID.");
//           } else {
//             setFilteredAppointments(nurseDetails);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch nurse details.");
//           console.error("Error fetching nurse details:", error);
//         });
//     } else if (appointmentId) {
//       // Fetch patient details by appointment ID
//       setFilterType("patient");
//       apiService.getPatientByAppointmentId(appointmentId)
//         .then((response) => {
//           const patientDetails = response.data;
//           if (!patientDetails) {
//             setFilteredAppointments([]);
//             setMsg("No patient found for the given appointment ID.");
//           } else {
//             setFilteredAppointments([patientDetails]);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch patient details.");
//           console.error("Error fetching patient details:", error);
//         });
//     }
//   };

//   // Inbuilt styles
//   const styles = {
//     container: {
//       padding: "20px",
//       marginTop: "20px",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     header: {
//       color: "#333",
//       marginBottom: "20px",
//       fontSize: "1.8rem",
//       textAlign: "center",
//     },
//     form: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "20px",
//       gap: "10px",
//     },
//     input: {
//       padding: "10px",
//       fontSize: "1rem",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       width: "150px",
//     },
//     button: {
//       padding: "10px 20px",
//       backgroundColor: "#17a2b8",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//     },
//     msg: {
//       color: "#d9534f",
//       textAlign: "center",
//       marginBottom: "20px",
//     },
//     appointmentsContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "20px",
//       justifyContent: "flex-start",
//     },
//     physicianContainer: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "20px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Filter Appointments</h1>

//       {/* Filter Form for Date, Appointment ID, or Patient ID */}
//       <form onSubmit={handleFilterSubmit} style={styles.form}>
//         <input
//           type="date"
//           value={startTo}
//           onChange={handleDateChange}
//           placeholder="Start Date"
//           style={styles.input}
//         />
//         <input
//           type="text"
//           value={appointmentId}
//           onChange={handleAppointmentIdChange}
//           placeholder="Appointment ID"
//           style={styles.input}
//         />
//         <input
//           type="text"
//           value={patientId}
//           onChange={handlePatientIdChange}
//           placeholder="Patient ID"
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Filter</button>
//       </form>

//       {/* Message */}
//       {msg && <p style={styles.msg}>{msg}</p>}

//       {/* Display Filtered Results */}
//       {filterType === "date" && (
//         <div style={styles.appointmentsContainer}>
//           {filteredAppointments.length > 0 ? (
//             filteredAppointments.map((appointment) => (
//               <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
//             ))
//           ) : (
//             <p>No appointments found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "physician" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             <PhysicianCard key={filteredAppointments[0].physicianId} physician={filteredAppointments[0]} />
//           ) : (
//             <p>No physician found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "nurse" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             filteredAppointments.map((nurse) => (
//               <NurseCard key={nurse.nurseId} nurse={nurse} />
//             ))
//           ) : (
//             <p>No nurses found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "patient" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             <PatientCard key={filteredAppointments[0].patientId} patient={filteredAppointments[0]} />
//           ) : (
//             <p>No patient found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FilterAppointment;

// import { useState } from "react";
// import ApiService from "../Service/ApiService";
// import AppointmentCard from "./AppointmentCard"; // Component for appointments
// import PhysicianCard from "./PhysicianCard"; // Component for physician details
// import NurseCard from "./NurseCard"; // Component for nurse details
// import PatientCard from "./PatientCard"; // Component for patient details

// function FilterAppointment() {
//   const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered results
//   const [startTo, setStartTo] = useState(""); // State for selected date
//   const [appointmentId, setAppointmentId] = useState(""); // State for appointment ID
//   const [patientId, setPatientId] = useState(""); // State for patient ID
//   const [patientAppointmentId, setPatientAppointmentId] = useState(""); // State for appointment ID to get patient data
//   const [msg, setMsg] = useState(""); // Message for feedback
//   const [filterType, setFilterType] = useState(""); // State to track the active filter type

//   const apiService = new ApiService();

//   // Handle input changes
//   const handleDateChange = (e) => {
//     setStartTo(e.target.value);
//     setAppointmentId(""); // Reset appointment ID field
//     setPatientId(""); // Reset patient ID field
//     setPatientAppointmentId(""); // Reset patient appointment ID field
//   };
  
//   const handleAppointmentIdChange = (e) => {
//     setAppointmentId(e.target.value);
//     setStartTo(""); // Reset date field
//     setPatientId(""); // Reset patient ID field
//     setPatientAppointmentId(""); // Reset patient appointment ID field
//   };
  
//   const handlePatientIdChange = (e) => {
//     setPatientId(e.target.value);
//     setStartTo(""); // Reset date field
//     setAppointmentId(""); // Reset appointment ID field
//     setPatientAppointmentId(""); // Reset patient appointment ID field
//   };

//   const handlePatientAppointmentIdChange = (e) => {
//     setPatientAppointmentId(e.target.value);
//     setStartTo(""); // Reset date field
//     setAppointmentId(""); // Reset appointment ID field
//     setPatientId(""); // Reset patient ID field
//   };

//   // Handle the filter submit action for appointments by date
//   const handleFilterSubmit = (e) => {
//     e.preventDefault();

//     if (!startTo && !appointmentId && !patientId && !patientAppointmentId) {
//       setMsg("Please fill at least one field to filter.");
//       setFilteredAppointments([]);
//       return;
//     }

//     if (startTo) {
//       setFilterType("date");
//       apiService.getAppointmentsByStartTo(startTo)
//         .then((response) => {
//           const appointments = response.data;
//           if (appointments.length === 0) {
//             setFilteredAppointments([]);
//             setMsg("No appointments found for the selected date.");
//           } else {
//             setFilteredAppointments(appointments);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch appointments by date.");
//           console.error("Error fetching appointments by date:", error);
//         });
//     } else if (appointmentId) {
//       setFilterType("physician");
//       apiService.getPhysicianByAppointmentId(appointmentId)
//         .then((response) => {
//           const physicianDetails = response.data;
//           if (!physicianDetails) {
//             setFilteredAppointments([]);
//             setMsg("No physician found for the given appointment ID.");
//           } else {
//             setFilteredAppointments([physicianDetails]);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch physician details.");
//           console.error("Error fetching physician details:", error);
//         });
//     } else if (patientId) {
//       setFilterType("nurse");
//       apiService.getNursesByPatientId(patientId)
//         .then((response) => {
//           const nurseDetails = response.data;
//           if (nurseDetails.length === 0) {
//             setFilteredAppointments([]);
//             setMsg("No nurses found for the given patient ID.");
//           } else {
//             setFilteredAppointments(nurseDetails);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch nurse details.");
//           console.error("Error fetching nurse details:", error);
//         });
//     } else if (patientAppointmentId) {
//       setFilterType("patient");
//       apiService.getPatientByAppointmentId(patientAppointmentId)
//         .then((response) => {
//           const patientDetails = response.data;
//           if (!patientDetails) {
//             setFilteredAppointments([]);
//             setMsg("No patient found for the given appointment ID.");
//           } else {
//             setFilteredAppointments([patientDetails]);
//             setMsg("");
//           }
//         })
//         .catch((error) => {
//           setMsg("Failed to fetch patient details.");
//           console.error("Error fetching patient details:", error);
//         });
//     }
//   };

//   // Inbuilt styles
//   const styles = {
//     container: {
//       padding: "20px",
//       marginTop: "20px",
//       backgroundColor: "#f9f9f9",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     },
//     header: {
//       color: "#333",
//       marginBottom: "20px",
//       fontSize: "1.8rem",
//       textAlign: "center",
//     },
//     form: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "20px",
//       gap: "10px",
//     },
//     input: {
//       padding: "10px",
//       fontSize: "1rem",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       width: "150px",
//     },
//     button: {
//       padding: "10px 20px",
//       backgroundColor: "#17a2b8",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//     },
//     msg: {
//       color: "#d9534f",
//       textAlign: "center",
//       marginBottom: "20px",
//     },
//     appointmentsContainer: {
//       display: "flex",
//       flexWrap: "wrap",
//       gap: "20px",
//       justifyContent: "flex-start",
//     },
//     physicianContainer: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       marginTop: "20px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.header}>Filter Appointments</h1>

//       {/* Filter Form for Date, Appointment ID, or Patient ID */}
//       <form onSubmit={handleFilterSubmit} style={styles.form}>
//         <input
//           type="date"
//           value={startTo}
//           onChange={handleDateChange}
//           placeholder="Start Date"
//           style={styles.input}
//         />
//         <input
//           type="text"
//           value={appointmentId}
//           onChange={handleAppointmentIdChange}
//           placeholder="Appointment ID (Physician)"
//           style={styles.input}
//         />
//         <input
//           type="text"
//           value={patientId}
//           onChange={handlePatientIdChange}
//           placeholder="Patient ID"
//           style={styles.input}
//         />
//         <input
//           type="text"
//           value={patientAppointmentId}
//           onChange={handlePatientAppointmentIdChange}
//           placeholder="Appointment ID (Patient)"
//           style={styles.input}
//         />
//         <button type="submit" style={styles.button}>Filter</button>
//       </form>

//       {/* Message */}
//       {msg && <p style={styles.msg}>{msg}</p>}

//       {/* Display Filtered Results */}
//       {filterType === "date" && (
//         <div style={styles.appointmentsContainer}>
//           {filteredAppointments.length > 0 ? (
//             filteredAppointments.map((appointment) => (
//               <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
//             ))
//           ) : (
//             <p>No appointments found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "physician" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             <PhysicianCard key={filteredAppointments[0].physicianId} physician={filteredAppointments[0]} />
//           ) : (
//             <p>No physician found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "nurse" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             filteredAppointments.map((nurse) => (
//               <NurseCard key={nurse.nurseId} nurse={nurse} />
//             ))
//           ) : (
//             <p>No nurses found.</p>
//           )}
//         </div>
//       )}

//       {filterType === "patient" && (
//         <div style={styles.physicianContainer}>
//           {filteredAppointments.length > 0 ? (
//             <PatientCard key={filteredAppointments[0].patientId} patient={filteredAppointments[0]} />
//           ) : (
//             <p>No patient found.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FilterAppointment;



import { useState } from "react";
import ApiService from "../Service/ApiService";
import AppointmentCard from "./AppointmentCard"; // Component for appointments
import PhysicianCard from "./PhysicianCard"; // Component for physician details
import NurseCard from "./NurseCard"; // Component for nurse details
import PatientCard from "./PatientCard"; // Component for patient details

function FilterAppointment() {
  const [filteredAppointments, setFilteredAppointments] = useState([]); // Filtered results
  const [startTo, setStartTo] = useState(""); // State for selected date
  const [appointmentId, setAppointmentId] = useState(""); // State for appointment ID
  const [patientId, setPatientId] = useState(""); // State for patient ID
  const [patientAppointmentId, setPatientAppointmentId] = useState(""); // State for appointment ID to get patient data
  const [msg, setMsg] = useState(""); // Message for feedback
  const [filterType, setFilterType] = useState(""); // State to track the active filter type

  const apiService = new ApiService();

  // Handle input changes
  const handleDateChange = (e) => {
    setStartTo(e.target.value);
    setAppointmentId(""); // Reset appointment ID field
    setPatientId(""); // Reset patient ID field
    setPatientAppointmentId(""); // Reset patient appointment ID field
  };

  const handleAppointmentIdChange = (e) => {
    setAppointmentId(e.target.value);
    setStartTo(""); // Reset date field
    setPatientId(""); // Reset patient ID field
    setPatientAppointmentId(""); // Reset patient appointment ID field
  };

  const handlePatientIdChange = (e) => {
    setPatientId(e.target.value);
    setStartTo(""); // Reset date field
    setAppointmentId(""); // Reset appointment ID field
    setPatientAppointmentId(""); // Reset patient appointment ID field
  };

  const handlePatientAppointmentIdChange = (e) => {
    setPatientAppointmentId(e.target.value);
    setStartTo(""); // Reset date field
    setAppointmentId(""); // Reset appointment ID field
    setPatientId(""); // Reset patient ID field
  };

  // Handle the filter submit action for appointments by date
  const handleFilterSubmit = (e) => {
    e.preventDefault();

    if (!startTo && !appointmentId && !patientId && !patientAppointmentId) {
      setMsg("Please fill at least one field to filter.");
      setFilteredAppointments([]);
      return;
    }

    if (startTo) {
      setFilterType("date");
      apiService.getAppointmentsByStartTo(startTo)
        .then((response) => {
          const appointments = response.data;
          if (appointments.length === 0) {
            setFilteredAppointments([]);
            setMsg("No appointments found for the selected date.");
          } else {
            setFilteredAppointments(appointments);
            setMsg(""); // Clear message if successful
          }
        })
        .catch((error) => {
          setMsg("Failed to fetch appointments by date.");
          setFilteredAppointments([]); // Clear previous data on failure
          console.error("Error fetching appointments by date:", error);
        });
    } else if (appointmentId) {
      setFilterType("physician");
      apiService.getPhysicianByAppointmentId(appointmentId)
        .then((response) => {
          const physicianDetails = response.data;
          if (!physicianDetails) {
            setFilteredAppointments([]);
            setMsg("No physician found for the given appointment ID.");
          } else {
            setFilteredAppointments([physicianDetails]);
            setMsg(""); // Clear message if successful
          }
        })
        .catch((error) => {
          setMsg("Failed to fetch physician details.");
          setFilteredAppointments([]); // Clear previous data on failure
          console.error("Error fetching physician details:", error);
        });
    } else if (patientId) {
      setFilterType("nurse");
      apiService.getNursesByPatientId(patientId)
        .then((response) => {
          const nurseDetails = response.data;
          if (nurseDetails.length === 0) {
            setFilteredAppointments([]);
            setMsg("No nurses found for the given patient ID.");
          } else {
            setFilteredAppointments(nurseDetails);
            setMsg(""); // Clear message if successful
          }
        })
        .catch((error) => {
          setMsg("Failed to fetch nurse details.");
          setFilteredAppointments([]); // Clear previous data on failure
          console.error("Error fetching nurse details:", error);
        });
    } else if (patientAppointmentId) {
      setFilterType("patient");
      apiService.getPatientByAppointmentId(patientAppointmentId)
        .then((response) => {
          const patientDetails = response.data;
          if (!patientDetails) {
            setFilteredAppointments([]);
            setMsg("No patient found for the given appointment ID.");
          } else {
            setFilteredAppointments([patientDetails]);
            setMsg(""); // Clear message if successful
          }
        })
        .catch((error) => {
          setMsg("Failed to fetch patient details.");
          setFilteredAppointments([]); // Clear previous data on failure
          console.error("Error fetching patient details:", error);
        });
    }
  };

 // Inbuilt styles
  const styles = {
    container: {
      padding: "20px",
      marginTop: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      color: "#333",
      marginBottom: "20px",
      fontSize: "1.8rem",
      textAlign: "center",
    },
    form: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      gap: "10px",
    },
    input: {
      padding: "10px",
      fontSize: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      width: "150px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#17a2b8",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    msg: {
      color: "#d9534f",
      textAlign: "center",
      marginBottom: "20px",
    },
    appointmentsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "flex-start",
    },
    physicianContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Filter Appointments</h1>

      {/* Filter Form for Date, Appointment ID, or Patient ID */}
      <form onSubmit={handleFilterSubmit} style={styles.form}>
        <input
          type="date"
          value={startTo}
          onChange={handleDateChange}
          placeholder="Start Date"
          style={styles.input}
        />
        <input
          type="text"
          value={appointmentId}
          onChange={handleAppointmentIdChange}
          placeholder="Appointment ID (Physician)"
          style={styles.input}
        />
        <input
          type="text"
          value={patientId}
          onChange={handlePatientIdChange}
          placeholder="Patient ID"
          style={styles.input}
        />
        <input
          type="text"
          value={patientAppointmentId}
          onChange={handlePatientAppointmentIdChange}
          placeholder="Appointment ID (Patient)"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Filter</button>
      </form>

      {/* Message */}
      {msg && <p style={styles.msg}>{msg}</p>}

      {/* Display Filtered Results */}
      {filterType === "date" && (
        <div style={styles.appointmentsContainer}>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <AppointmentCard key={appointment.appointmentId} appointment={appointment} />
            ))
          ) : (
            <p>No appointments found.</p>
          )}
        </div>
      )}

      {filterType === "physician" && (
        <div style={styles.physicianContainer}>
          {filteredAppointments.length > 0 ? (
            <PhysicianCard key={filteredAppointments[0].physicianId} physician={filteredAppointments[0]} />
          ) : (
            <p>No physician found.</p>
          )}
        </div>
      )}

      {filterType === "nurse" && (
        <div style={styles.physicianContainer}>
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((nurse) => (
              <NurseCard key={nurse.nurseId} nurse={nurse} />
            ))
          ) : (
            <p>No nurses found.</p>
          )}
        </div>
      )}

      {filterType === "patient" && (
        <div style={styles.physicianContainer}>
          {filteredAppointments.length > 0 ? (
            <PatientCard key={filteredAppointments[0].patientId} patient={filteredAppointments[0]} />
          ) : (
            <p>No patient found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default FilterAppointment;
