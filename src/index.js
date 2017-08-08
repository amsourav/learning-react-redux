import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.less';
import Root from './containers/Root';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
