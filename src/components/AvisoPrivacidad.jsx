import { Link } from 'react-router-dom';

export default function AvisoPrivacidad() {
  return (
    <section className="section legal-page" id="aviso-privacidad">
      <div className="container legal-container">
        <p className="legal-eyebrow section-label">Legal</p>
        <h1>Aviso de Privacidad</h1>
        <p className="legal-updated">Última actualización: agosto de 2026</p>

        <div className="legal-body">
          <h2>1. Responsable del tratamiento de datos personales</h2>
          <p>
            Azomalli, centro de bienestar holístico, con domicilio de operación en la región de
            Pachuca, Hidalgo, es responsable del uso, tratamiento y protección de tus datos personales,
            de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de
            los Particulares (LFPDPPP). La gestión de comunicación digital y redes sociales de
            Azomalli está a cargo de Juan Daniel Araiza Rodríguez, quien actúa como encargado
            para dichos fines.
          </p>

          <h2>2. Datos personales que recabamos</h2>
          <p>Para brindarte nuestros servicios podemos recabar los siguientes datos:</p>
          <ul>
            <li>Datos de identificación y contacto: nombre, teléfono, correo electrónico, WhatsApp.</li>
            <li>Datos relacionados con la cita o servicio solicitado (terapia de interés, horario, preferencias).</li>
            <li>
              Datos sensibles de salud que compartas de forma voluntaria durante la consulta o
              terapia (por ejemplo, condiciones médicas, embarazo o medicación), necesarios
              únicamente para brindarte una atención segura y adecuada.
            </li>
            <li>Imagen y/o voz, únicamente cuando exista tu autorización expresa por escrito.</li>
          </ul>

          <h2>3. Finalidades del tratamiento</h2>
          <p><strong>Finalidades primarias (necesarias para el servicio):</strong></p>
          <ul>
            <li>Agendar, confirmar y dar seguimiento a citas y talleres.</li>
            <li>Brindar el servicio terapéutico u holístico solicitado.</li>
            <li>Facturación y control administrativo.</li>
            <li>Atender dudas, quejas o solicitudes de contacto.</li>
          </ul>
          <p><strong>Finalidades secundarias (opcionales):</strong></p>
          <ul>
            <li>Envío de información sobre nuevos servicios, talleres o promociones.</li>
            <li>
              Difusión en redes sociales (Instagram, Facebook, WhatsApp) y sitio web, solo cuando
              exista autorización expresa de uso de imagen y voz.
            </li>
          </ul>
          <p>
            Puedes oponerte al uso de tus datos para finalidades secundarias sin que ello afecte
            la prestación del servicio principal.
          </p>

          <h2>4. Uso de imagen y voz</h2>
          <p>
            Cuando se capte tu imagen y/o voz mediante fotografía o video dentro de las
            instalaciones o actividades de Azomalli (talleres, sesiones grupales, testimonios),
            dicho material solo se utilizará con fines de difusión y promoción de los servicios
            de Azomalli si previamente firmaste o aceptaste la Autorización de Uso de Imagen y
            Voz correspondiente. Esta autorización es gratuita, puede revocarse en cualquier
            momento mediante solicitud por escrito, y su revocación no afecta el material
            publicado con anterioridad. El texto completo de la Autorización de Uso de Imagen y
            Voz forma parte de nuestros Términos y Condiciones, mismos que se aceptan al
            contratar cualquier servicio de Azomalli.
          </p>

          <h2>5. Transferencia de datos</h2>
          <p>
            Azomalli no vende ni transfiere tus datos personales a terceros ajenos, salvo
            obligación legal o cuando sea estrictamente necesario para prestarte el servicio
            (por ejemplo, plataformas de mensajería como WhatsApp Business utilizadas para
            agendar tu cita).
          </p>

          <h2>6. Derechos ARCO</h2>
          <p>
            Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte (derechos ARCO) al
            tratamiento de tus datos personales, así como a revocar tu consentimiento en
            cualquier momento. Para ejercer estos derechos puedes contactarnos a través de:
          </p>
          <ul>
            <li>WhatsApp: <a href="https://api.whatsapp.com/send/?phone=527714098784&text=Hola%2C+quiero+ejercer+mis+derechos+ARCO&type=phone_number&app_absent=0">+52 771 409 8784</a></li>
            <li>Instagram: <a href="https://www.instagram.com/centro_azomalli/">@centro_azomalli</a></li>
            <li>Facebook: <a href="https://www.facebook.com/profile.php?id=61592855076710">Azomalli</a></li>
          </ul>

          <h2>7. Cambios al aviso de privacidad</h2>
          <p>
            Este aviso de privacidad puede actualizarse para adaptarse a novedades legislativas,
            políticas internas o nuevos servicios. Cualquier cambio será publicado en esta misma
            sección del sitio web.
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex' }}>
          <Link to="/" className="perfil-terapeuta-back">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
