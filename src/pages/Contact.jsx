import React, { useState, useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import Chatbot from '../components/Chatbot';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaCheckCircle,
} from "react-icons/fa";
import Confetti from "react-confetti";
import "../utils/index.css";
import myImg from "../assets/li.jpg";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import { useWindowSize } from "react-use";

function Contact() {
  const [email, setEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    if (!name.trim() || !message.trim()) isValid = false;

    if (isValid) {
      console.log("Form submitted:", { email, name, phone, message });

      setSubmittedName(name); 

      setEmail("");
      setName("");
      setPhone("");
      setMessage("");
      setIsSubmitted(true);

      setTimeout(() => setIsSubmitted(false), 30000);
    }
  };

  const handleGoBack = () => {
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    const firstName = submittedName?.trim()?.split(" ")[0] || "there";

    return (
      <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-r from-blue-300 to-purple-500 text-black p-6 sm:p-10 relative">
        <Confetti
          width={width}
          height={height}
          numberOfPieces={250}
          recycle={false}
        />

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white text-center p-12 sm:p-10 rounded-3xl shadow-2xl max-w-2xl w-full"
        >
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="animate-bounce text-green-500 text-5xl" />
          </div>
          <h1 className="text-4xl font-bold text-[#1f4f91] mb-2">
            Thank You, {firstName}!
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            Thank you for your message!
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We’ll get back to you as soon as possible.
          </p>

          <motion.button
            onClick={handleGoBack}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1f4f91] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#173e75] transition-colors duration-300"
          >
            Go Back
          </motion.button>
        </motion.div>
      </div>
    );
  }
  const facebookUrl = "https://www.facebook.com/";
  const twitterUrl = "https://x.com/ItGrowup95909";
  const youtubeUrl = "https://www.youtube.com/";
  const linkedinUrl = "https://www.linkedin.com/company/";
  const instagramUrl =
    "https://www.instagram.com/growup_it_services?igsh=MWVmYTd6bXFtMm5qNQ%3D%3D&utm_source=qr";
  const officeAddress = "1016, DSL ABACUS IT PARK, Uppal, Hyderabad";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    officeAddress
  )}`;
  const phoneNumber1 = "234-9876-5400";
  const phoneNumber2 = "888-0123-4567";
  const faxNumber = "1-234-567-8900";
  const terms = "www.growup.com";
  const privacy = "www.growup.com";

  return (
    <div className="w-full  min-h-screen min-w-screen bg-white mb-15 mt-23">
      <motion.img
        src={myImg}
        alt="Contact Us"
        className="w-full h-[600px] object-cover mb-10 rounded-md"
        initial={{ y: -10 }}
        animate={{ y: [0, 5, 0] }}
      />
      <p className="text-xl italic text-center text-[#1f4f91] font-semibold mb-10 mt-5">
        “We’re just a message away! Let’s connect and grow together.”
      </p>

      <div className="w-full bg-gradient-to-r from-blue-300 to-purple-500 text-black p-6 sm:p-10 mt-0 bg-clip-padding">
        <div className="max-w-screen-xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Location */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white text-black text-center p-5 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out no-underline block transform hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 delay-100"
              }`}
            >
              <FaMapMarkerAlt className="text-2xl mb-2 mx-auto text-red-600" />
              <h3 className="text-sm font-bold mb-1 uppercase text-black">
                OUR MAIN OFFICE
              </h3>
              <p className="text-xs text-gray-700">{officeAddress}</p>
            </a>

            {/* Phone */}
            <div
              className={`bg-white text-black text-center p-5 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 delay-200"
              }`}
            >
              <FaPhoneAlt className="text-2xl mb-2 mx-auto text-green-600" />
              <h3 className="text-sm font-bold mb-1 uppercase text-black">
                PHONE NUMBER
              </h3>
              <a
                href={`tel:${phoneNumber1}`}
                className="text-xs text-gray-700 no-underline hover:underline"
              >
                {phoneNumber1}
              </a>
              <p className="text-xs text-gray-700">(Toll Free)</p>
              <a
                href={`tel:${phoneNumber2}`}
                className="text-xs text-gray-700 no-underline hover:underline"
              >
                {phoneNumber2}
              </a>
            </div>

            {/* Fax */}
            <div
              className={`bg-white text-black text-center p-5 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 delay-300"
              }`}
            >
              <FaFax className="text-2xl mb-2 mx-auto text-blue-600" />
              <h3 className="text-sm font-bold mb-1 uppercase text-black">
                FAX
              </h3>
              <a
                href={`fax:${faxNumber}`}
                className="text-xs text-gray-700 no-underline hover:underline"
              >
                {faxNumber}
              </a>
            </div>

            {/* Email */}
            <a
              href="mailto:info@growup.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-white text-black text-center p-5 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out no-underline block transform hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 delay-400"
              }`}
            >
              <FaEnvelope className="text-2xl mb-2 mx-auto text-yellow-600" />
              <h3 className="text-sm font-bold mb-1 uppercase text-black">
                EMAIL
              </h3>
              <p className="text-xs text-gray-700">info@growup.com</p>
            </a>
          </div>

          {/* Main Section */}
          <div className="bg-white text-black p-10 rounded-md flex flex-col md:flex-row mt-10">
            {/* Left Info */}
            <div className="md:w-1/2 pr-8 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4 text-left uppercase text-black">
                GET IN TOUCH
              </h2>
              <p className="text-base leading-relaxed mb-3 text-left text-gray-800 flex items-center">
                <span className="text-[#1f4f91] mr-2 text-lg">🚀</span>
                <span>
                  <span className="font-semibold text-[#1f4f91]">Grow Up</span>{" "}
                  helps students discover careers, apply seamlessly, and connect
                  with top opportunities.
                </span>
              </p>
              <p className="text-base leading-relaxed mb-6 text-left text-gray-800 flex items-center">
                <span className="text-purple-600 mr-2 text-lg">📘</span>
                <span>
                  Explore expert tips on{" "}
                  <span className="font-semibold italic">resumes</span>,{" "}
                  <span className="font-semibold italic">interviews</span>, and{" "}
                  <span className="font-semibold italic">career growth</span>.
                </span>
              </p>

              {/* Social Icons */}
              <div className="flex">
                {[
                  facebookUrl,
                  twitterUrl,
                  youtubeUrl,
                  linkedinUrl,
                  instagramUrl,
                ].map((url, index) => {
                  const icons = [
                    FaFacebookF,
                    FaXTwitter,
                    FaYoutube,
                    FaLinkedinIn,
                    FaInstagram,
                  ];
                  const colors = [
                    "#1877F2",
                    "#030303",
                    "#FF0000",
                    "#0077B5",
                    "#E1306C",
                  ];
                  const Icon = icons[index];
                  return (
                    <a
                      key={index}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-md flex justify-center items-center mr-3 transition duration-300 ease-in-out transform hover:scale-110"
                      style={{ backgroundColor: colors[index] }}
                    >
                      <Icon className="text-white text-lg" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="md:w-1/2 pl-8">
              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-4 text-left">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold mb-2 uppercase text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter a valid email"
                    className="w-full p-2 rounded-md border border-gray-600 text-black focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-700"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1 text-left">
                      {emailError}
                    </p>
                  )}
                </div>

                {/* Name */}
                <div className="mb-4 text-left">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold mb-2 uppercase text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full p-2 rounded-md border border-gray-600 text-black focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-700"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>

                {/* Phone */}
                <div className="mb-4 text-left">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold mb-2 uppercase text-black"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Phone Number"
                    className="w-full p-2 rounded-md border border-gray-600 text-black focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-700"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>

                {/* Message */}
                <div className="mb-6 text-left">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold mb-2 uppercase text-black"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    className="w-full p-2 rounded-md border border-gray-600 text-black min-h-[80px] focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out hover:border-indigo-700"
                    value={message}
                    onChange={handleMessageChange}
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="text-left">
                  <button
                    type="submit"
                    className="bg-blue-800 text-white rounded-md text-sm font-bold cursor-pointer uppercase px-6 py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-500 shadow-md hover:shadow-lg"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>

          <p className="text-center text-black-800 mt-6 text-xs">
            © 2025, Grow Up Hyderabad | <a href={terms}>Terms & Conditions</a> |{" "}
            <a href={privacy}>Privacy Policy</a>
          </p>
        </div>
      </div>
      <Chatbot />
    </div>
  );
}

export default Contact;
