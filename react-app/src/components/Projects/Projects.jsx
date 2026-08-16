import { useInView } from '../../hooks/useInView';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    year: '2025',
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    description:
      'An intelligent conversational AI powered by large language models with context-aware responses, memory, and multi-turn dialogue support.',
    tech: ['Python', 'FastAPI', 'React', 'OpenAI'],
    year: '2025',
  },
  {
    id: 3,
    title: 'Task Management App',
    description:
      'A collaborative project management tool with real-time updates, kanban boards, drag-and-drop, and team activity tracking.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    year: '2024',
  },
  {
    id: 4,
    title: 'Portfolio & Blog',
    description:
      'A modern personal website with scroll-driven animations, dynamic content rendering, and a headless CMS-powered blog engine.',
    tech: ['React', 'Vite', 'MDX', 'Vercel'],
    year: '2024',
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
                <span className="project-year">{project.year}</span>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
