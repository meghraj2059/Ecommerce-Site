import React from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './page/Home/Hero'
import FlashSales from './page/Home/FlashSales'
import Home from './page/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import About from './About/About'
import Cart from './About/Cart'
import Photo from './About/Photo'


const App = () => {
  return (
    // <>
    // <div className=' flex flex-col w-screen h-screen bg-green-400'>
  
    <div>
    
      <Routes>
         <Route path='/'element={<Home/>}/> 
         <Route path='/home' element={<Home />} />
         <Route path='/Topbar' element={<TopBar/>}/>
         <Route path='/Navbar' element={<Navbar/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/Photo' element={<Photo/>}/>

       
      </Routes>
    

    </div>
  
    // </>
  )
}

export default App
