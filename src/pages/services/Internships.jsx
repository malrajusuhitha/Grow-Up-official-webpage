import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import internshipHeroImage from "../../assets/internship.jpeg";
import Chatbot from "../../components/Chatbot";

function Internships() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    howItWorks: false,
    benefits: false,
    internships: false,
    cta: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({
        hero: true,
        howItWorks: true,
        benefits: true,
        internships: true,
        cta: true,
      });
    }, 100);

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    navigate("/services");
  };

  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto", overflow: "hidden" }}>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          height: "90vh",
          minHeight: "600px",
          backgroundImage: `linear-gradient(135deg, rgba(79, 70, 229, 0.3), rgba(147, 51, 234, 0.3)), url(${internshipHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "85px",
          display: "flex",
          alignItems: "center",
          color: "white",
          opacity: isVisible.hero ? 1 : 0,
          transform: isVisible.hero ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.4)",
            opacity: isVisible.hero ? 1 : 0,
            transition: "opacity 1.2s ease-out",
          }}
        />

        <button
          onClick={handleBack}
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            zIndex: 10,
            background: "linear-gradient(135deg, #4F46E5, #9333EA)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            padding: "12px 24px",
            borderRadius: "50px",
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "all 0.3s ease",
            opacity: isVisible.hero ? 1 : 0,
            transform: isVisible.hero ? "translateX(0)" : "translateX(-20px)",
            transitionDelay: "0.5s",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, #6366F1, #A855F7)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, #4F46E5, #9333EA)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <FaArrowLeft style={{ fontSize: "0.9rem" }} />
          Back to Services
        </button>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "600px",
            marginLeft: "10%",
            padding: "0 2rem",
            textAlign: "left",
            opacity: isVisible.hero ? 1 : 0,
            transform: isVisible.hero ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(52, 152, 219, 0.1)",
              backdropFilter: "blur(10px)",
              padding: "8px 16px",
              borderRadius: "50px",
              marginBottom: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <span
              style={{ color: "white", fontSize: "0.9rem", fontWeight: "500" }}
            >
              Professional Internships
            </span>
          </div>

          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
              textAlign: "left",
            }}
          >
            Launch Your Career{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF8C00, #FF1493)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              with Internships
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              marginBottom: "2.5rem",
              maxWidth: "500px",
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "left",
            }}
          >
            Find and apply for internships that match your skills and career
            goals.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <button
              style={{
                background: "linear-gradient(135deg, #FF8C00, #FF1493)",
                color: "white",
                padding: "16px 32px",
                borderRadius: "50px",
                border: "none",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(255, 140, 0, 0.3)",
              }}
              onClick={() => handleScrollTo("benefits-section")}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(255, 140, 0, 0.4)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #FFA500, #FF69B4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(255, 140, 0, 0.3)";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #FF8C00, #FF1493)";
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div
        style={{
          padding: "5rem 0",
          background: "#fff",
          opacity: isVisible.howItWorks ? 1 : 0,
          transform: isVisible.howItWorks
            ? "translateY(0)"
            : "translateY(30px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#2c3e50",
                marginBottom: "1.5rem",
              }}
            >
              How Our Internship Service Works
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#34495e",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Our internship placement service helps students and early-career
              professionals find valuable work experience opportunities that
              align with their career goals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2.5rem",
              padding: "2rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              {
                number: "1",
                title: "Create Your Profile",
                description:
                  "Build a comprehensive profile highlighting your skills, interests, and career goals.",
              },
              {
                number: "2",
                title: "Get Matched",
                description:
                  "Our algorithm matches you with internships that align with your profile and preferences.",
              },
              {
                number: "3",
                title: "Apply & Interview",
                description:
                  "Apply to matched opportunities and receive support throughout the interview process.",
              },
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(52, 152, 219, 0.1)",
                  border: "1px solid rgba(52, 152, 219, 0.1)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(52, 152, 219, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(52, 152, 219, 0.1)";
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    background: "linear-gradient(135deg, #4F46E5, #9333EA)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                    color: "white",
                    fontSize: "1.75rem",
                    fontWeight: "bold",
                    boxShadow: "0 8px 20px rgba(79, 70, 229, 0.2)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span>{step.number}</span>
                </div>
                <h3
                  style={{
                    color: "#2c3e50",
                    marginBottom: "1.25rem",
                    fontSize: "1.75rem",
                    fontWeight: "700",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "#34495e",
                    lineHeight: "1.8",
                    margin: 0,
                    fontSize: "1.1rem",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div
        id="benefits-section"
        className="benefits-section"
        style={{
          background: "#f8fafc",
          padding: "3rem 0",
          marginBottom: "3rem",
        }}
      >
        <div className="container">
          <div
            className="section-header"
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "0 auto 2rem",
            }}
          >
            <h2
              className="section-title"
              style={{
                color: "#2c3e50",
                marginBottom: "1rem",
                fontSize: "2rem",
                fontWeight: "700",
              }}
            >
              Why Choose Our Internship Service?
            </h2>
            <p
              className="section-description"
              style={{
                color: "#34495e",
                fontSize: "1.1rem",
                lineHeight: "1.6",
              }}
            >
              We partner with leading companies across various industries to
              provide exclusive internship opportunities.
            </p>
          </div>

          <div
            className="benefits-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              padding: "0 1rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {[
              {
                icon: "🔍",
                title: "Exclusive Opportunities",
                description:
                  "Access to internship opportunities not available elsewhere, with companies ranging from startups to Fortune 500s.",
              },
              {
                icon: "🎯",
                title: "Personalized Matching",
                description:
                  "Our algorithm matches you with internships based on your skills, interests, and career goals.",
              },
              {
                icon: "📝",
                title: "Application Support",
                description:
                  "Get help with resume reviews, cover letter writing, and interview preparation to increase your chances of success.",
              },
              {
                icon: "👥",
                title: "Mentorship",
                description:
                  "Receive guidance from experienced professionals throughout your internship experience.",
              },
              {
                icon: "💼",
                title: "Career Growth",
                description:
                  "Many of our internships lead to full-time job offers, helping you build a long-term career path.",
              },
              {
                icon: "🌐",
                title: "Global Network",
                description:
                  "Connect with companies and professionals worldwide, expanding your network and opportunities.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="benefit-card"
                style={{
                  background: "white",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(52, 152, 219, 0.1)",
                  border: "1px solid rgba(52, 152, 219, 0.1)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 25px rgba(52, 152, 219, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(52, 152, 219, 0.1)";
                }}
              >
                <div
                  className="benefit-icon"
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    color: "#4F46E5",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span>{benefit.icon}</span>
                </div>
                <h3
                  className="benefit-title"
                  style={{
                    color: "#2c3e50",
                    marginBottom: "0.75rem",
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    letterSpacing: "-0.01em",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="benefit-description"
                  style={{
                    color: "#34495e",
                    lineHeight: "1.6",
                    margin: 0,
                    fontSize: "0.95rem",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Available Internships Section */}
      {/* <div
        className="internships-list-section"
        style={{
          padding: "5rem 0",
          marginBottom: "4rem",
        }} */}

      {/* <div className="container">
          <div className="section-header">
            <h2
              className="section-title"
              style={{ color: "#2c3e50", marginBottom: "1rem" }}
            >
              Available Internship Opportunities
            </h2>
            <p className="section-description" style={{ color: "#34495e" }}>
              Browse through our current internship openings and find the
              perfect opportunity for your career growth.
            </p>
          </div> */}
      <div
        className="internships-list-section"
        style={{
          padding: "5rem 0",
          marginBottom: "4rem",
          background: "#fff",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div
            className="section-header"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h2
              className="section-title"
              style={{
                color: "#2c3e50",
                marginBottom: "1rem",
                fontSize: "2.5rem",
                fontWeight: "700",
              }}
            >
              Available Internship Opportunities
            </h2>
            <p
              className="section-description"
              style={{
                color: "#34495e",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Browse through our current internship openings and find the
              perfect opportunity for your career growth.
            </p>
          </div>

          <div
            className="internships-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              padding: "1rem",
              maxWidth: "1000px",
              margin: "0 auto",
              marginBottom: "3rem",
            }}
          >
            {[
              {
                title: "Software Development Engineer",
                company: "Accenture",
                status: "Open",
                location: "Remote / Bengaluru",
                duration: "3-6 months",
                salary: "5 LPA",
                posted: "Posted 2 days ago",
              },
              {
                title: "Marketing Intern",
                company: "E4 Software Services",
                status: "Open",
                location: "Mumbai",
                duration: "6 months",
                salary: "6 LPA",
                posted: "Posted 1 week ago",
              },
              {
                title: "Data Science Intern",
                company: "Discover Dollar Technologies",
                status: "Closing Soon",
                location: "Remote",
                duration: "4 months",
                salary: "8 LPA",
                posted: "Closing in 3 days",
              },
              {
                title: "UI/UX Design Intern",
                company: "Equinox Tech Solutions",
                status: "Open",
                location: "Bangalore",
                duration: "3 months",
                salary: "5LPA",
                posted: "Posted 3 days ago",
              },
              {
                title: "Business Development Intern",
                company: "IndiaMART",
                status: "Open",
                location: "Mumbai / Hybrid",
                duration: "6-8 months",
                salary: "4.5 LPA",
                posted: "Posted 5 days ago",
              },
              {
                title: "Full Stack Developer Intern",
                company: "Innovation Labs",
                status: "Open",
                location: "Remote / Pune",
                duration: "6 months",
                salary: "12 LPA",
                posted: "Posted today",
              },
            ].map((internship, index) => (
              <div
                key={index}
                className="internship-card"
                style={{
                  background: "white",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  boxShadow: "0 8px 20px rgba(52, 152, 219, 0.1)",
                  border: "1px solid rgba(52, 152, 219, 0.1)",
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 25px rgba(52, 152, 219, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(52, 152, 219, 0.1)";
                }}
              >
                <div>
                  <div
                    className="internship-header"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3
                        className="internship-title"
                        style={{
                          color: "#2c3e50",
                          marginBottom: "0.5rem",
                          fontSize: "1.25rem",
                          fontWeight: "700",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {internship.title}
                      </h3>
                      <p
                        className="company-name"
                        style={{
                          color: "#3498db",
                          fontWeight: "600",
                          margin: 0,
                          fontSize: "0.95rem",
                        }}
                      >
                        {internship.company}
                      </p>
                    </div>
                    <span
                      className="status-badge"
                      style={{
                        background:
                          internship.status === "Open" ? "#27a567" : "#e74c3c",
                        color: "white",
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                        whiteSpace: "nowrap",
                        boxShadow: "0 2px 8px rgba(79, 70, 229, 0.2)",
                      }}
                    >
                      {internship.status}
                    </span>
                  </div>
                  <div
                    className="internship-details"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1rem",
                      marginBottom: "1rem",
                      background: "rgba(52, 152, 219, 0.05)",
                      padding: "1rem",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      className="detail-item"
                      style={{
                        color: "#34495e",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span
                        className="detail-icon"
                        style={{ fontSize: "1rem" }}
                      >
                        📍
                      </span>
                      <span style={{ marginLeft: "0.5rem" }}>
                        {internship.location}
                      </span>
                    </div>
                    <div
                      className="detail-item"
                      style={{
                        color: "#34495e",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span
                        className="detail-icon"
                        style={{ fontSize: "1rem" }}
                      >
                        ⏰
                      </span>
                      <span style={{ marginLeft: "0.5rem" }}>
                        {internship.duration}
                      </span>
                    </div>
                    <div
                      className="detail-item"
                      style={{
                        color: "#34495e",
                        display: "flex",
                        alignItems: "center",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span
                        className="detail-icon"
                        style={{ fontSize: "1rem" }}
                      >
                        💰
                      </span>
                      <span style={{ marginLeft: "0.5rem" }}>
                        {internship.salary}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="internship-footer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid rgba(52, 152, 219, 0.1)",
                    paddingTop: "1rem",
                    marginTop: "auto",
                  }}
                >
                  <span
                    className="posted-date"
                    style={{
                      color: "#7f8c8d",
                      fontSize: "0.85rem",
                      fontWeight: "500",
                    }}
                  >
                    {internship.posted}
                  </span>

                  <button
                    className="apply-button"
                    style={{
                      background: "linear-gradient(135deg, #4F46E5, #9333EA)",
                      color: "white",
                      border: "none",
                      padding: "0.5rem 1.25rem",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      whiteSpace: "nowrap",
                      boxShadow: "0 2px 8px rgba(79, 70, 229, 0.2)",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #6366F1, #A855F7)";
                      e.target.style.transform = "translateY(-2px)";
                      e.target.style.boxShadow =
                        "0 4px 12px rgba(79, 70, 229, 0.3)";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background =
                        "linear-gradient(135deg, #4F46E5, #9333EA)";
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 2px 8px rgba(79, 70, 229, 0.2)";
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        id="cta-section"
        className="cta-section"
        style={{
          background: "linear-gradient(135deg, #4F46E5, #9333EA)",
          padding: "4rem 2rem",
          color: "white",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        <div className="container">
          <div className="cta-content">
            <h2
              className="cta-title"
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                fontWeight: "700",
              }}
            >
              Ready to Start Your Internship Journey?
            </h2>
            <p
              className="cta-description"
              style={{
                fontSize: "1.2rem",
                marginBottom: "2rem",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              Create your profile today and get matched with internship
              opportunities that align with your career goals.
            </p>
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
}

export default Internships;
