import React from "react";
import './Footer.css'

import panzee from '../../img/panzee.png';

class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <img className="panzee-footer" src={panzee}></img>
                <p> Footer </p>
            </div>
        );
    }
}

export default Footer;