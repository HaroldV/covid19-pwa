import React from 'react';
import moment from 'moment';

import './ListItem.scss';
import deathsIcon from '../../assets/icons/deaths.png';
import confirmedIcon from '../../assets/icons/confirmed.png';
import recoveredIcon from '../../assets/icons/recovered.png';

function numberWithThousands(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const ListItem = ({ item }) => {

    return (
        <div className="item">
            <div>
                <span className="country">{item.country}</span>{' '}
                <span className="province">{item.province}</span>
            </div>

            <div className="last-update">{moment(item.lastUpdate).format('DD/MM/YYYY')}</div>

            <div className="data-wrapper">
                <div className="data-item">
                    <img src={confirmedIcon} alt="Confirmados"/>
                    <p className="confirmed">{numberWithThousands(item.confirmed)}</p>
                </div>

                <div className="data-item">
                    <img src={deathsIcon} alt="Muertes"/>
                    <p className="deaths">{numberWithThousands(item.deaths)}</p>
                </div>

                <div className="data-item">
                    <img src={recoveredIcon} alt="Recuperados"/>
                    <p className="recovered">{numberWithThousands(item.recovered)}</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
