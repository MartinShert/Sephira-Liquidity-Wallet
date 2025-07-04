// import useWallet from '../hooks/useWallet'
// import sephiraLogo from '../assets/Sephira.png'
// import './CreateWalletScreen.css'

// export default function CreateWalletScreen() {
//   const { account, connectWallet } = useWallet()

//   return (
//     <div className="wallet-screen">
//       <img src={sephiraLogo} alt="Sephira Logo" className="wolf-image" />

//       <h1>Create or Import Wallet</h1>

//       <button onClick={connectWallet}>Connect Wallet</button>

//       {account && (
//         <p style={{ marginTop: '1rem' }}>Connected: {account}</p>
//       )}
//     </div>

    
//   )
// }

import useWallet from '../hooks/useWallet';
import sephiraLogo from '../assets/Sephira.png';
import './CreateWalletScreen.css';

export default function CreateWalletScreen() {
  const { account, connectWallet, isConnecting } = useWallet(); // ✅ Added isConnecting

  return (
    <div className="wallet-screen">
      <img src={sephiraLogo} alt="Sephira Logo" className="wolf-image" />

      <h1>Create or Import Wallet</h1>

      <button onClick={connectWallet} disabled={isConnecting}>
        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
      </button>

{account && (
  <p style={{ marginTop: '1rem', color: '#fff', fontWeight: 'bold' }}>
    🟢 Connected: {account.slice(0, 6)}...{account.slice(-4)}
  </p>
)}


    </div>
  );
}

