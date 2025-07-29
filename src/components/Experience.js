import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: 'Research Assistant III / Full Stack Developer',
      company: 'Lambton College Of Applied Arts & Technology',
      period: 'February 2025 - June 2025',
      responsibilities: [
        'Contributed to building and maintaining web applications using React and Express.js',
        'Managed AWS infrastructure, including API Gateway and Lambda functions',
        'Set up and integrated custom domains effectively with AWS',
        'Collaborated with research teams to implement solutions and improve system performance',
        'Actively participated in agile meetings to support timely project delivery'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Freelance',
      period: 'January 2023 - December 2024',
      responsibilities: [
        'Built and launched e-commerce websites using Shopify and WordPress',
        'Implemented SEO strategies to improve client website visibility and traffic'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'KeelWorks Foundation',
      period: 'January 2023 - July 2024',
      responsibilities: [
        'Collaborated with team, transforming business requirements using Java Spring Boot and React',
        'Developed REST APIs for seamless user file uploads to MongoDB',
        'Optimized and debugged code for smooth integration and rapid deployment using CI-CD practices',
        'Engaged in regular peer code reviews and Agile team meetings'
      ]
    },
    {
      title: 'Immigration Consultant',
      company: 'Self-employed',
      period: 'January 2019 - December 2024',
      responsibilities: [
        'Assisted clients with Canadian immigration applications',
        'Reviewed documentation for accuracy and completeness',
        'Guided clients through complex immigration processes',
        'Communicated with government agencies on behalf of clients'
      ]
    },
    {
      title: 'Frontend Web Developer - WordPress Developer',
      company: 'Out in Tech',
      period: 'March 2023 - May 2023',
      responsibilities: [
        'Volunteered as Front-end Developer to build website for Key Watch Ghana non-profit',
        'Implemented WordPress plugins to enhance website functionality and user experience'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'General Assembly',
      period: 'May 2022 - September 2022',
      responsibilities: [
        'Built real-life projects during the program',
        'Applied skills and knowledge in practical settings',
        'Designed and developed robust software solutions'
      ]
    }
  ];

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-date">{exp.period}</div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + respIndex * 0.1, duration: 0.3 }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;