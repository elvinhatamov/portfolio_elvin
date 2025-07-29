import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaAngular, FaNodeJs, FaCloud, FaPython, FaJs } from 'react-icons/fa';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const certifications = [
    {
      name: 'Angular Animation',
      icon: <FaAngular />
    },
    {
      name: 'edX Verified Certificate for Node.js',
      icon: <FaNodeJs />
    },
    {
      name: 'Introduction to Cloud Computing (IBM)',
      icon: <FaCloud />
    },
    {
      name: 'Django Migrations 101',
      icon: <FaPython />
    },
    {
      name: 'Node.js',
      icon: <FaJs />
    }
  ];

  return (
    <section id="certifications" className="certifications" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="cert-icon">
                {cert.icon}
              </div>
              <h3>{cert.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;