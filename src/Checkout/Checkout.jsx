import React from 'react'
import { products } from '../data'
import { useParams } from 'react-router-dom'

const Checkout = () => {
    const {id}= useParams();
    console.log(id);
    const product= products.find(item=>item.id==id);
    const anotherproduct=products.find(item=>item.id==id);

  return (
    <div className='w-full h-full bg-amber-400'>
        <div className='max-w-7xl mx-auto bg-white p-10 '>
            <div className='flex space-x-3 ml-10 text-gray-400 mb-8 '>
                <p className='text-xl hover:text-black'>Account</p>
                <p>/</p>
                <p className='text-xl hover:text-black'>My Account</p>
                <p>/</p>
                <p className='text-xl hover:text-black'>Product</p>
                <p>/</p>
                <p className='text-xl hover:text-black'>ViewCart</p>
                <p>/</p>
                <p className='text-xl hover:text-black'>Checkout</p>

            </div>
            <div className='w-[1100px] h-[800px] bg-white shadow-md rounded  '>
             <div className='justify-items-center'>
            <div className='grid grid-cols-2 grid grid-rows-1 w-[1100px] h-[800px] gap-10'>
                <div className='bg-white'>
                    <div className='text-2xl font-semibold p-10 space-y-6'>
                      <h1>Billing Details</h1>
                     <div>
                         <label className='text-xl text-gray-400 flex gap-1'>First Name <span className='text-red-600 '>*</span></label>
                      <input type="text"
                       className='w-[400px] h-[38px] bg-gray-500 rounded shadow-md'
                      />
                     </div>
                      <div>
                        <label className='text-xl text-gray-400'>Company Name</label>
                      <input type="text"
                       className='w-[400px] h-[38px] bg-gray-500 rounded shadow-md'
                      />
                      </div>
                       <div>
                        <label className='text-xl text-gray-400 flex gap-1'>Stress Address <p className='text-red-600'>*</p></label>
                      <input type="text"
                       className='w-[400px] h-[38px] bg-gray-500 rounded shadow-md'
                      />
                       </div>
                       <div>
                        <label className='text-xl text-gray-400'>Apartment,Floor,etc(optional)</label>
                      <input type="text"
                       className='w-[400px] h-[38px] bg-gray-500 rounded shadow-md'
                      />
                       </div>
                       <div>
                        <label className='text-xl text-gray-400'>Town/City <span className='text-red-600'>*</span></label>
                      <input type="text"
                       className='w-[400px] h-[38px] bg-gray-500 rounded shadow-md'
                      />
                       </div>
                       <div>
                        <label className='text-xl text-gray-400 gap-1'>Phone Number <span className='text-red-600'>*</span></label>
                      <input type="text"
                       className='w-[400px] h-[38px] bg-gray-500 rounded shadow-md'
                      />
                       </div>
                        <div>
                            <label className='text-xl text-gray-400 '>Email Address</label>
                      <input type="text"
                       className='w-[400px] h-[38px] bg-gray-500 rounded shadow-md'
                      />
                        </div>
                    <div className='flex gap-3'>
                        <input type="checkbox"
                           className='accent-red-500'
                        />
                        <p className='text-sm font-semibold '>save this information for faster check-out next time</p>
                    </div>
   
                    </div>
                </div>
                <div className='bg-white'>
                    <div
                    className='p-10 flex gap-23 '>
                     <img className='size-20 object-cover'src={product?.image}
                     
                      alt="" />
                    <p className=''>{product?.name}</p>
                    <div>
                       < p className=''>${product?.price}</p>
                    </div>
                    </div>
                    <div className='p-10 flex gap-32'>
                        <img className='size-20 object-cover'src= {anotherproduct?.image}alt="" />
                        <p >{anotherproduct?.name}</p>
                         <div>
                       < p className=''>${anotherproduct?.price}</p>
                    </div>

                    </div>
                    

                </div>

            </div>
            </div>
            </div>    

        </div>
      
    </div>
  )
}

export default Checkout
