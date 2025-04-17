import React, { useState } from "react";
import backgroundImg from "./assets/image.jpg";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
export default function LandingPage() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);  
  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/share/1ECCKk1mR9/" },
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
    { icon: FaTwitter, href: "https://x.com/ItGrowup95909" },
    { icon: FaInstagram, href: "https://www.instagram.com/growup_it_services?igsh=MWVmYTd6bXFtMm5qNQ%3D%3D&utm_source=qr" },
  ];
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const isPasswordMatch = password === rePassword;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (!isPasswordMatch) return;

      try {
        await axios.post("http://127.0.0.1:8000/signup", {
          name: fullName,
          email,
          phone,
          password,
        });

        setFullName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setRePassword("");
        setIsSignUp(false);
      } catch (err) {
        console.error("Signup failed:", err);
      }
    } else {
      try {
        const response = await axios.post("http://localhost:8000/login", {
          email: loginEmail,
          password: loginPassword,
        });

        if (response.status === 200) {
          console.log("Login successful");
          setLoginEmail("");
          setLoginPassword("");
          navigate("/"); // ⬅ Navigate to Home
        } else {
          console.error("Login failed");
        }
    
    
      } catch (err) {
        if (err.response) {
          if (err.response.status === 401) {
            console.error("Incorrect password.");
          } else if (err.response.status === 404) {
            console.error("User not found.");
          } else {
            console.error("Login failed:", err.response.data.message || "Unknown error");
          }
        } else if (err.request) {
          console.error("No response from server");
        } else {
          console.error("Error:", err.message);
        }
      }
    }
  };

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setRePassword("");
    setLoginEmail("");
    setLoginPassword("");
  };

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="absolute top-6 w-full px-10 flex justify-between items-center z-50">
      

        {!isSignUp && (
          <div className="hover-3d pt-24">
            <button
              style={{ borderRadius: "8px", borderColor: "black" }}
              className="rounded-lg border border-transparent px-3 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer transition-colors duration-200 hover:bg-[#4a5759]"
            >
              <a
                href="#"
                className="text-white text-lg font-medium"
                style={{ textDecoration: "none" }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/Adminlogin");
                }}
              >
                <RiAdminLine />
              </a>
            </button>
          </div>
        )}
      </div>

      <div className="fixed top-1/3 right-4 z-50 flex flex-col space-y-4 text-white">
        {socialLinks.map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-3d hover:text-teal-300 p-2 bg-black/30 rounded-full"
          >
            <Icon size={20} className="transform transition-all hover:scale-125" />
          </a>
        ))}
      </div>

      <div className="relative flex justify-center gap-x-45 items-center min-h-screen px-4 text-center mt-2">
        <h1
          style={{ fontSize: "4em" }}
          className="text-white font-serif font-semibold leading-tight mb-12 transform hover:scale-105 transition-all duration-500"
        >
          Your Success <br />
          <span className="inline-block transform hover:translate-z-2">Begins With Us</span>
        </h1>

        <div className="bg-white max-w-2xl p-10 rounded-xl shadow-lg mt-29 mb-10">
          <div className="mb-4">
            <h2 className="text-center text-xl text-gray-800 font-semibold">
              {isSignUp ? "Create Your Account" : <> Ready to start your <br /> growth journey? </>}
            </h2>
          </div>

          <form className="flex flex-col gap-3 mt-3" onSubmit={handleSubmit} autoComplete="off">
            {isSignUp ? (
              <>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full border-b border-gray-400 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border-b border-gray-400 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    pattern="[0-9]{10}"
                    title="Phone number must be exactly 10 digits"
                    className="w-full border-b border-gray-400 outline-none focus:border-black"
                    onInvalid={(e) =>
                      e.target.setCustomValidity("Phone number must be exactly 10 digits")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Password *</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border-b border-gray-400 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Re-enter Password *</label>
                  <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    required
                    className={`w-full border-b outline-none ${isPasswordMatch ? "border-gray-400 focus:border-black" : "border-red-500 focus:border-red-700"}`}
                  />
                  {!isPasswordMatch && rePassword && (
                    <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center border-b-1 border-black-300 focus-within:border-blue-500">
                  <MdEmail className="text-black mr-2 text-xl" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-transparent border-none focus:outline-none placeholder-black pb-1 mt-1"
                  />
                </div>

                <div className="relative">
                  <div className="flex items-center border-b-1 border-black-300 focus-within:border-blue-500">
                    <MdLock className="text-black mr-2 text-xl" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                      className="w-full bg-transparent border-none focus:outline-none placeholder-black mt-1 pb-1"
                    />
                    <button
                      onClick={togglePasswordVisibility}
                      type="button"
                      className="absolute right-2 top-3 transform -translate-y-1/2 text-sm text-blue-600"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  <a className="text-sm ml-50 text-blue-600" href="#" onClick={() => navigate("/forget-password")}>
                    Forgot password?
                  </a>
                </div>
              </>
            )}

            <button
              type="submit"
              style={{ borderRadius: "8px" }}
              className="w-full rounded-lg border border-transparent px-5 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer hover:bg-[#4a5759]"
            >
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-4">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={handleToggleForm}
              className="rounded-lg border border-transparent px-5 py-2 text-base font-medium bg-[#1a1a1a] text-white cursor-pointer hover:bg-[#4a5759]"
            >
              {isSignUp ? "Login here" : "Sign Up here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
