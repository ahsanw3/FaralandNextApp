import React from 'react'
import Epic from '../../assets/homefeatures/images/epic.7f9f48e7.png'
import gridOfSTones from '../../assets/homefeatures/images/type-advantages.e18dc051.png'
import HumanScar from '../../assets/homefeatures/images/Scar.9795d75a.png'
import Image from "next/image";

// import geenCrystal from '../../assets/homefeatures/images/geenCrystal'
import { homefeaturesData } from '../../assets/homefeatures/content'
function HomeFeatures() {
    return (
        <>
            <div className='w-full relative '>
                {/* <Image src={geenCrystal} className=" h-32 lg:h-72 lg:-left-16 lg:top-10 absolute top-0  left-0 animate-bounce custom-bounce" alt="" /> */}
            </div>
            <div className='max-w-[1200px]  mr-auto ml-auto flex flex-col lg:flex-row  '>
                <div className='lg:w-1/2 text-center mt-5 mb-5 '>
                    <h1 className='text-[48px] text-[#ffc904]  font-[400px]  font-americanCapitan'>{homefeaturesData.bodyPartRanking.heading} </h1>
                    <p className='text-white text-[16px] font-light mt-5'>{homefeaturesData.bodyPartRanking.description1}</p>
                    <p className='text-white text-[16px] font-light  mt-1'>{homefeaturesData.bodyPartRanking.description2}</p>
                    <div className='divider mb-5 z-10 relative h-[1px] mt-7'></div>
                    <div className='h-12 w-[90%]  mt-2 mb-2  mr-auto ml-auto flex justify-between '>
                        {[...Array(7)].map((_, i) => {
                            return (
                                <Image src={HumanScar} className="w-11 h-11" alt='' />

                            );
                        })}
                    </div>
                    <div className='divider z-10 relative h-[1px] mb-7'></div>
                    <div className='flex flex-col items-center justify-center mt-16 mb-12'>
                        <div className='flex mt-5 justify-center'>
                            <Image src={Epic} className="w-[23%]" alt='' />
                            <Image src={Epic} className="mr-5 ml-5 w-[23%]" alt='' />
                            <Image src={Epic} className="w-[23%]" alt='' />
                        </div>
                        <div className='flex mt-5 justify-center'>
                            <Image src={Epic} className="w-[23%]" alt='' />
                            <Image src={Epic} className="mr-5 ml-5 w-[23%]" alt='' />
                            <Image src={Epic} className="w-[23%]" alt='' />
                        </div>

                    </div>


                </div>
                <div className='lg:w-1/2 mt-5 mb-5 '>
                    <h1 className='text-[#ffc904] text-[48px] font-[400px]  font-americanCapitan text-center'>{homefeaturesData.heroElement.heading}</h1>
                    <p className='text-white text-[16px] font-light mt-5 text-center'>{homefeaturesData.heroElement.description}</p>
                    <div className='divider mb-5 z-10 relative h-[1px] mt-7'></div>
                    <div className='h-12 w-[90%]  mt-2 mb-2  mr-auto ml-auto flex justify-between'>
                        {[...Array(7)].map((_, i) => {
                            return (
                                <Image src={HumanScar} className="w-11 h-11" alt='' />

                            );
                        })}
                    </div>
                    <div className='divider z-10 relative h-[1px] mb-7'></div>
                    <div className=' flex items-center justify-center mt-16 mb-12'>
                        <Image src={gridOfSTones} className="w-2/4" alt='' />
                    </div>

                </div>
            </div>
        </>

    )
}

export default HomeFeatures