import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '@src/Pages/Home/Home'
// import Top from '@src/Pages/Top/Top';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  )
}

export default App
