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
              <a href="#" aria-label="Facebook">
                f
              </a>
              <a href="#" aria-label="Instagram">
                ig
              </a>
              <a href="#" aria-label="WhatsApp">
                wa
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
                <a href="#">Aviso de privacidad</a>
              </li>
              <li>
                <a href="#">Términos y condiciones</a>
              </li>
              <li>
                <a href="#">Política de reembolso</a>
              </li>
              <li>
                <a href="#">Política de cancelación</a>
              </li>
              <li>
                <a href="#">Exención de responsabilidad</a>
              </li>
            </ul>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Azomalli. Todos los derechos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
