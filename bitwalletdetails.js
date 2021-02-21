const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)
const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ accessToken: accessToken }); // defaults to testnet. add env: 'prod' if you want to go against mainnet
//getSession();
//getWallets();
var address = '2Mvbn61nsA99KkUywu72QAvX5A8cwRTwCW1';
bitgo.getWalletAddress({ address: address }, function(err, result) {
  if (err) { console.log(err); process.exit(-1); }
  console.dir(result);
})
