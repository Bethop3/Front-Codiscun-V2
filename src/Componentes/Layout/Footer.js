import React from 'react';
import '../../Styles/Footer.css'; // Archivo CSS del Footer
import logo from './Logo.png'; // Ajusta la ruta de tu logo

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección 1: Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo Codiscun" className="footer-logo-img" />
        </div>

        {/* Sección 2: Contáctanos */}
        <div className="footer-contact">
          <h3>Contáctanos</h3>
          <p>Calle Paseo El Ébano 63<br />Fraccionamiento Villas del Mar 1<br />Cancún, Quintana Roo</p>
          <p>Email: <a href="mailto:codiscun@gmail.com">codiscun@gmail.com</a></p>
          <p>Tel: <a href="tel:+529981975169">99-81-97-51-69</a></p>
        </div>

        {/* Sección 3: Iconos de Redes Sociales */}
        <div className="footer-social">
          <h3>Síguenos En</h3>
          <div className="social-icons">
            {/* Aquí van los iconos de redes sociales */}
            <span>Iconos de redes aquí</span>
          </div>
        </div>

        {/* Sección 4: Acerca de */}
        <div className="footer-about">
          <h3>Acerca de</h3>
          <p><a href="/aviso-de-privacidad">Aviso de Privacidad</a></p>
          <p><a href="/terminos-y-condiciones">Términos y Condiciones</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
