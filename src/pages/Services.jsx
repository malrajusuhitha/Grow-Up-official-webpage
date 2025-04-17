import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaUserTie,
  FaHandshake,
  FaArrowRight,
  FaUserCircle,
  FaStar,
  FaQuoteLeft,
  FaChevronDown,
} from "react-icons/fa";
import heroImage from "../assets/Service.jpg";
import { initScrollAnimations } from "../utils/scrollAnimations";
import Chatbot from "../components/Chatbot";

const services = [
  {
    title: "Resume Building",
    icon: (
      <FaFileAlt
        style={{
          fontSize: "2.5rem",
          color: "#0066CC",
          transition: "transform 0.3s ease",
        }}
      />
    ),
    description:
      "Professional resume crafting services to help you stand out to employers with a compelling and well-structured resume.",
    path: "/services/resume-building",
    highlights: [
      "ATS-Optimized Templates",
      "Expert Review",
      "Multiple Formats",
    ],
  },
  {
    title: "Career Guidance",
    icon: (
      <FaGraduationCap
        style={{
          fontSize: "2.5rem",
          color: "#0066CC",
          transition: "transform 0.3s ease",
        }}
      />
    ),
    description:
      "Expert career counseling and guidance to help you make informed decisions about your professional path.",
    path: "/services/career-guidance",
    highlights: ["1-on-1 Counseling", "Industry Insights", "Career Planning"],
  },
  {
    title: "Internships",
    icon: (
      <FaBriefcase
        style={{
          fontSize: "2.5rem",
          color: "#0066CC",
          transition: "transform 0.3s ease",
        }}
      />
    ),
    description:
      "Access to valuable internship opportunities to gain practical experience and build your professional network.",
    path: "/services/internships",
    highlights: ["Top Companies", "Mentorship", "Skill Development"],
  },
  {
    title: "Online Courses",
    icon: (
      <FaLaptopCode
        style={{
          fontSize: "2.5rem",
          color: "#0066CC",
          transition: "transform 0.3s ease",
        }}
      />
    ),
    description:
      "Comprehensive online learning platform with courses designed to enhance your skills and knowledge.",
    path: "/services/online-courses",
    highlights: ["Industry Experts", "Hands-on Projects", "Certificates"],
  },
  {
    title: "Mock Interviews",
    icon: (
      <FaUserTie
        style={{
          fontSize: "2.5rem",
          color: "#0066CC",
          transition: "transform 0.3s ease",
        }}
      />
    ),
    description:
      "Practice interviews with industry experts to improve your interview skills and boost your confidence.",
    path: "/services/mock-interviews",
    highlights: ["Real Scenarios", "Expert Feedback", "Interview Tips"],
  },
  {
    title: "Job Placement",
    icon: (
      <FaHandshake
        style={{
          fontSize: "2.5rem",
          color: "#0066CC",
          transition: "transform 0.3s ease",
        }}
      />
    ),
    description:
      "Assistance in finding the right job opportunities and connecting with potential employers.",
    path: "/services/job-placement",
    highlights: ["Job Matching", "Company Connect", "Career Support"],
  },
];

const faqs = [
  {
    question: "How does the resume builder work?",
    answer:
      "Our resume builder provides an intuitive interface with professional templates. Simply input your information, and the builder automatically formats it. You can customize layouts, receive AI-powered suggestions, and export your resume in multiple formats.",
  },
  {
    question: "What types of mock interviews do you offer?",
    answer:
      "We offer technical interviews, behavioral interviews, and industry-specific interviews. Each session is conducted by experienced professionals from your target field, providing real-time feedback and detailed performance analysis.",
  },
  {
    question: "Are the courses certified or recognized by employers?",
    answer:
      "Yes, our courses are certified and recognized by leading industry partners. Upon completion, you receive a verified digital certificate that you can share on your professional profiles and with potential employers.",
  },
  {
    question: "How does the internship matching process work?",
    answer:
      "We match students with companies based on their skills, interests, and career goals. Our AI-powered system analyzes your profile and connects you with relevant opportunities, while our career advisors provide guidance throughout the process.",
  },
];

