import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Using BrowserRouter as Router
import Home from './Home'; // Importing Home component
import Mainpage from './Mainpage'; // Importing Mainpage component
import Appointment from './Components/Appointment'; // Importing Appointment component
import AppointmentForm from './Components/AppointmentForm'; // Importing AppointmentForm component
import './assets/css/App.css'; // Global CSS
import { Navbar } from 'react-bootstrap';
import NavbarSection from './Components/NavbarSection';
import PatientForm from './Components/PatientForm';
import PatientTable from './Components/PatientTable';
import AppointmentHome from './Components/AppointmentHome';
import PatientAppointmentDetails from './Components/PatientAppointmentDetails';
import PatientList from './Components/PatientList';

function App() {
  return (
    <Router>

    {/* <NavbarSection ></NavbarSection> */}

      <Routes>
        {/* Main page route */}
        <Route path="/" element={<Mainpage />} />
        
        {/* Home route with nested routes */}
        <Route path="/home" element={<Home />}>

        {/* <Route path="/home/*" element={<Home />}> */}
          {/* Nested routes under Home */}
          <Route path="/home/" element={<AppointmentHome />} />

          <Route path="/home/appointments" element={<Appointment />} />
          <Route path="/home/create-appointment" element={<AppointmentForm />} />
          <Route path="/home/addpatient" element={<PatientForm />} />
          <Route path="/home/patientdetails" element={<PatientTable />} />
          <Route path="/home/list" element={<PatientList />} />
        
        {/* Route to display the Patient Appointment Details */}
        {/* <Route path="/home/list/:appointmentId" component={PatientAppointmentDetails} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
