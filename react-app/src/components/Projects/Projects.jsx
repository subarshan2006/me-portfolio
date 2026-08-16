import { useInView } from '../../hooks/useInView';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'MERN Stack E-Commerce Platform',
    description:
      'Built a complete e-commerce web application with product listings, cart, user authentication, and order management. Integrated Razorpay payment gateway for secure end-to-end payment processing.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Razorpay', 'JWT'],
    year: '2025',
    date: 'Sep – Nov 2025',
    link: 'https://github.com/subarshan2006',
    linkLabel: 'GitHub',
  },
  {
    id: 2,
    title: 'Fashion Designer Course Selling Platform',
    description:
      'Developed a live course marketplace allowing users to browse and purchase fashion design courses online. Implemented structured course pages, enrollment flow, and responsive UI for a freelance client.',
    tech: ['Course Marketplace', 'Enrollment Flow', 'Responsive UI'],
    year: '2026',
    date: 'Jan 2026',
    link: 'https://sreestar.in',
    linkLabel: 'Live',
  },
  {
    id: 3,
    title: 'sridev.institute — Client Website',
    description:
      'Built and deployed a professional website for a client, ensuring clean design and smooth user experience.',
    tech: ['Client Project', 'Design', 'Deployment'],
    year: '2025',
    date: '2025',
    link: 'https://sridev.institute',
    linkLabel: 'Live',
  },
  {
    id: 4,
    title: 'Electrical & Plumbing Services Platform',
    description:
      'Designed and built a service booking platform for customers to find and connect with skilled tradespeople. Implemented service listings, contact flow, and responsive design for all device sizes.',
    tech: ['Service Booking', 'Contact Flow', 'Responsive'],
    year: '2025',
    date: 'Jun – Jul 2025',
    link: 'https://electricalandplumbingcontractor.com',
    linkLabel: 'Live',
  },
  {
    id: 5,
    title: 'Freelancing Business Website',
    description:
      'Built a responsive business landing page using HTML, CSS, and JavaScript for a client-focused freelance project.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    year: '2025',
    date: 'May 2025',
  },
];

function Projects() {
  const [ref, isVisible] = useInView({ threshold: 0.05 });

  return (
    <section id="projects" className="section projects">
      <div className="section-container">
        <span className="section-label">Selected Work</span>
        <h2 className="section-title">Featured Projects</h2>

        <div
          ref={ref}
          className={`projects-grid stagger-children ${isVisible ? 'is-visible' : ''}`}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card floating-card fade-in-child"
            >
              <div className="project-header">
                <div className="project-header-meta">
                  <span className="project-year">{project.year}</span>
                  {project.date && <span className="project-date">{project.date}</span>}
                </div>
                <span className="project-number">
                  {String(project.id).padStart(2, '0')}
                </span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-tech-tag">
                    {t}
                  </span>
                ))}
              </div>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <span>{project.linkLabel || 'View Project'}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ) : (
                <div className="project-link">
                  <span>View Project</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8H13M13 8L9 4M13 8L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
