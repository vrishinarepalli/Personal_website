import LiquidChrome from './LiquidChrome';
import './Hero.css';

const Hero = () => {
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
      <div className="hero-content">
        <h2>Hello, I'm Vrishin</h2>
        <p className="tagline">Computer Science Student | Software Developer | Student</p>
        <p className="bio">
          I'm a Computer Science student at Purdue University with a concentration in Machine Intelligence.
          I'm passionate about building innovative software solutions and leading impactful projects.
          Currently working as a Software Development Intern and founder of the Purdue Basketball League.
        </p>
        <div className="social-links">
          <a href="https://github.com/Varepall" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/vrishin-arepalli-3b5428265" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:vrishinarepallirao@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
