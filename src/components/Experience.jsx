import './Section.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Goel Strategies',
      date: 'August 2025 - Present',
      responsibilities: [
        'Develop marketing applications and digital solutions to enhance client engagement',
        'Design and implement software tools to streamline marketing operations'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'Vyts Inc | Irving, Texas',
      date: 'August 2021 - Present',
      responsibilities: [
        'Long-term internship contributing to software development projects over 3+ years',
        'Gained professional software development experience and team collaboration skills'
      ]
    },
    {
      title: 'SAT Math Tutor',
      company: 'Head of the Class Academic Center | Keller, Texas',
      date: 'Jan 2022 - Mar 2022',
      responsibilities: []
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="card" style={{ marginBottom: '2rem' }}>
            <div className="card-header">
              <div>
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
              </div>
              <span className="date">{exp.date}</span>
            </div>
            {exp.responsibilities.length > 0 && (
              <ul className="item-list">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
