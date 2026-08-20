import DriftWall from './DriftWall';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">Centro de Bienestar Holístico</p>

          <h1 className="hero-title">
            <span className="text-focus-in" style={{ display: 'inline-block', animationDelay: '0.1s' }}>
              Centro Terapéutico
            </span>
            <br />
            <em className="text-focus-in" style={{ display: 'inline-block', animationDelay: '0.4s' }}>
              Azomalli
            </em>
          </h1>

          <p className="hero-subtitle">
            Encuentra tu paz interior
          </p>

          <p className="hero-description">
            Te acompañamos en tu camino de evolución personal y el logro de una vida plena
            apoyando en la resolución de conflictos que ocasionan deterioro o bloqueo en tus
            relaciones, tu abundancia, tu salud o tu trabajo, mediante la aplicación de terapias
            tradicionales, holísticas, alternativas y complementarias.
          </p>
          <div className="hero-actions">
            <a href="#terapeutas" className="btn-primary">
              Conocer terapeutas
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-drift-wall">
            <DriftWall
              columns={3}
              tileWidth={150}
              tileHeight={200}
              gap={14}
              radius={18}
              tilt={12}
              turn={-10}
              perspective={1100}
              depth={100}
              speed={28}
              direction="up"
              variance={0.35}
              parallax={0.45}
              lift={44}
              fade={0.68}
              dim={0.64}
              overlayColor="#31243d"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
