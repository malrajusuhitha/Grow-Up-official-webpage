import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaSearch,
  FaUsers,
  FaChartLine,
  FaClipboardCheck,
  FaNetworkWired,
  FaRocket,
} from "react-icons/fa";
import careerHeroImage from "../../assets/career.jpg";
import Chatbot from "../../components/Chatbot";

function CareerGuidance() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    howItWorks: false,
    approach: false,
    cta: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({
        hero: true,
        features: true,
        howItWorks: true,
        approach: true,
        cta: true,
      });
    }, 100);

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    navigate("/services");
  };

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto", overflow: "hidden" }}>
      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          height: "90vh",
          minHeight: "600px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${careerHeroImage})`,
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
            background:
              "linear-gradient(135deg, rgba(79, 70, 229, 0.4), rgba(147, 51, 234, 0.2))",
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
            e.currentTarget.style.boxShadow =
              "0 10px 20px rgba(79, 70, 229, 0.3)";
            e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background =
              "linear-gradient(135deg, #4F46E5, #9333EA)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.3)";
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
              Professional Development
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
            Navigate Your <br />
            <span
              style={{
                background: "linear-gradient(135deg, #FF8C00, #FF1493)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Career Path
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
            Get personalized career advice from industry experts to help you
            navigate your professional journey and achieve your goals.
          </p>

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

      {/* How It Works Section */}
      <div
        style={{
          padding: "80px 0",
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
                color: "#1a202c",
                marginBottom: "1.5rem",
              }}
            >
              How Our Career Guidance Works
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#4a5568",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Our career guidance service connects you with experienced
              professionals who can provide personalized advice tailored to your
              specific career goals and challenges.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              margin: "0 auto",
            }}
          >
            {[
              {
                number: "1",
                title: "Initial Assessment",
                description:
                  "We evaluate your skills, experience, and career goals to understand your unique situation.",
              },
              {
                number: "2",
                title: "Expert Matching",
                description:
                  "We connect you with industry experts who have experience in your field of interest.",
              },
              {
                number: "3",
                title: "Personalized Plan",
                description:
                  "Your advisor creates a customized career development plan tailored to your goals.",
              },
              {
                number: "4",
                title: "One-on-One Sessions",
                description:
                  "Regular meetings with your advisor to discuss progress and address challenges.",
              },
              {
                number: "5",
                title: "Resource Access",
                description:
                  "Get access to tools, templates, and resources to support your career journey.",
              },
              {
                number: "6",
                title: "Progress Tracking",
                description:
                  "Regular check-ins to monitor your progress and adjust the plan as needed.",
              },
            ].map((step, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1rem",
                  position: "relative",
                  overflow: "hidden",
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
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#1a202c",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "#4a5568", lineHeight: "1.6", margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Holistic Approach Section */}
      <div
        style={{
          padding: "80px 0",
          background: "#f8fafc",
          opacity: isVisible.approach ? 1 : 0,
          transform: isVisible.approach ? "translateY(0)" : "translateY(30px)",
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
                color: "#1a202c",
                marginBottom: "1.5rem",
              }}
            >
              Our Holistic Approach
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#4a5568",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              We believe that effective career guidance requires a comprehensive
              approach that considers all aspects of your professional life.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              margin: "0 auto",
            }}
          >
            {[
              {
                icon: <FaSearch style={{ fontSize: "1.5rem" }} />,
                title: "Skills Assessment",
                description:
                  "Comprehensive evaluation of your technical and soft skills to identify strengths and areas for development.",
              },
              {
                icon: <FaChartLine style={{ fontSize: "1.5rem" }} />,
                title: "Goal Setting",
                description:
                  "Help you define clear, achievable career goals aligned with your interests and values.",
              },
              {
                icon: <FaUsers style={{ fontSize: "1.5rem" }} />,
                title: "Market Analysis",
                description:
                  "Insights into industry trends, job market demands, and opportunities in your field of interest.",
              },
              {
                icon: <FaClipboardCheck style={{ fontSize: "1.5rem" }} />,
                title: "Action Planning",
                description:
                  "Develop a step-by-step plan with actionable items to help you achieve your career goals.",
              },
              {
                icon: <FaNetworkWired style={{ fontSize: "1.5rem" }} />,
                title: "Networking Support",
                description:
                  "Guidance on building and leveraging your professional network to advance your career.",
              },
              {
                icon: <FaRocket style={{ fontSize: "1.5rem" }} />,
                title: "Continuous Growth",
                description:
                  "Ongoing support and resources to help you continuously develop and advance in your career.",
              },
            ].map((approach, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1rem",
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
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #4F46E5, #9333EA)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  {approach.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "#1a202c",
                    marginBottom: "0.5rem",
                  }}
                >
                  {approach.title}
                </h3>
                <p style={{ color: "#4a5568", lineHeight: "1.6", margin: 0 }}>
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #4F46E5, #9333EA)",
          padding: "80px 0",
          color: "white",
          position: "relative",
          overflow: "hidden",
          opacity: isVisible.cta ? 1 : 0,
          transform: isVisible.cta ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 150%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%)",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 2rem",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            Ready to Take the Next Step in Your Career?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "2.5rem",
              opacity: 0.9,
            }}
          >
            Schedule a free 15-minute consultation with one of our career
            advisors to learn how we can help you achieve your professional
            goals.
          </p>
        </div>
      </div>

      <Chatbot />
    </div>
  );
}

export default CareerGuidance;
