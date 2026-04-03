import { Eye, Heart } from 'lucide-react'
import React from 'react'

const BestSelling = () => {
    const products = [
        {
            id: 1,
            name: "The north coat",
            price: 260,
            oldprice: 360,
            review: (65),
            image: "https://m.media-amazon.com/images/I/71HSPGr2cGL._AC_UY1100_.jpg"
        },
        {
            id: 2,
            name: "Gucci duffle bag",
            price: 960,
            oldprice: 1160,
            review: (65),
            image: "https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1766155515/866979_AAGF7_1053_001_088_0000_Light.jpg"

        },
        {
            id: 3,
            name: "RGB liquid CPU Cooler",
            price: 160,
            oldprice: 170,
            review: (65),
            image: "https://static-01.daraz.com.np/p/d59e6ef26d8c28d17f52ccf2dce0e9d3.jpg"
        },
        {
            id: 4,
            name: "Small BookSelf",
            price: 360,
            oldprice: 0,
            review: (65),
            image: "https://ak1.ostkcdn.com/images/products/is/images/direct/9ade94aa9baaf6dbdba032f48f07c3920d0045f0/Small-Bookshelf-for-Small-Spaces%2CIndustrial-3-Tier-Bookcase%2C-Narrow-Book-Shelf-Organizer%2C-Small-Shelf-Open-Display-Rack.jpg"

        }
    ]
    return (
        <div className=' bg-white border h-[600px] '>
            <div className='max-w-7xl mx-auto p-12'>
                <div className='flex gap-3'>
                    <p className='w-5  h-12 bg-red-800 '></p>
                    <p className='text-xl text-red-700 '>This Month</p>
                </div>
                <div className=' flex justify-between items-center mt-10'>
                    <div className='text-black font-bold text-4xl '>Best Selling Products</div>
                    <div className='w-48 h-10 bg-red-700 px-6 py-2 text-center rounded text-white '>
                        <h1>View All</h1>
                    </div>
                </div>
                <div className='flex gap-5 mt-12'>
                    {
                        products.map((obj) => (

                            <div  className='w-70 bg-white rounded-xl flex flex-col justify-between p-3 shadow-md border' key={obj.id}>
                                <ul className='space-y-2 flex flex-col items-end'>
                                    <li className='w-7 h-7 rounded-full bg-white flex items-center justify-center'>
                                        <Eye className='size-4' />
                                    </li>
                                    <li className='w-7 h-7 rounded-full bg-white flex items-center justify-center'>
                                        <Heart className='size-4' />
                                    </li>
                                </ul>
                                <div className='flex-1 flex items-center justify-center -mt-15'>
                                    <img src={obj.image}
                                        alt=""
                                        className='w-40 h-40 object-contain'
                                    />

                                </div>
                                <div className='bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 cursor-pointer'>
                                    Add To Cart
                                </div>
                                <div className='text-black font-semibold line-clamp-2'>
                                    {obj.name}
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-red-600 font-bold'>${obj.price}</span>
                                    <span className='line-through text-gray-400 text-sm'>${obj.oldprice}</span>
                                </div>

                                <div className='flex gap-2 text-sm text-gray-600'>
                                    <span>{"⭐".repeat(5)}</span>
                                    <span>({obj.review})</span>
                                </div>




                            </div>



                        )

                        )
                    }
                </div>

            </div>

        </div >


    )
}

export default BestSelling
