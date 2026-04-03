import React from 'react'

const Snowflake = () => {
    return (
        <div className='w-full h-[800px] bg-red-600 border '>
            <div className='h-screen bg-green-600 w-[50%] '>
                <div className=' flex gap-2 text-xl'>
                    <p className='text-gray-700 cursor-pointer hover:text-black'>home</p>
                    <p className='text-gray-700'>/</p>
                    <p className='text-gray-700 cursor-pointer hover:text-black'>About</p>


                </div>

                <div className='text-4xl space-y-3 '>
                    <h1 className='mt-40'>Our Story</h1>
                    <p className='text-black text-xl '>
                        Launched in 2015,exclusive is south asia's premier online shopping
                        marketplace with an active presense in Nepal.Supported
                        by wide range of tailored marketing,data and service solutons,
                        exclusive has 10,500 seller and 300 brans and serves 3
                        millons customers across the region,</p>
                    <p className='text-black text-xl'>

                        Exclusive has more than 1 million products to offer, growing at a
                        very fast. Exclusive offers a diverse assotment in Categories          ranging from consumer.

                    </p>
                </div>          <div className='w-[50%] bg-blue-600'>
                    <img src="https://img.freepik.com/free-photo/young-girl-dressed-up-black-t-shirt-leather-trousers-holding-blank-craft-shopping-bags-with-handles-isolated-white_231208-4952.jpg?semt=ais_incoming&w=740&q=80"

                        alt=""
                        className='ml-[1055px] -mt-[235px]'
                    />


                </div>


            </div>

        </div>
    )
}

export default Snowflake;
