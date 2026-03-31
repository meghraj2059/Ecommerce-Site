import { ChevronDown } from 'lucide-react'
import React from 'react'

const TopBar = () => {
  return (

    <div className='max-w-8xl mx-auto h-12 bg-black flex p-3'>
      <div className='ml-120 text-sm text-white'>
        <h1>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
      </div>
      <div>
        <h2 className='underline text-[#FFFDEB] cursor-pointer ml-3 -mt-1'>Shop Now</h2>
      </div>

      <div className='ml-140'>
        <p className='text-white text-sm flex '>
          English
           <ChevronDown className='w-6 h-6 ' />
        </p>
       
      </div>
      
      
    </div>
  )
}

export default TopBar
