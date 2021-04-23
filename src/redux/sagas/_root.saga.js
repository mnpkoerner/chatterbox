import { all } from 'redux-saga/effects';
import wordsSaga from './words.saga'

export default function* rootSaga() {
  yield all([
    wordsSaga(),
  ]);
}
