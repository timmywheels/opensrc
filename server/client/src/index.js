import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';
import './css/bootstrap-grid.min.css';
import './css/index.css';
import './css/github-calendar.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
