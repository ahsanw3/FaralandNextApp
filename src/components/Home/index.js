
import activePage from '../../assets/Home/images/active-page.5fe5d094.svg'
import bg from '../../assets/Home/images/download-android.31c566ad.png'
import { homeData } from '../../assets/Home/content'
import homeIntroRightframe from '../../assets/Home/images/homeIntroRightframe.png'
import Image from "next/image";

function Home() {
    return (
        <div className='mb-80 lg:mb-0 '>

            <div className='intro mt-[100px] mb-[100px] mr-auto ml-auto max-w-[1000px] '>
                <h3 className='text-[#ffc904] text-[60px] font-[400px]  font-americanCapitan text-center'>{homeData.heading}</h3>
                <div className='flex w-[82%] justify-around flex-wrap m-auto mt-2'>
                    <Image src={bg} alt='' className='mt-5 mb-5' />
                    <Image src={bg} alt='' className='mt-5 mb-5' />
                    <Image src={bg} alt='' className='mt-5 mb-5' />
                </div>
                <div className='h-[350px] flex  flex-col items-center lg:flex-row mt-8'>
                    <div className='w-[90%] sm:w-[95%] h-full lg:max-w-[400px]  mt-5 text-white flex-col flex justify-around items-center text-center lg:text-left relative'>
                        <div className='flex items-end w-2/4 justify-between lg:w-[70%] text-[#ffc904] text-[32px] font-[400px]  font-americanCapitan'>
                            <div >
                                <h1 className='bold'>PVE</h1>
                                <Image src={activePage} alt=""/>
                            </div>
                            <div>
                                <Image src={activePage} alt=""/>
                            </div>
                            <div>
                                <h1 className='bold'>
                                    PVP
                                    <Image src={activePage} alt="" />
                                </h1>
                            </div>
                        </div>
                        <p className='text-[16px] font-[400px]'>{homeData.description}</p>
                        <div className='content-divider bg-red-900 rotate-90 invisible lg:visible absolute w-[351px] h-[1px] left-[230px] top-[170px] '></div>
                    </div>
                    <div className='w-[90%]  sm:w-[95%] h-full  lg:max-w-auto mt-5   flex justify-end relative '
                    >
                        <div className='w-full lg:w-[92%] h-full flex justify-center items-center elaive'
                            >
                            <Image src={homeIntroRightframe} alt="" className='w-full h-full'/>
                            <iframe  className="absolute  top-2   w-[98%] lg:w-[91%] h-[96%]"  src="https://www.youtube.com/embed/B5W2v_Tj1CE"
                                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
                                allowfullscreen title="Embedded youtube">
                            </iframe>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home