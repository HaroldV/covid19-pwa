import React, {useState, useEffect} from 'react';
import iplocation from 'iplocation';
import publicIp from 'public-ip';

import './App.scss';
import Header from './components/Header/Header';
import List from './containers/List';
import ListMyLocation from './containers/ListMyLocation.js'
import ListTotalCases from './containers/ListTotalCases.js'
import Nav from './components/Nav/Nav';
import About from './components/About';
import { getData } from './utils/api';
import Spinner from './components/Spinner/Spinner';
import anaPageView from './utils/anaPageView';
import Tips from './components/Tips/Tips';
import Share from './components/Share/Share';

export const PAGE_TOTAL_CASES = 'PAGE_TOTAL_CASES';
export const PAGE_ALL_LOCATIONS = 'PAGE_ALL_LOCATIONS';
export const PAGE_MY_LOCATION = 'PAGE_MY_LOCATION';
export const PAGE_ABOUT = 'PAGE_ABOUT';
export const PAGE_TIPS = 'PAGE_TIPS';

function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [activePage, setActivePage] = useState(PAGE_MY_LOCATION);
    const [data, setData] = useState([]);
    const [country, setCountry] = useState('');

    useEffect(() => {
        setLoading(true);

        const fetchData = async () => {
            const response = await getData().catch(err => {
                console.error(err);
                setError('No pudimos cargar la data. Intenta de nuevo mas tarde');
            });

            if (!response) {
                setLoading(false);
                return;
            }

            await setData(response.data.countries_stat);

            let myPublicIp = await publicIp.v4();

            if(!myPublicIp)
                myPublicIp = await publicIp.v6();

            await iplocation(myPublicIp, [], (error, res) => {
                if(res.country === 'United States')
                    setCountry('USA');
                else 
                    setCountry(res.country);

            });

            setLoading(false);
        };

        fetchData();
    }, []);

    useEffect(() => {
        anaPageView(PAGE_MY_LOCATION);
    }, [activePage]);

    return (
        <>
            <Header />

            <Nav activePage={activePage} setActivePage={setActivePage} />

            {(error) && (<p className="error">{error}</p>)}

            {(loading) && (<Spinner/>)}

            {(!error && !loading && activePage === PAGE_TOTAL_CASES) &&
                <ListTotalCases data={data} />
            }

            {(!error && !loading && activePage === PAGE_ALL_LOCATIONS) &&
                <List data={data} />
            }

            {(!error && !loading && activePage === PAGE_MY_LOCATION) &&
                <ListMyLocation data={data} country={country} />
            }

            {(!error && !loading && activePage === PAGE_TIPS) &&
                <Tips />
            }

            {(!error && !loading && activePage === PAGE_ABOUT) &&
                <About />
            }

            <Share />
        </>
    );
}

export default App;
