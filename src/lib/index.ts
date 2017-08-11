import axios from 'axios';

export function callCoinMarket() {
  const api = 'https://api.coinmarketcap.com/v1/ticker/';
  return axios.get(api);
}
