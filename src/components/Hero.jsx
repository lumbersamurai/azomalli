import DriftWall from './DriftWall';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">Centro de Bienestar Holístico</p>

          {/* Título con animación en cascada */}
          <h1 className="hero-title">
            <span className="text-focus-in" style={{ display: 'inline-block', animationDelay: '0.1s' }}>
              Sana tu
            </span>
            <br />
            <em className="text-focus-in" style={{ display: 'inline-block', animationDelay: '0.4s' }}>
              alma, mente
            </em>
            <br />
            <span className="text-focus-in" style={{ display: 'inline-block', animationDelay: '0.7s' }}>
              y cuerpo
            </span>
          </h1>

          <p className="hero-subtitle">
            Terapias holísticas, constelaciones familiares y acompañamiento profesional para tu
            transformación interior.
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