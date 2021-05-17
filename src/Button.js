import React, {Component} from 'react';
import remote from './assets/img/remote.png'
import './Button.css';
import Global from './Global';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Button({params}) {

    const {key} = params;
    let opening = false;

    const open = () => {
        if (opening) return;
        opening = true;

        const url = `${Global.serviceUrl}/${key}`;
        toast.info("Abriendo puerta... ", {
            'autoClose': 2000
        });
        fetch(url)
            .then(resp => {
                toast.success("Puerta abierta", {
                    'autoClose': 2000
                });
                opening = false;
            })
            .catch(error => {
                toast.error("Error abriendo la puerta", {
                    'autoClose': 2000
                });
                opening = false;
            })
    }

    return (
        <div>
            <img
                src={remote}
                className="button"
                alt="Abrir"
                onClick={open}
            />
        </div>
    )
}
