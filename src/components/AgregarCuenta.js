import React, { useState } from 'react';
import './AgregarCuenta.css';

function AgregarCuenta() {
  const [banco, setBanco] = useState('');
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [saldoInicial, setSaldoInicial] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cuenta Agregada:', { banco, numeroCuenta, saldoInicial });
    // Aquí podrías enviar los datos a tu banco
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Cuenta Bancaria</h2>
      <label>
        Banco:
        <input type="text" value={banco} onChange={(e) => setBanco(e.target.value)} />
      </label>
      <br />
      <label>
        Número de Cuenta:
        <input type="text" value={numeroCuenta} onChange={(e) => setNumeroCuenta(e.target.value)} />
      </label>
      <br />
      <label>
        Saldo Inicial:
        <input type="number" value={saldoInicial} onChange={(e) => setSaldoInicial(e.target.value)} />
      </label>
      <br />
      <button type="submit">Agregar Cuenta</button>
    </form>
  );
}

export default AgregarCuenta;