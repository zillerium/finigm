const axios = require('axios')

function accessKloompay (walletId) {

    axios
    .post('https://kloompay.com:3000/api/testapi', {
        walletId: walletId
    })
    .then(res => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
        return res
    })
    .catch(error => {
        console.error(error)
        return null
    })

}


function setAccessKloompay (walletId) {

    axios
    .post('https://kloompay.com:3000/api/settestapi', {
        walletId: walletId
    })
    .then(res => {
        console.log(`statusCode: ${res.statusCode}`)
        console.log(res)
        return res
    })
    .catch(error => {
        console.error(error)
        return null
    })

}


module.exports.getWallet = (walletId) => {
	 accessKloompay(walletId)
}

module.exports.setWallet = (walletId) => {
    setAccessKloompay(walletId)
}
