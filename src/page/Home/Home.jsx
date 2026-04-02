import React from 'react'
import Hero from './Hero'
import FlashSales from './FlashSales'
import Categories from './Categories'
import BestSelling from './BestSelling'
import Products from './Products'
import Banner from './Banner'
import NewArrival from './NewArrival'

const Home = () => {
  return (
    <div className='flex flex-col gap-y-10' >
      <Hero/>
      <FlashSales/>
      <Categories/>
      <BestSelling/>
      <Banner/>
      <Products/>
      <NewArrival/>
      
      
      
      
    </div>
  )
}

export default Home
