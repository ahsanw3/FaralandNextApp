"use client";
import React from 'react'
import { useState } from "react";
import Image from "next/image";

import headerFrame from '../../assets//navbar/images/header-frame.png'
import jaxImg from '../../assets//navbar/images/faraland.svg'
import { navData } from '../../assets/navbar/content';
// import '../../App.css'

function NavBar() {
    const [openMenu, setopenMenu] = useState(false);
    const handleOpenMenu = () => {
        // setopenMenu(!openMenu)
    }
    return (
        <div>
            <div className='w-full h-full z-10  absolute top-0 bg-inherit'>
                <Image src={headerFrame} alt="" className='h-20  w-0 lg:w-full' />
                <div className='absolute top-0 w-full'>
                    <div className='flex justify-between items-center w-[97%] bg-inherit max-w-[1200px]  mr-auto ml-auto '>
                        <div className='w-0 lg:w-2/4 xl:w-[40%] h-20  flex items-center justify-around'>
                            <Image src={jaxImg} alt='faraland' className='invisible lg:visible' />
                            {navData.links.map((link, i) => {
                                return (
                                    <div className='text-white invisible lg:visible font-[400px] text-[24px] font-americanCapitan'>{link}</div>

                                );
                            })}


                        </div>
                        {!openMenu &&
                            <div className='h-20 border-red-900 flex items-center text-center'>
                                <button className='btn-gradient text-white inline-block rounded-md relative pt-2 pb-2 pl-6 pr-6 text-[12px] font-[500] cursor-pointer'>CONNECT WALLET</button>
                                <button className='bg-black h-12 w-14 ml-6 mr-5 rounded-sm lg:w-0 lg:h-0 lg:ml-0 lg:mr-0 flex justify-center items-center ' onClick={handleOpenMenu}>
                                    <div className='w-4/5 flex flex-col justify-around items-center h-3/5 '>
                                        <div className='block w-4/5 bg-white h-[0.7px]'></div>
                                        <div className='block w-4/5 bg-white h-[0.7px]'></div>
                                        <div className='block w-4/5 bg-white h-[0.7px]'></div>
                                    </div>
                                </button>
                            </div>}
                    </div>
                </div>


            </div>
            {openMenu && <div className='h-[100%] w-full flex justify-end lg:w-0 lg:invisible lg:h-0 absolute top-0 border z-50'>
                <button onClick={handleOpenMenu} className="w-full sm:w-[55%]  bg-black opacity-70">
                    <div className='w-full sm:w-[55%] bg-black '></div>
                </button>
                <div className='w-[900px] sm:w-[45%] bg-[#444165] h-full flex flex-col items-center '>
                    <button onClick={handleOpenMenu}>
                        <div className='mt-7' >
                            <Image src={jaxImg} alt='faraland w-20 h-20 bg-white' />
                        </div>
                    </button>

                    {navData.pages.map((page, i) => {
                     return (
                        <a className='mt-7 text-white font-americanCapitan' href="/">{page.name}</a>
                     );
                    })}
                    </div>
            </div>
            }

        </div>
    )
}

export default NavBar