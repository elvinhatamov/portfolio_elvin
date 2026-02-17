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

  const languages = [
    { name: 'English', level: 'Professional Working' },
    { name: 'Turkish', level: 'Full Professional' },
    { name: 'Azerbaijani', level: 'Native or Bilingual' },
    { name: 'Russian', level: 'Limited Working' }
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
              Azure and AWS certified Cloud Engineer focused on building reliable cloud-native systems—serverless and container-based—across AWS and Azure. 
              I've delivered API-first solutions with authentication, secure IAM, monitoring, and CI/CD, and I enjoy the "production mindset": troubleshooting, 
              incident triage, root-cause analysis, and improving operational readiness.
            </p>
            <p>
              During my co-op term at George Brown College, I implemented an AI-assisted Resume Scanner end-to-end on AWS as a work-integrated project 
              using Lambda, API Gateway, Cognito, S3, RDS (PostgreSQL), Route 53, and React, including structured logging/metrics in CloudWatch and 
              validation/testing with Postman. I also built semantic job-matching using AWS Bedrock and delivered ranked recommendations with fallback logic.
            </p>
            <p>
              Previously, I helped deliver an analytics web application serving 500+ users on AWS (ECS/Lambda/API Gateway/RDS/S3), optimized React + Node 
              services to reduce response times by ~60%, and automated build/test/deploy workflows using GitHub Actions + Docker with quality gates.
            </p>
            <p>
              I'm Microsoft Azure Fundamentals (AZ-900) certified and actively expanding into enterprise integration tooling (IBM MQ/DB2/WebSphere/ACE, learning). 
              I'm open to Cloud Engineer / DevOps / Platform / Backend roles where I can help teams ship secure, scalable systems.
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
            
            <motion.div
              className="languages"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h3>Languages</h3>
              <div className="language-list">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    className="language-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.0 + index * 0.1, duration: 0.3 }}
                  >
                    <strong>{lang.name}</strong>
                    <span>{lang.level}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;