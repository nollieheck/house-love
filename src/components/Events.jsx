import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Events.css';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Events() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="events" id="events" ref={ref}>
      <div className="events__container">
        {/* Section Header */}
        <motion.div
          className="events__header"
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="events__header-text">
            <h2 className="display-md events__title">
              Proximos Eventos
            </h2>
            <p className="body-lg events__desc">
              Curated spaces for the luminous listener. Intimate capacities, exceptional sound.
            </p>
          </div>
          <a href="#events" className="events__view-all label-md">
            View All Calendar
          </a>
        </motion.div>

        {/* Event Cards Grid */}
        <div className="events__grid">
          {/* Featured Event — Large Card */}
          <motion.div
            className="events__card-featured"
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvbrWXYejIkfZyV4R3KQ-P-0bLCWxZQD6ORgCofTzOCpE5tdaWn01dqyGk9ZYAKOWdVpFJxuy1jgXQZAt7P41AL3QTeB5Uq6Z6mACsPWXGaW-RSi9TMuYXn-nmutK7w6bzuBW2yoFGy-g7xsUlvXuleLIEa3mIDO1DQzdMFtOEx2XZifoWAI7OTyCKSPwzTVtSdH2IcUXlgsgcXNR5QVcj1eStAx06K3eCZKff2Vx746ft4c_zhA1ISPNRa23KuJS7ReKfp_S6y9I"
              alt="Bright airy warehouse space with minimal DJ setup and warm natural light"
              className="events__card-featured-img"
              loading="lazy"
            />
            <div className="events__card-featured-gradient" />
            <div className="events__card-featured-content">
              <div>
                <span className="events__badge">Oct 24</span>
                <h3 className="events__card-featured-title">Sunbreak Sessions</h3>
                <p className="events__card-featured-location">
                  <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>
                    location_on
                  </span>
                  The Glasshouse, Brooklyn
                </p>
              </div>
              <button className="events__card-arrow" aria-label="View event details">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </motion.div>

          {/* Secondary Event Card */}
          <motion.div
            className="events__card-secondary ambient-shadow"
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <div className="events__card-secondary-header">
              <span className="events__badge events__badge--subtle">Nov 12</span>
              <span className="material-symbols-outlined events__card-secondary-arrow">
                north_east
              </span>
            </div>
            <div className="events__card-secondary-body">
              <h3 className="events__card-secondary-title">
                Nocturnal in Spirit, Luminous in Execution
              </h3>
              <p className="events__card-secondary-desc">
                A deep dive into minimal tech.
              </p>
              <div className="events__card-secondary-footer ghost-border">
                <span className="events__card-secondary-venue">Berlin Studio</span>
                <span className="events__card-secondary-status">RSVP Open</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
