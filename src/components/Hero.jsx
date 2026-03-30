import React from 'react'
import laptop from "../assets/laptop.jpeg"
import hihi from "../assets/hihi.png"

const Hero = () => {
    return (
        <div className="w-full h-screen bg-white">
            <div className=' max-w-8xl mx-auto  flex justify-center gap-8 px-40'>


                <div className='w-full  gap-10 h-120 flex '>


                    <div className='w-140 border-r '>
                        <ul className='text-black text-xl p-12 ml-5 space-y-3 '>
                            <li>Woman's Fashion</li>
                            <li>Man's Fashion</li>
                            <li>Electronics</li>
                            <li>Home&Lifestyle</li>
                            <li>Medicine</li>
                            <li>Sports & Outdoors</li>
                            <li>Boy's & Toys</li>
                            <li>Groceries & Pets</li>
                            <li>Health & Beauty</li>

                        </ul>
                    </div>
                    <div className='w-full h-110 mt-10 relative'>

                        <img src={laptop} alt="" className='w-full h-full' />

                        <div className='text-[#FFFDEB] absolute top-1/2 left-12 transform -translate-y-1/2  flex flex-col items-start text-4xl space-y-3 p-6 '>
                             <div className='items-center '>
                                <img src={hihi} alt="" className='size-16 ' />
                                 <h1 className='text-2xl text-white'>iphone 14 series</h1>
                                </div>                                              
                           
                           
                            <h1 className='text-5xl font-bold'>Up to 10%</h1>
                            <h1 className='text-5xl font-bold'>Off Voucher</h1>
                            <p className='underline text-xl'>Shop Now</p>

                        </div>

                    </div>



                </div>

            </div>


        </div>
    )
}

export default Hero
