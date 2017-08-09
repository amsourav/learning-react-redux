import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';
import App from './containers/App';
const Error = asyncComponent(() => import('./containers/Error'));
const Header = asyncComponent(() => import('./components/Header'))
const Favorite = asyncComponent(() => import('./containers/Favorite'))
const DevTools = asyncComponent(() => import('./containers/DevTools'))

export default () => (
  <div>
  	<Header />
  	<DevTools />
  	<Switch>
	    <Route path="/" exact component={App} />
	    <Route path="/favorite" exact component={Favorite} />
	    <Route component={Error} />
	</Switch>
  </div>
);