import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Seat1 from "./bus/seat1";
import Seat2 from "./bus/seat2";
import Seat3 from "./bus/seat3";
import App1 from "./bus/Find-bus";
import CheckoutForm from "./bus/CheckoutForm";
import LoginPage from "./bus/Login";
import QuickBusSignup from "./bus/signup";
import Home1 from "./bus/home";
import AdminDashboard from "./bus/admin-dashboard"; // if you have this page

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Home Page */}
        <Route path="/" element={<LoginPage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<QuickBusSignup />} />

        {/* Bus Pages */}
        <Route path="/find-bus" element={<App1 />} /> {/* Optional if you still want to access it */}
        <Route path="/bus/seat/bus1" element={<Seat1 />} />
        <Route path="/bus/seat/bus2" element={<Seat2 />} />
        <Route path="/bus/seat/bus3" element={<Seat3 />} />
        <Route path="/bus/CheckoutForm" element={<CheckoutForm />} />

        {/* Optional Additional Home Route */}
        <Route path="/bus/Home" element={<Home1 />} />

        {/* Admin Dashboard Route */}
        <Route path="/bus/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
