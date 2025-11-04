import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Section.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const detailVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1 + 0.3,
        duration: 0.5
      }
    })
  };

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.div
          className="card"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
              Purdue University - West Lafayette
            </motion.h3>
            <span className="date">July 2023 - May 2027 (Expected)</span>
          </div>
          <motion.p
            className="degree"
            custom={0}
            variants={detailVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            B.S. Computer Science, Machine Intelligence and Database and Information System Concentrations
          </motion.p>
          <motion.p
            className="details"
            custom={1}
            variants={detailVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Minor: Mathematics, Law and Society
          </motion.p>
          <motion.p
            className="details"
            custom={2}
            variants={detailVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Certificate: Entrepreneurship
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
