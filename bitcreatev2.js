const BitGoJS = require('bitgo');
const bitgo = new BitGoJS.BitGo({env: 'test' });
const Promise = require('bluebird');

const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)


// TODO: set your access token here
//const accessToken = 'v2x57e2a561bdd5467483497837e4cad4a01ca296cdaf0009b3fb4927bdaad6d02c';
// TODO: set your coin of choice
const coin = 'tbtc';
// TODO: set a label for your new wallet here
const walletLabel = 'Final Wallet2j8';
// TODO: set your passphrase for your new wallet here
const walletPassphrase = 'secretpassphrase8u7y6t5r';


// Create the wallet
Promise.coroutine(function *() {
  bitgo.authenticateWithAccessToken({ accessToken });

  const walletOptions = {
    "label": walletLabel,
    "passphrase":walletPassphrase,
    "enterprise": '602d7a7544285e0566c367abb873684d',
	  "isCold": false 
  };

  const wallet = yield bitgo.coin(coin).wallets().generateWallet(walletOptions);
  const walletInstance = wallet.wallet;

  console.log(`Wallet ID: ${walletInstance.id()}`);
  console.log(`Receive address: ${walletInstance.receiveAddress()}`);
  console.log('BACK THIS UP: ');
  console.log(`User keychain encrypted xPrv: ${wallet.userKeychain.encryptedPrv}`);
  console.log(`Backup keychain xPrv: ${wallet.backupKeychain.prv}`);
})();
