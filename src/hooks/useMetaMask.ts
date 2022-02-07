import { useEffect, useState } from 'react';

declare global {
  interface Window {
    ethereum: any;
  }
}

export const useMetaMask = () => {
  const [userAddress, setUserAddress] = useState<string>('');

  const connect = async () => {
    const eth = window.ethereum;

    if (!eth) alert('Get metamask!!');

    const accounts = await eth.request({
      method: 'eth_requestAccounts',
    });

    setUserAddress(accounts[0]);
  };

  function isMobileDevice() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  }

  async function checkIfWalletIsConnected() {
    const eth = window.ethereum;

    if (eth) {
      const accounts = await eth.request({
        method: 'eth_accounts',
      });

      if (accounts.length > 0) {
        setUserAddress(accounts[0]);
        return;
      }

      if (isMobileDevice()) await connect();
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dappUrl = 'metamask-auth.ilamanov.repl.co'; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
  const deepLink = `https://metamask.app.link/dapp/${dappUrl}`;

  return {
    userAddress,
    deepLink,
    connect,
    isMobileDevice,
  };
};
