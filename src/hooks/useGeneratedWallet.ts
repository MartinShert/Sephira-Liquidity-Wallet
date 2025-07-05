import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export default function useGeneratedWallet() {
  const [wallet, setWallet] = useState<ethers.Wallet | ethers.HDNodeWallet | null>(null);

  useEffect(() => {
    const savedKey = localStorage.getItem('USER_PRIVATE_KEY');
    if (savedKey) {
      const loadedWallet = new ethers.Wallet(savedKey);
      setWallet(loadedWallet);
      console.log('Loaded wallet:', loadedWallet.address);
    }
  }, []);

  const createWallet = () => {
    const newWallet = ethers.Wallet.createRandom();
    localStorage.setItem('USER_PRIVATE_KEY', newWallet.privateKey);
    setWallet(newWallet);
    console.log('Created wallet:', newWallet.address);
  };

  const importWallet = (privateKey: string) => {
    const importedWallet = new ethers.Wallet(privateKey);
    localStorage.setItem('USER_PRIVATE_KEY', importedWallet.privateKey);
    setWallet(importedWallet);
    console.log('Imported wallet:', importedWallet.address);
  };

  const clearWallet = () => {
    localStorage.removeItem('USER_PRIVATE_KEY');
    setWallet(null);
  };

  return {
    wallet,
    createWallet,
    importWallet,
    clearWallet,
  };
}

