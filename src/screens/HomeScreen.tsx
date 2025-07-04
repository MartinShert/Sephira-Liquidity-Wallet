// import { Link } from 'react-router-dom'
// import sephiraLogo from '../assets/Sephira.png'

// export default function HomeScreen() {
//   return (
//     <div style={{ padding: '2rem', textAlign: 'center' }}>
//       <img
//         src={sephiraLogo}
//         alt="Sephira"
//         style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
//       />
//       <h1>🏠 Sephira Wallet Home</h1>
//       <p>Welcome to your wallet! Use the link below to create or import your wallet:</p>
//       <Link to="/create-wallet">
//         <button>Create or Import Wallet</button>
//       </Link>
//     </div>
//   )
// }
import './HomeScreen.css'
import { Link } from 'react-router-dom'
import sephiraLogo from '../assets/Sephira.png'
import './HomeScreen.css'  // ✅ Add this line to pull in the styles

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <img
        src={sephiraLogo}
        alt="Sephira"
        className="wolf-image"
      />
      <h1>🏠 Sephira Wallet Home</h1>
      <p>Welcome to your wallet! Use the link below to create or import your wallet:</p>
      <Link to="/create-wallet">
        <button>Create or Import Wallet</button>
      </Link>
    </div>
  )
}



