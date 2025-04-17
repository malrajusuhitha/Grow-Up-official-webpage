import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaStar,
  FaLaptopCode,
  FaUsers,
  FaGraduationCap,
} from "react-icons/fa";

import courseHeroImage from "../../assets/course.png";
import Chatbot from "../../components/Chatbot";

function OnlineCourses() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    hero: false,
    courses: false,
    cta: false,
  });

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setIsVisible({
        hero: true,
        courses: true,
        cta: true,
      });

      // Scroll to hero section when page loads
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const courses = [
    {
      title: "Technical Interview Preparation",
      category: "Career Development",
      level: "Intermediate",
      duration: "4 weeks",
      rating: "4.8/5",
      icon: "🎯",
      description:
        "Master technical interview skills with real-world practice and expert feedback.",
    },
    {
      title: "Leadership Skills for New Managers",
      category: "Professional Skills",
      level: "Beginner",
      duration: "6 weeks",
      rating: "4.9/5",
      icon: "👥",
      description:
        "Develop essential leadership skills to effectively manage teams and projects.",
    },
    {
      title: "Data Analysis Fundamentals",
      category: "Technical Skills",
      level: "Beginner",
      duration: "8 weeks",
      rating: "4.7/5",
      icon: "📊",
      description:
        "Learn data analysis techniques and tools for business decision-making.",
    },
    {
      title: "Digital Marketing Mastery",
      category: "Marketing",
      level: "Intermediate",
      duration: "5 weeks",
      rating: "4.6/5",
      icon: "📱",
      description:
        "Master digital marketing strategies and tools for business growth.",
    },
    {
      title: "Project Management Professional",
      category: "Professional Skills",
      level: "Advanced",
      duration: "10 weeks",
      rating: "4.9/5",
      icon: "📋",
      description:
        "Prepare for PMP certification with comprehensive project management training.",
    },
    {
      title: "Web Development Bootcamp",
      category: "Technical Skills",
      level: "Beginner",
      duration: "12 weeks",
      rating: "4.8/5",
      icon: "💻",
      description:
        "Learn full-stack web development from scratch with hands-on projects.",
    },
    {
      title: "UX/UI Design Fundamentals",
      category: "Design",
      level: "Intermediate",
      duration: "8 weeks",
      rating: "4.7/5",
      icon: "🎨",
      description:
        "Master user experience and interface design principles with practical applications.",
    },
    {
      title: "Cloud Computing Essentials",
      category: "Technical Skills",
      level: "Advanced",
      duration: "6 weeks",
      rating: "4.9/5",
      icon: "☁️",
      description:
        "Learn cloud platforms, architecture, and deployment strategies for modern applications.",
    },
  ];

  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry professionals with years of experience.",
      icon: "👨‍🏫",
    },
    {
      title: "Flexible Learning",
      description:
        "Study at your own pace with 24/7 access to course materials.",
      icon: "⏰",
    },
    {
      title: "Practical Projects",
      description:
        "Apply your knowledge through real-world projects and case studies.",
      icon: "📚",
    },
    {
      title: "Career Support",
      description: "Get guidance on career advancement and job opportunities.",
      icon: "💼",
    },
  ];

  const categories = [
    {
      name: "Technical Skills",
      description: "Programming, data analysis, cybersecurity, and more",
      icon: "💻",
    },
    {
      name: "Professional Skills",
      description:
        "Leadership, communication, project management, and negotiation",
      icon: "👔",
    },
    {
      name: "Career Development",
      description: "Interview preparation, personal branding, and networking",
      icon: "📈",
    },
    {
      name: "Industry-Specific",
      description:
        "Specialized courses for healthcare, finance, marketing, and other fields",
      icon: "🏢",
    },
  ];

  const stats = [
    { icon: <FaLaptopCode />, number: "200+", label: "Active Courses" },
    { icon: <FaUsers />, number: "50,000+", label: "Active Learners" },
    { icon: <FaGraduationCap />, number: "92%", label: "Completion Rate" },
  ];

  const handleBack = () => {
    navigate("/services");
  };

  const handleEnroll = () => {
    const featuredCoursesSection = document.getElementById("featured-courses");
    if (featuredCoursesSection) {
      featuredCoursesSection.scrollIntoView({ behavior: "smooth" });
    }
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
          backgroundImage: `linear-gradient(135deg, rgba(79, 70, 229, 0.2), rgba(147, 51, 234, 0.2)), url(${courseHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          color: "white",
          textAlign: "left",
          marginTop: "85px",
          marginBottom: "40px",
          opacity: isVisible.hero ? 1 : 0,
          transform: isVisible.hero ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease-out",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(79, 70, 229, 0.5), rgba(147, 51, 234, 0.3))",
            zIndex: 1,
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
              padding: "8px 16px",
              borderRadius: "50px",
              marginBottom: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "0.9rem",
                fontWeight: "500",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              Professional Development
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
            Learn New{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF8C00, #FF1493)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Skills
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
            Access high-quality online courses to enhance your skills and
            advance your career.
          </p>
        </div>
      </div>

      {/* Featured Courses Section */}
      <div
        id="featured-courses"
        style={{ padding: "0 2rem", marginBottom: "40px" }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#2c3e50",
              marginBottom: "1rem",
            }}
          >
            Featured Courses
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Our most popular courses designed to help you advance your career
            and develop in-demand skills.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
            opacity: isVisible.courses ? 1 : 0,
            transform: isVisible.courses ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s ease-out",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          {courses.map((course, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                border: "1px solid rgba(0, 0, 0, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
                >
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "white",
                      padding: "4px 12px",
                      background: "linear-gradient(135deg, #4F46E5, #9333EA)",
                      borderRadius: "20px",
                      textAlign: "center",
                      display: "inline-block",
                      width: "100%",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {course.category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: "black",
                      padding: "13px 12px",
                      background:
                        "linear-gradient(135deg,rgb(239, 235, 239),rgb(238, 238, 241))",
                      borderRadius: "12px",
                      textAlign: "center",
                      display: "inline-block",
                      width: "100%",
                    }}
                  >
                    {course.level}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    marginBottom: "1rem",
                    color: "#2c3e50",
                  }}
                >
                  {course.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                  }}
                >
                  {course.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        style={{
                          color:
                            i < parseFloat(course.rating) ? "#FFD700" : "#ddd",
                          fontSize: "0.9rem",
                        }}
                      />
                    ))}
                    <span
                      style={{
                        marginLeft: "8px",
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
                      {course.rating}
                    </span>
                  </div>
                  <span style={{ color: "#666", fontSize: "0.9rem" }}>
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Categories Section */}
      <div
        style={{
          padding: "4rem 2rem",
          background: "#f8f9fa",
          marginBottom: "0",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#2c3e50",
              marginBottom: "1rem",
            }}
          >
            Course Categories
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
            Explore our diverse range of course categories designed to meet your
            professional development needs.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "2rem",
                textAlign: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  margin: "0 auto 1.5rem",
                  background: "#f8f9fa",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                }}
              >
                {category.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#2c3e50",
                  marginBottom: "1rem",
                }}
              >
                {category.name}
              </h3>
              <p
                style={{
                  color: "#666",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Our Online Courses Section */}
      <div
        style={{
          padding: "4rem 2rem",
          background: "#fff",
          marginBottom: "0",
        }}
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
            Why Choose Our Online Courses?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Our courses are designed to provide you with practical, job-relevant
            skills that you can apply immediately in your career.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2.5rem",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          {[
            {
              icon: "👨‍🏫",
              title: "Expert Instructors",
              description:
                "Learn from industry professionals with years of experience.",
            },
            {
              icon: "⏰",
              title: "Flexible Learning",
              description:
                "Study at your own pace with 24/7 access to course materials.",
            },
            {
              icon: "📚",
              title: "Practical Projects",
              description:
                "Apply your knowledge through real-world projects and case studies.",
            },
            {
              icon: "💼",
              title: "Career Support",
              description:
                "Get guidance on career advancement and job opportunities.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "2.5rem",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
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
                  "0 15px 35px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                style={{
                  fontSize: "3.5rem",
                  marginBottom: "1.5rem",
                  background: "linear-gradient(135deg, #4F46E5, #9333EA)",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "#2c3e50",
                  marginBottom: "1rem",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  color: "#666",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "0",
          padding: "120px 40px",
          background: "linear-gradient(135deg, #4F46E5, #9333EA)",
          borderRadius: "0",
          opacity: isVisible.cta ? 1 : 0,
          transform: isVisible.cta ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
          position: "relative",
          overflow: "hidden",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
              color: "white",
              fontWeight: "700",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Ready to Start Learning?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "30px",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.6",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
          >
            Enroll in our online courses and take the first step towards your
            career goals.
          </p>
          <button
            onClick={handleEnroll}
            style={{
              background: "white",
              color: "#4F46E5",
              padding: "16px 32px",
              borderRadius: "50px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              marginTop: "1rem",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
              e.target.style.background =
                "linear-gradient(135deg, #4F46E5, #9333EA)";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
              e.target.style.background = "white";
              e.target.style.color = "#4F46E5";
            }}
          >
            Enroll Now
          </button>
        </div>
      </div>
      <Chatbot />
    </div>
  );
}

export default OnlineCourses;
