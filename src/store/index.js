import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import {createRootReducer} from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middleware = [routerMiddleware(history), sagaMiddleware];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(createRootReducer(history), enhancer);

sagaMiddleware.run(rootSaga);

export default store;
