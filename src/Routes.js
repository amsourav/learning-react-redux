import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';
import App from './containers/App';
const Error = asyncComponent(() => import('./containers/Error'));


export default () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route component={Error} />
  </Switch>
);