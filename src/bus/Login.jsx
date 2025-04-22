import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import "./Login.css"; // Import CSS file

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    console.log("Logging in with", username, password);
     navigate("/bus/Home");
  };

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <h1 className="logo">
          Quick <span>Bus</span>
        </h1>
        <nav>
          <a href="./home.jsx">Home</a>
          <a href="./home.jsx">About</a>
          <a href="./home.jsx">Contact</a>
        </nav>
      
        
      </header>

      {/* Banner */}
      <div className="banner">
        <img src="/public/mainbus.jpg" alt="Bus" />
      </div>

      {/* Login Form */}
      <div className="login-container">
        <div className="icon-wrapper">
          <User size={64} color="green" />
        </div>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <Mail size={20} />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <Lock size={20} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="forgot-password">Forgot password?</p>

        <button onClick={handleLogin} className="submit-btn">
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="signup-link-button"
        >
          Don't have an account? Click here
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>
              Quick <span className="highlight">Bus</span>
            </h4>
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
