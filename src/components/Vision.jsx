import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Vision.css';

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="vision" id="vision" ref={ref}>
      <div className="vision__container">
        {/* Image Column */}
        <motion.div
          className="vision__image-col"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeLeft}
        >
          <div className="vision__image-wrapper ambient-shadow">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBAQ6E9zZ2dX6J4fKSlc7ugJ4LygtPdMHHcpBcNXhaVfYiTGYo-y2_0f2Hzr7EbHYHWCfINvJ8F4q4aekdZsKKhnZOEVP5MctCO9y4MSA-qy0C8m3kpc9sbPQ7ap3gNkrACiYsomjcXNjmrzuxOdXgl00Q0um_DRuJgkumiVuIr0naNYv6jaEggFAq6wE2AZCnn9Fq6y3igcLgMK2AwNRrT2Mg3kZulxJyGxrITX1J9xgdoGtA_R5YZNkFzeLlgURPUp2WHw4pJUo"
              alt="Close up of premium minimalist DJ mixer knobs and faders bathed in warm natural golden hour light"
              className="vision__image"
              loading="lazy"
            />
          </div>
          <div className="vision__image-glow" />
        </motion.div>

        {/* Text Column */}
        <div className="vision__text-col">
          <motion.span
            className="label-md vision__label"
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeRight}
          >
            The Vision
          </motion.span>

          <motion.h2
            className="headline-lg vision__heading"
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeRight}
          >
            Rejecting the dark mode trope.
          </motion.h2>

          <motion.div
            className="vision__body"
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeRight}
          >
            <p className="body-lg">
              We are capturing the moment the sun breaks through the windows of a premium
              studio. House culture has long been relegated to dark, cavernous spaces. We
              believe the music deserves a gallery.
            </p>
            <p className="body-lg">
              A focus on high-end editorial evolution. Intentional asymmetry. Aggressive
              breathing room. This is a rhythmic layout where elements feel like they are
              floating in a curated space rather than locked into a rigid grid.
            </p>
          </motion.div>

          <motion.div
            className="vision__cta"
            custom={3}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeRight}
          >
            <div className="vision__cta-line" />
            <a href="#demos" className="label-md vision__cta-link">
              Join the Community
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
