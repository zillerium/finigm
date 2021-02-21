const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)
const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ accessToken: accessToken }); // defaults to testnet. add env: 'prod' if you want to go against mainnet
//getSession();
//getWallets();

var keychains = bitgo.keychains();
keychains.list({}, function callback(err, keychains) {
  if (err) {
    // handle error
  }
  console.dir(keychains);
});
