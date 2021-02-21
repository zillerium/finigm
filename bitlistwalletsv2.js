const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo({ env: 'test' });
const Promise = require('bluebird');

const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)


// TODO: set your access token here
//const accessToken = 'v2xcbe8617bd58947a9ec41cc7a92e0a9a9d81dc2780669faa59eab3016ad5792ae';
// TODO: set your coin of choice here
const coin = 'tbtc';

Promise.coroutine(function *() {
  bitgo.authenticateWithAccessToken({ accessToken });

  const wallets = yield bitgo.coin(coin).wallets().list({});
  for (const wallet of wallets.wallets) {
    console.dir(`Wallet label: ${wallet.label()}`);
    console.dir(`Wallet ID: ${wallet.id()}`);
  }
})();
