import React from 'react'
import ImageSlider from './components/home/ImageSlider'
import Home from './pages/Home'
import Navbar from './components/home/Navbar'
import Footer from './components/home/Footer'
import { Route, Router, Routes } from 'react-router-dom'
import Login from './components/auth/Login'
import OTPInput from './components/auth/OtpVerify'
import ProductDetail from './pages/ProductDetail'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='container mx-auto'>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />

      <Navbar />

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<OTPInput />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Add other routes here as needed */}
      </Routes>



      <Footer />
    </div>
  )
}

export default App
