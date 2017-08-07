import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';
import DummyApp from './components/DummyApp';

const Error = asyncComponent(() => import('./containers/Error'));


export default () => (
  <Switch>
    <Route path="/" exact component={DummyApp} />
    <Route component={Error} />
  </Switch>
);