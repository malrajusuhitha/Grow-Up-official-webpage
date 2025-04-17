import React, { useEffect, useState } from 'react';
import Chatbot from '../components/Chatbot';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
const About = () => {
  const [fadeStyle, setFadeStyle] = useState({ opacity: 0, transition: 'opacity 1s ease-in-out' });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [achievementHoveredIndex, setAchievementHoveredIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeStyle({ opacity: 1, transition: 'opacity 1s ease-in-out' });
    }, 50);
    return () => clearTimeout(timer);
  }, []);
  const cardBaseStyle = {
    backgroundColor: 'rgba(246, 243, 243, 0.9)',
    color: '#fff',
    padding: '25px',
    borderRadius: '15px',
    maxWidth: '320px',
    textAlign: 'center',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };
  const cardHoverStyle = {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
  };
  const sectionStyle = {
    padding: '60px 25px',
    borderRadius: '15px',
    backgroundColor: 'rgba(241, 239, 242, 0.9)',
    boxShadow: '0 6px 15px rgba(44, 39, 39, 0.1)',
    textAlign: 'center',
    color: '#222',
    width: '80%',
    margin: '50px auto 0',
    justifyContent: 'center',
  };



  const baseStatBoxStyle = {
    backgroundColor: 'rgba(80, 65, 184, 0.85)',
    color: '#fff',
    padding: '30px 40px',
    borderRadius: '12px',
    fontSize: '1.2rem',
    fontWeight: 600,
    textAlign: 'center',
    minWidth: '150px',
    margin: '10px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const hoverStyle = {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 25px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
  };

  return (
    <div style={{ colorScheme: 'light dark' }}>
      <div className="about-wrapper" style={fadeStyle}>
        <div style={{ backgroundColor: '#e4e5e6', fontFamily: 'Segoe UI, sans-serif' }}>

          {/* Hero Section */}
          <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <img src={img1} alt="Hero" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              backgroundColor: 'rgba(77, 23, 214, 0.5)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center',
              color: '#fff', textAlign: 'center', padding: '0 20px',
            }}>
              <h1 style={{ fontSize: '3rem', fontWeight: 700 }}>Empowering Students, Shaping Futures</h1>
              <p style={{ fontSize: '1.3rem', maxWidth: '800px' }}>
                Discover real-world opportunities that fuel your ambition and prepare you for success.
              </p>
            </div>
          </div>

          {/* Introduction Section */}
          <div style={{ textAlign: 'center', padding: '50px 20px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#272728' }}>
              We reimagine the way the world <br /> moves for the better
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#4f4f4b', maxWidth: '800px', margin: '20px auto' }}>
              At Grow Up, we believe in fostering the next generation of talent by providing students with valuable work experience...
            </p>
          </div>

          {/* Why Join Section */}
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#272728' }}>Why Join Grow Up</h1>
          </div>

          {/* Cards Section */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '35px', padding: '20px' }}>
            {[
              { img: img4, title: "Our Mission", desc: "At Grow Up, our mission is to empower students by providing meaningful employment..." },
              { img: img2, title: "Benefits", desc: "Joining Grow Up comes with numerous advantages, such as flexible job opportunities..." },
              { img: img3, title: "Our Vision", desc: "We envision a future where every student is equipped with the skills..." }
            ].map((card, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ ...cardBaseStyle, ...(hoveredCard === index ? cardHoverStyle : {}) }}
              >
                <img src={card.img} alt={card.title} style={{
                  width: '100%', height: '200px', objectFit: 'cover',
                  borderRadius: '12px', marginBottom: '15px'
                }} />
                <h5 style={{ fontSize: '1.5rem', color: '#0056D2', fontWeight: 500 }}>{card.title}</h5>
                <p style={{ color: '#272728', fontWeight: 500 }}>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Our Commitment */}
          <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
            <div style={sectionStyle}>
              <h3 style={{ fontSize: '2.3rem', color: '#0056d2', paddingBottom: "6px", fontWeight: 500 }}>Our Commitment</h3>
              <p style={{ fontSize: '1.1rem', paddingBottom: "6px", fontWeight: 500 }}>We strive to bridge the gap...</p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '25px' }}>
                {[
                  { value: "1000+", label: "Jobs Posted" },
                  { value: "200+", label: "Companies Hiring" },
                  { value: "500+", label: "Happy Students" }
                ].map(({ value, label }, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{
                      ...baseStatBoxStyle,
                      ...(hoveredIndex === i ? hoverStyle : {})
                    }}
                  >
                    <div>{value}</div>
                    <div style={{ marginTop: '5px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div style={sectionStyle}>
              <h3 style={{ fontSize: '2.3rem', color: '#0056d2', paddingBottom: "6px", fontWeight: 500 }}>Our Achievements</h3>
              <p style={{ paddingBottom: "6px", fontWeight: 500 }}>
                Over the years, we’ve proudly empowered 10,000+ users...
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: "25px" }}>
                {[
                  { value: "10K+", label: "Users" },
                  { value: "100+", label: "Events" },
                  { value: "5+", label: "Awards" },
                  { value: "98%", label: "Satisfaction" }
                ].map(({ value, label }, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setAchievementHoveredIndex(idx)}
                    onMouseLeave={() => setAchievementHoveredIndex(null)}
                    style={{
                      ...baseStatBoxStyle,
                      ...(achievementHoveredIndex === idx ? hoverStyle : {})
                    }}
                  >
                    <div>{value}</div>
                    <div style={{ marginTop: '5px' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Section */}
          </div>
        </div>
      </div>
      <Chatbot />
    </div>
  );
};

export default About;
