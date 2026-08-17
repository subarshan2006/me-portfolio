import { useEffect, useRef, useState } from 'react';
import './Hero.css';

function Hero() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const mobile = window.matchMedia('(max-width: 768px)').matches;
    setIsMobile(mobile);

    if (mobile) {
      video.play().catch(() => {});
      return;
    }

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

        if (video.duration) {
          video.currentTime = video.duration * fraction;
        }

        setScrollProgress(fraction);
        ticking = false;
      });
    }

    function onMetadataLoaded() {
      video.currentTime = 0;
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    video.addEventListener('loadedmetadata', onMetadataLoaded);

    if (video.readyState >= 1) {
      onMetadataLoaded();
    }

    return () => {
      video.removeEventListener('loadedmetadata', onMetadataLoaded);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const overlayOpacity = isMobile ? 1 : Math.max(0, 1 - scrollProgress * 3);
  const overlayTranslate = isMobile ? 0 : scrollProgress * 80;
  const videoOpacity = isMobile ? 1 : (scrollProgress > 0.85 ? 1 - (scrollProgress - 0.85) / 0.15 : 1);

  return (
    <section id="home" className="hero" ref={containerRef}>
      <div className="hero-video-wrapper" style={{ opacity: videoOpacity }}>
        <video
          ref={videoRef}
          className="hero-video"
          muted
          playsInline
          loop={isMobile}
          autoPlay={isMobile}
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
          <div className="hero-action-block">
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
