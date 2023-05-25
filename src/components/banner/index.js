import React from 'react'
import Image from "next/image";
import bannerBar from '../../assets/banner/images/banner-bar.a8010a94.png'
import bannerData from '../../assets/banner/content'
import bannerPlaceholder from '../../assets/banner/images/banner-placeholder-full.f97d604c.png'
import bg from "../../assets/banner/images/home.bb5cafa8.png"
import dragon from "../../assets/banner/images/orc.465371dc.png"
import humanWarrior from '../../assets/banner/images/human.83a89a9e.png'
import jara from '../../assets/banner/images/faraland.svg'
import playNow from '../../assets/banner/images/play-now.f8ed8839.png'
import '../../app/globals.css'

function Banner() {
  return (
    <div className='h-[500px] lg:h-[800px] relative'
      style={{
        background: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

      <div className='h-full absolute left-[5%] bottom-[10%] lg:top-20 lg:left-[10%] top-10 xl:left-[13%] 2xl:left-[14%] '>
        <Image src={dragon} alt="" className='h-3/4 mb-5 ' />
      </div>
      <div className='h-full absolute right-[10%] bottom-0 w-[70%] flex justify-end items-end xl:right-[12%] 2xl:right-[14%]'>
        <Image
          src={jara} alt="" className=' w-[35%] ml-20 mb-7 absolute right-[10%] top-[10%] xl:w-[27%] xl:right-[12%]  2xl:right-[14%]'
        />
        <Image src={humanWarrior} alt="" className='h-2/4' />
      </div>
      <div className='w-full absolute bottom-0 '>
        <Image src={bannerBar} alt="" className='w-full' />
      </div>
      <div className='w-4/5 absolute ml-[10%] xl:w-2/4 xl:ml-[25%] -bottom-6 md:-bottom-10 lg:-bottom-16  xl:-bottom-18 '>
        <Image src={bannerPlaceholder} alt="" className='w-full' />
      </div>
      <div className='w-4/5 absolute ml-[10%] xl:w-2/4 xl:ml-[25%] -bottom-6 md:-bottom-10 lg:-bottom-16  xl:-bottom-18 flex flex-col justify-between items-center'>
        <div className='w-1/4 flex justify-center mb-[6%]'>
          <Image src={playNow} alt="" />
        </div>
        <div className='flex justify-between w-[70%] mb-[3%] md:mb-[4%]'>
          <h4 className='text-white text-xs invisible sm:visible font-[400px] text-[18px] font-americanCapitan'>{bannerData.score}</h4>
          <h4 className='text-white text-xs invisible sm:visible font-[400px] text-[18px] font-americanCapitan'>{bannerData.percentage}</h4>
        </div>
        <div className='h-1 sm:h-2 2xl:h-3 border w-[77%] progress-bar rounded-3xl sm:mb-1 lg:mb-1.5'>

        </div>
      </div>

    </div>
  )
}

export default Banner