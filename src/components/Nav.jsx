import React from 'react';
import { PAGE_ABOUT, PAGE_DATA } from '../App';



const Nav = ({activePage, setActivePage}) => (
    <nav>
        <span
            onClick={() => setActivePage(PAGE_DATA)}
            className={activePage === PAGE_DATA ? 'active' : ''}
        >
            Inicio
        </span>

        <span
            onClick={() => setActivePage(PAGE_ABOUT)}
            className={activePage === PAGE_ABOUT ? 'active' : ''}
        >
            Quienes
        </span>
    </nav>
);

export default Nav;
