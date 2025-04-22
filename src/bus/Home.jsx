import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home1() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* ===== Navbar ===== */}
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-green">Quick</span><span className="logo-black">Bus</span>
        </div>
        <nav className="navbar-center">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="navbar-right">
          <a href="/login" className="login-button">Login</a>
          <button
            onClick={() => navigate("/bus/admin-dashboard")}
            className="login-button"
          >
            Admin
          </button>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="hero-section">
        <img src="/public/1.jpg" alt="bus" className="hero-image" />
      </section>

      {/* ===== Info Section ===== */}
      <section className="info-section">
        <div className="info-text">
          <h2>Bus Booking Made Easy and Efficient in India</h2>
          <p style={{ color: 'green', fontWeight: 'normal' }}>
            Plan Journey, Reserve bus seats,<br />
            Reach destination.
          </p>
          <p>
            We provide full fledged online bus booking platform to buy and sell bus seats.
            The passenger can purchase bus tickets online and in return to confirm the seat reservation,
            a text message with the details of travel will be sent.
          </p>
          <p>
            With the efficient bus reservation system from Bus Seat.lk, plan your journey early,
            save your valuable time in buying bus tickets, avoid waiting in long queues,
            find your boarding place easily and enjoy your happy journey with comfort.
          </p>
        </div>
        <img src="/public/2.jpg" alt="bus" className="info-image" />
      </section>

      {/* ===== Stats Section ===== */}
      <section className="stats-section">
        <div className="stat-box"><strong>1000+</strong><span>Passengers</span></div>
        <div className="stat-box"><strong>200</strong><span>Busses</span></div>
        <div className="stat-box"><strong>50+</strong><span>Seats</span></div>
        <div className="stat-box"><strong>100+</strong><span>Places</span></div>
      </section>

      {/* ===== Why Book Section ===== */}
      <section className="why-book-section">
        <div className="why-book-left">
          <h3>Why Book With My Book</h3>
          <p>
            To provide the public a safe, dependable and comfortable road passenger transport at a reasonable fare system through a staff dedicated to service and obtain the optimum utilization of all resources functioning as a financially viable organization
          </p>
        </div>

        <div className="why-book-right">
          <div className="why-card">
            <div className="icon-box">
              <img src="/public/icons8-archive-96.png" alt="More Choices Icon" className="icon-image" />
              <h4>more choices</h4>
              <p>We give you maximum choices across all the routes to choose your bus.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="icon-box">
              <img src="/public/icons8-call-64.png" alt="customer care Icon" className="icon-image" />
              <h4>customer care</h4>
              <p>We help you to make your journey better.</p>
            </div>
          </div>

          <div className="why-card">
            <div className="icon-box">
              <img src="/public/icons8-us-dollar-96.png" alt="best price" className="icon-image" />
              <h4>best price</h4>
              <p>We always offer best bus ticket price in the market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Available Buses Section ===== */}
      <section className="available-buses-section">
        <h3>Busses <span className="line"></span></h3>
        <h2><strong>AvailableBusses</strong></h2>

        <div className="bus-card-container">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="bus-card" key={index}>
              <img src="../../public/bus2.jpg" alt="Bus" />
              <div className="bus-card-content">
                <div className="bus-card-top">
                  <span className="bus-code">GJ 1234</span>
                  <span className="bus-price">Rs.1800</span>
                </div>
                <p>Available Seats : <span className="highlight-green">50</span></p>
                <p>Route: <span className="highlight-green">Rajkot - Vapi</span></p>
                <p>Route No: <span className="highlight-green">25</span></p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '10px' }}>
          <button
          onClick={() => navigate("/find-bus")}
          className="find-more-btn"
        >
Find more        
</button>
        </div>
      </section>

      {/* ===== Footer Section ===== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4><span className="logo-green">Quick</span> Bus</h4>
            <p>Phone<br />+98 2510001151</p>
            <p>Email<br />Info@Quickbus.com</p>
          </div>
          <div className="footer-column">
            <h4>Useful links</h4>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Why Choose us</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Top Routes</h4>
            <ul>
              <li>Rajkot–Vapi</li>
              <li>Rajkot–Surat</li>
              <li>Rajkot–Vadodara</li>
              <li>Rajkot–Ujjain</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Join Our Newsletter</h4>
            <input type="email" placeholder="Email" className="newsletter-input" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© copyright Quickbus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home1;
