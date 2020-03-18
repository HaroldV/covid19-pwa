import React, { Component } from 'react';
import uuid from 'uuid/v4';
import axios from 'axios';

import ListItem from '../components/List/ListItem';


class List extends Component {

    state = {
        data: [],
        loading: false,
        error: '',
    };

    componentDidMount() {

        this.setState({
            loading: true
        });
    
        axios.get("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats", {
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key":"85e54bdcd6msh8943a3f0529ffcep1443d7jsna18d0990f6e0"
            },"params":{
            "country":""
            }
        })
        .then((response)=>{
            const listCovid19 =  response.data.data.covid19Stats;

            this.setState({
                data: listCovid19,
                loading: false
            });
        })
        .catch((error)=>{
            console.log(error)

            this.setState({
                loading: false
            });
        });
    }

    render() { 
        const {data, loading} = this.state;

        if (loading) {
            return (<p>Cargando...</p>);
        }

        return(
            <div className="container">
                <div className="items-container">
                    {data.map(item => (
                        <ListItem item={item} key={uuid()} />
                    ))}
                </div>
            </div>
        );
    };

}

export default List;
