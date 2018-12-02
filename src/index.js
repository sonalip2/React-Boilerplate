import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import todoApp from './reducers'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(todoApp)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'));
serviceWorker.unregister();
