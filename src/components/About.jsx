import React from 'react';

import github from '../assets/icons/github.svg';
import envelope from '../assets/icons/envelope.svg';

const About = () => {

    return(
        <div className="container">
            <div className="items-container">
                <div className="item">
                    <div className="profile">
                        <img className="img-profile" src="//avatars1.githubusercontent.com/u/3208972?s=400&u=1a810ac421fb7880724c7fe3b33376cda8a6194b&v=4" alt="Harold Villalobos"/>

                        <p className="country">Harold Villalobos</p>

                        <div className="contact-wrapper">
                            <a href="mailto:haroldestebanvillalobos@gmail.com" className="github">
                                <img src={envelope} alt="Github"/>
                            </a>
                            <a href="https://github.com/HaroldV" className="github">
                                <img src={github} alt="Github"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="profile">
                        <img className="img-profile" src="//avatars1.githubusercontent.com/u/7153989?s=400&u=2909c70c89497497cd31de27ca770634cbcb6493&v=4" alt="Javier Gómez"/>

                        <p className="country">Javier Gómez</p>

                        <div className="contact-wrapper">
                            <a href="mailto:javiergomezve@gmail.com" className="github">
                                <img src={envelope} alt="Github"/>
                            </a>
                            <a href="https://github.com/javiergomezve" className="github">
                                <img src={github} alt="Github"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
