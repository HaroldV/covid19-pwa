import React from 'react';
import moment from 'moment';

import './ListItem.scss';
import deathsIcon from '../../assets/icons/deaths.png';
import confirmedIcon from '../../assets/icons/confirmed.png';
import recoveredIcon from '../../assets/icons/recovered.png';

const ListItemTotalCases = ({ item }) => {
    
    return (
        <div className="item">
            <div>
                <span className="country">A Nivel Mundial</span>{' '}                
            </div>

            <div className="last-update">{moment(item.statistic_taken_at).format('DD/MM/YYYY')}</div>

            <div className="data-wrapper">
                <div className="data-item">
                    <img src={confirmedIcon} alt="Confirmados"/>
                    <p className="confirmed">{item.total_cases}<br /><span className="title">Confirmados</span></p>
                </div>

                <div className="data-item">
                    <img src={deathsIcon} alt="Muertes"/>
                    <p className="deaths">{item.total_deaths}<br /><span className="title">Muertes</span></p>
                </div>

                <div className="data-item">
                    <img src={recoveredIcon} alt="Recuperados"/>
                    <p className="recovered">{item.total_recovered}<br /><span className="title">Recuperados</span></p>
                </div>
            </div>
            <div className="data-wrapper justify-content-around">
                <div className="data-item">
                    <img src={confirmedIcon} alt="Confirmados"/>
                    <p className="confirmed">{item.new_cases}<br /><span className="title">Nuevos Confirmados</span></p>
                </div>

                <div className="data-item">
                    <img src={deathsIcon} alt="Muertes"/>
                    <p className="deaths">{item.new_deaths}<br /><span className="title">Nuevas Muertes</span></p>
                </div>               
            </div>
        </div>
    );
};

export default ListItemTotalCases;
