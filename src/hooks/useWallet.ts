import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

export default function useWallet() {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // ✅ Always check for existing connection
  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== 'undefined' && (window as any).ethereum) {
        try {
          const provider = new ethers.BrowserProvider((window as any).ethereum);
          const accounts = await provider.send('eth_accounts', []);
          if (accounts.length > 0) {
            console.log('Already connected:', accounts[0]);
            setAccount(accounts[0]);
          }
        } catch (err) {
          console.error('Check connection error:', err);
        }
      }
    };
    checkConnection();
  }, []);

  // ✅ Connect wallet with guard to prevent spam clicks
  const connectWallet = async () => {
    if (typeof window === 'undefined' || !(window as any).ethereum) {
      alert('MetaMask not detected!');
      return;
    }

    try {
      setIsConnecting(true);
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const accounts = await provider.send('eth_requestAccounts', []);
      console.log('Connected:', accounts[0]);
      setAccount(accounts[0]);
    } catch (err) {
      console.error('Connect error:', err);
    } finally {
      setIsConnecting(false);
    }
  };

  // ✅ Listen for account changes (good practice!)
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          console.log('Wallet disconnected');
          setAccount(null);
        } else {
          console.log('Account changed:', accounts[0]);
          setAccount(accounts[0]);
        }
      };

      (window as any).ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        (window as any).ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, []);

  return { account, connectWallet, isConnecting };
}
