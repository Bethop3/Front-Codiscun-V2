import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.png';
import '../../Styles/Header.css';

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
  <Link to="/">
    <img src={logo} alt="Logo Codiscun" className="logo" />
  </Link>
</div>
      {/* Navegación */}
      <nav className="navigation">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/quienes-somos" className="nav-link">¿Quiénes Somos?</Link>
        <Link to="/prevencion-educacion" className="nav-link">Educación y Prevención</Link>
        <Link to="/programas-clinicos" className="nav-link">Programas Clínicos</Link>
        <Link to="/cij" className="nav-link">CIJ</Link>
        <Link to="/lgbt" className="nav-link">LGBT+</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </nav>

      {/* Botón Donar */}
      <div className="donate-button">
  <Link to="/donaciones/vistadonaciones" className="donate-link">
    <div className="donate-icon"></div> {/* Icono como fondo */}
    Donar
  </Link>
</div>


    </header>
  );
}

export default Header;
