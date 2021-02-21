const result = require('dotenv').config()
console.log(process.env.ACCESS_TOKEN);
const accessToken = process.env.ACCESS_TOKEN;
const BitGoJS = require('bitgo');
// Read the user authentication section to get your API access token
const bitgo = new BitGoJS.BitGo({ env: 'test', accessToken: accessToken });
const coin = bitgo.coin('tbtc');
console.log(bitgo)



// For Testnet environment set env to test
// For Livenet environment set env to prod
console.log("BitGoJS library version: " + bitgo.version());
bitgo.session({})
.then(function(res) {
  console.log(res);
})
.catch(function(err) {
  console.log(err);
});
