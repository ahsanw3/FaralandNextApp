"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Image from "next/image";

import tick from "../../assets/roadmap/images/check-icon.71bbae7a.svg"
import left from '../../assets/roadmap/images/timeline-dot.7a9b20c6.svg'
import right from '../../assets/roadmap/images/timeline-dot-right.0af7aed0.svg'
import '../../app/globals.css'

import { roadmapData } from '../../assets/roadmap/content';
import { Flamenco } from 'next/font/google';
function RoadMap() {

    var isMobile = false;
    useEffect(() => {
        isMobile = window.matchMedia("(max-width: 640px)").matches;
       
    }, []);
    const [openPrevYearRoadMap, setOpenPrevYearRoadMap] = useState(false);
    const handleOpenRoadMap = () => {
        setOpenPrevYearRoadMap(!openPrevYearRoadMap)
    }
    return (
        <div className='w-full'>
            <h1 className='text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan text-center'>RoadMap</h1>
            <h1 className={`text-[40px] ${openPrevYearRoadMap ? "text-white" : "text-gray-400" } font-[400px]  font-americanCapitan  text-center`} onClick={handleOpenRoadMap}>2021</h1>
            {openPrevYearRoadMap &&
                <div className='flex flex-col items-center  w-[90%] max-w-[700px] m-auto sm:mt-20  justify-around mb-10 sm:mb-32'>

                    <div className='flex flex-col items-center sm:relative sm:w-full  sm:mt-16 sm:mb-10   sm:h-56 '>
                        <div className='w-fit sm:absolute sm:-top-32 sm:left-0 '>
                            <h1 className='text-white heading-font  text-start mt-7 sm:mt-0'>{roadmapData.year2021.phase1.heading}</h1>
                            {roadmapData.year2021.phase1.description.map((description, i) => {
                                return (
                                    <div className='flex justify-start'>
                                        <Image src={tick} className="mt-1 mr-2" alt="" />
                                        <p className='text-white mt-1.5 font-light'>{description}</p>
                                    </div>
                                );
                            })}

                        </div>

                        {!isMobile && <>
                            <div className='h-0 sm:h-fit'><Image src={left} className="mr-32 sm:-mt-32 invisible sm:visible" alt="" /></div>
                            <div className='h-0 w-[130px] z-50 sm:h-[5px] border border-yellow-600 rotate-90 mt-0 mr-7 invisible sm:visible'></div>
                            <div className='h-0 sm:h-fit'><Image src={right} className="ml-20 sm:mt-10 invisible sm:visible" alt="" /></div>
                            <div className='h-0 w-[130px] z-50 sm:h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>
                            <div className='h-0 sm:h-fit'><Image src={left} className="mr-32 sm:mt-10 invisible sm:visible" alt="" /></div>
                            <div className='h-0  w-[130px] z-50 sm:h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>
                            <div className='h-0 sm:h-fit'><Image src={right} className="ml-20 sm:mt-10 invisible sm:visible" alt="" /></div>
                        </>}

                        <div className='w-fit sm:absolute sm:-bottom-20 sm:right-0 sm:h-60'>
                            <h1 className='text-white heading-font  text-start mt-7 sm:mt-0'>{roadmapData.year2021.phase2.heading}</h1>
                            {roadmapData.year2021.phase2.description.map((description, i) => {
                                return (
                                    <div className='flex justify-start'>
                                        <Image src={tick} className="mt-1 mr-2" alt="" />
                                        <p className='text-white mt-1 text-sm'>{description}</p>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                    <div className='flex flex-col sm:relative sm:w-full  sm:mt-10  sm:h-40 '>
                        <div className='w-fit sm:absolute sm:-top-24 '>
                            <h1 className='text-white heading-font  text-start mt-7 sm:mt-0 '>{roadmapData.year2021.phase3.heading}</h1>
                            {roadmapData.year2021.phase3.description.map((description, i) => {
                                return (
                                    <div className='flex justify-start'>
                                        <Image src={tick} className="mt-1 mr-2" alt="" />
                                        <p className='text-white mt-1 text-sm'>{description}</p>
                                    </div>
                                );
                            })}

                        </div>
                        <div className='w-fit sm:absolute sm:top-20 sm:right-0 sm:h-60 mt-7 sm:mt-0 '>
                            <p className='text-white heading-font  text-start'>{roadmapData.year2021.phase4.heading}</p>
                            {roadmapData.year2021.phase4.description.map((description, i) => {
                                return (
                                    <div className='flex justify-start'>
                                        <Image src={tick} className="mt-1 mr-2" alt='' />
                                        <p className='text-white mt-1 text-sm'>{description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                </div>
            }
            <h1 className='text-[40px] text-white font-[400px]  font-americanCapitan text-center'>2022</h1>
            <div className='flex flex-col items-center  w-[90%] max-w-[700px] m-auto sm:mt-20  justify-around'>

                <div className='flex flex-col items-center sm:relative sm:w-full  sm:mt-16 sm:mb-10   sm:h-56 '>
                    <div className='w-fit sm:absolute sm:-top-32 sm:left-0 '>
                        <h1 className='text-white heading-font  text-start mt-7 sm:mt-0'>{roadmapData.year2022.phase1.heading}</h1>
                        {roadmapData.year2022.phase1.description.map((description, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <Image src={tick} className="mt-1 mr-2" alt="" />
                                    <p className='text-white mt-1.5 font-light'>{description}</p>
                                </div>
                            );
                        })}

                    </div>

                    {!isMobile && <>
                        <div className='h-0 sm:h-fit'><Image src={left} className="mr-32 sm:-mt-32 invisible sm:visible" alt="" /></div>
                        <div className='h-0 w-[130px] z-50 sm:h-[5px] border border-yellow-600 rotate-90 mt-0 mr-7 invisible sm:visible'></div>
                        <div className='h-0 sm:h-fit'><Image src={right} className="ml-20 sm:mt-10 invisible sm:visible" alt="" /></div>
                        <div className='h-0 w-[130px] z-50 sm:h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>
                        <div className='h-0 sm:h-fit'><Image src={left} className="mr-32 sm:mt-10 invisible sm:visible" alt="" /></div>
                        <div className='h-0  w-[130px] z-50 sm:h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>
                        <div className='h-0 sm:h-fit'><Image src={right} className="ml-20 sm:mt-10 invisible sm:visible" alt="" /></div>
                        <div className='h-0 w-[130px] z-50 sm:h-[5px] border border-yellow-600 rotate-90 mt-10 mr-7 invisible sm:visible'></div>
                        <div className='h-0 sm:h-fit'><Image src={left} className="mr-32 sm:mt-10 invisible sm:visible" alt="" /></div>
                    </>}

                    <div className='w-fit sm:absolute sm:-bottom-20 sm:right-0 sm:h-60'>
                        <h1 className='text-white heading-font  text-start mt-7 sm:mt-0'>{roadmapData.year2022.phase2.heading}</h1>
                        {roadmapData.year2022.phase2.description.map((description, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <Image src={tick} className="mt-1 mr-2" alt="" />
                                    <p className='text-white mt-1 text-sm'>{description}</p>
                                </div>
                            );
                        })}

                    </div>
                </div>
                <div className='flex flex-col sm:relative sm:w-full  sm:mt-10  sm:h-40 '>
                    <div className='w-fit sm:absolute sm:-top-24 '>
                        <h1 className='text-white heading-font  text-start mt-7 sm:mt-0 '>{roadmapData.year2022.phase3.heading}</h1>
                        {roadmapData.year2022.phase3.description.map((description, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <Image src={tick} className="mt-1 mr-2" alt="" />
                                    <p className='text-white mt-1 text-sm'>{description}</p>
                                </div>
                            );
                        })}

                    </div>
                    <div className='w-fit sm:absolute sm:top-20 sm:right-0 sm:h-60 mt-7 sm:mt-0 '>
                        <p className='text-white heading-font  text-start'>{roadmapData.year2022.phase4.heading}</p>
                        {roadmapData.year2022.phase4.description.map((description, i) => {
                            return (
                                <div className='flex justify-start'>
                                    <Image src={tick} className="mt-1 mr-2" alt='' />
                                    <p className='text-white mt-1 text-sm'>{description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='w-fit  sm:w-full  sm:h-72 '>
                    <h1 className='text-white heading-font  text-start mt-7 sm:mt-20'>{roadmapData.year2022.phase5.heading}</h1>
                    {roadmapData.year2022.phase5.description.map((description, i) => {
                        return (
                            <div className='flex justify-start'>
                                <Image src={tick} className="mt-1 mr-2" alt='' />
                                <p className='text-white mt-1 text-sm'>{description}</p>
                            </div>
                        );
                    })}

                </div>

            </div>
        </div>
    )
}

export default RoadMap