import Image from 'next/image'
import NavBar from '@/components/navbar'
import Banner from '@/components/banner'
import Home from '@/components/Home'
import Heroes from '@/components/heroes'
import HomeFeatures from '@/components/homefeatures'
import Features from '@/components/features'
import Crystals from '@/components/crystals'
import SoulStone from '@/components/soulstone'
import RoadMap from '@/components/roadmap'
import Backers from '@/components/backers'
import Secure from '@/components/secure'
import Footer from '@/components/footer'
export default function Index() {
  return (
    <div className="App">
    <NavBar/>
    <Banner />
    <div className='home w-full pt-24 '>
       <Home />
       <Heroes />
       <HomeFeatures />
       <Features />
       <Crystals />
       <SoulStone />
       <RoadMap />
       <Backers/>
       <Secure />
       <Footer />
     </div>
   
   </div>
  )
}
