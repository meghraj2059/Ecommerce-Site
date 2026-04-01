import { ArrowLeft, ArrowRight, Camera, ChessQueen, Computer, Headphones, Key, Smartphone, Watch } from 'lucide-react'
import React from 'react'

const Categories = () => {
  const products = [
    {
      id: 1,
      name: "Phones",
      icon: <Smartphone />
    },
    {
      id: 2,
      name: "Computers",
      icon: <Computer />
    },
    {
      id: 3,
      name: "SmartWatch",
      icon: <Watch />
    },
    {
      id: 4,
      name: "Camera",
      icon: <Camera />
    },
    {
      id: 5,
      name: "Headphones",
      icon: <Headphones />
    },
    {
      id: 6,
      name: "Gaming",
      icon: <ChessQueen />
    }
  ]
  return (
    <div className=' w-full bg-white px-6 py-2 border '>
      <div className='max-w-7xl mx-auto p-12'>
        <div className='w-5 h-12 bg-red-800 '>
          <h1 className=' flex text-xl text-red-700 ml-10'>Categories</h1>
        </div>
        <div className='flex justify-between items-center mt-10 '>
          <div className='text-black font-bold text-4xl '>Browse by category</div>

          <div className='flex gap-1 text-gray-700 '>
            <ArrowLeft className=' w-10 h-10 bg-gray-300 rounded-full size-7cursor-pointer hover:text-black' />
            <ArrowRight className=' w-10 h-10 bg-gray-300 rounded-full size-7 cursor-pointer hover:text-black' />

          </div>
        </div>
        <div>
          <div className='flex gap-5 mt-10 '>
            {products.map((item) => (
              <div
                key={item.id}
                div className='w-70 bg-white rounded-xl flex flex-col justify-between p-3 shadow-md'>

                <div className='flex flex-col justify-center items-center m'>
                  <div className='flex justify-center items-center h-20 w-20'>
                    {item.icon && React.cloneElement(item.icon,{size:55})}
                  </div>
                
                <div className='font-bold text-center'>
                  {item.name}
                </div>
                </div>

              </div>
             
            ))}


        </div>
      </div>

    </div>

    </div >
  )

}

export default Categories
