import React from 'react';
import Routes from '../../Routes';
import reducers from '../../reducers';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import {createLogger} from 'redux-logger';

const Root = () => {

	const logger = createLogger();
    const reducer = combineReducers({
        reducers, // your reducers here
        routing: routerReducer,
    });
    const history = createHistory();
    const store = createStore(reducer, undefined, compose(
        applyMiddleware(routerMiddleware(history)),
        applyMiddleware(logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ));
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    );
};

export default Root;