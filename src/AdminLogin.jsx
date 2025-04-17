import React, { useState } from "react";
import axios from "axios";
import bgImage from "./assets/bgImage.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";


const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/adminlogin", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        console.log("Admin login successful:", response.data);
        // TODO: Navigate to admin dashboard or store token
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Login failed");
        console.error("Login error:", error.response.data);
      } else {
        setErrorMessage("Server not responding");
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-black opacity-40"></div>

      {/* Social Icons */}
      <div className="fixed top-1/3 right-4 z-50 flex flex-col space-y-4 text-white">
        {[FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, i) => (
          <a key={i} href="#" className="social-3d hover:text-teal-300 p-2 bg-black/30 rounded-full">
            <Icon size={20} className="transform transition-all hover:scale-125" />
          </a>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="text-xl md:text-5xl font-bold mb-2 font-serif">Admin Control</h2>
          <h2 className="text-xl md:text-2xl mb-8">Dashboard Access</h2>
        </div>

        <div className="bg-white/90 p-7 rounded-xl shadow-2xl text-gray-800 mx-auto w-full sm:w-[400px]">
          <h3 className="text-2xl font-semibold mb-6 pb-2">Admin Login</h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex items-center border-b border-black focus-within:border-blue-500 pb-2">
              <MdEmail className="text-black mr-2 text-xl" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
                placeholder="Enter your email"
                className="w-full bg-transparent border-none focus:outline-none placeholder-black"
              />
            </div>

            <div className="flex items-center border-b border-black focus-within:border-blue-500 pb-2">
              <MdLock className="text-black mr-2 text-xl" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
                placeholder="Enter your password"
                className="w-full bg-transparent border-none focus:outline-none placeholder-black"
              />
            </div>

            {errorMessage && (
              <p className="text-sm text-red-600 text-center">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-2 rounded font-medium hover:bg-[#4a5759] mt-2"
            >
              Login as Admin
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Only authorized personnel are allowed beyond this point.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
