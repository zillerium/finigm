
const result = require('dotenv').config()
const accessToken = process.env.ACCESS_TOKEN;
console.log(accessToken)
const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ accessToken: accessToken }); // defaults to testnet. add env: 'prod' if you want to go against mainnet

var walletId = '2Mzt1hWq7oSgKbDj7pHqWiTYermz1J2e74b';



bitgo.wallets().get({ "id": walletId }, function callback(err, wallet) {
  if (err) { throw err; }
  // Sets the policy
  var rule = {
    id: "test1",
    type: "velocityLimit",
    action: { type: "getApproval" },
    condition: {
      "type": "velocity",
      "amount": 101*1e8,
      "timeWindow": 24 * 60 * 60,
      "groupTags": [
        ":tag"
      ],
      "excludeTags": []
    }
  };
  wallet.setPolicyRule(rule, function callback(err, wallet) {
    if (err) { throw err; }
    console.dir(wallet.admin.policy);
  });
});
