import { lazy, Suspense } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

/* Lazy-load below-the-fold sections for faster initial paint */
const Artists = lazy(() => import('./components/Artists'));
const Events = lazy(() => import('./components/Events'));
const Vision = lazy(() => import('./components/Vision'));
const DemoSubmit = lazy(() => import('./components/DemoSubmit'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback() {
  return (
    <div
      style={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          border: '2px solid var(--surface-container-high)',
          borderTop: '2px solid var(--primary)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Particle Background — fixed behind everything */}
      <ParticleBackground />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <Artists />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Events />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Vision />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <DemoSubmit />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
