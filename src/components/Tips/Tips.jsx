import React from 'react';

const Tips = () => {

    const tipsList = [
        {
            title: 'Se amable',
            img: 'be-kind-1-es.jpg'
        },
        {
            title: 'Cuando usar mascara',
            img: 'coronavirus-when to-use-mask-message 1.JPG'
        },
        {
            title: 'Enfermedad por el COVID-19',
            img: 'covid19-infografia.png'
        },
        {
            title: 'Cuando limpiarse las manos',
            img: 'cuando-limpiarse-las-manos.png'
        },
        {
            title: 'Limpiarse las manos con gel',
            img: 'gel-limpiarse-las-manos-rvsd.png'
        },
        {
            title: 'Limpiarse las manos con jabon',
            img: 'jabon-limpiarse-las-manos-revised.png'
        },
    ];

    return (
        <div className="container">
            <div className="items-container">
                {tipsList.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={`/tips/${item.img}`} alt={item.title} className="card-img"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tips;
