import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" exact component={Dashboard}/>
        </Switch>
    </BrowserRouter>
)

export default Routes