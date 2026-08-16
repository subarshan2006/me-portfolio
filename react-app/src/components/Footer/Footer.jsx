import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">S<span className="footer-logo-dot">.</span></span>
        <span className="footer-copy">
          © {year} Subarshan. All rights reserved.
        </span>
        <div className="footer-links">
          <a href="https://github.com/subarshan2006" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/thesubarshan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:subarshan195@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
