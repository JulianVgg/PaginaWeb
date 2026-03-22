import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import InstitutionSection from './components/InstitutionSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import Footer from './components/Footer.jsx';
import { siteData } from './data/siteData.js';

function App() {
  return (
    <>
      <Navbar />
      <Hero hero={siteData.hero} />

      <main>
        <section className="section overview-section">
          <div className="container">
            <div className="section-heading center">
              <span className="section-tag">Presentación del sitio</span>
              <h2>Una sola página, dos áreas claramente diferenciadas</h2>
              <p>
                La estructura está pensada para mostrar primero la identidad de
                COFA y luego la información del dispensario, manteniendo unidad
                visual pero independencia informativa.
              </p>
            </div>

            <div className="two-column-grid">
              <article className="card">
                <h3>Primero: COFA</h3>
                <p>{siteData.cofa.shortDescription}</p>
                <a href="#cofa" className="text-link">
                  Ir a sección COFA
                </a>
              </article>

              <article className="card">
                <h3>Después: Dispensario</h3>
                <p>{siteData.dispensario.shortDescription}</p>
                <a href="#dispensario" className="text-link">
                  Ir a sección Dispensario
                </a>
              </article>
            </div>
          </div>
        </section>

        <InstitutionSection id="cofa" institution={siteData.cofa} />
        <InstitutionSection
          id="dispensario"
          institution={siteData.dispensario}
          alternate
        />

        <section id="avisos" className="section notices-section">
          <div className="container">
            <div className="section-heading center">
              <span className="section-tag">Avisos y campañas</span>
              <h2>Espacio para información vigente</h2>
              <p>
                Esta sección es útil para mantener la página viva y comunicar
                información importante de forma rápida.
              </p>
            </div>

            <div className="three-column-grid">
              {siteData.notices.map((notice) => (
                <article className="card notice-card" key={notice.title}>
                  <h3>{notice.title}</h3>
                  <p>{notice.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={siteData.faqs} />

        <section id="contacto" className="section contact-section">
          <div className="container">
            <div className="section-heading center">
              <span className="section-tag">Contacto</span>
              <h2>Canales directos de atención</h2>
              <p>
                Aquí el visitante podrá decidir rápido si desea llamar, escribir
                por WhatsApp o abrir la ubicación.
              </p>
            </div>

            <div className="two-column-grid">
              <article className="card contact-card">
                <h3>Contacto COFA</h3>
                <p><strong>Dirección:</strong> {siteData.cofa.address}</p>
                <p><strong>Teléfono:</strong> {siteData.cofa.phoneDisplay}</p>
                <p><strong>Correo:</strong> {siteData.cofa.email}</p>

                <div className="button-group">
                  <a
                    href={`tel:${siteData.cofa.phone}`}
                    className="button button-secondary"
                  >
                    Llamar
                  </a>
                  <a
                    href={`https://wa.me/${siteData.cofa.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-primary"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={siteData.cofa.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-secondary"
                  >
                    Maps
                  </a>
                </div>
              </article>

              <article className="card contact-card">
                <h3>Contacto Dispensario</h3>
                <p><strong>Dirección:</strong> {siteData.dispensario.address}</p>
                <p><strong>Teléfono:</strong> {siteData.dispensario.phoneDisplay}</p>
                <p><strong>Correo:</strong> {siteData.dispensario.email}</p>

                <div className="button-group">
                  <a
                    href={`tel:${siteData.dispensario.phone}`}
                    className="button button-secondary"
                  >
                    Llamar
                  </a>
                  <a
                    href={`https://wa.me/${siteData.dispensario.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-primary"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={siteData.dispensario.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-secondary"
                  >
                    Maps
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer cofa={siteData.cofa} dispensario={siteData.dispensario} />
    </>
  );
}

export default App;