import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Section.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, x: -60, rotateY: -15 },
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Leadership & Projects
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="card"
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 15px 50px rgba(76, 175, 80, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-header">
              <motion.h3
                whileHover={{ color: "#4caf50", x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Purdue Basketball League
              </motion.h3>
              <span className="date">September 2024 - Present</span>
            </div>
            <p className="role">Founder & President</p>
            <motion.ul
              className="item-list"
              variants={containerVariants}
            >
              <motion.li variants={listItemVariants}>
                Founded campus basketball league serving the Purdue community
              </motion.li>
              <motion.li variants={listItemVariants}>
                Developing custom web application for league management and public operations
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
