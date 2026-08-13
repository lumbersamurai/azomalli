import { useEffect, useState } from 'react';
import FlowingMenu from './FlowingMenu';

const NAV_LINKS = [
  { link: '#nosotros', text: 'Nosotros', image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80' },
  { link: '#terapeutas', text: 'Terapeutas', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80' },
  { link: '#servicios', text: 'Servicios', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80' },
  { link: '#eventos', text: 'Eventos', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80' },
  { link: '#talleres', text: 'Talleres', image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=800&q=80' },
  { link: '#contacto', text: 'Agendar cita', image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=800&q=80' }
];

function Brand() {
  return (
    <a href="#inicio" className="brand" aria-label="Azomalli, ir al inicio">
      <svg className="brand-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 8 C20 8 28 16 28 22 C28 26.4 24.4 30 20 30 C15.6 30 12 26.4 12 22 C12 16 20 8 20 8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 18 Q20 14 26 18" stroke="currentColor" strokeWidth="1.2" />
      </svg>
      Azomalli
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = event => event.key === 'Escape' && setOpen(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="nav-container">
          <Brand />
          <button className="nav-toggle" type="button" aria-label="Abrir menú" aria-expanded={open} aria-controls="flowing-menu" onClick={() => setOpen(true)}>
            <span />
            <span />
            <span />
            <span className="nav-toggle-label">Menú</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="flowing-menu-panel" id="flowing-menu" role="dialog" aria-modal="true" aria-label="Menú principal">
          <div className="flowing-menu-header">
            <Brand />
            <button className="flowing-menu-close" type="button" onClick={() => setOpen(false)} aria-label="Cerrar menú">Cerrar <span>×</span></button>
          </div>
          <FlowingMenu items={NAV_LINKS} speed={18} textColor="#f4ebde" bgColor="#281a2b" marqueeBgColor="#ecbcf7" marqueeTextColor="#281a2b" borderColor="rgba(244, 235, 222, 0.42)" onNavigate={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}
