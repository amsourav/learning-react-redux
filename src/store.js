import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers';
import logger from 'redux-logger'

export const history = createHistory()
let middlewares = [];

middlewares.push(routerMiddleware(history));
middlewares.push(logger)

export const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(...middlewares)
);


