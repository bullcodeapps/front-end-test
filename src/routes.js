import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/Home/:nome" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
