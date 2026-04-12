import React from 'react'

const Error = () => {
  return (
    <div className='w-full h-screen bg-white'>
        <div className='max-w-7xl mx-auto p-10 bg-white '>
            <div className='flex gap-2 text-gray-400'>
                <p className='hover:text-black'>Home</p>
                <p>/</p>
                <p className='hover:text-black'>404 Error</p>
            </div>
            <div className='flex justify-center items-center mt-40 '>
             <h1 className='text-7xl '>404 Not Found</h1>
            </div>
            <div className='flex justify-center mt-7'> 
                 <div className='flex text-sm'>
                    <p>You Visited page not found. </p>
                 <p>you may go home page.</p>
                 </div>
            </div>
            <div className='flex justify-center'>
              <button className='w-[160px] h-[40px] flex justify-center items-center bg-red-500 text-white text-center px-2 py-2 m-15 rounded'>
                Back to home page
             </button>
            </div>
        </div>
      
    </div>
  )
}

export default Error
