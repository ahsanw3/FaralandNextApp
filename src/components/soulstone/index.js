import React from 'react'
import Image from "next/image";

import soulstone from '../../assets/soulstone/images/soulstone-usecase.554880da.png'
import singleCRystal from '../../assets/soulstone/images/upgrade-equipment.f01e90c4.png'
import  soulstoneData from '../../assets/soulstone/content'
function SoulStone() {
   
    return (
        <div className='max-w-[1200px]  mr-auto ml-auto w-[90%] mt-24 '>
            <h1 className='text-[#ffc904] text-[60px] font-[400px] font-americanCapitan mb-7 text-center'>SoulStone Usecase</h1>
            <div className=''>
                <p className='text-lg text-white text-center'>{soulstoneData.description}</p>
                <div className='w-0 sm:w-fit -mt-7  '>
                    <Image src={soulstone} atl='' className='w-[70%] h-[20%] ' alt='' />
                </div>
                <div className='sm:w-0 m-auto  mt-14 sm:h-0'>
                    {[...Array(6)].map((_, i) => {
                        return (
                            <div className='flex flex-wrap justify-around'>
                                <Image src={singleCRystal} className="h-16 mt-4 mr-2 ml-2 " alt='' />
                            </div>
                        );
                    })}
                    
                </div>
            </div>


        </div>
    )
}

export default SoulStone