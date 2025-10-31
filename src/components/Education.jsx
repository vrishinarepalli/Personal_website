import './Section.css';

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="card">
          <div className="card-header">
            <h3>Purdue University - West Lafayette</h3>
            <span className="date">July 2023 - May 2027 (Expected)</span>
          </div>
          <p className="degree">B.S. Computer Science, Machine Intelligence and Database and Information System Concentrations</p>
          <p className="details">Minor: Mathematics, Law and Society</p>
          <p className="details">Certificate: Entrepreneurship</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
