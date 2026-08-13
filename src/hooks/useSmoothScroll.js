import { useEffect } from 'react';

// Reemplaza el listener global de "a[href^='#']" del script.js original.
export function useSmoothScroll() {
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = document.getElementById('navbar')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}
