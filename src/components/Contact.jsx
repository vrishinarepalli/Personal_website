import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Section.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 40, scale: 0.9 },
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

  const contacts = [
    {
      title: "Email",
      href: "mailto:vrishinarepallirao@gmail.com",
      text: "vrishinarepallirao@gmail.com"
    },
    {
      title: "Phone",
      href: "tel:+14693495600",
      text: "(469) 349-5600"
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/vrishin-arepalli-3b5428265",
      text: "vrishin-arepalli-3b5428265",
      external: true
    },
    {
      title: "GitHub",
      href: "https://github.com/Varepall",
      text: "Varepall",
      external: true
    }
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              className="contact-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 10px 40px rgba(76, 175, 80, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <h3>{contact.title}</h3>
              <motion.a
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                whileHover={{ color: "#4caf50", x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {contact.text}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
