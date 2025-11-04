import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const linkVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1 + 0.3,
        duration: 0.4
      }
    })
  };

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#education", text: "Education" },
    { href: "#experience", text: "Experience" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <nav className="nav-container">
        <motion.h1
          className="logo"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Vrishin R. Arepalli
        </motion.h1>
        <ul className="nav-links">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              custom={index}
              variants={linkVariants}
              initial="initial"
              animate="animate"
            >
              <motion.a
                href={link.href}
                whileHover={{ y: -3, color: "#4caf50" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {link.text}
              </motion.a>
            </motion.li>
          ))}
          <motion.li
            custom={navLinks.length}
            variants={linkVariants}
            initial="initial"
            animate="animate"
          >
            <motion.a
              href="/Vrishin_Arepalli_Resume.pdf"
              target="_blank"
              className="resume-btn"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Resume
            </motion.a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
