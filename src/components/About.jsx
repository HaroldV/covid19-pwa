import React, {useEffect} from 'react';

import { PAGE_ABOUT } from '../App';
import anaPageView from '../utils/anaPageView';
import github from '../assets/icons/github.svg';
import envelope from '../assets/icons/envelope.svg';

const About = () => {

    useEffect(() => {
        anaPageView(PAGE_ABOUT);
    }, []);


    const devs = [
        {
            name: 'Harold Villalobos',
            email: 'mailto:haroldestebanvillalobos@gmail.com',
            profilePic: '//avatars1.githubusercontent.com/u/3208972?s=400&u=1a810ac421fb7880724c7fe3b33376cda8a6194b&v=4',
            github: 'https://github.com/HaroldV'
        },
        {
            name: 'Javier Gómez',
            email: 'javiergomezve@gmail.com',
            profilePic: '//avatars1.githubusercontent.com/u/7153989?s=400&u=2909c70c89497497cd31de27ca770634cbcb6493&v=4',
            github: 'https://github.com/javiergomezve'
        },
    ];

    return(
        <div className="container">
            <div className="items-container">
                {devs.map((dev, index) => (
                    <div className="item" key={index}>
                        <div className="profile">
                            <img className="img-profile" src={dev.profilePic} alt={dev.name}/>

                            <p className="country">{dev.name}</p>

                            <div className="contact-wrapper">
                                <a href={`mailto:${dev.email}`} className="github">
                                    <img src={envelope} alt="Github"/>
                                </a>
                                <a href={dev.github} className="github" target="_blank">
                                    <img src={github} alt="Github"/>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
