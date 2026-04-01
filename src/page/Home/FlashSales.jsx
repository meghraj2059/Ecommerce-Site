
import { ArrowLeft, ArrowRight, Eye, Heart } from 'lucide-react'
import React from 'react'

const FlashSales = () => {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 GamePad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      rating: 4.5,
      reviews: 88,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkHrD6T3YE0CUHIJFuyDNM3YoeCnk988ZJw&s"
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      rating: 4,
      reviews: 75,
      image: "https://img.myipadbox.com/upload/store/product_l/TBD0602123801A.jpg"
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      rating: 5,
      reviews: 99,
      image: "https://m.media-amazon.com/images/I/81QhbOKkMOL.jpg"
    },
    {
      id: 4,
      name: "S Series Comfort Chair",
      price: 375,
      oldPrice: 400,
      discount: "-25%",
      rating: 4.5,
      reviews: 99,
      image: "https://img.drz.lazcdn.com/g/kf/S0e5652a4af7140b7a45585c18324bb49O.jpg_720x720q80.jpg"
    }
  ];
  return (
    <div className=' py-5 flex p-3 border justify-center items-center'>
      <div className='max-w-7xl mx-auto bg-white p-12'>
        <div className='w-5 h-12 bg-red-800 '>
          <h1 className=' flex text-xl text-red-700 ml-10  '>Today's</h1>
        </div>
        <div className='flex justify-between items-center mt-10'>
          <div className='text-black font-bold text-4xl '>Flash Sales</div>
          <div>
            <ul className='text-3xl text-black font-bold flex gap-4'>
              <li><h1 className='text-xl'>Days</h1>03</li>
              <li className='text-red-600 mt-2'>:</li>
              <li><h1 className='text-xl'>Hours</h1>23</li>
              <li className='text-red-600 mt-2'>:</li>
              <li><h1 className='text-xl'>Minutes</h1>19</li>
              <li className='text-red-600 mt-2'>:</li>
              <li><h1 className='text-xl'>Second</h1>56</li>
            </ul>
          </div>
          <div className=' flex gap-1 text-gray-700 '>
            <ArrowLeft className=' w-10 h-10 bg-gray-300 rounded-full size-7cursor-pointer hover:text-black' />
            <ArrowRight className=' w-10 h-10 bg-gray-300 rounded-full size-7 cursor-pointer hover:text-black' />

          </div>
        </div>
        <div>
          <div className="flex gap-6 mt-10">

            {products.map((item) => (
              <div
                key={item.id}
                className='w-70 bg-white rounded-xl flex flex-col justify-between p-3 shadow-md'
              >

                <div className='flex justify-between px-3 pt-3'>
                  <div className='w-15 h-7 bg-red-700 text-white text-sm flex items-center justify-center rounded'>
                    {item.discount}
                  </div>

                  <ul className='space-y-2'>
                    <li className='w-7 h-7 rounded-full bg-white flex items-center justify-center'>
                      <Eye className='size-4' />
                    </li>
                    <li className='w-7 h-7 rounded-full bg-white flex items-center justify-center'>
                      <Heart className='size-4' />
                    </li>
                  </ul>
                </div>

                <div className='flex-1 flex items-center justify-center'>
                  <img
                    src={item.image}
                    alt=""
                    className='w-40 h-40 object-contain'
                  />

                </div>
                <div className='bg-black text-white text-center py-2 rounded-md hover:bg-gray-800 cursor-pointer'>
                  Add To Cart
                </div>
                <div className='text-black font-semibold text-sm line-clamp-2'>
                  {item.name}
                </div>

                <div className='flex gap-3 items-center'>
                  <span className='text-red-600 font-bold'>${item.price}</span>
                  <span className='line-through text-gray-400 text-sm'>${item.oldPrice}</span>
                </div>

                <div className='flex gap-2 text-sm text-gray-600'>
                  <span>⭐ {item.rating}</span>
                  <span>({item.reviews})</span>
                </div>

              </div>

            ))}

          </div>

        </div>

        <div className='w-48 h-10 bg-red-700 text-white text-xl mt-10 ml-[500px] px-4 py-1 '>
          <button className='text-center'>views all products</button>
        </div>
      </div>

    </div>




  )
}

export default FlashSales
