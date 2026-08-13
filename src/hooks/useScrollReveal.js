import { useEffect } from 'react';

// Selector de tarjetas/elementos que deben animarse al hacer scroll,
// igual que en el script.js original.
const REVEAL_SELECTOR =
  '.mv-card, .servicio-card, .terapeuta-card, .evento-card, .taller-item, .prueba-card, .pasado-item';

export function useScrollReveal(deps = []) {
  useEffect(() => {
    const elements = document.querySelectorAll(REVEAL_SELECTOR);

    elements.forEach((el, i) => {
      el.classList.add('reveal');
      const delay = (i % 4) * 0.1;
      el.style.transitionDelay = `${delay}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
