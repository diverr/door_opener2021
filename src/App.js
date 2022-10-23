import React, { useEffect } from 'react';
import './App.css';
import Button from './Button';
import Reset from './Reset';
import { Link, Route, useLocation } from 'wouter';
import Form from './Form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Global from './Global';
import axios from 'axios';

function App() {
  const version = process.env.REACT_APP_VERSION;
  console.log('version', version);

  const secret = localStorage.getItem('secret') ?? null;

  const [location, setLocation] = useLocation();

  useEffect(() => {
    axios
      .get(Global.serviceUrl)
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

  if (secret) {
    setLocation('/button');
  }

  return (
    <div className="App">
      <Route component={Form} path="/" />
      <Route component={Button} path="/button" />
      <Route component={Reset} path="/reset" />
      <br />
      <br />
      <div className="version">
        <Link to="/reset">{version}</Link>
      </div>
      <ToastContainer newestOnTop />
    </div>
  );
}

export default App;
