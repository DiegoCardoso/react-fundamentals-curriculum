import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'


import Main from '../containers/Main'

import Home from '../components/Home'
import Weather from '../components/Weather'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="/weather/:city" component={Weather}/>
        </Route>
    </Router>
)

export default routes