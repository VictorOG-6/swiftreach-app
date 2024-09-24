import React from 'react'
import { Userbar, TrackCard } from '../components'
import droneimgdark from '/droneimgdark.png'
import droneimglight from '/droneimglight.png' 
import vanimgdark from '/vanimgdark.png'
import vanimglight from '/vanimglight.png'
import scooterimgdark from '/scooterimgdark.png'
import scooterimglight from '/scooterimglight.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen w-screen p-2'>
      <Userbar/>
      <div className='mb-4'>
        <h3 className='mb-4'>My Orders</h3>
        <div className='flex gap-2 mb-4 overflow-x-scroll'>
          <TrackCard/>
        </div>
        <div className='flex items-center justify-center'>
          <Link to="/allorders" className=' bg-[#123524] text-white dark:bg-[#80ffba] dark:text-black py-2 px-4 rounded-full'>
            <h3>View All Orders</h3>
          </Link>
        </div>
      </div>
      <div>
        <h5 className='font-semibold mb-2'>Book SwiftReach for</h5>
        <div className='pt-2'>
          <div className='flex justify-around items-center mb-4'>
            <Link to='/createorder' className='flex flex-col items-center border border-black dark:border-white rounded-3xl p-2 shadow-lg dark:bg-[#545454]'>
              <img src={droneimgdark} alt="drone-image" className='w-40 h-24 object-cover dark:hidden'/>
              <img src={droneimglight} alt="drone-image" className='w-40 h-24 object-cover hidden dark:block' />
              <h5>Drone</h5>
            </Link>
            <Link to='/createorder' className='flex flex-col items-center border border-black dark:border-white rounded-3xl p-2 shadow-lg dark:bg-[#545454]'>
              <img src={vanimgdark} alt="van-image" className='w-40 h-24 object-cover dark:hidden'/>
              <img src={vanimglight} alt="vn-image" className='w-40 h-24 object-cover hidden dark:block'/>
              <h5>Van</h5>
            </Link>
          </div>  
          <div className='flex justify-around items-center'>
            <Link to='/createorder' className='flex flex-col items-center border border-black dark:border-white rounded-3xl p-2 shadow-lg dark:bg-[#545454]'>
              <img src={scooterimgdark} alt="scooter-image" className='w-40 h-24 object-cover dark:hidden'/>
              <img src={scooterimglight} alt="scooter-image" className='w-40 h-24 object-cover hidden dark:block'/>
              <h5>Scooter</h5>
            </Link>            
          </div>
        </div>  
      </div> 
    </div>
  )
}

export default Home