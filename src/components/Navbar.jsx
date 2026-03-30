import { Heart, Search, ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-amber-300 h-15 '>
      <div className='p-4 flex justify-between  items-center max-w-8xl mx-auto px-40'>
        <div className='text-black font-bold text-2xl'>Exclusive</div>
        <div className='justify-between '>
          <ul className=' gap-9 text-xl text-gray-800 flex '>
            <li className='underline'>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </div>


    <div className='flex gap-10'>
         <div className='relative '>
         <input className="pl-3 justify-center items-center w-90 h-10 bg-gray-300 flex rounded-xl" type="text" placeholder='What are you looking for?'
        />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 cursor-pointer">

            <Search/>

          </div>
       
       </div>
          <div className=' flex gap-3'>
            <Heart className=' h-8 w-8'/>
            <ShoppingCart className=' h-8 w-8'/>
          </div>
    </div>
       





      </div>
    </div>
  )
}

export default Navbar
