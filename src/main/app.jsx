import '../common/template/dependencies'

import React from 'react'
import Routes from './routes'
import Chat from '../chat/chat'
import Header from '../common/template/header';
import Footer from '../common/template/footer'

export default props => (
    <div className="site-wrapper-inner">
        <div className="cover-container">
            <Header />
            <Routes />
            <Footer nome="Eva" />
        </div>
        <Chat />
    </div>
)