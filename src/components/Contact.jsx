import './Section.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Email</h3>
            <a href="mailto:vrishinarepallirao@gmail.com">vrishinarepallirao@gmail.com</a>
          </div>
          <div className="contact-card">
            <h3>Phone</h3>
            <a href="tel:+14693495600">(469) 349-5600</a>
          </div>
          <div className="contact-card">
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/vrishin-arepalli-3b5428265" target="_blank" rel="noopener noreferrer">
              vrishin-arepalli-3b5428265
            </a>
          </div>
          <div className="contact-card">
            <h3>GitHub</h3>
            <a href="https://github.com/Varepall" target="_blank" rel="noopener noreferrer">Varepall</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
