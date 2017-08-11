import 'regenerator-runtime/runtime';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import rootSaga from '../sagas/root';
import homeReducer from '../src/features/home/homeReducer.tsx';

const rootReducer = combineReducers({ homeReducer });

const sagas = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagas),
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.devToolsExtension && window.devToolsExtension()
    : f => f
);

export default initialState => {
  const store = createStore(rootReducer, initialState, enhancer);
  sagas.run(rootSaga);
  return store;
};
