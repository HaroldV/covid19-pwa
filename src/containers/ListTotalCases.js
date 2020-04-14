import React from 'react';

import confirmedIcon from '../assets/icons/confirmed.png';
import deathsIcon from '../assets/icons/deaths.png';
import recoveredIcon from '../assets/icons/recovered.png';
import numberWithThousands from '../utils/numberWithThousands';

const ListTotalCases = ({ data }) => {

    const total_cases = data.reduce((a, b) => {
        return a + parseInt(
            (b.cases === "N/A")
            ? 0
            : b.cases.replace(',', '')
        );
    }, 0);

    const total_deaths = data.reduce((a, b) => {
        return a + parseInt(
            (b.deaths === "N/A")
            ? 0
            : b.deaths.replace(',', '')
        );
    }, 0);

    const total_recovered = data.reduce((a, b) => {
        return a + parseInt(
            (b.total_recovered === "N/A")
                ? 0
                : b.total_recovered.replace(',', '')
        );
    }, 0);

    return (
        <div className="container">
            <div className="items-container">
                <div className="item">
                    <div>
                        <span className="country">A Nivel Mundial</span>{' '}
                    </div>

                    <div className="data-wrapper">
                        <div className="data-item">
                            <img src={confirmedIcon} alt="Confirmados"/>
                            <p className="confirmed">
                                {numberWithThousands(total_cases)}
                                <br />
                                <span className="title">Confirmados</span>
                            </p>
                        </div>

                        <div className="data-item">
                            <img src={deathsIcon} alt="Muertes"/>
                            <p className="deaths">{numberWithThousands(total_deaths)}<br /><span className="title">Muertes</span></p>
                        </div>

                        <div className="data-item">
                            <img src={recoveredIcon} alt="Recuperados"/>
                            <p className="recovered">{numberWithThousands(total_recovered)}<br /><span className="title">Recuperados</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListTotalCases;
