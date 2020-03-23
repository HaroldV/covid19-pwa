import React from 'react';
import { v4 } from 'uuid';

import ListItem from '../components/List/ListItem';

const ListMyLocation = ({data, country}) => {

    return (
        <div className="container">
            <div className="items-container">
                {data.map(item =>
                    country === item.country_name
                        ? <ListItem item={item} key={v4()} />
                        : ''
                )}
            </div>
        </div>
    );
};

export default ListMyLocation;
