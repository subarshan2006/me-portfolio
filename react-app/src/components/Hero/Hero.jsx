import { useEffect, useRef, useState } from 'react';
import './Hero.css';

function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [reduceMotion] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const scrolled = -rect.top;
        const maxScroll = containerHeight - window.innerHeight;
        const fraction = Math.min(1, Math.max(0, scrolled / maxScroll));

        setScrollProgress(fraction);
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Compute overlay styles based on scroll
  const overlayOpacity = Math.max(0, 1 - scrollProgress * 3);
  const overlayTranslate = scrollProgress * 80;
  const videoOpacity = scrollProgress > 0.85 ? 1 - (scrollProgress - 0.85) / 0.15 : 1;

  return (
    <section id="home" className="hero" ref={containerRef}>
      {/* Fixed video background */}
      <div className="hero-video-wrapper" style={{ opacity: videoOpacity }}>
        <video
          ref={videoRef}
          className="hero-video"
          muted
          playsInline
          autoPlay={!reduceMotion}
          loop={!reduceMotion}
          preload="auto"
          poster={`${import.meta.env.BASE_URL}hero-poster.jpg`}
        >
          <source
            media="(max-width: 768px)"
            src={`${import.meta.env.BASE_URL}finalprofile_mobile_540p.mp4`}
            type="video/mp4"
          />
          <source
            src={`${import.meta.env.BASE_URL}finalprofile_logo_removed_optimized.mp4`}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Floating hero content card */}
      <div
        className="hero-overlay"
        ref={overlayRef}
        style={{
          opacity: overlayOpacity,
          transform: `translateY(${overlayTranslate}px)`,
        }}
      >
        <div className="hero-card floating-card">
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name">SUBARSHAN</h1>
          <p className="hero-role">SOFTWARE DEVELOPER</p>
          {/* Buttons + Scroll block */}
          <div className="hero-action-block">
            {/* Buttons + centered scroll line */}
            <div className="hero-actions">
              <a
                href="#projects"
                className="hero-btn hero-btn--primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Work
              </a>

              {/* Scroll indicator centered between buttons */}
              <div className="hero-scroll-hint">
                <div className="hero-scroll-line">
                  <div className="hero-scroll-dot"></div>
                </div>
                <span>SCROLL</span>
              </div>

              <a
                href="#contact"
                className="hero-btn hero-btn--secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
