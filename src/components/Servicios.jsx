import { useState } from 'react';
import { serviciosData } from '../data/content';

const FILTROS = ['Todas', 'Terapias', 'Talleres'];

export default function Servicios() {
  const [filtroActivo, setFiltroActivo] = useState('Todas');
  const serviciosFiltrados =
    filtroActivo === 'Todas'
      ? serviciosData
      : serviciosData.filter((item) => item.categoriaFiltro === filtroActivo);

  return (
    <section className="section servicios-section" id="servicios">
      <div className="container">

        <div className="section-header centered">
          <div className="section-label">— Nuestro catálogo integral</div>
          <h2 className="section-title">
            Servicios que
            <br />
            <em>transforman</em>
          </h2>
          <p className="section-desc">
            Filtra por terapias o talleres y revisa cada servicio individual con su inversión.
          </p>
        </div>

        <div className="servicios-filtros" role="tablist" aria-label="Filtrar servicios">
          {FILTROS.map((filtro) => (
            <button
              key={filtro}
              type="button"
              className={`btn-ghost servicios-filtro${filtroActivo === filtro ? ' is-active' : ''}`}
              onClick={() => setFiltroActivo(filtro)}
              aria-pressed={filtroActivo === filtro}
            >
              {filtro}
            </button>
          ))}
        </div>

        <div className="oferta-grid">
          {serviciosFiltrados.map((item) => (
            <article className="oferta-card" key={item.id}>
              <span className="oferta-badge">{item.etiquetaSuperior}</span>
              <h3>{item.titulo}</h3>
              <p className="oferta-desc">{item.descripcionBreve}</p>

              {item.detallesLista && item.detallesLista.length > 0 && (
                <ul className="oferta-detalles">
                  {item.detallesLista.map((detalle) => (
                    <li key={detalle}><span>{detalle}</span></li>
                  ))}
                </ul>
              )}

              <a href="#contacto" className="oferta-link">Solicitar información →</a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
