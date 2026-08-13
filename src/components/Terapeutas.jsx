import { terapeutasList } from '../data/content';

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
          {terapeutasList.map((t, i) => (
            <TerapeutaCard key={t.nombre} terapeuta={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TerapeutaCard({ terapeuta: t, index }) {
  return (
    <div className="terapeuta-card">
      <div className="terapeuta-foto">
        <div className="foto-placeholder">
          <span>{t.iniciales}</span>
        </div>
      </div>
      <div className="terapeuta-info">
        <h3>{t.nombre}</h3>
        <p className="terapeuta-especialidad">{t.especialidad}</p>
        {t.bios.map((bio) => (
          <p className="terapeuta-bio" key={bio}>
            {bio}
          </p>
        ))}
        <div className="terapeuta-tags">
          {t.tags.map((tag, i) => (
            <span key={`${tag}-${i}`}>{tag}</span>
          ))}
        </div>
        <div className="terapeuta-numero">
          <strong>Telefono:</strong> {t.telefono}
        </div>
        <a
          href={`https://wa.me/${t.whatsapp}?text=${t.whatsappMsg}`}
          target="_blank"
          rel="noreferrer"
          className="btn-terapeuta"
        >
          Solicita una cita
        </a>
      </div>
    </div>
  );
}
