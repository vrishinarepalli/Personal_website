import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <h1 className="logo">Vrishin R. Arepalli</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/Vrishin_Arepalli_Resume.pdf" target="_blank" className="resume-btn">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
