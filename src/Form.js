import React, {useState} from 'react';
import {useLocation} from 'wouter';
import './Form.css';

export default function Form() {
    const [key, setKey]           = useState('');
    const [location, setLocation] = useLocation();

    const send = () => {
        if (!key || key === '') return;
        localStorage.setItem('key', key);
        setLocation('/button/' + key);
    }

    return (
        <div className="form">
            <input
                type="text"
                id="key"
                placeholder="Introduce llave"
                onChange={(e) => setKey(e.target.value)}
            />
            <br/>
            <button id="btn-send" onClick={send}>Enviar</button>
        </div>
    )
}
