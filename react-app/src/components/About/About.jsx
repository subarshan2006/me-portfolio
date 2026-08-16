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
              Motivated Full Stack Developer with hands-on experience building and
              deploying production web applications using the MERN stack. Completed
              an internship at Amypo Technology and delivered 5 real-world projects
              — three of which are live websites accessible in Google Chrome.
            </p>
            <p className="about-text">
              Comfortable across the full development lifecycle — from UI design
              and REST API development to database design and deployment.
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
