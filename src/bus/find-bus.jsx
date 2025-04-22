import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./find-bus.css";
import Sit1 from "./seat1";
import Sit2 from "./seat2";
import Sit3 from "./seat3";
// import Dashboard from "./admin-dashboard";

function App1() {
  const [from, setFrom] = useState("Rajkot");
  const [to, setTo] = useState("Vapi");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
 
  

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          Quick <span className="highlight">Bus</span>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <button className="login-btn" onClick={() => navigate("/src/bus/Login.jsx")}>
      Login
    </button>
      </header>

      <div className="hero">
        <img src="mainbus.jpg" alt="Bus" className="heroImage" />
      </div>

      <div className="search-container">
        <h2 className="title">Find Bus</h2>
        <p className="subtitle">The simplest way to book your bus ticket in India</p>

        <div className="searchBar">
          <input
            className="input"
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="From"
          />
          <input
            className="input"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="To"
          />
          <input
            className="input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="busList">
        {["bus1", "bus2", "bus3"].map((bus, index) => (
          <div key={bus} className="busCard">
            <img src={`bus${index + 1}.jpg`} alt={`Bus ${index + 1}`} className="busImage" />
            <div className="busInfo">
              <span className="busNumber">GJ03{String.fromCharCode(65 + index)}W123{index}</span>
              <span className="busPrice">Rs. 1500</span>
              <p>Available Seats: <strong>50</strong></p>
              <p>Route: <strong>Rajkot - Vapi</strong></p>
              <p>Route No: <strong>25</strong></p>

              {/* Navigate to seat page with bus ID */}
                <button 
            onClick={() => navigate(`/bus/seat/${bus}`)} 
            className={`button bus-${index + 1}`}
          >
            Book Now
          </button>
            </div>
          </div>
        ))}
      </div>


      

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick <span className="highlight">Bus</span></h4>
            <p>Phone: +98 2510001151</p>
            <p>Email: info@quickbus.com</p>
          </div>
          <div className="footer-section">
            <h4>Useful Links</h4>
            <p>Home</p>
            <p>Contact</p>
            <p>About</p>
            <p>Why Choose Us</p>
          </div>
          <div className="footer-section">
            <h4>Top Routes</h4>
            <p>Rajkot - Vapi</p>
            <p>Rajkot - Surat</p>
            <p>Rajkot - Vadodara</p>
            <p>Rajkot - Ujjain</p>
          </div>
          <div className="footer-section">
            <h4>Join Our Newsletter</h4>
            <input type="email" placeholder="Email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App1;