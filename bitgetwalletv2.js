const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo({env: 'test' });
const Promise = require('bluebird');

// TODO: set your access token here

const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)


// TODO: set your coin of choice here
const coin = 'tbtc';
// TODO: get the wallet with this id
const walletId = '60309c2391f8cf00d70f17d84216d316';

// Create the wallet with Bluebird coroutines
Promise.coroutine(function *() {
  bitgo.authenticateWithAccessToken({ accessToken });

  const wallet = yield bitgo.coin(coin).wallets().get({id:walletId });
  console.log(wallet._wallet);
})();
