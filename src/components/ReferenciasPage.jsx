import React from 'react';
import { Link } from 'react-router-dom';

const ReferenciasPage = () => {
    return (
        <section className="section referencias-page">
            <div className="container">

                {/* Botón para volver al inicio */}
                <div style={{ marginBottom: '2rem', display: 'flex' }}>
                    <Link to="/#testimonios" className="perfil-terapeuta-back">
                        ← Volver al inicio
                    </Link>
                </div>

                <div className="section-header centered">
                    <div className="section-label">— Referencias</div>
                    <h2 className="section-title">Lo que dicen nuestros pacientes</h2>
                    <p className="section-desc">
                        Opiniones reales sobre la atención, el acompañamiento y la experiencia en Azomalli.
                    </p>
                </div>

                <div className="testimonios-text-grid">
                    <div className="testimonio-card">
                        <p className="texto">
                            "Las sesiones en Azomalli realmente han cambiado mi perspectiva. El ambiente es increíblemente relajante y profesional."
                        </p>
                        <h4 className="autor">María G.</h4>
                    </div>
                    <div className="testimonio-card">
                        <p className="texto">
                            "Un servicio excelente. Los terapeutas son muy atentos y me ayudaron mucho con mi proceso de bienestar."
                        </p>
                        <h4 className="autor">Roberto M.</h4>
                    </div>
                </div>

                <h3 className="video-title">Experiencias en Video</h3>
                <div className="testimonios-video-grid">
                    <div className="video-placeholder">
                        <p style={{ color: '#666', margin: 0 }}>Espacio reservado para Video 1</p>
                    </div>

                    <div className="video-placeholder">
                        <p style={{ color: '#666', margin: 0 }}>Espacio reservado para Video 2</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReferenciasPage;