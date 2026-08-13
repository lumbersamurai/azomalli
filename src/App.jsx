import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Galeria from './components/Galeria';
import Terapeutas from './components/Terapeutas';
import Servicios from './components/Servicios';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import SoftAurora from './components/SoftAurora';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useScrollReveal();
  useSmoothScroll();

  return (
    <>
      <div className="site-background" aria-hidden="true">
        <SoftAurora
          speed={0.6}
          scale={0.5}
          brightness={0.7}
          color1="#c5e5ef"
          color2="#ebd3f1"
          noiseFrequency={1}
          noiseAmplitude={5.5}
          bandHeight={0.45}
          bandSpread={1.1}
          octaveDecay={0.33}
          layerOffset={0}
          colorSpeed={1}
          enableMouseInteraction={false}
          mouseInfluence={0.1}
          className="soft-aurora--page"
        />
      </div>
      <div className="site-shell">
        <Navbar />
        <Hero />
        <Nosotros />
        <Galeria />
        <Terapeutas />
        <Servicios />
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}

export default App;