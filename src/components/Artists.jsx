import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
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
    name: 'LEO LOZANO',
    genre: 'House / Tech House',
    description: 'Productor con más de 5 años de experiencia en la escena house de Córdoba. Sus tracks combinan groove clásico con sonidos contemporáneos.',
    trackTitle: 'Catwalk (Original Mix)',
    img: `${import.meta.env.BASE_URL}leo-lozano.jpg`,
    instagram: '#',
    soundcloud: '#',
  },
  {
    name: 'LAUTARO MAUTI',
    genre: 'Deep House / House',
    description: 'Especialista en deep house con influencias del house clásico. Sus producciones destacan por su atmósfera emocional y groove sutil.',
    trackTitle: 'Tell Me What To Do',
    img: `${import.meta.env.BASE_URL}lautaro-mauti.jpg`,
    instagram: '#',
    soundcloud: '#',
  },
  {
    name: 'SOFIA RODRIGUEZ',
    genre: 'Minimal / Tech House',
    description: 'Una de las referentes del minimal en Córdoba. Sus tracks combinan precisión técnica con groove hipnótico, creando atmósferas únicas.',
    trackTitle: 'Minimal Dreams',
    img: `${import.meta.env.BASE_URL}sofia-rodriguez.jpg`,
    instagram: '#',
    soundcloud: '#',
  },
  {
    name: 'DIEGO MARTINEZ',
    genre: 'Tech House',
    description: 'Productor de tech house con sonido potente y dinámico. Sus tracks están diseñados para mover la pista con energía y groove.',
    trackTitle: 'Groove Machine',
    img: `${import.meta.env.BASE_URL}diego-martinez.jpg`,
    instagram: '#',
    soundcloud: '#',
  },
];

export default function Artists() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedArtist, setSelectedArtist] = useState(null);

  // Bloquear scroll y ocultar navbar cuando el modal está abierto
  useEffect(() => {
    if (selectedArtist) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('modal-open');
    };
  }, [selectedArtist]);

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
          <span className="label-md artists__label">NUESTRO EQUIPO</span>
          <h2 className="display-md artists__title">ARTISTAS RESIDENTES</h2>
          <p className="body-lg artists__desc">
            Una lista seleccionada de artistas visionarios, cada uno con un vibra y frecuencia unica dentro de la casita del House.
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
              onClick={() => setSelectedArtist(artist)}
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
                    add_circle
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

      <AnimatePresence>
        {selectedArtist && (
          <div className="artist-modal-root">
            <motion.div
              className="artist-modal__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArtist(null)}
            />
            <div className="artist-modal__scroll-container">
              <motion.div
                className="artist-modal__content glass-panel"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <button
                  className="artist-modal__close"
                  onClick={() => setSelectedArtist(null)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>

                <div className="artist-modal__hero">
                  <img
                    src={selectedArtist.img}
                    alt={selectedArtist.name}
                    className="artist-modal__img"
                  />
                  <div className="artist-modal__hero-overlay" />
                  <div className="artist-modal__hero-content">
                    <h3 className="display-sm artist-modal__name">
                      {selectedArtist.name}
                    </h3>
                    <div className="artist-modal__hero-actions">
                      <button className="artist-modal__play-btn-black">
                        <span>REPRODUCIR</span>
                      </button>
                      <a href={selectedArtist.instagram} target="_blank" rel="noopener noreferrer" className="artist-modal__social-btn">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a href={selectedArtist.soundcloud} target="_blank" rel="noopener noreferrer" className="artist-modal__social-btn">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                          <path d="M7 17.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5zm-2 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5zm4 0a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-.5.5zm2 0a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 1 0v7a.5.5 0 0 1-.5.5zm2 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5zm2 0a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 1 0v8a.5.5 0 0 1-.5.5zm2 0a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 1 0v7a.5.5 0 0 1-.5.5zm5.5-2a2.5 2.5 0 1 0 0-5 2.46 2.46 0 0 0-1.5.5 3 3 0 1 0-4.5 2.5 3 3 0 0 0 0 4h6a2.5 2.5 0 0 0 0-5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="artist-modal__body">
                  <div className="artist-modal__details-grid">
                    <div className="artist-modal__main-info">
                      <p className="body-md artist-modal__description">
                        {selectedArtist.description}
                      </p>
                    </div>
                    <div className="artist-modal__side-info">
                      <p className="body-sm">
                        <span className="text-muted">Género:</span> {selectedArtist.genre}
                      </p>
                      <p className="body-sm">
                        <span className="text-muted">Track destacado:</span> {selectedArtist.trackTitle}
                      </p>
                      <p className="body-sm">
                        <span className="text-muted">Estilo:</span> Visionario, Rítmico, Inmersivo
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
