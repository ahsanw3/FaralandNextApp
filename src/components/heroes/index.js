import React from 'react'
import bg from '../../assets/heroes/images/download-android.31c566ad.png'
import BigHumanFemale from '../../assets/heroes/images/female_human.304bcdf4.png'
import BigHumanMale from '../../assets/heroes/images/male_human.807b6c57.png'
import crystalPart1 from '../../assets/heroes/images/crystal-part1.png'
import crystalPart2 from '../../assets/heroes/images/crystal-part2.png'
import femaleGIf from '../../assets/heroes/images/female.7e7b9b33.gif'
import { heroesData  } from '../../assets/heroes/content'
import heroic from '../../assets/heroes/images/heroic-charge.e5282b45.png'
import human from '../../assets/heroes/images/human-male.bd9b3350.png'
import humanBg from '../../assets/heroes/images/humanbg.6923d53c.png'
import humanRing from '../../assets/heroes/images/activeHuman.png'
import maleGif from '../../assets/heroes/images/male.315f4d2c.gif'
import Image from "next/image";

function Heroes() {
  return (
    <div  className='w-full'>
      <div className='absolute right-10 w-[13%] flex items-center animate-bounce custom-bounce z-10'>
        <Image src={crystalPart2} className=" z-10 " alt=''/>
        

      </div>
      <div className='absolute right-7 sm:right-5  w-[13%] flex items-center animate-bounce custom-bounce z-0'>
        <Image src={crystalPart1} className="   w-2/4 h-2/5 z-0 mt-2 sm:mt-4 lg:mt-6 rotate-12  custom-bounce 2xl:ml-4" alt=''/>
      </div>
      <div className='max-w-[1100px]  mb-24 mr-auto ml-auto '>
        <h1 className='text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan mb-7 text-center'>Characters</h1>
        <div className=' text-center  w-[90%] m-auto mt-[20px] mb-[20px] lg:w-[80%] '>
          <p className='text-white text-base mt-3'>{heroesData.nftHeroDescription}
           
          </p>
          <p className='text-white text-base mt-5'>
           {heroesData.demiHeroeDescription}
          </p>

        </div>
        <div className='flex w-[45%] ml-auto mr-auto mt-9 mb-14  justify-around flex-wrap'>
          <Image src={bg} alt='' className='mt-2 mb-2' />
          <Image src={bg} alt='' className='mt-2 mb-2' />
        </div>
        <div className='divider mb-5 z-10 relative h-[1px]'></div>
        <div className='flex  w-4/5 m-auto justify-center flex-wrap'>
          {[...Array(7)].map((_, i) => {
            return (
              <div className='relative ml-2 mr-2 mt-2 mb-2'>
                <Image src={humanRing} alt="" />
                <Image src={human} className=" absolute top-2 w-[65%] left-4" alt="" />

              </div>
            );
          })}

        </div>
        <div className='divider z-10 relative h-[1px] mt-5 mb-7'></div>
        <div className='flex flex-col md:flex-row  max-w-[1500px] w-90%  '>
          <div className="w-90% mt-16 relative  lg:w-[45%]   ">
            <Image src={humanBg} className="ml-5 pt-5 pb-5  h-96"  alt=''/>
            <div className=' w-[80%] m-auto flex justify-between absolute bottom-6 left-10 z-50'>
          
            <Image src={maleGif} className="h-32 scale-x-[-1]"  alt=''/>
            <Image src={femaleGIf} className="h-32"  alt=''/>

            </div>
            <div className='absolute -top-7 max-w-[1000px] w-90% left-10 md:left-12'>
            <Image src={BigHumanMale} className="w-[60%] " alt='' />
            </div>
            <div className='absolute -top-5 left-48 sm:left-56 md:left-32 lg:left-24 md:-top-2  md:w-3/4 lg:w-[85%] lg:h-[400px] overflow-hidden '>
            <Image src={BigHumanFemale} className="w-3/4  sm:w-[65%] lg:w-[95%]  " alt='' />
            </div>
          </div>
          <div className='lg:w-[53%]  ml-8 '>
            <h1 className='text-4xl font-bold  text-white text-center'>{heroesData.heading}</h1>
            <p className=' text-white text-2xl mt-3 mb-4 text-center'>{heroesData.percentage}</p>
            <div className=''>
              <div className='flex flex-col justify-center items-center sm:flex-row'>
                <div className='w-[90%] sm:w-2/4 '>
                  <p className=' text-white text-start pl-4 text-xl pr-2'>{heroesData.description}</p>
                </div>
                <div className='w-2/4'>
                {heroesData.medals.map((medal, i) => {
                        return (
                          <div className='flex justify-start items-center part'>
                          <Image src={heroic} className="w-[15%] ml-3 mr-3" alt=''/>
                          <p className='text-white text-lg '>{medal.name}</p>
                        </div>
                        );
                    })}
                  

                </div>
              </div>
              <div className='flex w-full justify-between mt-8'>
              {heroesData.features.map((feature, i) => {
                        return (
                          <div className=' text-white w-[30%] text-xl font-semibold heroClass pt-8 pb-4 text-center'>{feature.name}</div>
                        );
                    })}
               </div>
            </div>
          </div>
        </div>
        <div className='divider mb-5 z-10 relative h-[1px]  '></div>

      </div>
    </div>
  )
}

export default Heroes