import React from 'react'
import Cart from './Cart'

const About = () => {
  return (
    <div className='  w-full bg-white h-screen border'>
      <div className='max-w-7xl mx-auto bg-white flex'>
        <div className='w-[50%] bg-white  p-10'>
          <div className=' text-xl flex gap-2 '>


            <div className='  flex flex-col bg-white p-6 gap-36'>
              <div className='flex'>
                <p className='text-gray-700 cursor-pointer hover:text-black'>home</p>
                <p className='text-gray-700'>/</p>
                <p className='text-gray-700 cursor-pointer hover:text-black'>About</p>
              </div>
             <div className='space-y-2'>
               <h1 className='text-5xl font-semibold pb-3'>Our Story</h1>
              <p className='text-gray-700 text-sm  '>
                Launched in 2015,exclusive is south asia's premier online shopping
                marketplace with an active presense in Nepal.Supported
                by wide range of tailored marketing,data and service solutons,
                exclusive has 10,500 seller and 300 brans and serves 3
                millons customers across the region,</p>
              <p className='text-gray-700 text-sm'>

                Exclusive has more than 1 million products to offer, growing at a
                very fast. Exclusive offers a diverse assotment in Categories ranging from consumer.

              </p>
             </div>
            </div>

          </div>

        </div>
        <div className=' w-[50%] bg-blue-800'>
          <img src="https://img.freepik.com/free-photo/young-girl-dressed-up-black-t-shirt-leather-trousers-holding-blank-craft-shopping-bags-with-handles-isolated-white_231208-4952.jpg?semt=ais_incoming&w=740&q=80"

            alt=""
            className='object-cover w-full h-full'
          />

        </div>
      </div>

    
    {/* <div className='mt-40 ' >
      <Cart/>
    </div> */}
    </div>
  )
}

export default About
