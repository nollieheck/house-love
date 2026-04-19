import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './DemoSubmit.css';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function DemoSubmit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState({ email: false, link: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && link) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        setLink('');
      }, 3000);
    }
  };

  return (
    <section className="demo-submit" id="demos" ref={ref}>
      <div className="demo-submit__container">
        <motion.div
          className="demo-submit__card glass-panel ambient-shadow"
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          {/* Radial glow */}
          <div className="demo-submit__glow" />

          <motion.span
            className="material-symbols-outlined demo-submit__icon"
            style={{ fontVariationSettings: "'wght' 200" }}
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            graphic_eq
          </motion.span>

          <motion.h2
            className="display-md demo-submit__title"
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            Enviar Demo
          </motion.h2>

          <motion.p
            className="body-lg demo-submit__desc"
            custom={3}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            We are always listening for the next luminous sound. Share your unreleased
            tracks with our A&R team.
          </motion.p>

          <motion.form
            className="demo-submit__form"
            onSubmit={handleSubmit}
            custom={4}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
          >
            <div className={`demo-submit__input-wrapper ${focused.email ? 'demo-submit__input-wrapper--focused' : ''}`}>
              <input
                id="demo-email"
                type="email"
                className="demo-submit__input"
                placeholder="YOUR EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocused((f) => ({ ...f, email: true }))}
                onBlur={() => setFocused((f) => ({ ...f, email: false }))}
                required
                aria-label="Email address"
                autoComplete="email"
              />
            </div>

            <div className={`demo-submit__input-wrapper ${focused.link ? 'demo-submit__input-wrapper--focused' : ''}`}>
              <input
                id="demo-link"
                type="url"
                className="demo-submit__input"
                placeholder="SOUNDCLOUD PRIVATE LINK"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                onFocus={() => setFocused((f) => ({ ...f, link: true }))}
                onBlur={() => setFocused((f) => ({ ...f, link: false }))}
                required
                aria-label="SoundCloud private link"
                autoComplete="url"
              />
            </div>

            <motion.button
              type="submit"
              className="demo-submit__btn gradient-btn"
              whileTap={{ scale: 0.97 }}
              disabled={submitted}
            >
              <span>
                {submitted ? (
                  <>
                    <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.5rem' }}>
                      check_circle
                    </span>
                    Track Submitted!
                  </>
                ) : (
                  'Submit Track'
                )}
              </span>
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
