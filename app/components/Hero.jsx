import React from 'react'

const Hero = ({heading,message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/30 z-[2]'/>
        <div className='p-5 text-white  z-[2]  mt-[-12rem]'>
            <h2 className='text-8xl font-bold text-green-500'>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 border'>Search</button>
        </div>
    </div>
  )
}

export default Hero