import React from 'react'
import Image from "next/image";

import moonpool from '../../assets/secure/images/moonpool.cbf3f4f1.svg'
import certik from '../../assets/secure/images/certik.d8d4c24b.svg'
function Secure() {
  return (
      <div className='max-w-[800px]  mr-auto ml-auto mt-10 mb-24'>
                    <h1 className='text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan mb-14 text-center'>Secured By</h1>
                    <div className='h-20 flex flex-col sm:justify-between items-center sm:flex-row  '>
                        <a href='/'>
                            <Image src={certik} className="h-16 sm:ml-10 lg:ml-0 mt-4 w-auto" alt='' />
                        </a>
                        <a href='/'>
                            <Image src={moonpool} className=" h-16 sm:mr-10 lg:mr-0 mt-4  w-auto" alt=''/>
                        </a>
                    </div>
      </div> 
  )
}

export default Secure