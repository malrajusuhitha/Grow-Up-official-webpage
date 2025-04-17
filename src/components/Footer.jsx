import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  const [columns, setColumns] = useState("1fr");
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1024) setColumns("repeat(3, 1fr)");
      else if (width >= 768) setColumns("repeat(2, 1fr)");
      else setColumns("1fr");
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);
  const bounceAnimation = {
    animation: "bounce 2s infinite",
  };
  const styles = {
    footer: {
      backgroundColor: "#000000",
      color: "#ffffff",
      padding: "4rem 1rem 2rem",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: columns,
      gap: "2rem",
      marginBottom: "3rem",
    },
    title: {
      fontSize: "1.75rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    description: {
      color: "#a0aec0",
      marginBottom: "1.5rem",
    },
    social: {
      display: "flex",
      gap: "1rem",
    },
    socialIcon: {
      color: "#a0aec0",
      fontSize: "1.25rem",
      cursor: "pointer",
      transition: "transform 0.3s ease, color 0.3s ease, box-shadow 0.3s",
      ...bounceAnimation,
    },
    subtitle: {
      fontSize: "1.125rem",
      fontWeight: 600,
      marginBottom: "1rem",
    },
    list: {
      listStyle: "none",
      padding: 0,
      color: "#a0aec0",
    },
    listItem: {
      marginBottom: "0.75rem",
      display: "flex",
      alignItems: "center",
    },
    icon3D: {
      marginRight: "0.75rem",
      color: "#ebebf3",
      minWidth: "20px",
      transform: "perspective(500px) rotateX(15deg)",
      boxShadow: "2px 2px 6px rgba(0,0,0,0.4)",
      padding: "5px",
      borderRadius: "5px",
    },
    iconMap: {
      color: "#FF6347",
    },
    iconPhone: {
      color: "#32CD32",
    },
    iconEmail: {
      color: "#FFD700",
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    bottom: {
      paddingTop: "2rem",
      borderTop: "1px solid #2d3748",
      textAlign: "center",
      color: "#dfe1e4",
    },
    bottomLinks: {
      marginTop: "0.5rem",
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
    },
    bottomLink: {
      color: "#dde0e3",
      textDecoration: "none",
      transition: "color 0.3s",
    },
    keyframes: `
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-5px); }
      }
    `,
  };

  const iconList = [
    {
      icon: faFacebookF,
      color: "#1877F2",
      url: "https://www.facebook.com/share/1ECCKk1mR9/",
    },
    {
      icon: faTwitter,
      color: "#1DA1F2",
      url: "https://x.com/ItGrowup95909",
    },
    {
      icon: faLinkedinIn,
      color: "#0A66C2",
      url: "https://www.linkedin.com/",
    },
    {
      icon: faInstagram,
      color: "#E1306C",
      url: "https://www.instagram.com/growup_it_services?igsh=MWVmYTd6bXFtMm5qNQ%3D%3D&utm_source=qr",
    },
  ];
  return (
    <footer style={styles.footer}>
      <style>{styles.keyframes}</style>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div>
            <h3 style={styles.title}>GrowUp</h3>
            <p style={styles.description}>
              Empowering professionals to achieve their career goals through comprehensive development services.
            </p>
            <div style={styles.social}>
              {iconList.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.socialIcon}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = item.color;
                    e.currentTarget.style.transform = "scale(1.3)";
                    e.currentTarget.style.boxShadow = `0 0 10px ${item.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = styles.socialIcon.color;
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>
          <div style={{ paddingLeft: "8rem" }}>
            <h4 style={styles.subtitle}>Services</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}><Link to="/services/resume-builder" style={styles.link}>Resume Building</Link></li>
              <li style={styles.listItem}><Link to="/services/career-guidance" style={styles.link}>Career Guidance</Link></li>
              <li style={styles.listItem}><Link to="/services/internships" style={styles.link}>Internships</Link></li>
              <li style={styles.listItem}><Link to="/services/online-courses" style={styles.link}>Online Courses</Link></li>
              <li style={styles.listItem}><Link to="/services/mock-interviews" style={styles.link}>Mock Interviews</Link></li>
              <li style={styles.listItem}><Link to="/services/job-placement" style={styles.link}>Job Placement</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={styles.subtitle}>Contact Us</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <a
                  href="https://www.google.com/maps/place/DSL+Abacus+IT+Park,+Uppal,+Hyderabad,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", color: "#a0aec0", textDecoration: "none" }}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ ...styles.icon3D, ...styles.iconMap }} />
                  1016, 10th floor, DSL Abacus IT Park, Uppal, Hyderabad, 500039
                </a>
              </li>
              <li style={styles.listItem}>
                <FontAwesomeIcon icon={faPhoneAlt} style={{ ...styles.icon3D, ...styles.iconPhone }} />
                +91 (555) 123-4567
              </li>
              <li style={styles.listItem}>
                <FontAwesomeIcon icon={faEnvelope} style={{ ...styles.icon3D, ...styles.iconEmail }} />
                admin@anasolconsultancyservices.com
              </li>
            </ul>
          </div>
        </div>
        <div style={styles.bottom}>
          <p>© 2025 GrowUp. All rights reserved.</p>
          <div style={styles.bottomLinks}>
            <a href="#" style={styles.bottomLink}>Privacy Policy</a>
            <a href="#" style={styles.bottomLink}>Terms of Service</a>
            <a href="#" style={styles.bottomLink}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

