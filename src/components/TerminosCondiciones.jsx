import { Link } from 'react-router-dom';

export default function TerminosCondiciones() {
  return (
    <section className="section legal-page" id="terminos-condiciones">
      <div className="container legal-container">
        <p className="legal-eyebrow section-label">Legal</p>
        <h1>Términos y Condiciones</h1>
        <p className="legal-updated">Última actualización: agosto de 2026</p>

        <div className="legal-body">
          <h2>1. Objeto</h2>
          <p>
            Estos Términos y Condiciones regulan el acceso y uso del sitio web de Azomalli, así
            como la relación entre Azomalli y las personas que solicitan sus servicios de
            terapias holísticas, talleres y actividades relacionadas. Al navegar en este sitio o
            solicitar un servicio, aceptas los términos aquí descritos.

          </p>

          <h2>2. Naturaleza de los servicios</h2>
          <p>
            Los servicios ofrecidos por Azomalli (constelaciones familiares, biomagnetismo,
            acupuntura, yoga, terapias holísticas, talleres y actividades afines) son de carácter
            complementario y alternativo. No constituyen consulta médica, diagnóstico ni
            tratamiento médico convencional, y no sustituyen la atención de un profesional de la
            salud.
          </p>

          <h2 id="responsabilidad">3. Deslinde y extensión de responsabilidad</h2>
          <p>
            Azomalli y su equipo de terapeutas actúan con profesionalismo y buena fe; sin
            embargo, es importante que conozcas lo siguiente antes de recibir cualquier servicio:
          </p>
          <ul>
            <li>
              Los resultados de las terapias y talleres varían según cada persona; Azomalli no
              garantiza resultados específicos.
            </li>
            <li>
              Es responsabilidad del cliente informar, previo a cada sesión, cualquier condición
              médica preexistente, embarazo, enfermedad crónica, medicación en curso o cualquier
              otra circunstancia relevante para su seguridad.
            </li>
            <li>
              Azomalli y su equipo no serán responsables por reacciones adversas derivadas de
              información omitida, inexacta o no comunicada por el cliente.
            </li>
            <li>
              Se recomienda que el cliente continúe, en caso de requerirlo, su tratamiento médico
              convencional de forma paralela a cualquier terapia complementaria recibida en
              Azomalli.
            </li>
            <li>
              El contenido de este sitio web tiene fines informativos y de difusión de los
              servicios; no debe interpretarse como asesoría profesional individualizada.
              Azomalli no se hace responsable por el uso que se dé a la información publicada
              fuera del contexto de una consulta directa.
            </li>
          </ul>

          <h2>4. Uso de imagen y voz</h2>
          <p>
            Durante talleres, sesiones grupales o actividades dentro de Azomalli, es posible que
            se capte imagen y/o voz de los participantes con fines de difusión en redes sociales
            (Instagram, Facebook, WhatsApp) y en este sitio web.
          </p>
          <p>
            <strong>
              Al aceptar estos Términos y Condiciones y/o contratar cualquier servicio de
              Azomalli, el cliente acepta y otorga la siguiente Autorización de Uso de Imagen y
              Voz:
            </strong>
          </p>

          <div className="legal-signature-block">
            <h3>Autorización de Uso de Imagen y Voz</h3>
            <p>
              Quien contrata o recibe un servicio de Azomalli, en pleno uso de sus facultades y
              de manera libre y voluntaria, autoriza a Azomalli y a su equipo de gestión de redes
              sociales, a cargo de Araiza Rodríguez Juan Daniel, para:
            </p>
            <ul>
              <li>
                Captar su imagen y/o voz mediante fotografía o video dentro de las instalaciones
                de Azomalli o durante actividades relacionadas (talleres, sesiones grupales,
                testimonios).
              </li>
              <li>
                Utilizar dicho material con fines de difusión y promoción en las redes sociales
                oficiales de Azomalli (Instagram, Facebook, WhatsApp) y en su sitio web.
              </li>
              <li>
                Editar dicho material (recorte, color, subtítulos) siempre que no se altere el
                sentido de lo expresado.
              </li>
            </ul>
            <p>
              Esta autorización se otorga de forma gratuita, sin que ello genere derecho a
              compensación económica alguna, y podrá ser revocada en cualquier momento mediante
              solicitud por escrito, sin que esto afecte el material ya publicado con
              anterioridad a la revocación. Azomalli se compromete a utilizar este material
              exclusivamente con fines de difusión de sus servicios, y a resguardar cualquier
              información personal conforme a la Ley Federal de Protección de Datos Personales en
              Posesión de los Particulares.
            </p>
          </div>

          <p>
            Si el cliente desea revocar esta autorización, puede hacerlo en cualquier momento
            mediante solicitud por escrito a través de los canales de contacto indicados en el
            Aviso de Privacidad, sin que ello afecte el material publicado con anterioridad a la
            revocación.
          </p>

          <h2>5. Propiedad intelectual</h2>
          <p>
            El contenido de este sitio (textos, imágenes, logotipos y diseño) es propiedad de
            Azomalli o se utiliza con la autorización correspondiente. Queda prohibida su
            reproducción total o parcial sin autorización previa por escrito.
          </p>

          <h2>6. Modificaciones</h2>
          <p>
            Azomalli podrá actualizar estos Términos y Condiciones en cualquier momento. Los
            cambios serán publicados en esta misma sección y entrarán en vigor a partir de su
            publicación.
          </p>

          <h2>7. Legislación aplicable</h2>
          <p>
            Estos Términos y Condiciones se rigen por la legislación mexicana aplicable. Cualquier
            controversia se someterá a los tribunales competentes en México.
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
