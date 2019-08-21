import React from 'react'
import ProvasList from './semestresList'

class Provas extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <h2 id="prova" className="title-docs text-center">Provas Antigas</h2>
                    <ProvasList />
                </div>
            </div>
        )
    }
}

export default Provas