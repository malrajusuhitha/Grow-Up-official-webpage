import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/background.png";
import bg1 from "../assets/bg1.png";
import Chatbot from "../components/Chatbot";

const blogPosts = [
  {
    title: "How to Optimize Your Resume for AI Screening",
    date: "April 8, 2025",
    summary:
      "Learn how modern companies use AI to filter resumes and how you can tweak yours to stand out.",
  },
  {
    title: "Top 10 Tech Skills in Demand for 2025",
    date: "March 30, 2025",
    summary:
      "From AI to cloud engineering, see what employers are looking for in the ever-evolving tech space.",
  },
  {
    title: "Remote Work Tips for Job Seekers",
    date: "March 15, 2025",
    summary:
      "Mastering productivity, interviews, and communication in a virtual work environment.",
  },
  {
    title: "How to Build a Strong Personal Brand Online",
    date: "April 5, 2025",
    summary:
      "Learn how to leverage social media, blogs, and personal websites to create a standout personal brand.",
  },
];
const Home = () => {
  const navigate = useNavigate();
  const handleExploreJobs = () => {
    navigate("/jobs");
  };
  return (
    <div style={{ animation: "fadeIn 1.2s ease-in" }}>
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% {
              transform: translateX(-50%) scale(1);
            }
            50% {
              transform: translateX(-50%) scale(1.1);
            }
          }
        `}
      </style>

      {/* Hero Section */}
      <header
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        <button
          onClick={handleExploreJobs}
          style={{
            position: "absolute",
            top: "75%",
            left: "50%",
            transform: "translateX(-50%)",
            padding: "12px 28px",
            backgroundColor: "#007bff",
            color: "#fff",
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            animation: "zoomInOut 2s infinite ease-in-out",
          }}
        >
          Explore Jobs
        </button>
      </header>
      {/* Features Section */}
      <section
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "40px",
            color: "#ffffff",
          }}
        >
          Features That Make Us Different
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "Why Choose Us?",
              items: [
                "Smart Matching: Best-fit jobs based on skills.",
                "Fast Applications: Apply in seconds.",
                "Verified Employers: Trusted companies only.",
                "Real-Time Analytics: Data-driven hiring tools.",
              ],
            },
            {
              title: "For Job Seekers",
              items: [
                "Craft a standout profile to attract top companies.",
                "Get job alerts tailored to your interests.",
                "Explore roles including internships and remote jobs.",
                "Boost visibility on our Featured Talent Board.",
              ],
            },
            {
              title: "For Employers",
              items: [
                "Post jobs and manage applicants with ease.",
                "Filter talent by skills, experience, and location.",
                "Schedule interviews and chat with candidates.",
                "AI-powered recommendations for better hires.",
              ],
            },
          ].map((card, idx) => (
            <div
              key={idx}
              style={{
                background: "linear-gradient(135deg, #fdfbff, #fcfcfc)",
                borderRadius: "20px",
                boxShadow: "0 8px 22px rgba(0, 0, 0, 0.12)",
                padding: "30px",
                width: "320px",
                flex: "1 1 300px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 28px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 22px rgba(0, 0, 0, 0.12)";
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: "15px",
                  color: "#3d0c41",
                  fontWeight: "bold",
                }}
              >
                {card.title}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: 0,
                  fontSize: "16px",
                  color: "#222",
                }}
              >
                {card.items.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "12px",
                      paddingLeft: "12px",
                      position: "relative",
                    }}
                    title={point}
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts Section */}
      <section style={{ padding: "50px 20px", background: "#f9f7ff" }}>
        <h2
          style={{
            color: "blue",
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "30px",
          }}
        >
          Latest Updates & Blog Posts
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "25px",
                width: "23%",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "10px",
                  color: "#3d0c41",
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#777",
                  marginBottom: "10px",
                }}
              >
                {post.date}
              </p>
              <p style={{ fontSize: "1rem", color: "#333" }}>{post.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Brands */}
      <section style={{ padding: "50px 20px", background: "#ffffff" }}>
        <h2
          style={{
            color: "blue",
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "30px",
          }}
        >
          Trusted By Leading Brands
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6-_25ZUi4O2VVXDLq9ggcbom4ipXK-_f2Q&s",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://mir-s3-cdn-cf.behance.net/projects/404/a1a934149082851.Y3JvcCwzNDUxLDI3MDAsNzYsMA.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            "https://i.namu.wiki/i/1rd6cehhMh0I8i5hlZ_3O3Ptlj41F9Opq_SDuJ_Qclv0wzZCxZkjx1x_JxS59WM2eGbsbAinUVHnMXJ2leL4Zg.webp",
          ].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Client ${idx + 1}`}
              style={{
                height: "60px",
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
