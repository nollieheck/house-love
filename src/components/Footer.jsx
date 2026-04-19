import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Footer.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'SoundCloud', href: 'https://soundcloud.com' },
  { label: 'Resident Advisor', href: 'https://ra.co' },
  { label: 'Privacy Policy', href: '#' },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer className="footer" ref={ref}>
      <motion.div
        className="footer__inner"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeUp}
      >
        <a href="#hero" className="footer__logo">
          House Love
        </a>

        <ul className="footer__links" role="list">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="footer__link label-md"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="footer__copyright">
          © {new Date().getFullYear()} House Love. Nocturnal in spirit, luminous in execution.
        </p>
      </motion.div>
    </footer>
  );
}
