import React, { Component } from 'react';

import List from '../../src/components/List/List';

const axios = require('axios');

class ListCovid19 extends Component {

    constructor() {
        super();
        this.state = {
            data: [],            
            loading: true,
            error: '',
        }
    }

    async componentDidMount() {
    
        axios({
            "method":"GET",
            "url":"https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
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
            // const listCovid19JSON = listCovid19.json();
            this.setState({
                data: listCovid19
            })
        })
        .catch((error)=>{
            console.log(error)
        })

    }

    render() { 
        const { data } = this.state;
        // console.log(data.map(item => item));
        // return (<h1> asdad</h1>)
        return(<List data={data} />);        
    };

}

export default ListCovid19;