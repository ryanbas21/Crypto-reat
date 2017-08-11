import { fork, all, takeEvery, call } from 'redux-saga/effects';
import { RETRIEVE_COINS } from './homeReducer.tsx';
import { callCoinMarket } from '../../lib/index.ts';
export function* callGetCoins(action) {
    const val = yield call(callCoinMarket);
    console.log(val);
}
export function* watchGetCoins() {
    yield takeEvery(RETRIEVE_COINS, callGetCoins);
}
export default function* () {
    yield all([fork(watchGetCoins)]);
}
//# sourceMappingURL=homeReducer.saga.js.map