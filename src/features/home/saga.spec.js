import test from 'tape';
import { retrieveCoins } from './homeReducer.tsx';
import { callGetCoins } from './homeReducer.saga.ts';
import { call } from 'redux-saga/effects';
import { callCoinMarket } from '../../lib/index.ts';

const getState = (state = {}) => state;
test('Get Coins Call', assert => {
  console.log(callCoinMarket);
  const msg = 'Should Get Coins From API';
  const state = getState();
  const action = retrieveCoins();
  const gen = callGetCoins(action);
  const actual = gen.next().value;
  const expected = call(callCoinMarket);

  assert.same(actual, expected, msg);
  assert.end();
});
