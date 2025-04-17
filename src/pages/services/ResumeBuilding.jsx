import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaStar,
  FaFileAlt,
  FaUsers,
  FaClock,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

import resumeHeroImage from "../../assets/ResumeWriting_Neomaster.png";
import Chatbot from "../../components/Chatbot";

function ResumeBuilding() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    howItWorks: false,
    pricing: false,
    testimonials: false,
    cta: false,
  });

  const scrollToFeatures = () => {
    const featuresSection = document.querySelector("#key-features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setIsVisible((prev) => ({
        ...prev,
        hero: true,
        features: true,
        howItWorks: true,
        pricing: true,
        testimonials: true,
        cta: true,
      }));
    }, 100);

    // Scroll to top of the page when component mounts
    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target.getAttribute("data-section");
            setIsVisible((prev) => ({ ...prev, [section]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleBack = () => {
    navigate("/services");
  };

  const features = [
    {
      title: "ATS-Friendly Templates",
      description:
        "Our templates are designed to pass through Applicant Tracking Systems with ease, ensuring your resume gets seen by hiring managers.",
      icon: <FaCheckCircle className="feature-icon" />,
    },
    {
      title: "Industry-Specific Formats",
      description:
        "Choose from templates specifically designed for your industry, highlighting the skills and experiences that matter most.",
      icon: <FaCheckCircle className="feature-icon" />,
    },
    {
      title: "Expert Review",
      description:
        "Get your resume reviewed by industry professionals who can provide personalized feedback and suggestions.",
      icon: <FaCheckCircle className="feature-icon" />,
    },
    {
      title: "Keyword Optimization",
      description:
        "Our AI-powered tool helps you optimize your resume with industry-specific keywords to increase your chances of getting noticed.",
      icon: <FaCheckCircle className="feature-icon" />,
    },
    {
      title: "Easy-to-Use Builder",
      description:
        "Our intuitive drag-and-drop interface makes it easy to create a professional resume in minutes.",
      icon: <FaCheckCircle className="feature-icon" />,
    },
    {
      title: "Multiple Format Export",
      description:
        "Export your resume in multiple formats (PDF, DOCX, TXT) to ensure compatibility with any application system.",
      icon: <FaCheckCircle className="feature-icon" />,
    },
  ];

  const packages = [
    {
      title: "Basic",
      price: "$9.99",
      period: "/month",
      description: "Perfect for beginners",
      features: [
        { text: "5 Resume Templates", included: true },
        { text: "PDF Export", included: true },
        { text: "Basic ATS Optimization", included: true },
        { text: "Expert Review", included: false },
        { text: "Cover Letter Builder", included: false },
      ],
    },
    {
      title: "Professional",
      price: "$19.99",
      period: "/month",
      description: "For serious job seekers",
      features: [
        { text: "20 Resume Templates", included: true },
        { text: "All Export Formats", included: true },
        { text: "Advanced ATS Optimization", included: true },
        { text: "1 Expert Review/month", included: true },
        { text: "Cover Letter Builder", included: true },
      ],
      recommended: true,
    },
    {
      title: "Premium",
      price: "$29.99",
      period: "/month",
      description: "For career professionals",
      features: [
        { text: "All Resume Templates", included: true },
        { text: "All Export Formats", included: true },
        { text: "Premium ATS Optimization", included: true },
        { text: "Unlimited Expert Reviews", included: true },
        { text: "Cover Letter & LinkedIn Profile", included: true },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      content:
        "After using GrowUp's resume builder, I received calls for interviews within a week. The templates are professional and the ATS optimization really works!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      content:
        "The expert review service was invaluable. They helped me highlight my technical skills in a way that caught the attention of top tech companies.",
      rating: 4.5,
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Professional",
      content:
        "As someone switching careers, I was struggling to showcase my transferable skills. GrowUp's resume builder helped me create a resume that landed me my dream job in a new industry.",
      rating: 5,
    },
  ];

  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0px",
          opacity: isVisible.hero ? 1 : 0,
          transform: isVisible.hero ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <div
          className="hero-section"
          style={{
            position: "relative",
            height: "670px",
            backgroundImage: `url(${resumeHeroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            color: "white",
            marginTop: "85px",
            textAlign: "left",
            marginBottom: "80px",
            opacity: isVisible.hero ? 1 : 0,
            transform: isVisible.hero ? "scale(1)" : "scale(1.1)",
            transition: "all 1.2s ease-out",
            borderRadius: "0",
            overflow: "hidden",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            width: "100vw",
          }}
        >
          <button
            onClick={() => navigate("/services")}
            style={{
              position: "absolute",
              top: "30px",
              left: "30px",
              zIndex: 10,
              background: "linear-gradient(135deg, #4F46E5, #9333EA)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "12px 24px",
              borderRadius: "50px",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "500",
              backdropFilter: "blur(10px)",
              transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              opacity: isVisible.hero ? 1 : 0,
              transform: isVisible.hero ? "translateX(0)" : "translateX(-20px)",
              transitionDelay: "1s",
              animation: "pulse 2s infinite",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #6366F1, #A855F7)";
              e.currentTarget.style.transform = "translateY(-2px) scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(79, 70, 229, 0.3)";
              e.currentTarget.style.border =
                "1px solid rgba(255, 255, 255, 0.4)";
              const arrow = e.currentTarget.querySelector(".back-arrow");
              if (arrow) {
                arrow.style.transform = "translateX(-5px)";
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #4F46E5, #9333EA)";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.border =
                "1px solid rgba(255, 255, 255, 0.2)";
              const arrow = e.currentTarget.querySelector(".back-arrow");
              if (arrow) {
                arrow.style.transform = "translateX(0)";
              }
            }}
          >
            <FaArrowLeft
              className="back-arrow"
              style={{
                fontSize: "0.9rem",
                transition: "transform 0.3s ease",
                animation: "slideRight 1s infinite alternate",
              }}
            />
            Back to Services
          </button>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.6)",
              zIndex: 1,
              opacity: isVisible.hero ? 1 : 0,
              transition: "opacity 1.5s ease-out",
            }}
          ></div>
          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: "600px",
              padding: "0 40px",
              marginLeft: "10%",
              opacity: isVisible.hero ? 1 : 0,
              transform: isVisible.hero ? "translateX(0)" : "translateX(-50px)",
              transition: "all 1s ease-out",
              transitionDelay: "0.5s",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                color: "#E0E0E0",
                marginBottom: "1rem",
                opacity: isVisible.hero ? 1 : 0,
                transform: isVisible.hero
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: "all 0.8s ease-out",
                transitionDelay: "0.7s",
              }}
            >
              Professional Resume Building
            </p>
            <h1
              style={{
                fontSize: "3.5rem",
                marginBottom: "1.5rem",
                fontWeight: "700",
                lineHeight: "1.2",
                opacity: isVisible.hero ? 1 : 0,
                transform: isVisible.hero
                  ? "translateY(0)"
                  : "translateY(30px)",
                transition: "all 0.8s ease-out",
                transitionDelay: "0.9s",
              }}
            >
              Create a{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF8C00, #FF1493)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Standout Resume
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.6",
                color: "#E0E0E0",
                marginBottom: "2rem",
                maxWidth: "500px",
                opacity: isVisible.hero ? 1 : 0,
                transform: isVisible.hero
                  ? "translateY(0)"
                  : "translateY(40px)",
                transition: "all 0.8s ease-out",
                transitionDelay: "1.1s",
              }}
            >
              Professional resume crafting services to help you stand out to
              employers with a compelling and well-structured resume.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <section
          id="key-features"
          style={{
            marginBottom: "80px",
            opacity: isVisible.features ? 1 : 0,
            transform: isVisible.features
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "all 0.8s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              color: "#333",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Key Features
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#666",
              textAlign: "center",
              marginBottom: "3rem",
              maxWidth: "700px",
              margin: "0 auto 3rem",
            }}
          >
            Our resume building service offers everything you need to create a
            professional, <br></br> eye-catching resume.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              marginTop: "2rem",
            }}
          >
            {[
              {
                icon: "📄",
                title: "ATS-Friendly Templates",
                description:
                  "Our templates are designed to pass through Applicant Tracking Systems with ease, ensuring your resume gets seen by hiring managers.",
              },
              {
                icon: "🎯",
                title: "Industry-Specific Formats",
                description:
                  "Choose from templates specifically designed for your industry, highlighting the skills and experiences that matter most.",
              },
              {
                icon: "👥",
                title: "Expert Review",
                description:
                  "Get your resume reviewed by industry professionals who can provide personalized feedback and suggestions.",
              },
              {
                icon: "🔍",
                title: "Keyword Optimization",
                description:
                  "Our AI-powered tool helps you optimize your resume with industry-specific keywords to increase your chances of getting noticed.",
              },
              {
                icon: "🛠️",
                title: "Easy-to-Use Builder",
                description:
                  "Our intuitive drag-and-drop interface makes it easy to create a professional resume in minutes.",
              },
              {
                icon: "📱",
                title: "Multiple Format Export",
                description:
                  "Export your resume in multiple formats (PDF, DOCX, TXT) to ensure compatibility with any application system.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 15px rgba(0, 0, 0, 0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.05)";
                }}
              >
                <span
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    display: "block",
                  }}
                >
                  {feature.icon}
                </span>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section
          style={{
            marginBottom: "80px",
            background: "#F8F9FA",
            padding: "4rem 0",
            opacity: isVisible.howItWorks ? 1 : 0,
            transform: isVisible.howItWorks
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "all 0.8s ease-out",
            transitionDelay: "0.5s",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
            width: "100vw",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              color: "#333",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#666",
              textAlign: "center",
              marginBottom: "3rem",
              maxWidth: "700px",
              margin: "0 auto 3rem",
            }}
          >
            Creating a professional resume has never been easier. Follow these
            simple steps to get started.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
              maxWidth: "1200px",
              margin: "0 auto",
              padding: "0 2rem",
            }}
          >
            {[
              {
                number: "1",
                title: "Choose a Template",
                description:
                  "Browse our library of industry-specific templates and select the one that best fits your needs.",
              },
              {
                number: "2",
                title: "Fill in Your Details",
                description:
                  "Use our intuitive editor to add your personal information, work experience, education, and skills.",
              },
              {
                number: "3",
                title: "Download & Apply",
                description:
                  "Export your finished resume in your preferred format and start applying for jobs with confidence.",
              },
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #4F46E5, #9333EA)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "#666", lineHeight: "1.6" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section
          style={{
            marginBottom: "80px",
            opacity: isVisible.pricing ? 1 : 0,
            transform: isVisible.pricing ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
            transitionDelay: "0.7s",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              color: "#333",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Pricing Plans
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#666",
              textAlign: "center",
              marginBottom: "3rem",
              maxWidth: "700px",
              margin: "0 auto 3rem",
            }}
          >
            Choose the plan that best fits your needs and budget.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              {
                title: "Basic",
                price: "$9.99",
                features: [
                  "5 Resume Templates",
                  "PDF Export",
                  "Basic ATS Optimization",
                  "24/7 Support",
                  "1 Cover Letter",
                ],
              },
              {
                title: "Professional",
                price: "$19.99",
                isPopular: true,
                features: [
                  "20 Resume Templates",
                  "All Export Formats",
                  "Advanced ATS Optimization",
                  "24/7 Priority Support",
                  "3 Cover Letters",
                ],
              },
              {
                title: "Premium",
                price: "$29.99",
                features: [
                  "All Resume Templates",
                  "All Export Formats",
                  "Premium ATS Optimization",
                  "24/7 VIP Support",
                  "Unlimited Cover Letters",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  border: plan.isPopular
                    ? "2px solid #8A2BE2"
                    : "1px solid #eee",
                  position: "relative",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(138, 43, 226, 0.2)";
                  e.currentTarget.style.border = "2px solid #8A2BE2";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.border = plan.isPopular
                    ? "2px solid #8A2BE2"
                    : "1px solid #eee";
                }}
              >
                {plan.isPopular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      right: "20px",
                      background: "linear-gradient(135deg, #4F46E5, #9333EA)",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                    }}
                  >
                    Popular
                  </div>
                )}
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "#333",
                    marginBottom: "1rem",
                  }}
                >
                  {plan.title}
                </h3>
                <div
                  style={{
                    fontSize: "2.5rem",
                    color: "#4F46E5",
                    marginBottom: "2rem",
                  }}
                >
                  {plan.price}
                  <span style={{ fontSize: "1rem", color: "#666" }}>
                    /month
                  </span>
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    marginBottom: "2rem",
                  }}
                >
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "0.8rem",
                        color: "#666",
                      }}
                    >
                      <span style={{ marginRight: "0.5rem", color: "#4F46E5" }}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: plan.isPopular
                      ? "linear-gradient(135deg, #4F46E5, #9333EA)"
                      : "white",
                    color: plan.isPopular ? "white" : "#4F46E5",
                    border: plan.isPopular ? "none" : "2px solid #4F46E5",
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onClick={scrollToFeatures}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(79, 70, 229, 0.2)";
                    if (!plan.isPopular) {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, #4F46E5, #9333EA)";
                      e.currentTarget.style.color = "white";
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    if (!plan.isPopular) {
                      e.currentTarget.style.background = "white";
                      e.currentTarget.style.color = "#4F46E5";
                    }
                  }}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section
          style={{
            marginBottom: "80px",
            opacity: isVisible.testimonials ? 1 : 0,
            transform: isVisible.testimonials
              ? "translateY(0)"
              : "translateY(30px)",
            transition: "all 0.8s ease-out",
            transitionDelay: "0.9s",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              color: "#333",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            Success Stories
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #4F46E5, #9333EA)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    fontSize: "2rem",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <h4
                    style={{
                      fontSize: "1.2rem",
                      color: "#333",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p style={{ color: "#666" }}>{testimonial.role}</p>
                </div>
                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                  }}
                >
                  {testimonial.content}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "4px",
                    justifyContent: "center",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      style={{
                        color: i < testimonial.rating ? "#FFD700" : "#E0E0E0",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section
        style={{
          background:
            "linear-gradient(135deg, rgba(79, 70, 229, 0.8), rgba(147, 51, 234, 0.8))",
          padding: "6rem 2rem",
          textAlign: "center",
          marginTop: "4rem",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          width: "100vw",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            opacity: isVisible.cta ? 1 : 0,
            transform: isVisible.cta ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
            transitionDelay: "1.1s",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              color: "white",
              marginBottom: "1.5rem",
              fontWeight: "700",
            }}
          >
            Ready to Create Your Professional Resume?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "2.5rem",
              lineHeight: "1.6",
            }}
          >
            Join thousands of successful job seekers who have landed their dream
            jobs with our professional resume building service.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                padding: "1rem 3rem",
                background: "white",
                color: "#4F46E5",
                border: "none",
                borderRadius: "8px",
                fontSize: "1.2rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #4F46E5, #9333EA)";
                e.currentTarget.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 6px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.background = "white";
                e.currentTarget.style.color = "#4F46E5";
              }}
              onClick={scrollToFeatures}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <Chatbot />
      </div>
    </>
  );
}

export default ResumeBuilding;
