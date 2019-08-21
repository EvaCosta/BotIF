import React from 'react'

import './js/carrousel';
import './css/carrousel.css';

import IF from '../../../imagens/IF.jpg'
import Panoramica from '../../../imagens/panoramica.jpg'
import IFJF from '../../../imagens/ifjf.jpg'

class Carrousell extends React.Component{
    render() {
        return (
            <div id="carousel-container" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-container" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-container" data-slide-to="1"></li>
                    <li data-target="#carousel-container" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img className="img-about" src={Panoramica} ></img>
                        <div className="carousel-caption">
                        </div>
                    </div>
                    <div className="item"  alt="IF">
                        <img className="img-about" src={IF} ></img>
                        <div className="carousel-caption">
                        </div>
                    </div>
                    <div className="item">
                        <img className="img-about" src={IFJF} ></img>
                        <div className="carousel-caption">
                        </div>
                    </div>
                </div>

                <a className="left carousel-control" href="#carousel-container" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-container" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carrousell;