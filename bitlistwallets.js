const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)
const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ accessToken: accessToken }); // defaults to testnet. add env: 'prod' if you want to go against mainnet
//getSession();
//getWallets();

var wallets = bitgo.wallets();
wallets.list({}, function callback(err, data) {
// handle error, do something with wallets
for (var id in data.wallets) {
  var wallet = data.wallets[id].wallet;
  console.log(JSON.stringify(wallet, null, 4));
}
});
