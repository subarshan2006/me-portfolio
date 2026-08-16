import { useInView } from '../../hooks/useInView';
import './Resume.css';

const experience = [
  {
    role: 'MERN Stack Intern',
    company: 'Amypo Technology, Coimbatore',
    date: 'Jun 2025',
    points: [
      'Worked on full-stack web application development using MongoDB, Express.js, React.js, and Node.js.',
      'Practised backend best practices, database optimization, REST API integration, and frontend efficiency.',
      'Gained experience in testing & debugging, deployment workflows, and professional development practices.',
    ],
  },
];

const education = [
  {
    degree: 'B.Tech – Information Technology',
    period: '2024 – 2028',
    school: 'Sri Krishna College of Engineering and Technology, Coimbatore',
    detail: '3rd Year',
  },
];

const certifications = [
  {
    title: 'MERN Stack Developer',
    issuer: 'Amypo Technology, Coimbatore',
    date: 'Jun 2025',
  },
];

const leadership = [
  'SIH (Smart India Hackathon) participant — strong problem solving and rapid prototyping under pressure.',
  'Acted as Project Leader, guiding teams through planning and delivery on client projects.',
  'Trust Member at college society — coordinated event planning, team management, and logistics.',
  'Professional speaker — participates in tech seminars and knowledge-sharing sessions.',
];

function Resume() {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <section id="resume" className="section resume">
      <div className="section-container">
        <div
          ref={ref}
          className={`resume-inner fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">Resume</h2>

          {/* Work Experience */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <span className="resume-block-index">[ 01 ]</span> Work Experience
            </h3>
            <div className="resume-timeline">
              {experience.map((job, i) => (
                <div className="resume-timeline-item" key={i}>
                  <span className="resume-timeline-dot" />
                  <div className="resume-timeline-card floating-card">
                    <div className="resume-item-head">
                      <div>
                        <h4 className="resume-item-role">{job.role}</h4>
                        <span className="resume-item-company">{job.company}</span>
                      </div>
                      <span className="resume-item-date">{job.date}</span>
                    </div>
                    <ul className="resume-item-list">
                      {job.points.map((point, j) => (
                        <li key={j}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certifications */}
          <div className="resume-grid-2">
            <div className="resume-block">
              <h3 className="resume-block-title">
                <span className="resume-block-index">[ 02 ]</span> Education
              </h3>
              {education.map((edu, i) => (
                <div className="resume-mini-card floating-card" key={i}>
                  <div className="resume-item-head">
                    <div>
                      <h4 className="resume-item-role">{edu.degree}</h4>
                      <span className="resume-item-company">{edu.school}</span>
                    </div>
                    <span className="resume-item-date">{edu.period}</span>
                  </div>
                  <span className="resume-item-detail">{edu.detail}</span>
                </div>
              ))}
            </div>

            <div className="resume-block">
              <h3 className="resume-block-title">
                <span className="resume-block-index">[ 03 ]</span> Certifications
              </h3>
              {certifications.map((cert, i) => (
                <div className="resume-mini-card floating-card" key={i}>
                  <div className="resume-item-head">
                    <div>
                      <h4 className="resume-item-role">{cert.title}</h4>
                      <span className="resume-item-company">{cert.issuer}</span>
                    </div>
                    <span className="resume-item-date">{cert.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Activities */}
          <div className="resume-block">
            <h3 className="resume-block-title">
              <span className="resume-block-index">[ 04 ]</span> Leadership &amp; Activities
            </h3>
            <div className="resume-list-card floating-card">
              <ul className="resume-item-list">
                {leadership.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
