import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { terapeutasData } from '../data/terapeutas';

// Vite necesita rutas ESTÁTICAS para poder empaquetar las imágenes en el build.
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

function obtenerIniciales(nombre) {
  if (!nombre) return '';
  return nombre
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase();
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

  const fotoSrc = terapeuta.foto || null;

  return (
    <main className="perfil-terapeuta-page">
      <div className="container perfil-terapeuta-shell">
        <header className="perfil-terapeuta-hero">
          <div className="perfil-terapeuta-hero-layout">
            <div className="perfil-terapeuta-foto">
              {fotoSrc ? (
                <img src={fotoSrc} alt={`Foto de ${terapeuta.nombre}`} />
              ) : (
                <div className="foto-placeholder--perfil">
                  <span>{obtenerIniciales(terapeuta.nombre)}</span>
                </div>
              )}
            </div>

            <div className="perfil-terapeuta-hero-copy">
              <span className="perfil-terapeuta-kicker">Perfil de terapeuta</span>
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
              {terapeuta.constancias.map((constancia) => {
                const src = resolverImagen(constancia.rutaImagen);

                if (!src) return null;

                return (
                  <figure className="perfil-constancia-card" key={constancia.titulo}>
                    <button
                      type="button"
                      className="perfil-constancia-trigger"
                      onClick={() => setConstanciaActiva({ ...constancia, src })}
                      aria-label={`Ver constancia en grande: ${constancia.titulo}`}
                    >
                      <img src={src} alt={constancia.titulo} loading="lazy" />
                    </button>
                    <figcaption>{constancia.titulo}</figcaption>
                  </figure>
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
          className="constancia-lightbox"
          onClick={() => setConstanciaActiva(null)}
        >
          <div
            className="constancia-lightbox-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="constancia-lightbox-close"
              onClick={() => setConstanciaActiva(null)}
            >
              Cerrar ×
            </button>
            <img src={constanciaActiva.src} alt={constanciaActiva.titulo} />
            <p>{constanciaActiva.titulo}</p>
          </div>
        </div>
      )}
    </main>
  );
}