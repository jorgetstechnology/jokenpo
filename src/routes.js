import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from './view/pages/inicio';
import Home from './view/pages/home';
import Game from './view/pages/game';

const Routes = () => (
    
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio} />
                <Route path="/home" component={Home} />
                <Route path="/game" component={Game} />
            </Switch>
        </BrowserRouter>

);
export default Routes;