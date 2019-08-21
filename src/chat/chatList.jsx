import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'


import { getMessages, sendMessage } from './chatActions'

class ChatList extends Component {

    constructor(props) {
        super(props)

        this.renderMessages = this.renderMessages.bind(this)
    }

    componentWillMount() {
        this.props.getMessages();
    }

    verifyMessage(message){
        if(message.includes('(link)')){
            return this.renderLink(message)
        }
        
        return message
    }

    renderDocs(message){
        const messageArray = message.split(';')
        return(
            <a href={messageArray[1]} target="_blank" className="chat-link-doc">
                <div className="border-name-doc">
                    <span className="name-doc-chat">{messageArray[3]}</span> <span className="circle-download"><FaFileDownload/></span>
                </div>
            </a>
        )
    }

    renderLink(message){
        const messageArray = message.split(')')
        return(
            <Link className="link-chat" to={`/${messageArray[1]}`}>
                {messageArray[1]}
            </Link>
        )
    }

    renderMessages() {
        const list = this.props.messages.filter(item => item.message.length > 0) || [];

        if (list.length > 0) {
            return list.map((item, index) => (
                <li key={index} className={`message ${item.base} appeared`}>
                    <div className="avatar"></div>
                    <div className="text_wrapper">
                        <div className="text">
                            {this.verifyMessage(item.message)}
                            {item.description ? (<p className="message-description">{item.description}</p>) : ''}
                            {
                                item.type == 'option' ?
                                (
                                    <ul>
                                        {
                                            item.options.map((option,index) => (
                                                <li key={index} className="option-link" onClick={() => this.props.sendMessage(option.value.input.text, option.label)}>{option.label}</li>
                                            ))
                                        }
                                    </ul>
                                ) : ''
                            }
                        </div>
                    </div>
                </li>
            ))
        }
        else {
            return (
                <li>

                </li>
            )
        }

    }

    render() {
        const messages = this.renderMessages()
        return (
            <ul className="messages">
                {messages}
            </ul>
        )
    }

    componentDidUpdate() {
        $('.messages').animate({ scrollTop: $('.messages').prop('scrollHeight') }, 300);
    }
}

const mapStateToProps = state => ({ messages: state.chat.messages })
const mapDispatchToProps = dispatch => bindActionCreators({ getMessages, sendMessage }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatList))