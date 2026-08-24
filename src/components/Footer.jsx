import { Link } from 'react-router-dom';

const REDES = {
  instagram: "https://www.instagram.com/centro_azomalli/",
  facebook: "https://www.facebook.com/profile.php?id=61592855076710",
  whatsapp:
    "https://api.whatsapp.com/send/?phone=527714098784&text=Hola%2C+me+gustar%C3%ADa+solicitar+una+cita&type=phone_number&app_absent=0",
};

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 21v-7.7h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.28c-.28-.04-1.23-.12-2.34-.12-2.32 0-3.9 1.42-3.9 4.02v2.12H7.7v3h2.66V21h3.14z"
      />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2.5c-5.26 0-9.54 4.24-9.54 9.46 0 1.67.44 3.3 1.28 4.73L2.5 21.5l5.02-1.31a9.6 9.6 0 0 0 4.52 1.14h.01c5.26 0 9.54-4.24 9.54-9.46 0-2.53-1-4.9-2.8-6.69a9.6 9.6 0 0 0-6.75-2.68zm0 17.31h-.01a8 8 0 0 1-4.06-1.11l-.29-.17-3 .78.8-2.9-.19-.3a7.83 7.83 0 0 1-1.23-4.19c0-4.33 3.55-7.85 7.99-7.85 2.13 0 4.13.83 5.64 2.32a7.77 7.77 0 0 1 2.34 5.53c0 4.33-3.55 7.85-7.99 7.85zm4.38-5.88c-.24-.12-1.4-.68-1.62-.76-.22-.08-.38-.12-.53.12-.16.24-.61.76-.75.92-.14.16-.28.18-.51.06-.24-.12-1-.36-1.9-1.15-.7-.61-1.18-1.36-1.31-1.6-.14-.24-.02-.36.1-.48.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.27-.73-1.74-.19-.46-.39-.4-.53-.4h-.45c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.13.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contacto">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="brand">
              <svg className="brand-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M20 8 C20 8 28 16 28 22 C28 26.4 24.4 30 20 30 C15.6 30 12 26.4 12 22 C12 16 20 8 20 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path d="M14 18 Q20 14 26 18" stroke="currentColor" strokeWidth="1.2" fill="none" />
              </svg>
              Azomalli
            </a>
            <p>Terapias holísticas y acompañamiento profesional para tu bienestar integral.</p>
            <div className="footer-social">
              <a href={REDES.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Azomalli">
                <IconFacebook />
              </a>
              <a href={REDES.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Azomalli">
                <IconInstagram />
              </a>
              <a href={REDES.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Azomalli">
                <IconWhatsApp />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Azomalli</h5>
            <ul>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#terapeutas">Terapeutas</a>
              </li>
              <li>
                <a href="#servicios">Servicios</a>
              </li>
              <li>
                <a href="#eventos">Eventos</a>
              </li>
              <li>
                <a href="#talleres">Talleres</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Políticas</h5>
            <ul>
              <li>
                <Link to="/aviso-privacidad">Aviso de privacidad</Link>
              </li>
              <li>
                <Link to="/terminos-condiciones">Términos y condiciones</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Azomalli. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
