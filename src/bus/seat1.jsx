import React, { useState } from "react";
import "./seat.css";

const seats = Array.from({ length: 51 }, (_, i) => i + 1);
const reservedSeats = [6, 7, 18, 19, 20, 41, 45]; // Predefined reserved seats

const Sit1 = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]); // Stores booked seats permanently

  const toggleSeat = (seat) => {
    if (reservedSeats.includes(seat) || bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handlePayment = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat before proceeding to payment.");
      return;
    }

    const amount = selectedSeats.length * 1800 * 100; // Convert to paise
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const options = {
        key: "rzp_test_9ADOfemJ9hcVKe",
        amount: amount,
        currency: "INR",
        name: "QuickBus",
        description: "Bus Seat Booking",
        handler: function (response) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);

          // Mark selected seats as booked
          setBookedSeats((prev) => [...prev, ...selectedSeats]);
          setSelectedSeats([]); // Clear selection
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    };
    script.onerror = () => {
      alert("Failed to load Razorpay SDK. Please check your internet connection.");
    };
    document.body.appendChild(script);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">Quick <span className="highlight">Bus</span></div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <button className="login-btn">Login</button>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <img src="\public\mainbus.jpg" alt="Bus" />
      </div>

      {/* Reservation Section */}
      <div className="reservation-container">
        <h2 className="title">Reservation Bus</h2>
        <div className="content">
          {/* Seat Selection */}
          <div className="seats-container">
            <h3>Available Seats</h3>
            <div className="seats">
              {seats.map((seat) => (
                <button
                  key={seat}
                  className={`seat ${
                    reservedSeats.includes(seat) ? "reserved" :
                    bookedSeats.includes(seat) ? "booked" :
                    selectedSeats.includes(seat) ? "selected" : ""
                  }`}
                  onClick={() => toggleSeat(seat)}
                  disabled={reservedSeats.includes(seat) || bookedSeats.includes(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>

            {/* Seat Legend */}
            <div className="legend">
              <div><span className="available-box"></span> Available</div>
              <div><span className="reserved-box"></span> Reserved</div>
              <div><span className="booked-box"></span> Booked</div>
            </div>
          </div>

          {/* Bus Details */}
          <div className="bus-details">
            <h3>Bus Details</h3>
            <p>Bus No: <span className="highlight">GJ 1234</span></p>
            <p>Depart: <span className="highlight">Rajkot</span></p>
            <p>Department Date: <span className="highlight">25-2-25</span></p>
            <p>Department Time: <span className="highlight">02:00</span></p>
            <p>Arrival Time: <span className="highlight">10:00</span></p>
            <p>Department Location: <span className="highlight">Rajkot</span></p>
            <p>Arrival Location: <span className="highlight">Vapi</span></p>
            <p>Available Seats: {51 - bookedSeats.length - reservedSeats.length}</p>
            <p>Route No: 51</p>
            <p>Amount: ₹{selectedSeats.length * 1800}</p>
            <button className="confirm-btn" onClick={handlePayment}>
              Confirm Book
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
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

export default Sit1;
