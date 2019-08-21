import React, { Component } from 'react'
import Carrousel from '../common/carrousel/carrousel'

import IF from '../../imagens/IF.jpg'

class Dashboard extends Component {

    render() {
        return (
            <div className="container">
                
                <div className="inner cover">
                    <h1 className="cover-heading">Bem vindo ao Guia IF</h1>
                    <p className="lead"> Converse com o nosso chat e tire suas dúvidas
                    sobre o IF Sudeste MG.</p>
                </div>
                <Carrousel />
               
            </div>
        )
    }

}
export default Dashboard