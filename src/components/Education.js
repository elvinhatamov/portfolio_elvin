import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaLaptopCode, FaCode, FaLanguage, FaCity } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: 'Postgraduate Degree - Cloud Computing Technologies Program',
      institution: 'George Brown College',
      period: 'January 2025 - Current',
      description: 'Currently pursuing advanced cloud computing technologies and practices.',
      icon: <FaGraduationCap />,
      current: true
    },
    {
      degree: 'Advanced Diploma - Computer Programming Analyst',
      institution: 'George Brown College',
      period: '2019 - May 2021',
      icon: <FaLaptopCode />
    },
    {
      degree: 'Certificate - Computer Software Engineering',
      institution: 'General Assembly Canada',
      period: 'May 2022 - September 2022',
      icon: <FaCode />
    },
    {
      degree: 'Certificate - English for Academic Purposes',
      institution: 'George Brown College',
      period: 'September 2017 - September 2018',
      icon: <FaLanguage />
    },
    {
      degree: "Master's Degree - City/Urban, Community and Regional Planning",
      institution: 'Baku State University',
      period: 'September 2005 - June 2007',
      icon: <FaCity />
    }
  ];

  return (
    <section id="education" className="education" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={`education-item ${edu.current ? 'current' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="education-icon">
                {edu.icon}
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <span className="education-date">{edu.period}</span>
                {edu.description && <p>{edu.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;