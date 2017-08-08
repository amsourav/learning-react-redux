import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.less';
import Root from './containers/Root';
import { Provider } from 'react-redux'

import {store, history} from './store/createStore'

ReactDOM.render(<Provider store={store}><ConnectedRouter history={history}><Router><Root /></Router></ConnectedRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
