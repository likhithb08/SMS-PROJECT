import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />   {/* Add this */}
        <Route path="/register" element={<Register />} />   {/* Rename from /about to /register */}
      </Routes>
    </Router>
  )
}

export default App
