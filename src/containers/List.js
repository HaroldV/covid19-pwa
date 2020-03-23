import React, {useState} from 'react';
import { v4 } from 'uuid';

import ListItem from '../components/List/ListItem';

const List = ({ data }) => {

    const [search, setSearch] = useState('');

    let filteredCountry = data.filter((item) => item.country_name.toLowerCase().indexOf(search) !== -1);

    return (
        <div className="container">
            <div className="items-container row">
                <input
                    type="text"
                    placeholder="Encontrar país"
                    value={search}
                    onChange={e => setSearch(e.target.value.toLowerCase().substr(0,20))}
                />
            </div>

            <div className="items-container">
                {filteredCountry.map(item => ( <ListItem item={item} key={v4()} /> ))}
            </div>
        </div>
    );
};

export default List;
