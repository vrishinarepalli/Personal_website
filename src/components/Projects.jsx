import './Section.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Leadership & Projects</h2>
        <div className="card">
          <div className="card-header">
            <h3>Purdue Basketball League</h3>
            <span className="date">September 2024 - Present</span>
          </div>
          <p className="role">Founder & President</p>
          <ul className="item-list">
            <li>Founded campus basketball league serving the Purdue community</li>
            <li>Developing custom web application for league management and public operations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
