import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import Appointment from './Components/Appointment';
import AppointmentForm from './Components/AppointmentForm';


function Home() {
  return (
    <div>
      {/* Navbar with updated color scheme */}
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">Evergreen Healthcare</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/home/patientdetails">Patient Details</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home/addpatient">Add Patient</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home/appointments">Appointments Details</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home/create-appointment">Add Appointment</Link>
              </li>
              <li className="nav-item">
              {/* <Link className="nav-link" to={`/home/patientappointmentdetails/$:{patientId}`}>Check Appointments</Link> */}
              <Link className="nav-link" to="/home/list">Check Appointments</Link>

              </li>


            </ul>
          </div>
        </div>
      </nav> 
      

      {/* Content area, where the nested route will render */}
      <div className="container mt-5">
        <Outlet />
      </div>
    </div>
    
  );
}

export default Home;
