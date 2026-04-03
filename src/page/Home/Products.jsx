import { ArrowLeft, ArrowRight, Eye, Heart } from 'lucide-react'
import React from 'react'

const Products = () => {
    const pro = [
        {
            id: 1,
            name: "Breed Dry Dog Food",
            price: 100,
            rating: 3,
            reviews: 35,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsbqDV_XotYgmEaDS7BX-L3U4LbYYXHniUg&s"
        },
        {
            id: 2,
            name: "CANON EOS DSLR Camera",
            price: 360,
            rating: 4,
            reviews: 95,
            image: "https://x.imastudent.com/content/0003893_canon-eos-77d-dslr-camera-with-18-135mm-usm-lens-kit_500.jpeg"
        },
        {
            id: 3,
            name: "ASUS FHD Gaming Laptop",
            price: 700,
            rating: 5,
            reviews: 325,
            image: "https://maxell.com.np/wp-content/uploads/2025/08/asus-tuf-gaming-f15-price-in-nepal.webp"
        },
        {
            id: 4,
            name: "Curology Product Set",
            price: 500,
            rating: 4,
            reviews: 145,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FLRYI0kMLxzIyZARIgfvQcPSt77-gFJEHQ&s"
        },
        {
            id: 5,
            rr:"New",
            name: "Kids Electric Car",
            price: 960,
            rating: 5,
            reviews: 65,
            image: "https://m.media-amazon.com/images/I/71xx05YS06L._AC_UF894,1000_QL80_.jpg"
        },
        {
            id: 6,
            name: "Jr. Zoom Soccer Cleats",
            price: 1160,
            rating: 5,
            reviews: 35,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1dXNQyYvh9yvreGnCYgI12rRgtfCvh-0CA&s"
        },
        {
            id: 7,
            rr:"New",
            name: "GP11 Shooter USB Gamepad",
            price: 660,
            rating: 4.5,
            reviews: 55,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oIec5-p9x0ZMX-kxBFV6dTFKNFQE1wkMFQ&s"
        },
        {
            id: 8,
            name: "Quilted Satin Jacket",
            price: 660,
            rating: 4.5,
            reviews: 55,
            image: "https://img.shopstyle-cdn.com/sim/38/98/38986097ebe61a0eac0beb73d1414d46_best/reversible-quilted-satin-jacket.jpg"
        }
    ];

    return (
        <div className=' bg-white border h-[1200px] '>
            <div className='max-w-7xl mx-auto p-12'>
                <div className='flex gap-3'>
                    <p className='w-5  h-12 bg-red-800 '></p>
                    <p className='text-xl text-red-700 '>Our Product</p>
                </div>
                <div className=' flex justify-between items-center mt-10'>
                    <div className='text-black font-bold text-4xl '>Explore Our Products</div>
                    <div className=' flex gap-1 text-gray-700 '>
                        <ArrowLeft className=' w-10 h-10 bg-gray-300 rounded-full size-7 cursor-pointer hover:text-black' />
                        <ArrowRight className=' w-10 h-10 bg-gray-300 rounded-full size-7 cursor-pointer hover:text-black' />
                    </div>
                </div>
                <div className='flex flex-wrap gap-x-3 mt-10 gap-y-12'>
                    {
                        pro.map((item) => (
                            <div className='w-70 bg-white rounded-xl flex flex-col justify-between p-3 shadow-md border'
                                key={item.id}>
                                    <div className='text-center ml-4 w-15 rounded bg-green-400 text-white '>
                                        {item.rr}
                                    </div>
                                    
                                <ul className='space-y-2 flex flex-col items-end'>
                                    <li className='w-7 h-7 rounded-full bg-white flex items-center justify-center'>
                                        <Eye className='size-4' />
                                    </li>
                                    <li className='w-7 h-7 rounded-full bg-white flex items-center justify-center'>
                                        <Heart className='size-4' />
                                    </li>
                                </ul>

                                <div className='flex-1 flex items-center justify-center -mt-15'>
                                    <img src={item.image}
                                        alt=""
                                        className='h-40 w-40 object-contain'
                                    />

                                </div>

                                <div className='bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 cursor-pointer'>
                                    Add To Cart

                                </div>
                                <div className='justify-center items-center text-center text-sm font-semibold line-clamp-2'>
                                    {item.name}
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <span className='text-red-600 font-bold'>${item.price}</span>

                                </div>

                                <div className='flex gap-2 text-sm text-gray-600'>
                                    <span>{"⭐".repeat(6)}</span>
                                    <span>({item.reviews})</span>
                                </div>
                                


                            </div>


                        )
                        )
                    }

                </div>
                <div className=' w-48 h-10 bg-red-700 text-white text-center rounded justify-between items-center text-xl mt-10 ml-[500px] px-4 py-1'>
                    <button> View All Products</button>
                </div>
            </div>
        </div>
    )
}

export default Products