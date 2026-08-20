import { Link } from 'react-router-dom';
import { terapeutasData } from '../data/terapeutas';

export default function Terapeutas() {
  return (
    <section className="section terapeutas-section" id="terapeutas">
      <div className="container">
        <div className="section-header">
          <div className="section-label">— Nuestro equipo</div>
          <h2 className="section-title">
            Conoce a nuestros
            <br />
            <em>terapeutas</em>
          </h2>
        </div>
        <div className="terapeutas-grid">
          {terapeutasData.map((terapeuta) => (
            <TerapeutaCard key={terapeuta.id} terapeuta={terapeuta} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TerapeutaCard({ terapeuta }) {
  const iniciales = terapeuta.nombre
    .split(' ')
    .filter(Boolean)
    .map((palabra) => palabra[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  const fotoSrc = terapeuta.foto;

  return (
    <div className="terapeuta-card">
      <div className="terapeuta-foto">
        {fotoSrc ? (
          <img className="terapeuta-foto-img" src={fotoSrc} alt={terapeuta.nombre} loading="lazy" />
        ) : (
          <div className="foto-placeholder" aria-hidden="true">
            <span>{iniciales}</span>
          </div>
        )}
      </div>
      <div className="terapeuta-info">
        <h3>{terapeuta.nombre}</h3>
        <p className="terapeuta-especialidad">{terapeuta.especialidad}</p>
        <p className="terapeuta-bio">{terapeuta.descripcion}</p>
        <Link to={`/terapeuta/${terapeuta.id}`} className="btn-terapeuta">
          Ver trayectoria
        </Link>
      </div>
    </div>
  );
}
