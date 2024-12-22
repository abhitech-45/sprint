import React from 'react';

function AppointmentHome() {
  return (
    <div>
      {/* Custom text with internal CSS */}
      <div className="welcome-text">
        <h2>Welcome to Evergreen Healthcare!</h2>
        <p>We provide the best care for you and your loved ones. Explore our services and manage appointments with ease.</p>
      </div>

      {/* Internal CSS */}
      <style jsx>{`
        .welcome-text {
          display: flex;
          flex-direction: column; /* Stack text vertically */
          justify-content: center;
          align-items: center;
          text-align: center;
          height: calc(80vh - 70px); /* Full viewport height minus navbar height */
          background-color: #f4f4f9;
          margin-top: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .welcome-text h2 {
          color: #2a9d8f;  /* Teal-like color */
          font-size: 2rem;
          margin-bottom: 15px; /* Add space between title and paragraph */
        }
        .welcome-text p {
          color: #333;
          font-size: 1.1rem;
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}

export default AppointmentHome;
