import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];

    function onScroll() {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick(e, sectionId) {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}
    >
      <div className="navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => {
            handleClick(e, 'home');
            closeMenu();
          }}
        >
          S<span className="navbar-logo-dot">.</span>
        </a>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar-link ${activeSection === link.id ? 'navbar-link--active' : ''}`}
                onClick={(e) => handleClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            href="#contact"
            className="navbar-cta"
            onClick={(e) => handleClick(e, 'contact')}
          >
            Let's Talk
          </a>

          <button
            type="button"
            className="navbar-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
            <span className="navbar-toggle-bar"></span>
          </button>
        </div>
      </div>

      <div className={`navbar-mobile ${menuOpen ? 'is-open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`navbar-mobile-link ${activeSection === link.id ? 'navbar-mobile-link--active' : ''}`}
            onClick={(e) => {
              handleClick(e, link.id);
              closeMenu();
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="navbar-mobile-cta"
          onClick={(e) => {
            handleClick(e, 'contact');
            closeMenu();
          }}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
