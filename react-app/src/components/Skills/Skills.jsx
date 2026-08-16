import { useInView } from '../../hooks/useInView';
import './Skills.css';

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Design'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'REST API Design', 'JWT Authentication'],
  },
  {
    category: 'Database',
    items: ['MongoDB', 'Mongoose ODM'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'VS Code'],
  },
  {
    category: 'Payments',
    items: ['Razorpay Integration'],
  },
  {
    category: 'Other',
    items: ['C++', 'Java', 'Problem Solving'],
  },
];

function Skills() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="section skills">
      <div className="section-container">
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Technologies & Skills</h2>

        <div
          ref={ref}
          className={`skills-grid stagger-children ${isVisible ? 'is-visible' : ''}`}
        >
          {skills.map((group) => (
            <div key={group.category} className="skills-group floating-card fade-in-child">
              <h3 className="skills-group-title">{group.category}</h3>
              <div className="skills-tags">
                {group.items.map((skill) => (
                  <span key={skill} className="skills-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee strip */}
        <div className="skills-marquee-wrapper">
          <div className="skills-marquee">
            {[...Array(2)].map((_, i) => (
              <div className="skills-marquee-track" key={i} aria-hidden={i > 0}>
                {['React', '·', 'Node.js', '·', 'TypeScript', '·', 'Python', '·', 'PostgreSQL', '·', 'Docker', '·', 'AWS', '·', 'Next.js', '·', 'GraphQL', '·'].map(
                  (item, j) => (
                    <span key={j} className="skills-marquee-item">
                      {item}
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
