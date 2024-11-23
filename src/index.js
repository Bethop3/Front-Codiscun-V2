import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envuelve tu aplicación con Router */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Medición de rendimiento (opcional)
reportWebVitals();
