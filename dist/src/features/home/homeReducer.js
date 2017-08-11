const GET_COIN = 'GET_COIN';
export const getCoin = ({ coin: string }) => ({
    type: GET_COIN,
    payload: {
        coin
    }
});
export const RETRIEVE_COINS = 'RETRIEVE_COINS';
export const retrieveCoins = () => ({
    type: RETRIEVE_COINS
});
const initState = () => ({
    ownedCoins: [],
    possibleCoins: []
});
export default function GetCoin(state = initState(), action) {
    switch (action.type) {
        case GET_COIN:
            return {};
        case RETRIEVE_COINS:
            return Object.assign({}, state, { possibleCoins: [action.payload] });
    }
}
//# sourceMappingURL=homeReducer.js.map