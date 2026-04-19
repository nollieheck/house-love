import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Artists.css';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

const artists = [
  {
    name: 'Nocturnal Luminous',
    genre: 'Deep House / Melodic',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Solar Drift',
    genre: 'Tech House / Progressive',
    img: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Aether Pulse',
    genre: 'Minimal / Afro House',
    img: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=400&h=500&fit=crop&crop=faces',
  },
  {
    name: 'Velvet Frequencies',
    genre: 'Organic House / Downtempo',
    img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=500&fit=crop&crop=faces',
  },
];

export default function Artists() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="artists" id="artists" ref={ref}>
      <div className="artists__container">
        <motion.div
          className="artists__header"
          custom={0}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="label-md artists__label">The Collective</span>
          <h2 className="display-md artists__title">Resident Artists</h2>
          <p className="body-lg artists__desc">
            A curated roster of visionary selectors. Each artist brings their luminous frequency to the warehouse.
          </p>
        </motion.div>

        <div className="artists__grid">
          {artists.map((artist, i) => (
            <motion.article
              key={artist.name}
              className="artists__card"
              custom={i + 1}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUp}
            >
              <div className="artists__card-img-wrapper">
                <img
                  src={artist.img}
                  alt={`${artist.name} - ${artist.genre}`}
                  className="artists__card-img"
                  loading="lazy"
                />
                <div className="artists__card-overlay">
                  <span className="material-symbols-outlined artists__card-play">
                    play_arrow
                  </span>
                </div>
              </div>
              <div className="artists__card-info">
                <h3 className="artists__card-name">{artist.name}</h3>
                <p className="artists__card-genre">{artist.genre}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
