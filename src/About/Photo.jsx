import React from 'react'
import { cup } from '../data'
import { Ellipsis } from 'lucide-react'
const Photo = () => {



  return (
    <div className='w-full h-screen bg-white p-12 '>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-center items-center gap-6'>
          {
            cup.map((item) => (
              <div
                key={item.id}
                className='w-70  rounded-xl flex flex-col justify-between  '
              >
                <div className='flex justify-between items-center p-2'>
                  <img src={item.image}
                    alt=""
                    className='w-[200px] object-cover'

                  />

                </div>

                <div className='ml-2 space-y-2'>
                  <div>
                    <h1 className='text-left font-bold text-2xl '>{item.name}</h1>
                  </div>
                  <div>
                    <p>{item.title}</p>
                  </div>

                  <div className='flex gap-2'>
                    {item.icon.map((Icon, index) => (
                      <Icon key={index} size={20} />
                    ))}
                  </div>


                </div>

              </div>






            ))
          }

        </div>
        

      </div>

      <div className='flex justify-center items-center mt-16'>
        <Ellipsis className='items-end size-15' />
        </div>

      </div>
      
    
  )
}

export default Photo
