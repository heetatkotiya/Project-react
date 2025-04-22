// src/ForgotPassword.jsx
import React, { useState } from 'react';
import './ForgotPassword.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="forgot-container">
      <form className="forgot-box" onSubmit={handleReset}>
        <h2>Forgot Password</h2>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Reset my Password</button>
      </form>
    </div>
  );
}

export default ForgotPassword;