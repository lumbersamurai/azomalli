import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link[cite: 1]

const Testimonios = () => {
    return (
        <section className="section terapeutas-section" id="testimonios">
            <div className="container">
                <div className="section-header">
                    <div className="section-label">— Nuestros pacientes</div>
                    <h2 className="section-title">
                        Conoce nuestras
                        <br />
                        <em>referencias</em>
                    </h2>
                </div>

                <div className="testimonios-stage">
                    {/* Reutilizamos las clases de la tarjeta de terapeutas para mantener el mismo diseño */}
                    <div className="terapeuta-card">
                        <div className="terapeuta-info" style={{ textAlign: 'center', padding: '2rem' }}>
                            <h3>Experiencias en Azomalli</h3>
                            <p className="terapeuta-bio" style={{ marginBottom: '2rem' }}>
                                Descubre cómo nuestras terapias han acompañado a diferentes personas en sus procesos de equilibrio y transformación. Lee sus historias y mira sus testimonios en video.
                            </p>
                            {/* Botón que redirige a la subpágina */}
                            <Link to="/referencias" className="btn-terapeuta">
                                Ver referencias y testimonios
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonios;
