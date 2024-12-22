import { useEffect, useState } from "react";
import ApiService from "../Service/ApiService";
import { Link } from "react-router-dom";
import PatientCard from "./PatientCard";
import PhysicianCard from "./PhysicianCard";
import NurseCard from "./NurseCard";
import "./Cards.css"
function Appointment() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedPhysician, setSelectedPhysician] = useState(null);
  const [selectedNurse, setSelectedNurse] = useState(null);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setSelectedPhysician(null); // Close previous card
    setSelectedNurse(null); // Close previous card
  };

  const handlePhysicianClick = (physician) => {
    setSelectedPhysician(physician);
    setSelectedPatient(null); // Close previous card
    setSelectedNurse(null); // Close previous card
  };

  const handleNurseClick = (nurse) => {
    setSelectedNurse(nurse);
    setSelectedPatient(null); // Close previous card
    setSelectedPhysician(null); // Close previous card
  };

  const handleCloseCard = () => {
    setSelectedPatient(null);
    setSelectedPhysician(null);
    setSelectedNurse(null);
  };

  const apiService = new ApiService();
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState([]);
  const [msg, setMsg] = useState("");
  const [filterCriteria, setFilterCriteria] = useState({
    appointmentId: "",
    patientId: "",
    startTo: "",
    physicianId: "",
    nurseId: "",
    examinationRoom: "",
  });

  useEffect(() => {
    apiService.getAllAppointments()
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setAppointments(res.data);
          setFilteredAppointments(res.data);
          setMsg("");
        } else {
          setMsg("No appointments found.");
        }
      })
      .catch((err) => {
        alert(err.response ? err.response.data : "Failed to fetch appointments");
        setMsg("Failed to fetch appointments. Please try again later.");
        console.log(err);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // If one filter field is filled, other fields are cleared.
    let newFilterCriteria = { ...filterCriteria, [name]: value };
      // Logic to clear other filters if one filter is applied

    if (name === "appointmentId") {
      newFilterCriteria = {
        appointmentId: value,
        patientId: "",
        startTo: "",
        physicianId: "",
        nurseId: "",
        examinationRoom: "",
      };
    } else if (name === "patientId") {
      newFilterCriteria = {
        appointmentId: "",
        patientId: value,
        startTo: "",
        physicianId: "",
        nurseId: "",
        examinationRoom: "",
      };
    } else if (name === "startTo") {
      newFilterCriteria = {
        appointmentId: "",
        patientId: "",
        startTo: value,
        physicianId: "",
        nurseId: "",
        examinationRoom: "",
      };
    } else if (name === "physicianId") {
      newFilterCriteria = {
        appointmentId: "",
        patientId: "",
        startTo: "",
        physicianId: value,
        nurseId: "",
        examinationRoom: "",
      };
    } else if (name === "nurseId") {
      newFilterCriteria = {
        appointmentId: "",
        patientId: "",
        startTo: "",
        physicianId: "",
        nurseId: value,
        examinationRoom: "",
      };
    } else if (name === "examinationRoom") {
      newFilterCriteria = {
        appointmentId: "",
        patientId: "",
        startTo: "",
        physicianId: "",
        nurseId: "",
        examinationRoom: value,
      };
    }

    setFilterCriteria(newFilterCriteria);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
  // Prevent the form from submitting and reloading the page
    let filteredData = appointments;
  
    if (filterCriteria.appointmentId) {
      filteredData = filteredData.filter((appointment) =>
        appointment.appointmentId.toString() === filterCriteria.appointmentId.toString()
      );
    }
  
    if (filterCriteria.patientId) {
      filteredData = filteredData.filter((appointment) =>
        appointment.patient.patientId.toString()===(filterCriteria.patientId)
      );
    }
  
    if (filterCriteria.startTo) {
      filteredData = filteredData.filter((appointment) =>
        appointment.startTo===(filterCriteria.startTo)
      );
    }
  
    if (filterCriteria.physicianId) {
      filteredData = filteredData.filter((appointment) =>
        appointment.physician.physicianId.toString()===(filterCriteria.physicianId)
      );
    }
  
    if (filterCriteria.nurseId) {
      filteredData = filteredData.filter((appointment) =>
        appointment.nurse.nurseId.toString()===(filterCriteria.nurseId)
      );
    }
  
    if (filterCriteria.examinationRoom) {
      filteredData = filteredData.filter((appointment) =>
        appointment.examinationRoom.toLowerCase()===(filterCriteria.examinationRoom.toLowerCase())
      );
    }
  
    setFilteredAppointments(filteredData);
  
    if (filteredData.length === 0) {
      setMsg("No appointments found based on the applied filters.");
    } else {
      setMsg("");
    }
  };
  












  return (
    <div className="container mt-5">
      <form onSubmit={handleFilterSubmit} className="mb-4">
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="appointmentId"
              value={filterCriteria.appointmentId}
              onChange={handleFilterChange}
              placeholder="Filter by Appointment ID"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="patientId"
              value={filterCriteria.patientId}
              onChange={handleFilterChange}
              placeholder="Filter by Patient ID"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="date"
              name="startTo"
              value={filterCriteria.startTo}
              onChange={handleFilterChange}
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="physicianId"
              value={filterCriteria.physicianId}
              onChange={handleFilterChange}
              placeholder="Filter by Physician ID"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="nurseId"
              value={filterCriteria.nurseId}
              onChange={handleFilterChange}
              placeholder="Filter by Nurse ID"
              className="form-control"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="examinationRoom"
              value={filterCriteria.examinationRoom}
              onChange={handleFilterChange}
              placeholder="Filter by Room"
              className="form-control"
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">
              Filter
            </button>
          </div>
        </div>
      </form>

      {msg && <div className="alert alert-info">{msg}</div>}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Physician ID</th>
            <th>Patient ID</th>
            <th>Nurse ID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.appointmentId}>
              <td>{appointment.appointmentId}</td>

              <td>
                <Link
                  to="#"
                  onClick={() => handlePhysicianClick(appointment.physician)}
                >
                  {appointment.physician.name}

                </Link>
              </td>

              <td>
                <Link
                  to="#"
                  onClick={() => handlePatientClick(appointment.patient)}
                >
                  {appointment.patient.patientId}
                </Link>
              </td>

              <td>
                <Link
                  to="#"
                  onClick={() => handleNurseClick(appointment.nurse)}
                >
                  {appointment.nurse.nurseName}
                </Link>
              </td>

              <td>{appointment.startTo}</td>
              <td>{appointment.endTo}</td>
              <td>{appointment.startTime}</td>
              <td>{appointment.endTime}</td>
              <td>{appointment.examinationRoom}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Patient, Physician, and Nurse Details */}
      {(selectedPatient || selectedPhysician || selectedNurse) && (
        <div className="modal-overlay">
          <div className="modal-content">
            {selectedPatient && (
              <PatientCard patient={selectedPatient} />
            )}
            {selectedPhysician && (
              <PhysicianCard physician={selectedPhysician} />
            )}
            {selectedNurse && (
              <NurseCard nurse={selectedNurse} />
            )}
            <button className="close-btn" onClick={handleCloseCard}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointment;
