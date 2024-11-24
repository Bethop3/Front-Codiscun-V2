import './App.css';
import Navbar from './Componentes/Layout/Header.js'; // Ajusta la ruta si es necesario
import Footer from './Componentes/Layout/Footer.js'; // Ajusta la ruta si es necesario

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar className="navbar" />

      {/* Contenido principal */}
      <div className="main-content">
        hola
      </div>

      {/* Footer */}
      <Footer className="footer" />
    </div>
  );
}

export default App;
