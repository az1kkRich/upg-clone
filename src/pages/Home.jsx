import React from 'react'
import Navbar from '../components/home/Navbar'
import ImageSlider from '../components/home/ImageSlider'
import '../index.css'

const Home = () => {
  return (
    <div className='container mx-auto px-4 '>
      <Navbar />
      <ImageSlider />
    </div>
  )
}

export default Home
