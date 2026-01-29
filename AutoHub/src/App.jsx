// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import RegisterInfo from './components/auth/RegisterInfo'
import RegisterVerify from './components/auth/RegisterVerify'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/info" element={<RegisterInfo />} />
      <Route path="/register/verify" element={<RegisterVerify />} />
    </Routes>
  )
}

export default App
