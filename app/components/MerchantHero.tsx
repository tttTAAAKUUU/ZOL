import React from 'react'
import MerchantRegForm from './MerchantRegForm'

const MerchantHero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
        {/* Overlay */}
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-black/30 z-[2]'/>
        <div className='p-5 text-white  z-[2]  mt-[-12rem] flex row-auto'>
            <h2 className=' flex-1 text-8xl font-bold text-green-500'>Connect with more clients by becoming a merchant</h2>
            <MerchantRegForm />
        </div>
    </div>
  )
}

export default MerchantHero