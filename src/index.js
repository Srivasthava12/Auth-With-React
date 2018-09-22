import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { history } from './history';
import { Router } from 'react-router-dom';

// Import all of our components
import App from './App';
import './index.css';

// Import the index reducer and sagas
import IndexReducer from './index-reducer';
import IndexSagas from './index-sagas';

import registerServiceWorker from './registerServiceWorker';

// Setup the middleware to watch between the Reducers and the Actions
const sagaMiddleware = createSagaMiddleware();

const routersMiddleware = routerMiddleware(history);

/*eslint-disable */
const composeSetup =
	process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;
/*eslint-enable */

const store = createStore(
	IndexReducer,
	composeSetup(applyMiddleware(sagaMiddleware, routersMiddleware)) // allows redux devtools to watch sagas
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
