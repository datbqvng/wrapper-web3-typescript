import Web3 from "web3";
// import Utils from "web3-utils";

import {AbiItem} from 'web3-utils';


export class NFTWeb3 {
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


class ETH {
    instance: Web3
    constructor(instance: Web3) {
        this.instance = instance
    }

    // get balance of chain
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

    // get accounts of chain
    async eth_getAccounts(): Promise<string[]> {
        this.instance?.eth.getAccounts()
            .then(accounts => {
                return accounts
            })
            .catch(error => {
                throw error
            })
        return []
    }
    
    // create account
    eth_createAccount(entropy?: string | undefined):  any {
        try {
            return this.instance?.eth.accounts.create(entropy)
        }catch (e) {
            throw e
        }
    }

    // create account
    eth_privateKeyToAccount( privateKey: string,  ignoreLength?: boolean | undefined ):  any {
        try {
            return this.instance?.eth.accounts.privateKeyToAccount(privateKey,ignoreLength)
        }catch (e) {
            throw e
        }
    
    }
     // create account
    // eth_signTransaction( transactionConfig: any, privateKey: string, callback?: ((error: Error, signedTransaction: SignedTransaction) => void) | undefined ):  any {
    //     try {
    //         return this.instance?.eth.accounts.signTransaction(transactionConfig, privateKey, callback?: ((error: Error, signedTransaction: SignedTransaction) => void) | undefined)
    //     }catch (e) {
    //         throw e
    //     }
    //     return this.instance?.eth.accounts.eth_signTransaction(privateKey,ignoreLength)
    // }
    //  // create account
    // eth_contract(abi : any , privateKey: string  ):  any {
    //     try {
    //         var jsonabi = JSON.parse(abi)
    //         var contract = new this.instance.eth.Contract(jsonabi,privateKey);
    //     }
    //     catch (e){
    //         throw e;
            
    //     }
        
    //     return contract
    // }
}

