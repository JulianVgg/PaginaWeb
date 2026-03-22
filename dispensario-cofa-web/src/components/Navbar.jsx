import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'COFA', href: '#cofa' },
    { label: 'Dispensario', href: '#dispensario' },
    { label: 'Avisos', href: '#avisos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contacto', href: '#contacto' }
  ];

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="#inicio" className="brand">
          <div className="brand-mark">C</div>
          <div>
            <strong>COFA</strong>
            <span>Centro de Orientación Familiar</span>
          </div>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;