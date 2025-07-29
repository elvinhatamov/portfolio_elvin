import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { number: '3+', label: 'Years Full Stack Dev' },
    { number: '1.5+', label: 'Years Cloud Computing' },
    { number: '30+', label: 'Projects Contributed' }
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p>
              I'm a Cloud Computing postgraduate student at George Brown College with over 3+ years of experience as a 
              Full Stack and Web Developer, plus 1.5+ years specializing in Cloud Computing. I've contributed to 30+ projects 
              using technologies like React, Node.js, Azure, AWS, and Microsoft 365.
            </p>
            <p>
              During my internship as a Research Assistant at Lambton College, I worked on cloud-based applications 
              where I gained experience with AWS services, deployed applications using Docker, and collaborated using 
              Git for version control. This role helped me strengthen my skills in cloud architecture, containerization, 
              and CI/CD pipelines.
            </p>
            <p>
              I also volunteered with Out in Tech, where I helped build a community platform for Key Watch Ghana. 
              As a freelancer, I launched e-commerce websites for clients using Shopify and WordPress, focusing on 
              clean design, SEO, and user experience.
            </p>
            <p>
              Prior to my tech journey, I worked as a Sales Representative in the pharmaceutical industry and 
              supported clients as an immigration consultant. These experiences taught me how to communicate 
              effectively, adapt quickly, and solve problems—skills I now apply to cloud-focused projects.
            </p>
          </motion.div>
          
          <motion.div
            className="about-sidebar"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;