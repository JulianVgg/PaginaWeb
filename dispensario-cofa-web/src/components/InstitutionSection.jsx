function InstitutionSection({ id, institution, alternate = false }) {
  return (
    <section
      id={id}
      className={`section institution-section ${alternate ? 'section-soft' : ''}`}
    >
      <div className="container">
        <div className="section-heading">
          <span className="section-tag">{institution.label}</span>
          <h2>{institution.name}</h2>
          <p>{institution.shortDescription}</p>
        </div>

        <div className="institution-top-grid">
          <article className="card card-large">
            <h3>Identidad institucional</h3>
            <p>{institution.about}</p>

            {institution.acronymMeaning && (
              <p>
                <strong>¿Qué significa {institution.label}?</strong>{' '}
                {institution.acronymMeaning}
              </p>
            )}

            <p>
              <strong>Desde cuándo existe:</strong> {institution.since}
            </p>
            <p>
              <strong>Por qué nació:</strong> {institution.origin}
            </p>
          </article>

          <article className="card media-card">
            {institution.image ? (
              <img
                src={institution.image}
                alt={`Imagen de ${institution.name}`}
                className="institution-image"
              />
            ) : (
              <div className="image-placeholder">
                <strong>Espacio para foto o logo</strong>
                <span>
                  Coloca una imagen en <code>public/images</code> y luego agrega
                  la ruta en <code>siteData.js</code>.
                </span>
              </div>
            )}
          </article>
        </div>

        <div className="three-column-grid">
          <article className="card">
            <h3>Historia</h3>
            <p>{institution.history}</p>
          </article>

          <article className="card">
            <h3>Misión</h3>
            <p>{institution.mission}</p>
          </article>

          <article className="card">
            <h3>Visión</h3>
            <p>{institution.vision}</p>
          </article>
        </div>

        <div className="section-subtitle">
          <h3>Servicios principales</h3>
          <p>
            Esta sección puede adaptarse cuando ya tengan el detalle oficial de
            los servicios que ofrece cada área.
          </p>
        </div>

        <div className="three-column-grid">
          {institution.services.map((service) => (
            <article className="card service-card" key={service.title}>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </article>
          ))}
        </div>

        <div className="two-column-grid">
          <article className="card">
            <h3>¿Cómo funciona la atención?</h3>
            <ol className="steps-list">
              {institution.attentionProcess.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>

          <article className="card">
            <h3>Horarios y tiempos de atención</h3>
            <div className="schedule-list">
              {institution.schedules.map((item) => (
                <div className="schedule-item" key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="two-column-grid">
          <article className="card">
            <h3>Ubicación y contacto</h3>
            <p>
              <strong>Dirección:</strong> {institution.address}
            </p>
            <p>
              <strong>Teléfono:</strong> {institution.phoneDisplay}
            </p>
            <p>
              <strong>Correo:</strong> {institution.email}
            </p>

            <div className="button-group">
              <a
                href={institution.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Ver en Google Maps
              </a>

              <a href={`tel:${institution.phone}`} className="button button-secondary">
                Llamar
              </a>

              <a
                href={`https://wa.me/${institution.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="button button-primary"
              >
                WhatsApp
              </a>
            </div>
          </article>

          <article className="card">
            <h3>Impacto y credibilidad</h3>
            <p>
              Mientras no existan estadísticas oficiales confirmadas, es mejor
              comunicar impacto de forma cualitativa y no inventar números.
            </p>

            <ul className="impact-list">
              {institution.impactPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="section-subtitle">
          <h3>Testimonios</h3>
          <p>
            Usa testimonios reales y autorizados. Mientras tanto, estos
            ejemplos sirven como estructura visual.
          </p>
        </div>

        <div className="two-column-grid">
          {institution.testimonials.map((testimonial) => (
            <article className="card testimonial-card" key={testimonial.quote}>
              <p>"{testimonial.quote}"</p>
              <strong>{testimonial.author}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstitutionSection;