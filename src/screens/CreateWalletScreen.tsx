import useGeneratedWallet from '../hooks/useGeneratedWallet';
import sephiraLogo from '../assets/Sephira.png';
import './CreateWalletScreen.css';

export default function CreateWalletScreen() {
  const { wallet, createWallet, importWallet, clearWallet } = useGeneratedWallet();

  return (
    <div className="wallet-screen">
      <img src={sephiraLogo} alt="Sephira Logo" className="wolf-image" />
      <h1>Create or Import Wallet</h1>

      {!wallet ? (
        <>
          <button onClick={createWallet}>Create Wallet</button>
          <button
            onClick={() => {
              const pk = prompt('Paste your private key:');
              if (pk) importWallet(pk.trim());
            }}
          >
            Import Wallet
          </button>
        </>
      ) : (
        <>
          <p style={{ marginTop: '1rem', color: '#fff', fontWeight: 'bold' }}>
            🟢 Connected: {wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}
          </p>
          <p style={{ fontSize: '0.8rem', color: '#fff' }}>
            Private Key: {wallet.privateKey}
          </p>
          <button onClick={clearWallet}>Clear Wallet</button>
        </>
      )}
    </div>
  );
}
