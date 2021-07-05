import React, {useState} from 'react';
import remote from './assets/img/remote.png'
import './Button.css';
import Global from './Global';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDoubleTap} from "use-double-tap";

export default function Button({params}) {

    const [opacity, setOpacity] = useState(1);

    const {key} = params;
    let opening = false;

    const bind = useDoubleTap((e) => {
        open();
    });

    const open = () => {
        if (opening) return;
        opening = true;

        const url = `${Global.serviceUrl}/${key}`;
        // const url = `${Global.serviceUrl}/hola`;

        setOpacity(0.2);

        toast.info("Abriendo puerta... ", {
            'autoClose': 2000
        });
        fetch(url)
            .then(resp => {
                toast.success("Puerta abierta", {
                    'autoClose': 2000
                });
                opening = false;
                setOpacity(1);
            })
            .catch(error => {
                toast.error("Error abriendo la puerta", {
                    'autoClose': 2000
                });
                opening = false;
                setOpacity(1);
            })
    }

    return (
        <div>
            <img
                src={remote}
                className="button"
                alt="Abrir"
                style={{opacity: opacity}}
                {...bind}
            />
        </div>
    )
}
