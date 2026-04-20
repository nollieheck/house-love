import { motion } from 'framer-motion';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

const waveformBars = [
  { height: '33%', delay: 0 },
  { height: '66%', delay: 0.15 },
  { height: '100%', delay: 0.3 },
  { height: '80%', delay: 0.45 },
  { height: '50%', delay: 0.6 },
  { height: '25%', delay: 0.75 },
  { height: '33%', delay: 0.9 },
];

export default function Hero() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="hero" id="hero">
      {/* Background Video Layer */}
      <div className="hero__bg">
        <video
          src={`${import.meta.env.BASE_URL}videos/video.mp4`}
          autoPlay
          loop
          muted
          playsInline
          className="hero__video"
        />
        <div className="hero__bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__text">
          <motion.h1
            className="display-lg hero__title"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            HOUSE LOVE <br className="desktop-only-br" /> RECORDS
          </motion.h1>

          <motion.p
            className="body-lg hero__subtitle"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Sello discográfico de música house desde Córdoba, Argentina.
            <br className="desktop-only-br" />
            Groove, cultura de pista y comunidad con identidad propia.
          </motion.p>

          <motion.div
            className="hero__actions"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <a
              href="#events"
              className="hero__btn-black"
              onClick={(e) => handleScroll(e, '#events')}
            >
              <span>CONOCER EVENTOS</span>
            </a>
            <a
              href="#vision"
              className="hero__btn-black"
              onClick={(e) => handleScroll(e, '#vision')}
            >
              REPRODUCIR
            </a>
          </motion.div>
        </div>

        {/* Latest Release Card */}
        <motion.div
          className="hero__card-wrapper"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <div className="hero__release-card glass-panel ambient-shadow">
            <div className="hero__release-glow" />
            <div className="hero__release-header">
              <span className="label-md hero__release-label">ULTIMO LANZAMIENTO</span>
              <span
                className="material-symbols-outlined hero__play-icon"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_circle
              </span>
            </div>
            <h3 className="hero__release-title">Ethereal Warehouse EP</h3>
            <p className="hero__release-artist">By Nocturnal Luminous</p>
            <div className="hero__waveform" aria-hidden="true">
              {waveformBars.map((bar, i) => (
                <motion.div
                  key={i}
                  className="hero__waveform-bar"
                  style={{ height: bar.height }}
                  animate={{
                    scaleY: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: bar.delay,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
