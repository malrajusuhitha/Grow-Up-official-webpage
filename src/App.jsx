import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";

// Service pages
import ResumeBuilding from "./pages/services/ResumeBuilding";
import CareerGuidance from "./pages/services/CareerGuidence";
import Internships from "./pages/services/Internships";
import OnlineCourses from "./pages/services/OnlineCourses";
import MockInterviews from "./pages/services/MockInterviews";
import JobPlacement from "./pages/services/JobPlacement";

// Auth pages
import LandingPage from "./LandingPage";
import AdminLogin from "./AdminLogin";
import ForgetPassword from "./ForgetPassword";
import ResetPassword from "./ResetPassword";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-started" element={<LandingPage />} />

        {/* Service Sub-Routes */}
        <Route path="/services/resume-building" element={<ResumeBuilding />} />
        <Route path="/services/career-guidance" element={<CareerGuidance />} />
        <Route path="/services/internships" element={<Internships />} />
        <Route path="/services/online-courses" element={<OnlineCourses />} />
        <Route path="/services/mock-interviews" element={<MockInterviews />} />
        <Route path="/services/job-placement" element={<JobPlacement />} />
        

        {/* Auth Routes */}
        <Route path="/userlogin" element={<Home />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
      </Routes>
  

      <Footer />
    </Router>
  );
}

export default App;
