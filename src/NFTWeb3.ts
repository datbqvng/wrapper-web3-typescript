import Web3 from "web3";

class NFTWeb3 {
    instance?: Web3
    eth: ETH

    constructor(chain: string) {
        try {
            this.instance = new Web3(chain);
            this.instance.eth.net.isListening().catch((error: any) => { throw error })
            this.eth = new ETH(this.instance)
        } catch (error: any) {
            throw error
        }
    }
}

export default NFTWeb3

class ETH {
    instance: Web3
    constructor(instance: Web3) {
        this.instance = instance
    }
    async eth_getBalance(address: string): Promise<number> {
        this.instance?.eth.getBalance(address)
            .then(balance => {
                return balance
            })
            .catch(error => {
                throw error
            })

        return 0
    }
}