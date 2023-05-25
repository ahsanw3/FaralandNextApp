import React from 'react'
import  featuresData from '../../assets/features/content'
import marketplace from '../../assets/features/images/marketplace.97b34048.png'
import viewButton from '../../assets/features/images/view-button.4e411843.svg'
import Image from "next/image";

function Card() {
  return (
    <div className="min-w-[300px] m-3 relative">
    <Image src={marketplace} alt=""  className="w-[100%] h-[100%]" width={1000} height={1000} />
      <div className='absolute bottom-0'>
        <h1 className='text-white font-[400px]  font-americanCapitan text-[30px] text-center mb-5 '>{featuresData.heading}</h1>
        <p className='text-white font-[400px]  text-center text-[11px] w-[90%] m-auto mb-7'>{featuresData.description}</p>
        <div className=' flex justify-center items-center'>

        <button className='mb-5 mx-auto '><Image  src={viewButton} className="w-[100%] " alt="" width={1000} height={1000}/></button>
        </div>
      </div>
</div>
  )
}

export default Card