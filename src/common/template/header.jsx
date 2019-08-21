import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top navbar-black">
                    <div className="inner ">
                        <h3 className="masthead-brand">Guia IF</h3>
                            <ul className="nav masthead-nav">
                                <li className={this.props.location.pathname == '/' ? 'active' : ''}>
                                    <Link to={'/'}>
                                    Página inicial
                                    </Link>
                                </li>
                                <li className={this.props.location.pathname == '/semestres' ? 'active' : ''}>
                                    <Link to={'/semestres'}>
                                    Provas
                                    </Link>
                                </li>
                                <li className={this.props.location.pathname == '/sobre' ? 'active' : ''}>
                                    <Link to={'/sobre'}>
                                    Sobre
                                    </Link>
                                </li>
                            </ul>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
export default withRouter(Header)