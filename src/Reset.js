import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'wouter';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

function Reset() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
    localStorage.clear();

    toast.success('Credenciales reseteadas', {
      autoClose: 2000,
    });

    setLocation('/');
  }, []);

  return null;
}

export default Reset;
