import { fork, all } from 'redux-saga/effects';
import { callGetCoins } from '../features/home/homeReducer.saga.ts';

export default function*() {
  yield all([fork(callGetCoins)]
};
