import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>🏥 MediCare Hospital</h2>

        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Doctors</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Health, Our Priority</h1>

          <p>
            Providing world-class healthcare with experienced doctors,
            modern equipment, and compassionate care.
          </p>

          <button>Book Appointment</button>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>🩺 General Medicine</h3>
            <p>Complete diagnosis and treatment for all age groups.</p>
          </div>

          <div className="card">
            <h3>❤️ Cardiology</h3>
            <p>Expert heart care with advanced technology.</p>
          </div>

          <div className="card">
            <h3>🦴 Orthopedics</h3>
            <p>Bone, joint and spine specialists.</p>
          </div>

          <div className="card">
            <h3>👶 Pediatrics</h3>
            <p>Special healthcare services for children.</p>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="doctors">
        <h2>Our Specialists</h2>

        <div className="cards">
          <div className="card">
            <h3>Dr. Rahul Sharma</h3>
            <p>Cardiologist</p>
          </div>

          <div className="card">
            <h3>Dr. Priya Reddy</h3>
            <p>Orthopedic Surgeon</p>
          </div>

          <div className="card">
            <h3>Dr. Anjali Verma</h3>
            <p>Pediatrician</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact Us</h2>

        <p>📍 Bengaluru, Karnataka</p>

        <p>📞 +91 98765 43210</p>

        <p>✉️ contact@medicarehospital.com</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 MediCare Hospital. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;