import React from 'react'
import ImageSlider from '../components/home/ImageSlider'
import '../index.css'
import ProductCard from '../components/home/ProductCard'
import Accessuares from '../components/home/Accessuares'
import AboutCompany from '../components/home/AboutCompany'

const Home = () => {

  return (
    <div className='container mx-auto px-4 '>
      <ImageSlider />
      <h1 className='text-2xl font-bold text-gray-800 my-6'>Featured Products</h1>
      <ProductCard />
      <h1 className='text-2xl font-bold text-gray-800 my-6'>Aksessuarlar</h1>
      <Accessuares />

      {/* About Company */}

      <AboutCompany />
      
      
    </div>
  )
}

export default Home
