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
        'AWS Lambda',
        'AWS API Gateway',
        'AWS Cognito',
        'AWS RDS (PostgreSQL)',
        'AWS S3',
        'AWS CloudWatch',
        'AWS ECS',
        'Azure (AZ-900)',
        'AWS Bedrock'
      ]
    },
    {
      title: 'Infrastructure & DevOps',
      icon: <FaCogs />,
      skills: [
        'Kubernetes',
        'Docker',
        'CI/CD (GitHub Actions)',
        'Build Automation',
        'Infrastructure as Code',
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
        'Python',
        'REST APIs',
        'Cloud Application Development'
      ]
    },
    {
      title: 'Databases & Tools',
      icon: <FaDatabase />,
      skills: [
        'PostgreSQL',
        'MongoDB',
        'RDS',
        'Postman',
        'IBM MQ (learning)',
        'IBM DB2 (learning)'
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