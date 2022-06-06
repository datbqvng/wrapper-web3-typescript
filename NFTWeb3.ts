import Web3 from "web3";

class NFTWeb3 {
    instance?: Web3

    async InitInstance(chain: string): Promise<boolean> {
        try {
            this.instance = new Web3(chain);
            if (!this.instance.currentProvider) {
                return false
            }
            return true
        } catch (error: any) {
            // console.log('InitInstance error: ', error.message)
            throw error
        }
    }

    async GetBalance(address: string): Promise<number> {
        this.instance?.eth.getBalance(address)
            .then(balance => {
                return balance
            })
            .catch(error => {
                // console.log('GetBalance error: ', error.message)
                throw error
            })

        return 0
    }
}

export default NFTWeb3