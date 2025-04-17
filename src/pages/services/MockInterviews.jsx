import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import mockInterviewsImage from "../../assets/mock.jpg";
import Chatbot from "../../components/Chatbot";

function MockInterviews() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    process: false,
    types: false,
    cta: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({
        hero: true,
        process: true,
        types: true,
        cta: true,
      });

      // Scroll to hero section when page loads
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    // Add keyframes for pulse animation
    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 0.8;
        }
        50% {
          transform: scale(1.1);
          opacity: 0.4;
        }
        100% {
          transform: scale(1);
          opacity: 0.8;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearTimeout(timer);
      document.head.removeChild(style);
    };
  }, []);

  const processSteps = [
    {
      number: "1",
      title: "Select Industry & Role",
      description:
        "We'll match you with an interviewer who has experience in your field.",
    },
    {
      number: "2",
      title: "Schedule Session",
      description:
        "Choose a time that works for you for a 45-60 minute interview session.",
    },
    {
      number: "3",
      title: "Complete Interview",
      description:
        "Participate in a realistic interview simulation via video call.",
    },
    {
      number: "4",
      title: "Receive Feedback",
      description:
        "Get detailed feedback on your performance and specific suggestions for improvement.",
    },
    {
      number: "5",
      title: "Review Recording",
      description:
        "Access a recording of your interview to review your performance.",
    },
  ];

  const interviewTypes = [
    {
      title: "Behavioral Interviews",
      description:
        "Practice answering questions about your past experiences and how you handled specific situations.",
      icon: "👥",
    },
    {
      title: "Technical Interviews",
      description:
        "Demonstrate your technical skills and problem-solving abilities.",
      icon: "💻",
    },
    {
      title: "Case Interviews",
      description:
        "Work through business cases and scenarios common in consulting and business roles.",
      icon: "📊",
    },
    {
      title: "Panel Interviews",
      description:
        "Practice interviewing with multiple interviewers simultaneously.",
      icon: "👥",
    },
    {
      title: "Stress Interviews",
      description: "Learn to stay calm and composed under pressure.",
      icon: "🔥",
    },
  ];

  const handleBack = () => {
    navigate("/services");
  };

  return (
    <div
      style={{ maxWidth: "100%", margin: 0, padding: 0, overflow: "hidden" }}
    >
      {/* Hero Section */}
      <div
        id="hero"
        style={{
          position: "relative",
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.5),
    rgba(147, 51, 234, 0.4)), url(${mockInterviewsImage})`,
          backgroundSize: "cover",
          marginTop: "85px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
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
              background: "rgba(79, 70, 229, 0.2)",
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
              Professional Interview Preparation
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
            Master Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF8C00, #FF1493)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Interview Skills
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
            Elevate your interview performance with expert-led mock interviews
            and personalized feedback designed to help you land your dream job.
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div style={{ padding: "5rem 0", background: "#fff" }}>
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
              How Our Mock Interviews Work
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
              Our mock interview service provides realistic interview practice
              with industry professionals who can give you valuable feedback and
              insights.
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
                  transform: `translateY(${isVisible.process ? "0" : "40px"})`,
                  opacity: isVisible.process ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0, 0, 0, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(79, 70, 229, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)";
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
                    transition: "all 0.3s ease",
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
                    transition: "color 0.3s ease",
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

      {/* Interview Types Section */}
      <div style={{ padding: "5rem 0", background: "#f8f9fa" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "4rem",
              opacity: isVisible.types ? 1 : 0,
              transform: isVisible.types ? "translateY(0)" : "translateY(30px)",
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
              Interview Types We Offer
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
              Choose the type of interview that best matches your needs and
              career goals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              opacity: isVisible.types ? 1 : 0,
              transform: isVisible.types ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out",
              transitionDelay: "0.2s",
            }}
          >
            {interviewTypes.map((type, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0, 0, 0, 0.1)";
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
                    marginBottom: "1.5rem",
                  }}
                >
                  {type.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#2c3e50",
                    marginBottom: "1rem",
                  }}
                >
                  {type.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                  }}
                >
                  {type.description}
                </p>
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
          opacity: isVisible.cta ? 1 : 0,
          transform: isVisible.cta ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
          }}
        >
          Ready to Improve Your Interview Skills?
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          Schedule a mock interview with one of our industry professionals and
          get personalized feedback to help you ace your next interview.
        </p>
      </div>
      <Chatbot />
    </div>
  );
}

export default MockInterviews;
