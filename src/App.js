import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registro from './components/Registro';
import Login from './components/Login';
import AgregarCuenta from './components/AgregarCuenta';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>AMexico</h1>
        <nav>
          <ul>
            <li><Link to="/registro">Registro</Link></li>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/agregar-cuenta">Agregar Cuenta</Link></li>
            <li><Link to="/" className="home-button">Volver al Inicio</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agregar-cuenta" element={<AgregarCuenta />} />
          <Route path="/" element={
            <div className="welcome-section">
              <img src="/finance.png" alt="AMexico" className="welcome-image" />
              <h2>Bienvenido a AMexico</h2>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

