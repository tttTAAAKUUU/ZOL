'use client'
import React from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'

const Slider = (slides) => {
  return (
    <div id='gallery'>
        <h1>Join now</h1>
        <div>
            {SliderData.map((slide,index)=>{
                return <Image alt='/' src={slide.image} width={1440} height={600}/>
            })}
        </div>
    </div>
    
  )
}

export default Slider