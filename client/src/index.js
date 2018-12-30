import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './css/bootstrap.min.css';
import './css/bootstrap-grid.min.css';
import './css/index.css';
import './css/github-calendar.css';
import App from './App';
import reducers from './reducers';
// import registerServiceWorker from './registerServiceWorker';

// Development only axios helpers
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
console.log("Store:", store);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
// registerServiceWorker();
