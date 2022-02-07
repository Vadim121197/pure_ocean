/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable no-underscore-dangle */
import Web3 from 'web3';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    web3: any;
    ethereum: any;
    my_contract: any;
  }
}

export class RPCService {
  private _web3Instance: Web3;

  private _currentAccounts: string[];

  addresses: any;

  private static instance: RPCService | undefined = undefined;

  provider = typeof window.ethereum !== 'undefined' ? window.ethereum : '';

  private constructor() {
    this._web3Instance = new Web3(this.provider);
    this._currentAccounts = [];
    this.addresses = {
      vault: '',
      oracle: '',
      agregator: '',
      contract: '',
    };
  }

  static getInstance(): RPCService {
    if (!RPCService.instance) {
      RPCService.instance = new RPCService();
    }
    return RPCService.instance;
  }

  get web3() {
    return this._web3Instance;
  }

  get accounts() {
    return this._currentAccounts;
  }

  setWeb3(payload: any) {
    this._web3Instance = payload;
    console.log(payload);
  }

  async checkIfWalletIsConnected(): Promise<string | undefined> {
    try {
      if (!window.ethereum) return '';
      try {
        const { ethereum } = window;
        await ethereum.request({
          method: 'eth_accounts',
        });
      } catch (error) {
        console.log('connect wallet', error);
      }
      const account = await this._web3Instance.eth.getAccounts();
      this._currentAccounts = account;
      return account[0];
    } catch (error) {
      console.log('connect wallet', error);
      return undefined;
    }
  }

  async connectToWallet(): Promise<string | undefined> {
    try {
      if (window.ethereum) {
        try {
          const { ethereum } = window;
          await ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
          console.log('connect wallet', error);
        }
      }

      const account = await this._web3Instance.eth.getAccounts();
      this._currentAccounts = account;
      return account[0];
    } catch (error) {
      const err = error as any;
      if (err.code === 4001) {
        console.log('Please connect to MetaMask.');
      } else {
        console.error(error);
      }
      return undefined;
    }
  }
}

const rpcService = RPCService.getInstance();
export { rpcService };
