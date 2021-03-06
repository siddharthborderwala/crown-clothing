import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

let composeEnhancers;

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
//saga middleware can be run only after store has been created
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
