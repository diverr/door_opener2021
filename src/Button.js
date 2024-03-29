import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDoubleTap } from 'use-double-tap';
import remote from './assets/img/remote.png';
import './Button.css';
import { getDistanceFromLatLonInKm } from './util';

export default function Button() {
  const version = process.env.REACT_APP_VERSION;

  const [opacity, setOpacity] = useState(1);
  const [opening, setOpening] = useState(false);

  const key = localStorage.getItem('key') ?? null;
  const user = localStorage.getItem('user') ?? null;

  const url = process.env.REACT_APP_SERVICE_URL;

  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 10000,
  });

  useEffect(() => {
    if (isGeolocationEnabled && coords) {
      const home_lng = process.env.REACT_APP_HOME_LNG;
      const home_lat = process.env.REACT_APP_HOME_LAT;

      const distance = getDistanceFromLatLonInKm(
        Number(home_lat),
        Number(home_lng),
        coords.latitude,
        coords.longitude
      );

      if (distance > 0.5) {
        toast.warn('Cuidado! estás alejado/a de casa para abrir la puerta', {
          autoClose: 2000,
        });
      }
    }
  }, [coords, isGeolocationEnabled]);

  const open = async () => {
    if (opening) return;
    setOpening(true);

    setOpacity(0.2);

    toast.info('Abriendo puerta... ', {
      autoClose: 2000,
    });

    try {
      await axios.post(url, {
        key: key,
        user: user,
        lng: coords?.longitude,
        lat: coords?.latitude,
      });

      toast.success(`Puerta abierta, bienvenido/a a casa ${user}`, {
        autoClose: 2000,
      });
    } catch (e) {
      if (e.response?.status === 401) {
        toast.error('No autorizado', {
          autoClose: 2000,
        });
      } else {
        toast.error(`Error de comunicación: ${e}`, {
          autoClose: 2000,
        });
      }
    } finally {
      setOpacity(1);
      setOpening(false);
    }
  };

  const navigate = useNavigate();

  const reset = () => {
    localStorage.clear();
    toast.success('Credenciales reseteadas', {
      autoClose: 2000,
    });
    navigate('/');
  };

  const handleOpen = useDoubleTap(open);
  const handleReset = useDoubleTap(reset);

  return (
    <div>
      <img
        src={remote}
        className="button"
        alt="Abrir"
        style={{ opacity: opacity }}
        {...handleOpen}
      />
      <br />
      <br />
      <br />
      <div className="version" {...handleReset}>
        {version}
      </div>
    </div>
  );
}
