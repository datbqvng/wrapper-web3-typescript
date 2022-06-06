import NFTWeb3 from './NFTWeb3'

var chain = 'wss://ws-avax.hungle.dev';
var contract1 = '0xA598297086c52CB73837673b368d66cB4b27998d';
var contract2 = '0x7B51220F3B614d25b94a5a862b99A7bCb873A943';
var wallet1 = '0xD84a8F87C8a24B7AF2b0655Ad57F3e7E2fAfA1C4';
var wallet2 = '0x40aef6AeE2B4e99b43936E23112bCE8a7Ca4688b';
var tranHex = '0x1e768c51fff4f31ccb8bc2305f7914a0034aecdc995b03564d2d12108c3b988f';

(async () => {
    try {
        let web3 = new NFTWeb3('');

        let balance = await web3.eth.eth_getBalance(wallet1)
        console.log('Balance 1: ', balance)

    } catch (err: any) {
        console.log('Error: ', err.message)
    }
})();
