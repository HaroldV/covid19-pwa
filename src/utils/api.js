import axios from 'axios';

export const getData = country => (
    axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "85e54bdcd6msh8943a3f0529ffcep1443d7jsna18d0990f6e0"
        }, "params": {
            "country": ""
        }
    })
);
