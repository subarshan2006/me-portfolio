import { useEffect, useRef } from 'react';
import './ScrollVideo.css';

function ScrollVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction =
          maxScroll > 0 ? window.scrollY / maxScroll : 0;
        video.currentTime = video.duration * scrollFraction;
        ticking = false;
      });
    }

    function onMetadataLoaded() {
      video.currentTime = 0;
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    video.addEventListener('loadedmetadata', onMetadataLoaded);

    // If metadata is already loaded (e.g. cached), trigger manually
    if (video.readyState >= 1) {
      onMetadataLoaded();
    }

    return () => {
      video.removeEventListener('loadedmetadata', onMetadataLoaded);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="scroll-container">
      <video
        ref={videoRef}
        id="scroll-video"
        muted
        playsInline
        preload="auto"
      >
        <source src="/video_optimized.mp4" type="video/mp4" />
      </video>

      <div className="content">
        <h1>Scroll to Animate</h1>
      </div>
    </div>
  );
}

export default ScrollVideo;
