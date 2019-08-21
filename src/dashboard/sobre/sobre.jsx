import React from 'react'


class Sobre extends React.Component{
    render(){
        return (
            <div className="container">
                <div className="inner cover">
                    <h1 className="cover-heading title-docs">Informações sobre o Guia IF</h1>
                    <p className="lead">O projeto surge com a idéia de facilitar o acesso a informaçõe relacionadas aos Institutos Federais do Sudeste de Minas Gerais. 
                    Além de auxiliar com informações sobre o vesibular.Projeto desenvolvido no curso de 
                        <b> Tecnologia em Sistemas para Internet </b> 
                        pertencente ao <b> IF Sudeste MG Barbacena </b>  
                        no minicurso de <b> Chatbots:da teoria ao deploy, com IBM Watson </b> 
                        ministrada pelo professor <a href="https://github.com/jpdik" 
                        className="text-black">João Paulo de Melo</a> em 2019.</p>           
                </div>
            </div>
        )
    }
}

export default Sobre