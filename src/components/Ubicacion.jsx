import React from 'react';

const Ubicacion = () => {
    return (
        <section id="ubicacion" className="section ubicacion-section">
            <div className="container">
                <div className="section-header centered">
                    <div className="section-label">— Encuéntranos</div>
                    <h2 className="section-title">Nuestras ubicaciones</h2>
                    <p className="section-desc">
                        Visítanos en cualquiera de nuestras sucursales y conoce el espacio donde atendemos.
                    </p>
                </div>

                <div className="mapas-grid">
                    <div className="mapa-item">
                        <h3>YOGARE</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.625774530333!2d-98.78750319999999!3d20.024215100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a12ca96e599f%3A0xec295338d6c9c618!2sYOGARE!5e0!3m2!1ses-419!2smx!4v1787436974991!5m2!1ses-419!2smx"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Yogare"
                        ></iframe>
                    </div>

                    <div className="mapa-item">
                        <h3>CENTRO AZOMALLI</h3>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.407851174274!2d-98.804465!3d20.0333525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1a17886144905%3A0xabb52dac25446ecc!2sAzomalli!5e0!3m2!1ses-419!2smx!4v1787437702346!5m2!1ses-419!2smx"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa Azomalli"
                        ></iframe>
                    </div>

                    <div className="mapa-item">
                        <h3>Ubicación Maru</h3>
                        <div className="mapa-placeholder">
                            Próximamente
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ubicacion;
