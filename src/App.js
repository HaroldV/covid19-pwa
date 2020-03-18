import React, {useState} from 'react';

import './App.scss';
import Header from './components/Header/Header';
import List from './containers/List';
import Nav from './components/Nav';
import About from './components/About';

export const PAGE_ABOUT = 'PAGE_ABOUT';
export const PAGE_DATA = 'PAGE_DATA';

function App() {
    const [activePage, setActivePage] = useState(PAGE_DATA);

    return (
        <>
            <Header />

            <Nav activePage={activePage} setActivePage={setActivePage} />

            {(activePage === PAGE_DATA) && <List />}
            {(activePage === PAGE_ABOUT) && <About />}
        </>
    );
}

export default App;