function Services() {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    initScrollAnimations();
  }, []);

  const handleLearnMore = (path) => {
    navigate(path);
    setTimeout(() => {
      if (path === "/services/mock-interviews") {
        const heroSection = document.getElementById("hero");
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div
      style={{
        background: "white",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "800px",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "4rem",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1s ease-out",
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
              "linear-gradient(90deg, rgba(79, 70, 229, 0.8), rgba(147, 51, 234, 0.3))",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1.2s ease-out",
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 2rem",
            maxWidth: "600px",
            color: "white",
            marginLeft: "2rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(-20px)",
            transition: "opacity 1s ease-out, transform 1s ease-out",
            transitionDelay: "0.3s",
          }}
        >
          <p
            style={{
              fontSize: "1.2rem",
              fontWeight: "600",
              marginBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Career Development Platform
          </p>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              marginBottom: "0.5rem",
              lineHeight: "1.2",
            }}
          >
            Accelerate Your
          </h1>
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              marginBottom: "1.5rem",
              lineHeight: "1.2",
              background: "linear-gradient(45deg, #FFD700, #FDB4BF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Career Growth
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.6",
              opacity: "0.9",
              maxWidth: "500px",
            }}
          >
            Comprehensive career development services designed to help you
            achieve your professional goals and stand out in today's competitive
            job market.
          </p>
        </div>
      </div>

      <div
        id="services-section"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease-out, transform 0.2s ease-out",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#4F46E5",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Our Services
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Empowering students with comprehensive career development services
            to help them achieve their professional goals.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "1.5rem",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                transition: "all 0.2s ease-out",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 0.05}s`,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                minHeight: "250px",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(79, 70, 229, 0.15)";
                e.currentTarget.style.transition = "all 0.2s ease-out";
                e.currentTarget.querySelector("svg").style.transform =
                  "scale(1.1)";
                e.currentTarget.querySelector("svg").style.transition =
                  "transform 0.2s ease-out";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transition = "all 0.2s ease-out";
                e.currentTarget.querySelector("svg").style.transform =
                  "scale(1)";
                e.currentTarget.querySelector("svg").style.transition =
                  "transform 0.2s ease-out";
              }}
              onClick={() => navigate(service.path)}
            >
              <div style={{ marginBottom: "0.5rem" }}>{service.icon}</div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  color: "#2D3748",
                  marginBottom: "0.5rem",
                  fontWeight: "600",
                }}
              >
                {service.title}
              </h2>
              <p
                style={{
                  color: "#718096",
                  lineHeight: "1.5",
                  fontSize: "1rem",
                  flex: "1",
                }}
              >
                {service.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginTop: "auto",
                }}
              >
                {service.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    style={{
                      background: "rgba(79, 70, 229, 0.08)",
                      color: "#4F46E5",
                      padding: "0.5rem 1rem",
                      borderRadius: "50px",
                      fontSize: "0.9rem",
                      fontWeight: "500",
                    }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href={`${service.path}#hero`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLearnMore(service.path);
                  }}
                  style={{
                    color: "#4F46E5",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#9333EA";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#4F46E5";
                  }}
                >
                  Learn More
                  <FaArrowRight style={{ fontSize: "0.9rem" }} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Numbers Section */}
        <div
          style={{
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            width: "100vw",
            background: "#F8F7FF",
            padding: "5rem 4rem",
            marginBottom: "3rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
          }}
        >
          <h2
            style={{
              fontSize: "2.5rem",
              color: "#2D3748",
              marginBottom: "1rem",
              textAlign: "center",
              fontWeight: "700",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease-out, transform 0.2s ease-out",
              transitionDelay: "0.1s",
            }}
          >
            Our Impact in Numbers
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#718096",
              textAlign: "center",
              marginBottom: "3rem",
              maxWidth: "800px",
              margin: "0 auto 4rem auto",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.3s ease-out, transform 0.8s ease-out",
              transitionDelay: "0.15s",
            }}
          >
            Join thousands of professionals who have transformed their careers
            with our services
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              { number: "15K+", text: "Successful Placements" },
              { number: "98%", text: "Client Satisfaction" },
              { number: "500+", text: "Corporate Partners" },
              { number: "25K+", text: "Career Transformations" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "15px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  textAlign: "center",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.2s ease-out",
                  transitionDelay: `${0.2 + index * 0.05}s`,
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(79, 70, 229, 0.15)";
                  e.currentTarget.style.transition = "all 0.2s ease-out";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.transition = "all 0.2s ease-out";
                }}
              >
                <h3
                  style={{
                    fontSize: "3.5rem",
                    color: "#4F46E5",
                    marginBottom: "1rem",
                    fontWeight: "700",
                  }}
                >
                  {item.number}
                </h3>
                <p
                  style={{
                    color: "#718096",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Success Stories Section */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              color: "#4F46E5",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Client Success Stories
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                name: "Sarah Johnson",
                role: "Software Engineer at Google",
                image: "https://randomuser.me/api/portraits/women/1.jpg",
                content:
                  "The career guidance and resume building services helped me land my dream job at Google. The mock interviews were incredibly helpful in preparing me for the technical rounds.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Product Manager at Microsoft",
                image: "https://randomuser.me/api/portraits/men/1.jpg",
                content:
                  "The internship placement program connected me with amazing opportunities. The career advisors provided invaluable insights that shaped my professional journey.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Data Scientist at Amazon",
                image: "https://randomuser.me/api/portraits/women/2.jpg",
                content:
                  "The online courses and career guidance helped me transition from a non-technical background to a successful career in data science. Couldn't have done it without their support!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(0, 0, 0, 0.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 6px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      marginRight: "1rem",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      style={{
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    color: "#333",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                  }}
                >
                  {testimonial.content}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      style={{
                        color: i < testimonial.rating ? "#FFD700" : "#DDD",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              color: "#4F46E5",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Frequently Asked Questions
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: "none",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "#333",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                  }}
                >
                  <span>{faq.question}</span>
                  <FaChevronDown
                    style={{
                      transform:
                        openFaqIndex === index ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openFaqIndex === index ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                    padding: openFaqIndex === index ? "1rem" : "0",
                    borderTop:
                      openFaqIndex === index ? "1px solid #e0e0e0" : "none",
                    color: "#666",
                    lineHeight: "1.6",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Journey CTA Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #4F46E5, #9333EA)",
          padding: "5rem 2rem",
          textAlign: "center",
          color: "white",
          marginTop: "4rem",
          marginBottom: "0",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "600",
            marginBottom: "1.5rem",
          }}
        >
          Start Your Career Journey Today
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: "0.9",
            maxWidth: "800px",
            margin: "0 auto 3rem auto",
          }}
        >
          Join thousands of professionals who have accelerated their careers
          with our comprehensive services.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "4rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "1.5rem", color: "#FFD700" }}>⭐</span>
            <div>
              <div style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                4.9/5 Rating
              </div>
              <div style={{ fontSize: "0.9rem", opacity: "0.8" }}>
                Based on client feedback
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🎯</span>
            <div>
              <div style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                15K+ Happy Clients
              </div>
              <div style={{ fontSize: "0.9rem", opacity: "0.8" }}>
                Successfully placed
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "1.5rem" }}>🎨</span>
            <div>
              <div style={{ fontSize: "1.25rem", fontWeight: "600" }}>
                98% Success Rate
              </div>
              <div style={{ fontSize: "0.9rem", opacity: "0.8" }}>
                Career transformation
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={scrollToServices}
            style={{
              background: "white",
              color: "#4F46E5",
              padding: "1rem 2rem",
              borderRadius: "5px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "transform 0.2s ease-out, background 0.2s ease-out",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.background = "#f8fafc";
              e.currentTarget.style.color = "#9333EA";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "white";
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

export default Services;
