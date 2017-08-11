import { Action, RootState } from '../../globals/index.tsx';

type GETCOIN = 'GET_COIN';
const GET_COIN: GETCOIN = 'GET_COIN';
export const getCoin = ({ coin: string }) => ({
  type: GET_COIN,
  payload: {
    coin
  }
});

export type RETRIEVECOINS = 'RETRIEVE_COINS';
export const RETRIEVE_COINS: RETRIEVECOINS = 'RETRIEVE_COINS';
export const retrieveCoins = () => ({
  type: RETRIEVE_COINS
});

const initState = () => ({
  ownedCoins: [],
  possibleCoins: []
});

export default function GetCoin(state: RootState = initState(), action: Action) {
  switch (action.type) {
    case GET_COIN:
      return {};
    case RETRIEVE_COINS:
      return {
        ...state,
        possibleCoins: [action.payload]
      };
  }
}
