import { motion } from 'framer-motion';
import LiquidChrome from './LiquidChrome';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section id="about" className="hero">
      <div className="hero-background">
        <LiquidChrome
          baseColor={[0.2, 0.3, 0.08]}
          speed={0.3}
          amplitude={0.4}
          frequencyX={2}
          frequencyY={2}
          interactive={true}
        />
      </div>
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={titleVariants}>
          Hello, I'm Vrishin
        </motion.h2>
        <motion.p className="tagline" variants={itemVariants}>
          Computer Science Student | Software Developer | Student
        </motion.p>
        <motion.p className="bio" variants={itemVariants}>
          I'm a Computer Science student at Purdue University with a concentration in Machine Intelligence.
          I'm passionate about building innovative software solutions and leading impactful projects.
          Currently working as a Software Development Intern and founder of the Purdue Basketball League.
        </motion.p>
        <motion.div className="social-links" variants={itemVariants}>
          <motion.a
            href="https://github.com/Varepall"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/vrishin-arepalli-3b5428265"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="mailto:vrishinarepallirao@gmail.com"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Email
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
