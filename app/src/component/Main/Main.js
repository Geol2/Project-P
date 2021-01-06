import React from "react";
import Goods from "./Goods";
import './Main.css';

class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <div className="Main-top"> 
                    <div className="collection">
                        <div className="collection subname">
                            <p className="new"> NEW </p>
                            <p> Wak </p>
                            <p> Collection </p>
                            <button className="seeall"> SEE ALL </button>
                        </div>
                        <div className="goods-component">
                                <Goods>
                                </Goods>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;