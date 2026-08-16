import { useInView } from '../../hooks/useInView';
import './Contact.css';

function Contact() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="section contact">
      <div className="section-container">
        <div
          ref={ref}
          className={`contact-inner fade-in-section ${isVisible ? 'is-visible' : ''}`}
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="contact-heading">
            Let's Build Something<br />
            <span className="contact-heading-accent">Great Together</span>
          </h2>
          <p className="contact-text">
            I'm always open to new opportunities, collaborations, and interesting
            conversations. Whether you have a project in mind or just want to say
            hello — don't hesitate to reach out.
          </p>

          <div className="contact-cards">
            <a href="mailto:subarshan195@gmail.com" className="contact-card floating-card">
              <div className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="contact-card-label">Email</span>
            </a>

            <a href="https://github.com/subarshan2006" target="_blank" rel="noopener noreferrer" className="contact-card floating-card">
              <div className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.278 9.521 21.017C9.521 20.782 9.513 20.14 9.508 19.285C6.726 19.885 6.139 17.879 6.139 17.879C5.685 16.726 5.029 16.424 5.029 16.424C4.121 15.798 5.098 15.811 5.098 15.811C6.101 15.881 6.629 16.842 6.629 16.842C7.521 18.363 8.97 17.926 9.539 17.674C9.631 17.014 9.889 16.577 10.175 16.42C7.954 16.26 5.62 15.38 5.62 11.548C5.62 10.46 6.01 9.572 6.649 8.878C6.546 8.618 6.203 7.607 6.747 6.234C6.747 6.234 7.587 5.958 9.497 7.249C10.31 7.019 11.16 6.904 12.004 6.9C12.848 6.904 13.698 7.019 14.513 7.249C16.42 5.958 17.258 6.234 17.258 6.234C17.804 7.607 17.461 8.618 17.358 8.878C17.999 9.572 18.385 10.46 18.385 11.548C18.385 15.39 16.047 16.258 13.82 16.412C14.174 16.722 14.492 17.336 14.492 18.272C14.492 19.602 14.48 20.672 14.48 21.017C14.48 21.28 14.659 21.586 15.167 21.488C19.138 20.162 22 16.416 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="contact-card-label">GitHub</span>
            </a>

            <a href="https://linkedin.com/in/thesubarshan" target="_blank" rel="noopener noreferrer" className="contact-card floating-card">
              <div className="contact-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M7 10V17M7 7.01L7.01 6.999M11 17V13.5C11 12.12 12.12 11 13.5 11C14.88 11 16 12.12 16 13.5V17M11 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="contact-card-label">LinkedIn</span>
            </a>
          </div>

          {/* Big CTA */}
          <a href="mailto:subarshan195@gmail.com" className="contact-cta">
            <span>Say Hello</span>
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
