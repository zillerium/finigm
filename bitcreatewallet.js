const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)
const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ accessToken: accessToken }); // defaults to testnet. add env: 'prod' if you want to go against mainnet
//getSession();
//getWallets();
var id = '2Mzt1hWq7oSgKbDj7pHqWiTYermz1J2e74b';
bitgo.wallets().get({ "id": id }, function callback(err, wallet) {
  if (err) {
    throw err;
  }
  wallet.createAddress({ "chain": 0 }, function callback(err, address) {
    console.dir(address);
  });
});
