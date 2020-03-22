import React from 'react';

import './Spinner.scss';
import logo from '../../assets/logo192.png';

const Spinner = () => (
    <div className="Spinner">
        <img src={logo} alt="Cargando..." />
    </div>
);

export default Spinner;
