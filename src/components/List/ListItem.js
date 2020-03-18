import React from 'react';
import moment from 'moment';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, YAxis } from 'recharts';

const ListItem = ({ item }) => {
    const d = [
        {confirmed: item.confirmed,  deaths: item.deaths, recovered: item.recovered}
    ];

    return (
        <div className="item">
            <BarChart
                width={360}
                height={200}
                data={d}
                margin={{
                    top: 5, right: 20, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="deaths" fill="#8884d8"/>
                <Bar dataKey="recovered" fill="#82ca9d"/>
            </BarChart>

            <div className="last-update">{moment(item.lastUpdate).format('DD/MM/YYYY')}</div>

            <div>
                <span className="country">{item.country}</span>{' '}
                <span className="province">{item.province}</span>
            </div>
        </div>
    );
};

export default ListItem;
