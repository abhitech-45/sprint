
import { useState, useEffect } from "react";
import ApiService from "../Service/ApiService";
import { useNavigate } from "react-router-dom";

function AppointmentForm() {
  const [appointment, setAppointment] = useState({
    startTo: "",
    endTo: "",
    startTime: "",
    endTime: "",
    examinationRoom: "",
    physicianId: "",
    nurseId: "",
    patientId: "",
  });

  const [msg, setMsg] = useState("");
  const [unavailableSlots, setUnavailableSlots] = useState([]); // To store unavailable slots
  const navigate = useNavigate();
  const api = new ApiService();

  // Fetch unavailable slots for the physician on the selected date
  useEffect(() => {
    if (appointment.startTo && appointment.physicianId) {
      const fetchUnavailableSlots = async () => {
        try {
          const response = await api.getUnavailableSlots(appointment.startTo, appointment.physicianId);
          setUnavailableSlots(response);
        } catch (error) {
          console.error("Error fetching unavailable slots:", error);
        }
      };

      fetchUnavailableSlots();
    }
  }, [appointment.startTo, appointment.physicianId]); // Trigger the effect when startTo or physicianId changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !appointment.startTo ||
      !appointment.endTo ||
      !appointment.startTime ||
      !appointment.endTime ||
      !appointment.examinationRoom ||
      !appointment.physicianId ||
      !appointment.nurseId ||
      !appointment.patientId
    ) {
      setMsg("All fields are required.");
      return;
    }

    api.bookAppointment(appointment)
      .then((response) => {
        setMsg("Appointment added successfully!");
        navigate("/home/appointments");
      })
      .catch((error) => {
        alert("Physician is already booked at selected time slot, please select another time slot !!");
      });
  };

  // Helper function to generate time slots (from 8 AM to 6 PM)
  const generateTimeSlots = () => {
    const startTime = 8; // 8 AM
    const endTime = 18; // 6 PM
    const interval = 30; // 30 minutes intervals
    const slots = [];

    for (let hour = startTime; hour < endTime; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
        slots.push(time);
      }
    }
    return slots;
  };

  // Check if a time slot is unavailable
  const isSlotUnavailable = (slot) => {
    return unavailableSlots.includes(slot);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-md-8 p-4 border rounded shadow-lg appointment-form-container">
        <h1 className="text-center mb-4">Schedule Appointment</h1>
        <form onSubmit={handleSubmit} className="horizontal-form">
          {/* Row for Start Date and End Date */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="startTo">Start Date</label>
                <input
                  type="date"
                  id="startTo"
                  name="startTo"
                  value={appointment.startTo}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="endTo">End Date</label>
                <input
                  type="date"
                  id="endTo"
                  name="endTo"
                  value={appointment.endTo}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          {/* Row for Start Time and End Time */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="startTime">Start Time</label>
                <select
                  id="startTime"
                  name="startTime"
                  value={appointment.startTime}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select Time</option>
                  {generateTimeSlots().map((slot) => (
                    <option
                      key={slot}
                      value={slot}
                      disabled={isSlotUnavailable(slot)} // Disable unavailable slots
                    >
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="endTime">End Time</label>
                <select
                  id="endTime"
                  name="endTime"
                  value={appointment.endTime}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select Time</option>
                  {generateTimeSlots().map((slot) => (
                    <option
                      key={slot}
                      value={slot}
                      disabled={isSlotUnavailable(slot)} // Disable unavailable slots
                    >
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Row for Examination Room and Physician ID */}
          <div className="row mb-3">
            <div className="col-md-6">
             
             
              <div className="form-group">
                <label htmlFor="examinationRoom">Examination Room</label>
                <input
                  type="text"
                  id="examinationRoom"
                  name="examinationRoom"
                  value={appointment.examinationRoom}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>


            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="physicianId">Physician ID</label>
                <input
                  type="number"
                  id="physicianId"
                  name="physicianId"
                  value={appointment.physicianId}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          {/* Row for Nurse ID and Patient ID */}
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="nurseId">Nurse ID</label>
                <input
                  type="number"
                  id="nurseId"
                  name="nurseId"
                  value={appointment.nurseId}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="patientId">Patient ID</label>
                <input
                  type="number"
                  id="patientId"
                  name="patientId"
                  value={appointment.patientId}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-group text-center">
            <button type="submit" className="btn btn-primary btn-block">
              Submit Appointment
            </button>
          </div>
        </form>

        {/* Message (success or error) */}
        <div className="form-msg mt-3 text-center">{msg}</div>
      </div>
    </div>
  );
}

export default AppointmentForm;
