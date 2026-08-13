export default function Nosotros() {
  return (
    <section className="section nosotros-section" id="nosotros"> {/* */}
      <div className="container">
        <div className="section-label">— Quiénes somos</div> {/* */}
        <div className="nosotros-grid">
          <div className="nosotros-text">
            <h2 className="section-title">
              Encuentra tu
              <br />
              <em>paz interior</em> {/* */}
            </h2>
            <p className="lead-text">
              Un espacio seguro donde reconectas contigo mismo. Creemos que el bienestar surge al reconocerte en tu totalidad, porque la paz interior no es un destino: es una práctica que se construye cada día. {/* */}
            </p>
          </div>
          <div className="nosotros-cards">
            <div className="mv-card">
              <h4>Misión</h4>
              <p>
                Acompañar procesos de transformación personal mediante terapias integrativas que promuevan la conciencia, el bienestar y la responsabilidad individual. {/* */}
              </p>
            </div>
            <div className="mv-card">
              <h4>Visión</h4>
              <p>
                Ser un referente en acompañamiento integral, reconocido por promover la evolución en el individuo, consciencia en la comunidad y cambios en la sociedad. {/* */}
              </p>
            </div>
            <div className="mv-card valores-card">
              <h4>Nuestros Pilares</h4> {/* */}
              <ul className="valores-list">
                <li>Humanidad y dignidad {/* */}</li>
                <li>Conciencia sistémica {/* */}</li>
                <li>Integración de tu ser {/* */}</li>
                <li>Responsabilidad consciente {/* */}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}