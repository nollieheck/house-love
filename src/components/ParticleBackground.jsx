import { useEffect, useCallback, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.15,
          },
        },
      },
    },
    particles: {
      color: {
        value: ['#AEC6CF', '#C3B1E1', '#B4A7D6', '#9EB9D4'],
      },
      links: {
        color: '#B4A7D6',
        distance: 200,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: true,
        speed: 0.4,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1200,
        },
        value: 40,
      },
      opacity: {
        value: { min: 0.05, max: 0.15 },
        animation: {
          enable: true,
          speed: 0.3,
          minimumValue: 0.05,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
