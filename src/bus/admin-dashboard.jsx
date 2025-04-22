import React from 'react';
import './Dashboard.css';
import { FaBus, FaUser, FaBook, FaPowerOff, FaTachometerAlt, FaTimes, FaHeartbeat, FaListAlt } from 'react-icons/fa';

export default function AdminDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">
          <span className="green">Quick</span> Bus
        </h1>

        {/* Profile */}
        <div className="profile">
          <div className="profile-icon">
            <FaUser size={32} />
          </div>
          <h2 className="profile-name">Admin</h2>
          <p className="profile-role">Administrator</p>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" active />
          <SidebarItem icon={<FaListAlt />} label="Bus Detail" />
          <SidebarItem icon={<FaTimes />} label="Cancelled Detail" />
          <SidebarItem icon={<FaHeartbeat />} label="Depart" />
        </nav>

        <div className="logout">
          <SidebarItem icon={<FaPowerOff />} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="topbar">
          <FaUser size={24} />
        </div>

        {/* Cards */}
        <div className="cards">
          <DashboardCard icon={<FaBus size={32} />} label="Available buses" value="10" />
          <DashboardCard icon={<FaBook size={32} />} label="Bookings" value="12" />
          <DashboardCard icon={<FaUser size={32} />} label="Users" value="14" />
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div className={`nav-item ${active ? 'active' : ''}`}>
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </div>
  );
}

function DashboardCard({ icon, label, value }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-label">{label}</div>
      <div className="card-value">{value}</div>
    </div>
  );
}
