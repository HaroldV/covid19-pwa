import React, { Component } from 'react';
import { v4 } from 'uuid';
import axios from 'axios';

import { PAGE_MY_LOCATION } from '../App';
import anaPageView from '../utils/anaPageView';
import ListItem from '../components/List/ListItem';
import Spinner from '../components/Spinner/Spinner';

const iplocation = require("iplocation").default;
const publicIp = require('public-ip');

class ListMyLocation extends Component {

    state = {
        data: [],
        myCountry: '',
        error: '',
    };

    componentDidMount() {
        anaPageView(PAGE_MY_LOCATION);

        let myPublicIp;

        this.setState({
            loading: true
        });
        
        (async () => {        
            myPublicIp = await publicIp.v4()
            iplocation(myPublicIp, [], (error, res) => {
                this.setState({
                    myCountry: res.country
                });
            });
            
        })();
       
        axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "85e54bdcd6msh8943a3f0529ffcep1443d7jsna18d0990f6e0"
            }, "params": {
                "country": ""
            }
        })
        .then((response) => {
            const listCovid19 = response.data.countries_stat;
            this.setState({
                data: listCovid19,                    
                loading: false
            });
        })
        .catch((error) => {
            console.log(error)

            this.setState({
                loading: false
            });
        });
    }

    render() {
        const { data, loading, myCountry } = this.state;

        if (loading)
            return <Spinner />;

        return (
            <div className="container">
                <div className="items-container">

                </div>
                <div className="items-container">
                    {data.map(item => myCountry === item.country_name ? <ListItem item={item} key={v4()} /> : '' )}
                </div>
            </div>
        );
    };

}

export default ListMyLocation;
