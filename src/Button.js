import React, {Component} from 'react';
import remote from './assets/img/remote.png'
import './Button.css';
import axios from "axios";

class Button extends Component {

    open = () => {
        console.log('abrimos puerta')
    }

    render() {
        return (
            <div>
                <img src={remote} className="button" alt="Abrir"/>
            </div>
        )
    }
}

export default Button;
