import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { terapeutasData } from '../data/terapeutas';

export default function PerfilTerapeuta() {
  const { id } = useParams();
  const terapeuta = terapeutasData.find((item) => item.id === id);
  const [constanciaActiva, setConstanciaActiva] = useState(null);

  useEffect(() => {
    if (!constanciaActiva) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setConstanciaActiva(null);
      }
    };

    const bodyOverflowAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = bodyOverflowAnterior;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [constanciaActiva]);

  const cerrarConstancia = () => setConstanciaActiva(null);
  const abrirConstancia = (constancia) => setConstanciaActiva(constancia);
  const obtenerUrlConstancia = (rutaImagen) => new URL(rutaImagen, import.meta.url).href;

  if (!terapeuta) {
    return (
      <main className="perfil-terapeuta-page">
        <div className="container perfil-terapeuta-shell">
          <header className="perfil-terapeuta-hero">
            <span className="perfil-terapeuta-kicker">Perfil no disponible</span>
            <h1>Terapeuta no encontrada</h1>
            <p>Revisa la URL o vuelve al inicio para elegir otro perfil.</p>
          </header>

          <Link to="/" className="perfil-terapeuta-back">
            Volver
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="perfil-terapeuta-page">
      <div className="container perfil-terapeuta-shell">
        <header className="perfil-terapeuta-hero">
          <span className="perfil-terapeuta-kicker">Perfil de terapeuta</span>
          <div className="perfil-terapeuta-hero-layout">
            <figure className="perfil-terapeuta-foto">
              {terapeuta.foto ? (
                <img src={terapeuta.foto} alt={terapeuta.nombre} />
              ) : (
                <div className="foto-placeholder foto-placeholder--perfil" aria-hidden="true">
                  <span>
                    {terapeuta.nombre
                      .split(' ')
                      .filter(Boolean)
                      .map((palabra) => palabra[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                  </span>
                </div>
              )}
            </figure>
            <div className="perfil-terapeuta-hero-copy">
              <h1>{terapeuta.nombre}</h1>
              <p className="perfil-terapeuta-especialidad">{terapeuta.especialidad}</p>
            </div>
          </div>
        </header>

        <section className="perfil-terapeuta-bio">
          <h2>Descripción</h2>
          <p>{terapeuta.descripcion}</p>
        </section>

        <section className="perfil-terapeuta-constancias">
          <div className="perfil-terapeuta-section-header">
            <h2>Constancias</h2>
          </div>

          {terapeuta.constancias.length === 0 ? (
            <div className="perfil-terapeuta-empty">
              Próximamente se actualizarán las certificaciones
            </div>
          ) : (
            <div className="perfil-terapeuta-grid">
              {terapeuta.constancias.map((constancia) => (
                <figure className="perfil-constancia-card" key={constancia.titulo}>
                  <button
                    type="button"
                    className="perfil-constancia-trigger"
                    onClick={() => abrirConstancia(constancia)}
                    aria-label={`Abrir ${constancia.titulo} en grande`}
                  >
                    <img
                      src={obtenerUrlConstancia(constancia.rutaImagen)}
                      alt={constancia.titulo}
                      loading="lazy"
                    />
                  </button>
                  <figcaption>{constancia.titulo}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </section>

        <Link to="/" className="perfil-terapeuta-back">
          Volver
        </Link>
      </div>

      {constanciaActiva && (
        <div
          className="constancia-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={constanciaActiva.titulo}
          onClick={cerrarConstancia}
        >
          <div className="constancia-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="constancia-lightbox-close"
              onClick={cerrarConstancia}
              aria-label="Cerrar vista ampliada"
            >
              Cerrar
            </button>
            <img
              src={obtenerUrlConstancia(constanciaActiva.rutaImagen)}
              alt={constanciaActiva.titulo}
            />
            <p>{constanciaActiva.titulo}</p>
          </div>
        </div>
      )}
    </main>
  );
}
