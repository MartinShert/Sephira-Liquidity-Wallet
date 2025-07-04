import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import CreateWalletScreen from './screens/CreateWalletScreen'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/create-wallet" element={<CreateWalletScreen />} />
      </Routes>
    </Router>
  )
}
