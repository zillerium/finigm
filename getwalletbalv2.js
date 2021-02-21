const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo({ env: 'test' });
const Promise = require('bluebird');

const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)

// TODO: set your access token here
//const accessToken = 'v2x57e2a561bdd5467483497837e4cad4a01ca296cdaf0009b3fb4927bdaad6d02c';
// TODO: set your coin of choice here
const coin = 'tbtc';
const basecoin = bitgo.coin(coin);
// TODO: set your wallet Id here
const walletId = '60309c2391f8cf00d70f17d84216d316';

Promise.coroutine(function *() {
  bitgo.authenticateWithAccessToken({ accessToken: accessToken });

  const walletInstance = yield basecoin.wallets().get({ id: walletId });
  console.log('Wallet ID:', walletInstance.id());
  console.log('Current Receive Address:', walletInstance.receiveAddress());
  console.log('Balance:', walletInstance.balanceString());
  console.log('Confirmed Balance:', walletInstance.confirmedBalanceString());
  console.log('Spendable Balance:', walletInstance.spendableBalanceString());
})();
