import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { obterProvas } from './semestresActions'

class ProvasList extends React.Component{

    componentWillMount(){
        this.props.obterProvas()
    }

    renderProvas(){
        const list = this.props.list || []
        console.log(list)
        if(list.length > 0){
            return list.map((semestre, indice) => (
                <div key= {indice} className="text-center list-group " >
                   <div className="list-group-item list-group-item-secundary roxo branco" >{semestre.nome}</div>
                   {semestre.provas.map((prova,indice)=>(
                       <div>
                           <a className="text-black list-group-item-action list-group-item" href={prova.link}>{prova.titulo}</a>
                       </div>
                   ))} 
                </div>
            ))
        }else{
            return(
                <div className="text-center">
                    <div>
                        Nenhum arquivo.
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="row">
                {this.renderProvas()}
            </div>
        )
    }

}

const mapStateToProps = state => ({ list: state.provas.list })
const mapDispatchToProps = dispatch => 
bindActionCreators({obterProvas}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ProvasList)