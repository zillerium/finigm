const result = require('dotenv').config()
console.log(process.env.ACCESS_TOKEN);
const BitGoJS = require('bitgo');
// Read the user authentication section to get your API access token
const bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: process.env.ACCESS_TOKEN });
const coin = bitgo.coin('tbtc');
console.log(bitgo)

const walletPassword = 'trevor';
const label = 'Kogo1';

bitgo.wallets().createWalletWithKeychains({"passphrase": walletPassword, "label": label}, function(err, result) {
  if (err) { console.dir(err); throw new Error("Error creating wallet!"); }
  console.log("Wallet Created: " + result.wallet.id());
  console.dir(result.wallet.wallet);

  // console.log("BACK THIS UP: ");
  // console.log("User keychain encrypted xPrv: " + result.userKeychain.encryptedXprv);
  // console.log("Backup keychain encrypted xPrv: " + result.backupKeychain.encryptedXprv);
});
