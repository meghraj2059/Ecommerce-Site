import { CircleArrowRight } from 'lucide-react'
import React from 'react'
import { CiInstagram, CiTwitter } from 'react-icons/ci'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'




const Footer = () => {
  return (
    <div className='w-full h-[600px] bg-black border '>
      <div className='max-w-7xl mx-auto'>
        <div className='flex mt-10 text-center gap-15'>
          <div className='space-y-5 text-white '>
            <h1 className='text-2xl font-semibold'>Exclusive</h1>
            <p className='text-xl font-semibold'>subscribe</p>
            <p className='text-gray-200'>Get 10% off your first order</p>
            <div className='relative'>
              <input className=" w-50 h-10 bg-black text-gray-400 text-center  border-white cursor-pointer" type="text" placeholder='enter your email' />
              <div className="absolute left-42 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600 cursor-pointer hover:text-white">

                <CircleArrowRight />
              </div>

            </div>

          </div>

          <div className=' text-white space-y-4'>
            <h1 className='font-semibold text-xl'>Support</h1>
            <p > 111 bijoy,sarani,Dhaka
              DH,1515 Bangaldesh.</p>
            <p>
              exclusive@gmail.com
            </p>
            <p>
              +88015-88888-99999
            </p>

          </div>
          <div className='text-white space-y-4'>
            <h1 className='font-semibold text-xl '>Account</h1>
            <p>My account</p>
            <p>Login/Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>

          </div>
          <div className='text-white space-y-4'>
            <h1 className='font-semibold text-xl '>Quick Link </h1>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>

          </div>
          <div className='text-white space-y-4'>
            <h1 className='font-semibold text-xl '>Download App</h1>
            <p className='text-gray-500'>Save $3 With App New user Only</p>
            <div className='justify-end items-center'>
              <img src="https://www.gc-sistemas.com.ar/images/blog/volgia/google_play_apple_store.jpg"
                className=' w-45 h-35 ml-40'
                alt="" />
            </div>


          </div>

        </div>
        <div className='flex justify-end -mt-44 pr-20'>
          <img src="https://play-lh.googleusercontent.com/et63YPBjTvonLgz0WyYfVe9MTIxXU-MhehK9RPuvUz-ivH4hGq84fr4Df3hoxUKFGyUtomGI8ykwUGWZ83nXJQ=w600-h300-pc0xffffff-pd"
            alt=""
            className=' w-96 h-40' />

        </div>
        <div className=' flex justify-end mt-10'>
          <ul className=' flex justify-items-end gap-5 '>
           <FaFacebook className='bg-white size-6' />
           <CiTwitter className='bg-white size-6' />
           <CiInstagram  className='bg-white size-6'/>
           <FaLinkedinIn className='bg-white size-6'/>

          </ul>
        </div>
      </div>
    </div>





  )
}

export default Footer
