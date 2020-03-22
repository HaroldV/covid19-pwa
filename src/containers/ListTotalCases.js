import React, { Component } from 'react';
import axios from 'axios';

import ListItemTotalCases from '../components/List/ListItemTotalCases';
import { PAGE_TOTAL_CASES } from '../App';
import anaPageView from '../utils/anaPageView';

class ListTotalCases extends Component {

    state = {
        data: [],
        error: '',
    };

    componentDidMount() {
        anaPageView(PAGE_TOTAL_CASES);

        this.setState({
            loading: true
        });
       
        axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
                "x-rapidapi-key": "85e54bdcd6msh8943a3f0529ffcep1443d7jsna18d0990f6e0"
            },
        }).then((response) => {
            this.setState({
                data: response.data,
                loading: false
            });

        }).catch((error) => {
            console.log(error)
            this.setState({
                loading: false
            });
        });
    }

    render() {
        const { data, loading } = this.state;
    
        if (loading) {
            return (<p>Cargando...</p>);
        }

        return (
            <div className="container">                
                <div className="items-container">
                    <ListItemTotalCases item={data} />
                </div>
            </div>
        );
    };

}

export default ListTotalCases;
