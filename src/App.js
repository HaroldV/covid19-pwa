import React, {useState} from 'react';

import './App.scss';
import Header from './components/Header/Header';
import List from './containers/List';
import ListMyLocation from './containers/ListMyLocation.js'
import ListTotalCases from './containers/ListTotalCases.js'
import Nav from './components/Nav';
import About from './components/About';

export const PAGE_TOTAL_CASES = 'PAGE_TOTAL_CASES';
export const PAGE_ALL_LOCATIONS = 'PAGE_ALL_LOCATIONS';
export const PAGE_MY_LOCATION = 'PAGE_MY_LOCATION';
export const PAGE_ABOUT = 'PAGE_ABOUT';

function App() {
    const [activePage, setActivePage] = useState(PAGE_MY_LOCATION);

    return (
        <>
            <Header />

            <Nav activePage={activePage} setActivePage={setActivePage} />

            {(activePage === PAGE_TOTAL_CASES) && <ListTotalCases />}
            {(activePage === PAGE_ALL_LOCATIONS) && <List />}
            {(activePage === PAGE_MY_LOCATION) && <ListMyLocation />}
            {(activePage === PAGE_ABOUT) && <About />}
        </>
    );
}

export default App;
