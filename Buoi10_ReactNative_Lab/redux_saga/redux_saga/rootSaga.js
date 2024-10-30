// src/store/sagas/index.js
import { all } from 'redux-saga/effects';
import { watchJob } from './jobSaga';

export default function* rootSaga() {
  yield all([watchJob()]);
}
