import { fork, all, takeEvery, put, call } from 'redux-saga/effects';
import { RETRIEVECOINS, RETRIEVE_COINS, retrieveCoins } from './homeReducer.tsx';
import { callCoinMarket } from '../../lib/index.ts';

export function* callGetCoins(action) {
  const val = yield call(callCoinMarket);
  console.log(val);
}

export function* watchGetCoins() {
  yield takeEvery(RETRIEVE_COINS, callGetCoins);
}

export default function*() {
  yield all([fork(watchGetCoins)]);
}
