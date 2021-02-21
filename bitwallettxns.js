
const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)
const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ accessToken: accessToken }); // defaults to testnet. add env: 'prod' if you want to go against mainnet

var walletId = '2Mvbn61nsA99KkUywu72QAvX5A8cwRTwCW1';
bitgo.wallets().get({ "id": walletId }, function callback(err, wallet) {
  if (err) { throw err; }
  wallet.transactions({}, function callback(err, transactions) {
    // handle transactions
    console.log(JSON.stringify(transactions, null, 4));
  });
});

walletId='2Mzt1hWq7oSgKbDj7pHqWiTYermz1J2e74b';
bitgo.wallets().get({ "id": walletId }, function callback(err, wallet) {
  if (err) { throw err; }
  wallet.transactions({}, function callback(err, transactions) {
    // handle transactions
    console.log(JSON.stringify(transactions, null, 4));
  });
});
