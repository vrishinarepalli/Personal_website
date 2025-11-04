import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Section.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Goel Strategies',
      date: 'August 2025 - Present',
      responsibilities: [
        'Develop marketing applications and digital solutions to enhance client engagement',
        'Design and implement software tools to streamline marketing operations'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Vyts Inc | Irving, Texas',
      date: 'August 2021 - Present',
      responsibilities: [
        'Long-term internship contributing to software development projects over 3+ years',
        'Gained professional software development experience and team collaboration skills'
      ]
    },
    {
      title: 'SAT Math Tutor',
      company: 'Head of the Class Academic Center | Keller, Texas',
      date: 'Jan 2022 - Mar 2022',
      responsibilities: []
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 60, rotateY: 15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="card"
              style={{ marginBottom: '2rem' }}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 50px rgba(76, 175, 80, 0.25)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="card-header">
                <div>
                  <motion.h3
                    whileHover={{ color: "#4caf50", x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {exp.title}
                  </motion.h3>
                  <p className="company">{exp.company}</p>
                </div>
                <span className="date">{exp.date}</span>
              </div>
              {exp.responsibilities.length > 0 && (
                <motion.ul
                  className="item-list"
                  variants={containerVariants}
                >
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.li key={idx} variants={listItemVariants}>
                      {resp}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
