const BigNumber = require('bignumber.js')

const usdtAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7'
const toUSDT = value => BigNumber(value).times(1e6).toFixed(0)
const toUSDTBalances = value => ({
    [usdtAddress]:toUSDT(value)
})

const usdcAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'
const toUSDC = value => BigNumber(value).times(1e6).toFixed(0)
const toUSDCBalances = value => ({
    [usdcAddress]:toUSDC(value)
})


module.exports = {
    toUSDT,
    toUSDTBalances,
    usdtAddress,
    toUSDC,
    toUSDCBalances,
    usdcAddress
}