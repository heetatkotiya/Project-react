import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "./signup.css";

const QuickBusSignup = () => {
  const navigate = useNavigate(); // ✅ Initialize the navigate function

  const handleSignup = () => {
    // Here you could add form validation, API call, etc.
    // For now, just redirect to login page
    navigate("/Login"); // ✅ Redirect to login page
  };

  return (
    <div className="signup-page">
      <header className="navbar">
        <div className="logo">Quick <span>Bus</span></div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <button className="login-btn">Login</button>
      </header>
      
      <div className="banner">
        <img src="/public/mainbus.jpg" alt="Bus Banner" />
      </div>

      <h2 className="page-title">Create Account</h2>

      <section className="signup-form-section">
        <h3>Sign up</h3>
        <div className="signup-form">
          <div className="form-group">
            <label>Full name</label>
            <input type="text" placeholder="User Name" />

            <label>Email</label>
            <input type="email" placeholder="Email" />

            <label>Address</label>
            <input type="text" placeholder="Address" />

            <label>Phone No</label>
            <input type="text" placeholder="Phone No" />

            <label>Gender</label>
            <select>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>User name</label>
            <input type="text" placeholder="User Name" />

            <label>Password</label>
            <input type="password" placeholder="Password" />

            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />

            <button className="signup-btn" onClick={handleSignup}>Sign up</button> {/* ✅ Button click navigates to login */}

            <p className="login-link">Do you have Account ? <a href="/login">Click here</a></p> {/* Optional fix for "click here" link */}
          </div>
        </div>
      </section>

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
};

export default QuickBusSignup;
