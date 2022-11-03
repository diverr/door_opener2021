import axios from 'axios';
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Button from './Button';
import Form from './Form';

function App() {
  const version = process.env.REACT_APP_VERSION;
  console.log('version', version);

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

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Form />,
    },
    {
      path: '/button',
      element: <Button />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer newestOnTop />
    </div>
  );
}

export default App;
