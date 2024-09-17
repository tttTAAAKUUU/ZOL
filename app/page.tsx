import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import React from 'react'
import Hero from '../app/components/Hero'
import Navbar from './components/Navbar'
import {SliderData} from './components/SliderData'

const page = () => {
  return (
    <>
      <Navbar/>
      <Hero heading = 'ZOL, Roll with us' message = "helping you with your trip" />
      <p>
        Why join 
      </p>
    </>
  )
}

export default page