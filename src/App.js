import React, { useEffect } from 'react';
import './App.css';
import Button from './Button';
import { Route, useLocation } from 'wouter';
import Form from './Form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function App() {
  const version = process.env.REACT_APP_VERSION;
  console.log('version', version);

  const key = localStorage.getItem('key') ?? null;

  const [location, setLocation] = useLocation();

  console.log(process.env.REACT_APP_SERVICE_URL);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_SERVICE_URL)
      .then(() => {
        toast.success('Servicio preparado', {
          autoClose: 2000,
        });
      })
      .catch((e) => {
        toast.error(`Error de comunicación: ${e}`, {
          autoClose: 2000,
        });
      });
  }, []);

  if (key) {
    setLocation('/button');
  }

  const reset = () => {
    localStorage.clear();
    toast.success('Credenciales reseteadas', {
      autoClose: 2000,
    });
    setLocation('/');
  };

  return (
    <div className="App">
      <Route component={Form} path="/" />
      <Route component={Button} path="/button" />
      <br />
      <br />
      <div className="version" onClick={reset}>
        {version}
      </div>
      <ToastContainer newestOnTop />
    </div>
  );
}

export default App;
