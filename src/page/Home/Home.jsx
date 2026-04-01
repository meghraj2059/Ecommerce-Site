import React from 'react'
import Hero from './Hero'
import FlashSales from './FlashSales'
import Categories from './Categories'
import BestSelling from './BestSelling'
import Products from './Products'

const Home = () => {
  return (
    <div className='flex flex-col gap-y-10' >
      <Hero/>
      <FlashSales/>
      <Categories/>
      <BestSelling/>
      <Products/>
      
      
    </div>
  )
}

export default Home
