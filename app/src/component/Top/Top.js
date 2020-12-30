import React from "react";
import './Top.css';

import main from '../../img/maincut.png';
import panzee from '../../img/panzee.png';

class Top extends React.Component {
    render() {
        return (
            <div className="Top">
                <div className="Top-contents">
                    <img className="Top-picture-main" src={main} alt="main.jpg"/>
                    
                    <div className="sub">
                        <p className="sub woo">
                            WOO
                        </p>
                        <p className="sub wak">
                            WAK
                        </p>
                        <p className="sub good">
                            GOOD
                        </p>
                    </div>

                    <div className="btn">
                        <button className="btn goshop" > SHOP NOW </button>
                    </div>
                    
                    <div className="subject">
                        <img className="panzee" src={panzee} alt="panzee.jpg"/>
                        
                        <div className="suject-contents"> 
                            <div className="br"> Wak </div>
                            <div className="br"> Goods </div>
                        </div>
                    </div>

                    <div className="home">
                        <p> H O M E </p>
                    </div>

                    <div className="intro">
                        <p> INTRO </p>
                    </div>
                    
                    <div className="service">
                        <p> SERVICE </p>
                    </div>

                    <div className="goods">
                        <p> GOODS </p>
                    </div>

                    <div className="faq">
                        <p> FAQ </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Top;