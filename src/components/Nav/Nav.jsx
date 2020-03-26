import React from 'react';
import { PAGE_TOTAL_CASES, PAGE_ABOUT, PAGE_ALL_LOCATIONS, PAGE_MY_LOCATION, PAGE_TIPS } from '../../App';

import './Nav.scss';
import world from '../../assets/icons/globe-americas-solid.svg';
import accessCard from '../../assets/icons/address-card-regular.svg';
import flag from '../../assets/icons/flag-solid.svg';
import crosshairs from '../../assets/icons/crosshairs-solid.svg';
import questionCircleRegular from '../../assets/icons/question-circle-regular.svg';

const Nav = ({activePage, setActivePage}) => {

    const links = [
        {
            icon: world,
            label: 'Mundial',
            page: PAGE_TOTAL_CASES
        },
        {
            icon: flag,
            label: 'Paises',
            page: PAGE_ALL_LOCATIONS
        },
        {
            icon: crosshairs,
            label: 'Tu país',
            page: PAGE_MY_LOCATION
        },
        {
            icon: questionCircleRegular,
            label: 'Ayuda',
            page: PAGE_TIPS
        },
        {
            icon: accessCard,
            label: 'Acerca',
            page: PAGE_ABOUT
        },
    ];

    return (
        <nav>
            {links.map((item, index) => (
                <span
                    key={index}
                    onClick={() => setActivePage(item.page)}
                    className={activePage === item.page ? 'active' : ''}
                >
                <img src={item.icon} alt={item.label}/>
            </span>
            ))}
        </nav>
    );
};

export default Nav;
