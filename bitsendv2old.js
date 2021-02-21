const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo({ env: 'test' });

const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)

const otp = '000000';


// TODO: set your access token here
//const accessToken = 'v2xcbe8617bd58947a9ec41cc7a92e0a14jg61dc2780669faa59eab3016ad5792ae';
// TODO: set your coin of choice here
const coin = 'tbtc';
const basecoin = bitgo.coin(coin);
// TODO: set your wallet ID here
const walletId = '60309c2391f8cf00d70f17d84216d316';
// TODO: set your wallet password here
const walletPassphrase = 'secretpassphrase8u7y6t5r';
// TODO: set your destination address here
const toAddress = 'tb1qwm0gtl0rsva8nlyce6ec2rwjs64q059s8vzkfu';

bitgo.authenticateWithAccessToken({ accessToken });

  const unlock = bitgo.unlock({ otp, duration: 3600 });
  if (!unlock) {
    console.log('We did not unlock.');
    throw new Error();
  }


bitgo.coin(coin).wallets().get({ id : walletId })
 .then(function(wallet) {

    let params = {
        // TODO: set the amount you want to send here
        amount: 0.00005* 1e8,
        address: toAddress,
        walletPassphrase: walletPassphrase,
        sequenceId: "example"
    };

    wallet.send(params)
     .then(function(transaction) {
        console.dir(transaction);
    });
});
