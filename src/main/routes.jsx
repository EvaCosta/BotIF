import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Carrinho from '../carrinho/carrinho';
import Semestres from '../dashboard/semestres/semestres';
import Sobre from '../dashboard/sobre/sobre';

export default props => (
    <Switch>
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/semestres" component={Semestres} />
        <Route path="/sobre" component={Sobre} />
        <Route component={Dashboard} />
    </Switch>
)