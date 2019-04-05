import React from 'react';
import {CityLogo} from '../ui/icons';

const Footer = () => {
    return (
        <Footer classNam="bck_blue">
            <div className="footer_logo">
                <CityLogo 
                    width='70px'
                    height='70px'
                    link={true}
                    linkTo='/'
                />
            </div>
            <div className="footer_discl">
                Manchester City 2019. All Rights Reserved.
            </div>
        </Footer>
    )
} 

export default Footer;