// src/store/store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import jobReducer from './jobReducer'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create a Redux store
const store = createStore(
  jobReducer,
  applyMiddleware(sagaMiddleware)
);

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;