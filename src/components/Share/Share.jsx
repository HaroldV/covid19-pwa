import React, {useState} from 'react';

import './Share.scss';
import shareIcon from '../../assets/icons/share-solid.svg';
import fbIcon from '../../assets/icons/facebook-f-brands.svg';
import twIcon from '../../assets/icons/twitter-brands.svg';
import whIcon from '../../assets/icons/whatsapp-brands.svg';
import tgIcon from '../../assets/icons/telegram-plane-brands.svg';

const Share = () => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open);

    return (
        <div className="share">
            <div className={ open
                ? 'a2a_kit a2a_kit_size_32 a2a_default_style active'
                : 'a2a_kit a2a_kit_size_32 a2a_default_style'
            }>
                <a className="a2a_button_facebook">
                    <img src={fbIcon} alt="Compartir" />
                </a>
                <a className="a2a_button_twitter">
                    <img src={twIcon} alt="Compartir"  />
                </a>
                <a className="a2a_button_whatsapp">
                    <img src={whIcon} alt="Compartir"  />
                </a>
                <a className="a2a_button_telegram">
                    <img src={tgIcon} alt="Compartir"  />
                </a>
            </div>

            <a onClick={toggle}>
                <img src={shareIcon} alt="Compartir"  />
            </a>
        </div>
    );
};

export default Share;
