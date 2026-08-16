import { useInView } from '../../hooks/useInView';
import './About.css';

function About() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="section about">
      <div className="section-container">
        <div
          ref={ref}
          className={`about-grid fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          {/* Left — text content */}
          <div className="about-content">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Crafting Digital Experiences<br />with Purpose & Precision
            </h2>
            <p className="about-text">
              I'm a passionate Software Engineer who thrives on turning complex problems 
              into clean, elegant solutions. With a deep love for building things from 
              scratch, I specialize in full-stack development, creating seamless user 
              experiences backed by robust, scalable architectures.
            </p>
            <p className="about-text">
              My approach blends technical expertise with creative thinking — because 
              great software isn't just functional, it's an experience. I believe in 
              writing code that's as beautiful to read as the interfaces it powers.
            </p>
          </div>

          {/* Right — stat cards */}
          <div className="about-stats">
            <div className="about-stat-card floating-card">
              <span className="about-stat-number">3+</span>
              <span className="about-stat-label">Years of Experience</span>
            </div>
            <div className="about-stat-card floating-card">
              <span className="about-stat-number">20+</span>
              <span className="about-stat-label">Projects Completed</span>
            </div>
            <div className="about-stat-card floating-card">
              <span className="about-stat-number">10+</span>
              <span className="about-stat-label">Technologies Mastered</span>
            </div>
            <div className="about-stat-card floating-card">
              <span className="about-stat-number">∞</span>
              <span className="about-stat-label">Lines of Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
