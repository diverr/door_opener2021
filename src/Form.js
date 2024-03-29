import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Form.css';

export default function Form() {
  const [key, setKey] = useState('');
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  const storedKey = localStorage.getItem('key') ?? null;

  const send = () => {
    if (!key || key === '' || !user || user === '') return;

    localStorage.setItem('key', key);
    localStorage.setItem('user', user);

    navigate('/button');
  };

  return (
    <div className="form">
      {storedKey && <Navigate to="/button" />}
      <input
        type="text"
        id="user"
        placeholder="Nombre"
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <input
        type="text"
        id="key"
        placeholder="Llave"
        onChange={(e) => setKey(e.target.value)}
      />
      <br />
      <button id="btn-send" onClick={send}>
        Enviar
      </button>
    </div>
  );
}
