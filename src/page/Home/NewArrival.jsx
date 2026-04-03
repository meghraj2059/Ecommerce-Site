import { ArrowUp, Headset, ShieldCheck, Truck } from 'lucide-react';
import React from 'react'

const NewArrival = () => {
    return (
        <div className='bg-white border h-[2000px]'>
            <div className='max-w-7xl mx-auto p-12'>
                <div className='flex gap-3'>
                    <p className='w-5  h-12 bg-red-800 '></p>
                    <p className='text-xl text-red-700 '>Featured</p>
                </div>
                <div className=' flex justify-between items-center mt-10'>
                    <p className='text-black font-bold text-4xl'>New Arrival</p>
                </div>

                <div className="bg-black min-h-screen p-10">
                    <div className="grid grid-cols-2 gap-4">

                        
                        <div className=" row-span-2 bg-black rounded-lg overflow-hidden relative ">
                            <img
                                src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
                                alt="PlayStation"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-5 left-5 text-white">
                                <h1 className="text-xl font-semibold">PlayStation 5</h1>
                                <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                                <button className="mt-2 underline">Shop Now</button>
                            </div>
                        </div>

                        
                        <div className="col-span-1 bg-black rounded-lg overflow-hidden relative ">
                            <div className='  flex-1 h-[50%] p-2 py-3 '>
                                <img
                                    src="https://images.pexels.com/photos/20617814/pexels-photo-20617814/free-photo-of-thinking-woman-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt="Women"
                                    className="w-full h-full object-cover"

                                />
                                <div className="absolute bottom-135 left-5 text-white">
                                    <h1 className="text-lg font-semibold">Women's Collections</h1>
                                    <p className="text-sm">Featured woman collections that give you another vibe.</p>
                                    <button className="mt-2 underline">Shop Now</button>
                                </div>


                            </div>

                            <div className='flex gap-x-5 h-[50%]'>
                                <div className=" flex-1 h-full bg-black rounded-lg overflow-hidden relative">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s"
                                        alt="Speakers"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-5 left-5 text-black">
                                        <h1 className="text-lg font-semibold">Speakers</h1>
                                        <p className="text-sm">Amazon wireless speakers</p>
                                        <button className="mt-2 underline">Shop Now</button>
                                    </div>
                                </div>
                                <div className="flex-1 h-full bg-black rounded-lg overflow-hidden relative">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ic4QfDvGZvpnO-Ewa6eMcHjmsnjCVXj5hw&s"
                                        alt="Speakers"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-5 left-5 text-white">
                                        <h1 className="text-lg font-semibold">Perfume</h1>
                                        <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                                        <button className="mt-2 underline">Shop Now</button>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-20 text-center mt-15">


                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                                <Truck className="text-white size-6" />
                            </div>
                        </div>
                        <h1 className="font-bold uppercase text-sm">
                            Free and fast delivery
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Free delivery for all orders over $140
                        </p>
                    </div>


                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                                <Headset className="text-white size-6" />
                            </div>
                        </div>
                        <h1 className="font-bold uppercase text-sm">
                            24/7 customer service
                        </h1>
                        <p className="text-gray-600 text-sm">
                            Friendly 24/7 customer support
                        </p>
                    </div>


                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
                                <ShieldCheck className="text-white size-6" />
                            </div>
                        </div>
                        <h1 className="font-bold uppercase text-sm">
                            Money back guarantee
                        </h1>
                        <p className="text-gray-600 text-sm">
                            We return money within 30 days
                        </p>
                    </div>

                </div>
                <div className=' flex text-gray-700 justify-end'>
                    <ArrowUp className='w-10 h-10 rounded-full bg-gray-300 size-7 cursor-pointer hover:text-black'/>

                </div>
            </div>
        </div>


    );
};

export default NewArrival;
