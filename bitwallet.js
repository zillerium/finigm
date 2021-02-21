const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)
const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ accessToken: accessToken }); // defaults to testnet. add env: 'prod' if you want to go against mainnet
//getSession();
getWallets();


async function getSession() {
    const result1 = await bitgo.session();
    console.dir(result1);

}

async function getWallets() {

    bitgo.coin('tbtc').wallets().list({ limit: 50 })
    .then(function(wallets) {
    // print wallet list
    console.dir(wallets);
    });
}
