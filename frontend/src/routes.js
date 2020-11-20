import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Produto from './pages/Produto';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing}/>
            <Route path="/inicio" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/perfil" component={Perfil}/>
            <Route path="/cadastro_produto" component={Produto}/>
        </BrowserRouter>
    )
}