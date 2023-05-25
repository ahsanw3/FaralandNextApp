
import bispaw from '../../assets/crystals/images/biswap.d7c0fcca.png'
import crystal from '../../assets/crystals/images/crystal-usecase.150889b1.png'
import crystalsData from '../../assets/crystals/content '
import singleCRystal from '../../assets/crystals/images/upgrade-equipment.f01e90c4.png'
import Image from "next/image";

function Crystals() {
    return (
        <div className='max-w-[1200px]  mr-auto ml-auto mt-20  '>
            <h1 className='text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan mb-7 text-center'>Faracrystal Usecase</h1>
            <div><p className='text-[16px]  text-white text-center'>{crystalsData.heading}</p>
                <p className='text-[16px] text-white text-center'>{crystalsData.address}</p>
                <div className='flex justify-center items-center mt-5'>
                    <a className='footer__biswap flex justify-end pl-2 pr-2 rounded-xl pt-1 pb-1  items-center' href='/'>
                        <Image src={bispaw} alt='' className='w-4 h-4' />
                        <span className='ml-2 text-xs text-white font-[500px]'>{crystalsData.buyLink1}</span>
                    </a>
                    <a className='footer__biswap ml-2 flex justify-end  pl-2 pr-2 pt-1 pb-1 rounded-xl items-center' href='/'>
                        <Image src={bispaw} alt='' className='w-4 h-4' />
                        <span className='ml-2 text-xs text-white font-[500px]'>{crystalsData.buyLink2}</span>
                    </a>
                </div>
                <div className='w-0 sm:w-fit'>
                    <Image src={crystal} alt='' />
                </div>
                <div className='sm:w-0 m-auto sm:h-0'>
                {[...Array(5)].map((_, i) => {
                        return (
                            <div className='flex flex-wrap justify-around'>
                            <Image src={singleCRystal} className="h-16 mt-4 mr-2 ml-2 " alt=''/>
                            <Image src={singleCRystal} className="h-16 mt-4 mr-2 ml-2" alt=''/>
                        </div>
                        );
                    })}
                  
                    
                </div>
            </div>


        </div>
    )
}

export default Crystals