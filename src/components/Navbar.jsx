import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 50px', // Reduced vertical padding
    background: '#000',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.5)',
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '70px',
    height: '70px',
    objectFit: 'contain',
    borderRadius: '50%',
    backgroundColor: '#000',
  };

  const logoTextStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginLeft: '12px',
    background: 'linear-gradient(135deg, #ff6ec4, #7873f5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
  };

  const linkStyle = {
    position: 'relative',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  };

  const getStartedStyle = {
    ...linkStyle,
    background: 'linear-gradient(135deg, #00c8ff, #00f0ff)',
    color: '#000',
    padding: '0.6rem 1.2rem',
    borderRadius: '30px',
    fontWeight: 'bold',
    boxShadow: '0 4px 10px rgba(0, 200, 255, 0.5)',
  };

  const links = [
    { path: '/', label: 'Home', tooltip: 'Go to homepage' },
    { path: '/jobs', label: 'Jobs', tooltip: 'Explore jobs' },
    { path: '/about', label: 'About', tooltip: 'Who we are' },
    { path: '/services', label: 'Services', tooltip: 'What we offer' },
    { path: '/contact', label: 'Contact', tooltip: 'Reach out to us' },
  ];

  const createTooltip = (text) => {
    const tooltip = document.createElement('div');
    tooltip.innerText = text;
    Object.assign(tooltip.style, {
      position: 'absolute',
      bottom: '-45px',
      left: '50%',
      transform: 'translateX(-50%) scale(0.9)',
      background: 'linear-gradient(135deg, #ff6ec4, #7873f5)',
      color: '#fff',
      padding: '8px 16px',
      borderRadius: '12px',
      whiteSpace: 'nowrap',
      fontSize: '13px',
      fontWeight: 500,
      opacity: 0,
      pointerEvents: 'none',
      zIndex: 999,
      boxShadow: '0 8px 16px rgba(0,0,0,0.4), 0 0 12px rgba(255,110,196,0.6)',
      transition: 'opacity 0.4s ease, transform 0.4s ease',
    });

    tooltip.className = 'tooltip';
    requestAnimationFrame(() => {
      tooltip.style.opacity = 1;
      tooltip.style.transform = 'translateX(-50%) scale(1.05)';
    });

    return tooltip;
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
        <h1 style={logoTextStyle}>GrowUp IT</h1>
      </div>
      <ul style={navLinksStyle}>
        {links.map((link, index) => (
          <li key={index}>
            <div style={{ position: 'relative' }}>
              <Link
                to={link.path}
                style={linkStyle}
                onMouseEnter={(e) => {
                  const tooltip = createTooltip(link.tooltip);
                  e.currentTarget.appendChild(tooltip);
                }}
                onMouseLeave={(e) => {
                  const tooltip = e.currentTarget.querySelector('.tooltip');
                  if (tooltip) {
                    tooltip.style.opacity = 0;
                    tooltip.style.transform = 'translateX(-50%) scale(0.9)';
                    setTimeout(() => {
                      if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                      }
                    }, 300);
                  }
                }}
              >
                {link.label}
              </Link>
            </div>
          </li>
        ))}
        <li>
          <div style={{ position: 'relative' }}>
            <Link
              to="/get-started"
              style={getStartedStyle}
              onMouseEnter={(e) => {
                const tooltip = createTooltip('Login / Register');
                e.currentTarget.appendChild(tooltip);
              }}
              onMouseLeave={(e) => {
                const tooltip = e.currentTarget.querySelector('.tooltip');
                if (tooltip) {
                  tooltip.style.opacity = 0;
                  tooltip.style.transform = 'translateX(-50%) scale(0.9)';
                  setTimeout(() => {
                    if (tooltip.parentNode) {
                      tooltip.parentNode.removeChild(tooltip);
                    }
                  }, 300);
                }
              }}
            >
              Get Started
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
