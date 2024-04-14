import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import React from 'react'
import MerchantHero from '../components/MerchantHero'
import Navbar from '../components/Navbar'

const merchant = () => {
  return (
    <>
      <Navbar/>
      <MerchantHero  />
    </>
  )
}

export default merchant