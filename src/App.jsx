import React from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './page/Home/Hero'
import FlashSales from './page/Home/FlashSales'
import Home from './page/Home/Home'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'lucide-react'
import About from './About/About'


const App = () => {
  return (
    // <>
    // <div className=' flex flex-col w-screen h-screen bg-green-400'>
  
    <div>
      <TopBar/>
  <Navbar/>
  <Home/>
  <About/>
      
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes> */}
      
 

    </div>
  

    // </>
  )
}

export default App
