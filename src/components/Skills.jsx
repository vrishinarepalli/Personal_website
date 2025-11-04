import './Section.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="card">
            <h3>Programming Languages</h3>
            <ul className="skill-list">
              <li>C</li>
              <li>C++</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="card">
            <h3>Tools & Technologies</h3>
            <ul className="skill-list">
              <li>UNIX/Linux</li>
              <li>Git</li>
              <li>Terminal</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
