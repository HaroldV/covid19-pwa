import React from 'react';
import { PAGE_TOTAL_CASES, PAGE_ABOUT, PAGE_ALL_LOCATIONS, PAGE_MY_LOCATION } from '../App';
import { MdMyLocation, MdContactMail, MdPlace, MdDonutSmall } from 'react-icons/md';



const Nav = ({activePage, setActivePage}) => (
    <nav>
        <span
            onClick={() => setActivePage(PAGE_TOTAL_CASES)}
            className={activePage === PAGE_TOTAL_CASES ? 'active' : ''}
        >
            <MdDonutSmall />
        </span>
        <span
            onClick={() => setActivePage(PAGE_ALL_LOCATIONS)}
            className={activePage === PAGE_ALL_LOCATIONS ? 'active' : ''}
        >
            <MdPlace />
        </span>

        <span
            onClick={() => setActivePage(PAGE_MY_LOCATION)}
            className={activePage === PAGE_MY_LOCATION ? 'active' : ''}
        >            
            <MdMyLocation />
        </span>
        <span
            onClick={() => setActivePage(PAGE_ABOUT)}
            className={activePage === PAGE_ABOUT ? 'active' : ''}
        >    
            <MdContactMail />
        </span>
    </nav>
);

export default Nav;
