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
      title: 'Developer, Cloud Engineering',
      company: 'George Brown College',
      location: 'Toronto, Ontario, Canada',
      period: 'September 2025 - December 2025',
      responsibilities: [
        'Collaborated with a 6-person team to design the architecture for a serverless Resume Scanner platform',
        'Independently built and deployed the application using AWS services and React, achieving 99% processing accuracy',
        'Diagnosed and resolved API and Lambda failures, ensuring robust application performance through effective monitoring'
      ]
    },
    {
      title: 'Full Stack Developer (Cloud/Serverless)',
      company: 'Lambton College Of Applied Arts & Technology, Just Sales Jobs',
      location: 'Toronto, Ontario, Canada',
      period: 'January 2025 - August 2025',
      responsibilities: [
        'Developed an analytics web application on AWS, serving over 500 users with elastic scaling and cost efficiency',
        'Collaborated with a 10-member team to ensure smooth implementation and release readiness',
        'Enhanced data availability by converting legacy datasets into AWS RDS using Python and SQL',
        'Optimized React UI and Node.js services, achieving a 60% reduction in API response times'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Freelance',
      location: 'Toronto, Ontario, Canada',
      period: 'January 2023 - December 2024',
      responsibilities: [
        'Built and launched e-commerce websites using Shopify and WordPress',
        'Implemented SEO strategies to improve client website visibility and traffic'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'KeelWorks Foundation',
      location: 'Toronto, ON',
      period: 'September 2021 - August 2024',
      responsibilities: [
        'Spearheaded the transition of backend services from Java Spring Boot to Node.js (Express.js), significantly improving development efficiency and application scalability',
        'Optimized and tested REST APIs using Postman by handling GET, POST, and URL-based HTTP requests',
        'Collaborated with development teams of 8 members via Slack, Zoom, Microsoft OneDrive, and Trello',
        'Participated in weekly Agile meetings for sprint planning and progress reviews'
      ]
    },
    {
      title: 'Frontend Web Developer - WordPress Developer',
      company: 'Out in Tech',
      location: 'United States',
      period: 'March 2023 - May 2023',
      responsibilities: [
        'Volunteered as a Front-end Developer to build a website for Key Watch Ghana, a non-profit organization',
        'Implemented WordPress plugins to enhance website functionality and user experience'
      ]
    },
    {
      title: 'Medical Representative',
      company: 'Gen',
      location: 'Baki, Azerbaijan',
      period: 'January 2012 - October 2016',
      responsibilities: [
        'Developed strong relationships with customers, instrumental in increasing sales',
        'Identified customer needs by asking the right questions and providing tailored solutions',
        'Utilized CRM database to track referral and appointment data'
      ]
    },
    {
      title: 'Medical Representative',
      company: 'Asfarma International Pharma Marketing',
      location: 'Baki, Azerbaijan',
      period: 'September 2006 - April 2013',
      responsibilities: [
        'Navigated automated systems to maintain client records and make adjustments when necessary'
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