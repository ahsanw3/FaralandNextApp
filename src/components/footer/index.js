import React from 'react'
import bispaw from '../../assets/footer/images/biswap.d7c0fcca.png'
import { footerData } from '../../assets/footer/content'
import Image from "next/image";

function Footer() {
    return (
        <div className=' bg-[#111121]   pb-16 pt-7 w-full'>
            <div className='w-[90%] w-max-[1300px] m-auto  lg:flex'>
                <div className='lg:w-1/4 mt-4'>
                    <p className='text-white  text-start lg:text-center   mt-2 mb-2  text-[30px] font-[400px]  font-americanCapitan'>© MoonKnight Labs</p>
                </div>
                <div className='sm:flex lg:w-3/4 mt-4 '>
                    <div className='flex  sm:w-2/3'>
                        <div className='w-1/2 '>
                            <p className='text-white text-start mt-2 mb-4  text-[30px] font-[400px]  font-americanCapitan'>{footerData.section1.heading}</p>
                            {footerData.section1.links.map((link, i) => {
                                return (
                                    <p className='text-white text-start mt-2 mb-[10px] text-[16px]'>{link.name}</p>
                                );
                            })}
                        </div>
                        <ul className='w-1/2  '>
                            <li className='text-white text-start mt-2 mb-4  text-[30px] font-[400px]  font-americanCapitan'>{footerData.section2.heading}</li>
                            {footerData.section2.links.map((link, i) => {
                                return (
                                    <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>{link.name}</li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className='sm:w-1/3'>
                        <ul>
                            <li className='text-white text-start mt-2 mb-4  text-[30px] font-[400px]  font-americanCapitan'>{footerData.section3.heading}</li>
                            {footerData.section3.links.map((link, i) => {
                                return (
                                    <li className='text-white text-start mt-2 mb-[10px] text-[16px]'>{link.name}</li>
                                 );
                            })}
                            {footerData.section3.buyLinks.map((link, i) => {
                                return (
                                    <a className='footer__biswap  flex justify-end  pl-3 pr-3 pt-1 pb-1 rounded-xl items-center w-fit mt-2 mb-[10px]' href='/'>
                                        <Image src={bispaw} alt='' className='w-4 h-4' />
                                        <span className='ml-2 text-[13px] text-white font-[500px]'>{link.name}</span>
                                    </a>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer