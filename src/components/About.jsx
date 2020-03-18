import React from 'react';

const About = () => {

    return(
        <div className="container">
            <div className="items-container">
                <div className="item">
                    <div className="profile">
                        <img className="img-profile" src="https://avatars1.githubusercontent.com/u/3208972?s=400&u=1a810ac421fb7880724c7fe3b33376cda8a6194b&v=4" alt="Harold Villalobos"/>
                        <p className="country">Harold Villalobos</p>
                    </div>
                </div>

                <div className="item">
                    <div className="profile">
                        <img className="img-profile" src="https://avatars1.githubusercontent.com/u/7153989?s=400&u=2909c70c89497497cd31de27ca770634cbcb6493&v=4" alt="Javier Gómez"/>
                        <p className="country">Javier Gómez</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
