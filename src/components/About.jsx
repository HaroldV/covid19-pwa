import React, {useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import github from '../assets/icons/github.svg';
import envelope from '../assets/icons/envelope.svg';
import bitcoin from '../assets/icons/bitcoin-brands.svg';

import './about.scss';

const About = () => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    const devs = [
        {
            name: 'Harold Villalobos',
            email: 'mailto:haroldestebanvillalobos@gmail.com',
            profilePic: '//avatars1.githubusercontent.com/u/3208972?s=400&u=1a810ac421fb7880724c7fe3b33376cda8a6194b&v=4',
            github: 'https://github.com/HaroldV',
            btcWallet: '18Hyvm6oZKBPn31PrNqj2w8n46fieAbDkh',
        },
        {
            name: 'Javier Gómez',
            email: 'javiergomezve@gmail.com',
            profilePic: '//avatars1.githubusercontent.com/u/7153989?s=400&u=2909c70c89497497cd31de27ca770634cbcb6493&v=4',
            github: 'https://github.com/javiergomezve',
            btcWallet: '32yNwvpubfQaQMDiraFN74rZ2jSkwcwMYy',
        },
    ];

    return(
        <div className="container">
            <div id="modal-container" className={open ? 'two' : 'out'}>
                <div className="modal-background">
                    <div className="modal">
                        <p>El código de la billetera fue copiado al portapapeles.</p>

                        <p>Gracias :)</p>

                        <button className="close" onClick={toggle}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>

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

                                <a href={dev.github} className="github">
                                    <img src={github} alt="Github"/>
                                </a>
                            </div>

                            <div className="contact-wrapper">
                                <p>Apoya el proyecto donando</p>
                            </div>

                            <div className="contact-wrapper">
                                <CopyToClipboard text={dev.btcWallet} onCopy={toggle}>
                                    <img src={bitcoin} alt="bitcoin"/>
                                </CopyToClipboard>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
