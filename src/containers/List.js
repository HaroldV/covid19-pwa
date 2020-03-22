import React, { Component } from 'react';
import { v4 } from 'uuid';
import axios from 'axios';

import { PAGE_ALL_LOCATIONS } from '../App';
import anaPageView from '../utils/anaPageView';
import ListItem from '../components/List/ListItem';
import Spinner from '../components/Spinner/Spinner';

class List extends Component {

    state = {
        data: [],
        search: '',
        loading: false,
        error: '',
    };

    componentDidMount() {

        anaPageView(PAGE_ALL_LOCATIONS);

        this.setState({
            loading: true
        });

        axios.get("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
                "x-rapidapi-key": "85e54bdcd6msh8943a3f0529ffcep1443d7jsna18d0990f6e0"
            }, "params": {
                "country": ""
            }
        })
        .then((response) => {
            const listCovid19 = response.data.data.covid19Stats;

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

    handleChange(event){
        this.setState({
            search: event.target.value.toLowerCase().substr(0,20)
        })
    }

    render() {
        const { data, loading, search } = this.state;

        let filteredCountry = data.filter((item) => item.country.toLowerCase().indexOf(search) !== -1);

        if (loading)
            return <Spinner />;
        
        return (
            <div className="container">
                <div className="items-container row">
                    <input
                        type="text"
                        placeholder="Encontrar país"
                        value={this.state.search} onChange={this.handleChange.bind(this)}
                    />
                </div>
                <div className="items-container">
                    {filteredCountry.map(item => ( <ListItem item={item} key={v4()} /> ))}
                </div>
            </div>
        );
    };

}

export default List;
