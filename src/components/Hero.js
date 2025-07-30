import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaDownload, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjhGOUZBIi8+CjxjaXJjbGUgY3g9IjIwMCIgY3k9IjE2MCIgcj0iNjAiIGZpbGw9IiNEMUQ1REIiLz4KPHBhdGggZD0iTTEwMCAzMDBDMTAwIDI2MS4zNCAxMzEuMzQgMjMwIDE3MCAyMzBIMjMwQzI2OC42NiAyMzAgMzAwIDI2MS4zNCAzMDAgMzAwVjM0MEgxMDBWMzAwWiIgZmlsbD0iI0QxRDVEQiIvPgo8L3N2Zz4K";

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="highlight">Cloud Engineer</span>
              <br />Azure | AWS | Microsoft 365
            </motion.h1>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Passionate Cloud Computing professional with hands-on experience in Microsoft 365, Azure, and AWS. 
              Specializing in infrastructure as code, containerization, and full-stack development.
            </motion.p>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <a
                href="/assets/Elvin_Hatamov_Cloud_Analyst.pdf"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
                download="Elvin_Hatamov_Cloud_Analyst.pdf"
              >
                <FaDownload /> Download Resume
              </a>
            </motion.div>
            
            <motion.div
              className="hero-contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="contact-item">
                <FaEnvelope />
                <span>elvin.hatamov@outlook.com</span>
              </div>
              <div className="contact-item">
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/elvinhatamov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/elvinhatamov
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="profile-image">
              <img
                src={imageError ? placeholderImage : "/images/elvin_profile.png"}
                alt="Elvin Hatamov - Cloud Engineer"
                onError={() => setImageError(true)}
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;