import { Mail, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <div className='flex flex-col justify-center w-screen h-screen'>
            <div className='max-w-7xl mx-auto p-10 '>
                <div className='flex text-gray-400 space-x-2 ml-18 mb-20'>
                    <p className='hover:text-black'>Home</p>
                    <p>/</p>
                    <p className='hover:text-black'>Contact</p>
                </div>
                <div className='flex gap-7 justify-center items-center'>
                    <div className='w-[280px] h-[475px] bg-white p-3 ml-1 space-y-8 shadow-md rounded'>
                        <div className=' flex text-black text-sm gap-3'>

                            <p className='w-9 h-9 bg-red-500 px-1.5 py-2 text-center rounded-full text-white'>
                                <Phone />

                            </p>
                            <p className=' text-xl text-black font-semibold '>Call To Us</p>
                        </div>
                        <div className=' space-y-2'>
                            <p className='font-semibold'>we are available 24/7, 7 days week.</p>
                            <p>phone: +883555345</p>
                        </div>
                        <div className="relative ">
                            <div className="absolute top-1/2 left-0 w-full border-t-2 border-gray-400"></div>
                        </div>
                        <div className=' flex text-black text-sm gap-3 mt-15 '>

                            <p className='w-9 h-9 bg-red-500 px-1.5 py-2 text-center rounded-full text-white'>
                                <Mail />

                            </p>
                            <p className=' text-xl text-black font-semibold '>Write To Us</p>
                        </div>
                        <div className=' space-y-2'>
                            <p className='font-semibold'>Fill out our form and we will contact you within 24 hours.</p>
                            <p>Emails:customer@exclusive.com</p>
                            <p>Emails:support@exclusive.com</p>
                            </div>




                    </div>
                    <div className='w-[750px] h-[475px] bg-white shadow-md rounded '>
                        <div className='justify-items-center'>
                            <div className=' mt-5 grid grid-cols-3 grid-rows-1 w-[600px] h-[40px] gap-4 rounded'>
                                <div className='bg-gray-300 flex text-gray-600 px-2 py-2'>Your Name <p className='text-red-600'>*</p></div>
                                <div className='bg-gray-300 flex text-gray-600 px-2 py-2'>Your Email <p className='text-red-600'>*</p></div>
                                <div className='bg-gray-300 flex text-gray-600 px-2 py-2'>Your Phone <p className='text-red-600'>*</p></div>

                            </div>
                            <div className='grid grid-cols-1 row-1 bg-gray-300 w-[600px] h-[250px] mt-10'>
                                <p className='px-2 py-2 text-gray-400'>Your Message</p>


                            </div>

                        </div>



                        <div className='justify-items-end mt-10 mr-18 '>
                            <div className=' w-[130px] h-[40px] bg-red-500 text-white rounded px-2 py-2'>
                                <button>Send Message</button>
                            </div>


                        </div>


                    </div>


                </div>
            </div>
        </div>



    )
}

export default Contact
