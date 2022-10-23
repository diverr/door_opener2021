import React, { useState } from 'react';
import remote from './assets/img/remote.png';
import './Button.css';
import Global from './Global';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDoubleTap } from 'use-double-tap';
import axios from 'axios';
import { useGeolocated } from 'react-geolocated';

export default function Button() {
  const [opacity, setOpacity] = useState(1);
  const [opening, setOpening] = useState(false);

  const key = localStorage.getItem('key') ?? null;
  const user = localStorage.getItem('user') ?? null;

  const url = `${Global.serviceUrl}/${key}`;
  // WARNING! change before sending to production
  // const url = `${Global.serviceUrl}`;

  const { coords, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 10000,
  });

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const deg2rad = (deg) => {
      return deg * (Math.PI / 180);
    };
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1); // deg2rad below
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const home_lng = process.env.REACT_APP_HOME_LNG;
  const home_lat = process.env.REACT_APP_HOME_LAT;

  const open = async () => {
    if (opening) return;
    setOpening(true);

    console.log({ coords });
    if (isGeolocationEnabled) {
      const distance = getDistanceFromLatLonInKm(
        Number(home_lat),
        Number(home_lng),
        coords.latitude,
        coords.longitude
      );

      // TODO: check user type
      if (distance > 0.5) {
        toast.error('Lo siento, no estás en casa', {
          autoClose: 2000,
        });
        setOpening(false);
        return;
      }
    }

    setOpacity(0.2);

    toast.info('Abriendo puerta... ', {
      autoClose: 2000,
    });

    try {
      await axios.get(url);

      const welcome = user === 'Papá' ? 'bienvenido' : 'bienvenida';

      toast.success(`Puerta abierta, ${welcome} a casa ${user}`, {
        autoClose: 2000,
      });
    } catch (e) {
      toast.error(`Error abriendo la puerta: ${e}`, { autoClose: 2000 });
    } finally {
      setOpacity(1);
      setOpening(false);
    }
  };

  const bind = useDoubleTap(open);

  return (
    <div>
      <img
        src={remote}
        className="button"
        alt="Abrir"
        style={{ opacity: opacity }}
        {...bind}
      />
    </div>
  );
}
