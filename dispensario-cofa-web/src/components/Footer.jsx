function Footer({ cofa, dispensario }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>COFA</h3>
          <p>Centro de Orientación Familiar</p>
          <p>{cofa.address}</p>
        </div>

        <div>
          <h3>Dispensario Médico</h3>
          <p>{dispensario.address}</p>
          <p>Atención informativa y servicio comunitario</p>
        </div>

        <div>
          <h3>Contacto rápido</h3>
          <p>COFA: {cofa.phoneDisplay}</p>
          <p>Dispensario: {dispensario.phoneDisplay}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} COFA y Dispensario Médico. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;