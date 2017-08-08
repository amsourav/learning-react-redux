import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import {createLogger} from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'

import reducers from '../reducers' // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const logger = createLogger();

let middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

middlewares = [...middlewares, middleware];

export const store = compose(applyMiddleware(...middlewares))(createStore)(reducers);