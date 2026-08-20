import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { terapeutasData } from '../data/terapeutas';

const imagenesPerfil = import.meta.glob('./Perfil Gisel/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

function resolverImagen(ruta) {
  if (!ruta) return null;
  const nombreArchivo = ruta.split('/').pop();
  const entrada = Object.entries(imagenesPerfil).find(([clave]) =>
    clave.endsWith(`/${nombreArchivo}`)
  );
  return entrada ? entrada[1] : null;
}

export default function PerfilTerapeuta() {
  const { id } = useParams();
  const terapeuta = terapeutasData.find((item) => item.id === id);
  const [constanciaActiva, setConstanciaActiva] = useState(null);

  useEffect(() => {
    if (!constanciaActiva) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setConstanciaActiva(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [constanciaActiva]);

  if (!terapeuta) {
    return (
      <main className="perfil-terapeuta-page">
        <div className="container perfil-terapeuta-shell">
          <header className="perfil-terapeuta-hero">
            <span className="perfil-terapeuta-kicker">Perfil no disponible</span>
            <h1>Terapeuta no encontrada</h1>
            <p>Revisa la URL o vuelve al inicio para elegir otro perfil.</p>
          </header>

          <a href="/" className="perfil-terapeuta-back">
            Volver
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="perfil-terapeuta-page">
      <div className="container perfil-terapeuta-shell">
        <header className="perfil-terapeuta-hero">
          {terapeuta.foto && resolverImagen(terapeuta.foto) && (
            <div className="perfil-terapeuta-foto">
              <img
                src={resolverImagen(terapeuta.foto)}
                alt={`Foto de ${terapeuta.nombre}`}
              />
            </div>
          )}
          <span className="perfil-terapeuta-kicker">Perfil de terapeuta</span>
          <h1>{terapeuta.nombre}</h1>
          <p className="perfil-terapeuta-especialidad">{terapeuta.especialidad}</p>
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
              {terapeuta.constancias.map((constancia) => {
                const src = resolverImagen(constancia.rutaImagen);

                if (!src) return null;

                return (
                  <button
                    type="button"
                    className="perfil-constancia-card"
                    key={constancia.titulo}
                    onClick={() => setConstanciaActiva({ ...constancia, src })}
                  >
                    <figure>
                      <img src={src} alt={constancia.titulo} loading="lazy" />
                      <figcaption>{constancia.titulo}</figcaption>
                    </figure>
                  </button>
                );
              })}
            </div>
          )}
        </section>

        <a href="/" className="perfil-terapeuta-back">
          Volver
        </a>
      </div>

      {constanciaActiva && (
        <div
          className="perfil-constancia-modal-overlay"
          onClick={() => setConstanciaActiva(null)}
        >
          <div
            className="perfil-constancia-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="perfil-constancia-modal-cerrar"
              onClick={() => setConstanciaActiva(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <img src={constanciaActiva.src} alt={constanciaActiva.titulo} />
            <p>{constanciaActiva.titulo}</p>
          </div>
        </div>
      )}
    </main>
  );
}