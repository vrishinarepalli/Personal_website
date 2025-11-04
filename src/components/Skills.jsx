import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Section.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Java", "Python"]
    },
    {
      category: "Tools & Technologies",
      items: ["UNIX/Linux", "Git", "Terminal", "React"]
    }
  ];

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="card"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(76, 175, 80, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <h3>{skillGroup.category}</h3>
              <motion.ul
                className="skill-list"
                variants={containerVariants}
              >
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    variants={skillItemVariants}
                    whileHover={{ x: 10, color: "#4caf50" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
