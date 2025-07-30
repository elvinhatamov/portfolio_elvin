import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification('Please fill in all fields.', 'error');
      return;
    }
    
    if (!isValidEmail(formData.email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }
    
    // Create mailto link
    const mailtoLink = `mailto:elvin.hatamov@outlook.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    
    showNotification('Opening email client...', 'info');
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      showNotification('Message prepared! Your email client should open now.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: 'Toronto, ON, Canada\nM4S1G7'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+1 (647) 532-8536'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'elvin.hatamov@outlook.com'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      content: 'linkedin.com/in/elvinhatamov',
      link: 'https://www.linkedin.com/in/elvinhatamov'
    }
  ];

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3>Contact Information</h3>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div>
                  <h4>{info.title}</h4>
                  {info.link ? (
                    <p>
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.content}
                      </a>
                    </p>
                  ) : (
                    <p style={{ whiteSpace: 'pre-line' }}>{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {notification && (
        <motion.div
          className={`notification notification-${notification.type}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          {notification.message}
        </motion.div>
      )}
    </section>
  );
};

export default Contact;