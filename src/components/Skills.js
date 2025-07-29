import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCloud, FaCogs, FaCode, FaDatabase } from 'react-icons/fa';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: <FaCloud />,
      skills: [
        'AWS (API Gateway, Lambda, RDS)',
        'AWS Auto Scaling',
        'Amazon CloudWatch',
        'Azure Virtual Machines',
        'Microsoft 365',
        'Microsoft Endpoint Manager'
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      icon: <FaCogs />,
      skills: [
        'Infrastructure as Code (IaC)',
        'Docker',
        'CI/CD Pipelines',
        'Git Version Control',
        'Agile Methodologies'
      ]
    },
    {
      title: 'Development',
      icon: <FaCode />,
      skills: [
        'React',
        'Node.js',
        'Express.js',
        'JavaScript',
        'Java Spring Boot',
        'REST APIs'
      ]
    },
    {
      title: 'Databases & CMS',
      icon: <FaDatabase />,
      skills: [
        'MongoDB',
        'AWS RDS',
        'WordPress',
        'Shopify',
        'SEO Optimization'
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>
                {category.icon}
                {category.title}
              </h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + skillIndex * 0.1, duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;