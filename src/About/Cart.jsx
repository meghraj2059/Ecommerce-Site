import { ActivityIcon, CircleDollarSignIcon, CastleIcon, HandCoins } from 'lucide-react'
import React from 'react'

const Cart = () => {
  const leo = [
    {
      id: 1,
      name: "Seller active out site",
      icon: <CastleIcon size={28} />,
      price: "10.5k",
      active: false,
    },
    {
      id: 2,
      name: "Monthly product sales",
      icon: <CircleDollarSignIcon size={28} />,
      price: "33k",
      active: true,
    },
    {
      id: 3,
      name: "Customer active in our site",
      icon: <ActivityIcon size={28} />,
      price: "45.5k",
      active: false,
    },
    {
      id: 4,
      name: "Annual gross sale in our site",
      icon: <HandCoins size={28} />,
      price: "25k",
      active: false,
    }
  ]

  return (
    <div className='bg-gray-200 w-full min-h-screen flex items-center'>
      <div className='max-w-7xl mx-auto p-10 w-full'>
        
        {/* ✅ FIX: use grid instead of flex */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          
          {leo.map((item) => (
            <div
              key={item.id}
              className={`h-[160px] rounded-lg p-5 flex flex-col items-center justify-center border transition-all duration-300
                ${item.active
                  ? "bg-red-500 text-white shadow-lg scale-105"
                  : "bg-white text-black"
                }
              `}
            >
              
              
              <div
                className={`h-12 w-12 flex justify-center items-center mb-3 rounded-full
                  ${item.active
                    ? "bg-white text-red-500"
                    : "bg-black text-white"
                  }
                `}
              >
                {item.icon}
              </div>

              
              <h1 className='text-xl font-bold'>{item.price}</h1>

              
              <p className='text-sm text-center mt-1'>{item.name}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Cart