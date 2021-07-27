const axios = require('axios')
const { toUSDCBalances } = require('../helper/balances')

async function tvl(timestamp) {
    const timestampString = timestamp.toString()
    const resp = await axios.get('http://localhost:8080/local/donations/totalBefore?timestamp=' + timestampString);
    console.log("got a response")
    return toUSDCBalances(resp.data.totalDonations)
}


module.exports = {
    tvl,
};
