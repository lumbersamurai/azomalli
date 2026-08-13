import { useState } from 'react';
import {
  servicios,
  talleresPresenciales,
  talleresDistancia,
  talleresPersonalizados
} from '../data/content';

export default function Servicios() {
  const [filtro, setFiltro] = useState('todos');

  // Unificamos todos los datos (terapias y talleres) en un solo formato de tarjeta
  const ofertas = [
    ...servicios.map(s => ({
      id: `serv-${s.index}`,
      categoria: 'terapias',
      etiqueta: 'Terapia Holística',
      titulo: s.titulo,
      descripcion: s.descripcion,
      detalles: s.detalles
    })),
    ...talleresPresenciales.map((t, i) => ({
      id: `tp-${i}`,
      categoria: 'talleres',
      etiqueta: 'Taller Presencial',
      titulo: t.nombre,
      descripcion: t.descripcion,
      detalles: [t.detalle]
    })),
    ...talleresDistancia.map((t, i) => ({
      id: `td-${i}`,
      categoria: 'talleres',
      etiqueta: 'Taller a Distancia',
      titulo: t.nombre,
      descripcion: t.descripcion,
      detalles: [t.detalle]
    })),
    ...talleresPersonalizados.map((t, i) => ({
      id: `tper-${i}`,
      categoria: 'talleres',
      etiqueta: 'Taller Personalizado',
      titulo: t.nombre,
      descripcion: t.descripcion,
      detalles: [t.detalle]
    }))
  ];

  // Filtramos según la pestaña seleccionada
  const ofertasFiltradas = ofertas.filter(item => filtro === 'todos' || item.categoria === filtro);

  return (
    <section className="section servicios-section" id="servicios">
      <div className="container">

        <div className="section-header centered">
          <div className="section-label">— Nuestra oferta integral</div>
          <h2 className="section-title">
            Terapias y Talleres que
            <br />
            <em>transforman</em>
          </h2>
          <p className="section-desc">
            Encuentra la modalidad que resuena con tu momento de vida. Filtra nuestro catálogo para explorar terapias o formación continua.
          </p>
        </div>

        {/* Sistema de Tabs (Pestañas) inspirado en De Toopping */}
        <div className="filtros-oferta">
          <button
            className={`tab-btn ${filtro === 'todos' ? 'active' : ''}`}
            onClick={() => setFiltro('todos')}
          >
            Todos
          </button>
          <button
            className={`tab-btn ${filtro === 'terapias' ? 'active' : ''}`}
            onClick={() => setFiltro('terapias')}
          >
            Terapias
          </button>
          <button
            className={`tab-btn ${filtro === 'talleres' ? 'active' : ''}`}
            onClick={() => setFiltro('talleres')}
          >
            Talleres
          </button>
        </div>

        {/* Grid Unificado */}
        <div className="oferta-grid">
          {ofertasFiltradas.map((item) => (
            <div className="oferta-card" key={item.id}>
              <span className="oferta-badge">{item.etiqueta}</span>
              <h3>{item.titulo}</h3>
              <p className="oferta-desc">{item.descripcion}</p>

              {item.detalles && item.detalles.length > 0 && (
                <ul className="oferta-detalles">
                  {item.detalles.map((detalle, i) => (
                    <li key={i}><span>{detalle}</span></li>
                  ))}
                </ul>
              )}

              <a href="#contacto" className="oferta-link">Solicitar información →</a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}