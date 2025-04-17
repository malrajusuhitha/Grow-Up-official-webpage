import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaStar,
  FaBriefcase,
  FaHandshake,
  FaChartLine,
  FaSearch,
  FaUserTie,
  FaFileAlt,
  FaComments,
  FaMoneyBillWave,
  FaHeadset,
  FaTimes,
} from "react-icons/fa";
import jobPlacementImage from "../../assets/jobplacements.jpeg";
import Chatbot from "../../components/Chatbot";

function JobPlacement() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    services: false,
    process: false,
    stories: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({
        hero: true,
        services: true,
        process: true,
        stories: true,
      });

      // Scroll to hero section when page loads
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    // Add keyframes for animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-20px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes pulse {
        0% {
          transform: scale(1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        50% {
          transform: scale(1.02);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  const handleBack = () => {
    navigate("/services");
  };

  const services = [
    {
      icon: <FaSearch />,
      title: "Job Search Strategy",
      description:
        "Personalized approach to find opportunities that match your skills and goals",
    },
    {
      icon: <FaFileAlt />,
      title: "Resume Optimization",
      description:
        "Expert review and enhancement of your resume to stand out to employers",
    },
    {
      icon: <FaComments />,
      title: "Interview Preparation",
      description: "Comprehensive coaching to help you excel in job interviews",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Salary Negotiation",
      description:
        "Strategies to secure the best possible compensation package",
    },
    {
      icon: <FaUserTie />,
      title: "Career Counseling",
      description:
        "Guidance to help you make informed decisions about your career path",
    },
    {
      icon: <FaHeadset />,
      title: "Ongoing Support",
      description: "Continuous assistance throughout your job search journey",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Career Assessment",
      description:
        "We evaluate your skills, experience, and career goals to understand your unique profile.",
    },
    {
      number: "02",
      title: "Profile Enhancement",
      description:
        "Your resume and professional profiles are optimized to attract the right employers.",
    },
    {
      number: "03",
      title: "Job Matching",
      description:
        "We connect you with opportunities that align with your skills and aspirations.",
    },
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content:
        "The job placement service was instrumental in helping me land my dream role at Google. Their guidance throughout the interview process was invaluable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Microsoft",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content:
        "Within weeks of using their service, I had multiple interviews lined up. Their career counseling helped me make the right choice.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Data Scientist at Amazon",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content:
        "The team helped me negotiate a better package than I expected. Their support throughout the process was exceptional.",
      rating: 5,
    },
  ];

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* Hero Section */}
      <div
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.5),
    rgba(147, 51, 234, 0.4)), url(${jobPlacementImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          marginTop: "85px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          color: "white",
          opacity: isVisible.hero ? 1 : 0,
          transform: isVisible.hero ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease-out",
        }}
      >
        <button
          onClick={handleBack}
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            zIndex: 10,
            background: "linear-gradient(135deg, #4F46E5, #9333EA)",
            backdropFilter: "blur(10px)",
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
            transition: "all 0.3s ease",
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
            maxWidth: "800px",
            padding: "0 2rem",
            marginLeft: "10%",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(255, 255, 255, 0.1)",
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
              Professional Job Placement
            </span>
          </div>

          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            Find Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF8C00, #FF1493)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Dream Job
            </span>
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              marginBottom: "2.5rem",
              maxWidth: "600px",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Expert job placement services to help you find and secure your ideal
            career opportunity.
          </p>
        </div>
      </div>

      {/* Our Services Section */}
      <div
        id="services-section"
        style={{ padding: "5rem 0", background: "#fff" }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              opacity: isVisible.services ? 1 : 0,
              transform: isVisible.services
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#2c3e50",
                marginBottom: "1.5rem",
              }}
            >
              Our Services
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Comprehensive job placement services designed to help you succeed
              in your career journey
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              opacity: isVisible.services ? 1 : 0,
              transform: isVisible.services
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 0.8s ease-out",
              transitionDelay: "0.2s",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    color: "#4F46E5",
                    marginBottom: "1.5rem",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#2c3e50",
                    marginBottom: "1rem",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div style={{ padding: "5rem 0", background: "#f8f9fa" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              opacity: isVisible.process ? 1 : 0,
              transform: isVisible.process
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#2c3e50",
                marginBottom: "1.5rem",
              }}
            >
              Our Process
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              A structured approach to help you find and secure your ideal job
              opportunity
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              opacity: isVisible.process ? 1 : 0,
              transform: isVisible.process
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 0.8s ease-out",
              transitionDelay: "0.2s",
            }}
          >
            {processSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2.5rem",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(147, 51, 234, 0.1))",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.75rem",
                    fontWeight: "700",
                    color: "#4F46E5",
                    marginBottom: "1.75rem",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      border: "2px solid rgba(79, 70, 229, 0.2)",
                      animation: "pulse 2s infinite",
                    }}
                  ></div>
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#2c3e50",
                    marginBottom: "1rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "1rem",
                    lineHeight: "1.7",
                    maxWidth: "280px",
                    margin: "0 auto",
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div style={{ padding: "5rem 0", background: "#fff" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              opacity: isVisible.stories ? 1 : 0,
              transform: isVisible.stories
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#2c3e50",
                marginBottom: "1.5rem",
              }}
            >
              Success Stories
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#666",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Hear from professionals who found their dream jobs through our
              services
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem",
              opacity: isVisible.stories ? 1 : 0,
              transform: isVisible.stories
                ? "translateY(0)"
                : "translateY(30px)",
              transition: "all 0.8s ease-out",
              transitionDelay: "0.2s",
            }}
          >
            {successStories.map((story, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2.5rem",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.05)";
                }}
              >
                <div
                  style={{
                    marginBottom: "1.5rem",
                    position: "relative",
                  }}
                >
                  <img
                    src={story.image}
                    alt={story.name}
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid rgba(203, 92, 207, 0.2)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: -3,
                      left: -3,
                      right: -3,
                      bottom: -3,
                      border: "2px solid rgba(203, 92, 207, 0.2)",
                      borderRadius: "50%",
                      animation: "pulse 2s infinite",
                    }}
                  ></div>
                </div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#2c3e50",
                    marginBottom: "0.5rem",
                  }}
                >
                  {story.name}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#4F46E5",
                    marginBottom: "1rem",
                    fontWeight: "500",
                  }}
                >
                  {story.role}
                </p>
                <p
                  style={{
                    color: "#666",
                    fontSize: "1rem",
                    lineHeight: "1.7",
                    marginBottom: "1.5rem",
                  }}
                >
                  "{story.content}"
                </p>
                <div style={{ display: "flex", gap: "0.25rem" }}>
                  {[...Array(story.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      style={{
                        color: "#FFD700",
                        fontSize: "1.2rem",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          textAlign: "center",
          padding: "5rem 2rem",
          background: "linear-gradient(135deg, #4F46E5, #9333EA)",
          color: "white",
          opacity: isVisible.stories ? 1 : 0,
          transform: isVisible.stories ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
            }}
          >
            Ready to Find Your Dream Job?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "0 auto 2.5rem",
              lineHeight: "1.6",
              color: "rgba(255, 255, 255, 0.9)",
            }}
          >
            Join thousands of successful professionals who found their ideal
            career through our job placement services.
          </p>
          <button
            onClick={() => {
              const servicesSection =
                document.getElementById("services-section");
              servicesSection.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              background: "white",
              color: "#4F46E5",
              border: "none",
              padding: "1rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(0, 0, 0, 0.15)";
              e.currentTarget.style.color = "#9333EA";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.color = "#4F46E5";
            }}
          >
            Get Started Now
          </button>
        </div>
      </div>

      <Chatbot />
    </div>
  );
}

export default JobPlacement;
