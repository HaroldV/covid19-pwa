import React from 'react';

import './ListItem.scss';
import deathsIcon from '../../assets/icons/deaths.png';
import confirmedIcon from '../../assets/icons/confirmed.png';
import recoveredIcon from '../../assets/icons/recovered.png';
import numberWithThousands from '../../utils/numberWithThousands';

const ListItem = ({ item }) => (
    <div className="item">
        <div>
            <span className="country">{item.country_name}</span>{' '}
        </div>

        <div className="data-wrapper">
            <div className="data-item">
                <img src={confirmedIcon} alt="Confirmados"/>
                <p className="confirmed">
                    {
                        item.cases ==='N/A'
                        ? 'No disponible'
                        : numberWithThousands(item.cases)
                    }
                    <br />
                    <span className="title">Confirmados</span>
                </p>
            </div>

            <div className="data-item">
                <img src={deathsIcon} alt="Muertes"/>
                <p className="deaths">
                    {item.deaths ==='N/A'
                        ? 'No disponible'
                        : numberWithThousands(item.deaths)
                    }
                    <br />
                    <span className="title">Muertes</span>
                </p>
            </div>

            <div className="data-item">
                <img src={recoveredIcon} alt="Recuperados"/>
                <p className="recovered">
                    {item.total_recovered ==='N/A'
                        ? 'No disponible'
                        : numberWithThousands(item.total_recovered)
                    }
                    <br />
                    <span className="title">Recuperados</span>
                </p>
            </div>
        </div>
    </div>
);

export default ListItem;
