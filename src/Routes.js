import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';
import App from './containers/App';
const Error = asyncComponent(() => import('./containers/Error'));
const Header = asyncComponent(() => import('./components/Header'))

export default () => (
  <div>
  	<Header />
    <Route path="/" exact component={App} />
    <Route path="/favorite" exact component={Error} />
  </div>
);