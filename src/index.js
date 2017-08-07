import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import './index.less';
import App from './containers/App';
import {store, history} from './store';


// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating



ReactDOM.render(<Provider store={store}>
					<ConnectedRouter history={history}>
						<Router>
							<App />
						</Router>
					</ConnectedRouter>
				</Provider>, document.getElementById('root'));
registerServiceWorker();
