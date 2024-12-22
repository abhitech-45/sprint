import axios from "axios"

let baseURL="http://localhost:8080"
class ApiService
{


  getUnavailableSlots(date, physicianId) {
    return axios
      .get(`/appointments/unavailable-slots`, {
        params: {
          date: date,  // Date string (e.g., '2024-12-25')
          physicianId: physicianId,  // Physician ID
        },
      })
      .then((response) => response.data) // Return the list of unavailable slots
      .catch((error) => {
        console.error("Error fetching unavailable slots:", error);
        throw error;
      });
  }

    bookAppointment(appointmentDto)
    {
      return axios.post(baseURL+"/api/appointment",appointmentDto)
    }

    getAllAppointments()
    {
     return axios.get(baseURL+"/api/appointment")
    }

    getAppointmentsByStartTo(startTo) {
        return axios.get(baseURL+"/api/appointment/"+startTo);
      }

      getNurseByAppointmentId(appointmentId)
      {
        return axios.get(baseURL+"/api/appointment/nurse/"+appointmentId);

      }
     
     
      getPhysicianListByPatientId(patientId)
      {
        return axios.get(baseURL+"/api/appointment/physicianList/"+patientId);

      }
     
     
      getPhysicianByAppointmentId(appointmentId)
      {
        return axios.get(baseURL+"/api/appointment/Listphysician/"+appointmentId);

      }
      getNursesByPatientId(patientId)
      {
        return axios.get(baseURL+"/api/patients/nursesList/"+patientId);

      }
      getPatientByAppointmentId(appointmentId)
      {
        return axios.get(baseURL+"/api/appointment/Listpatient/"+appointmentId);
      }
  
     
      addPatient(patientDto){
      return axios.post(baseURL+"/api/patient/add",patientDto)

      }
      getAllPatients()
      {
        return axios.get(baseURL+"/api/patient")
      }
      
      getPatientHasAppointmentDetails(patientId)
      {
        return axios.get(baseURL+"/patienthasappointmentcontroller/"+patientId)
      }
}

export default ApiService;