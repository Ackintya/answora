import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from './pages/home';
import Answers from './pages/answers';
import Login from './pages/login';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import './styles/components.css'

const Root = () => (
  <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/answers" component={Answers} />
        {/*<Route component={NotFound} />*/}
      </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.querySelector('#root'));