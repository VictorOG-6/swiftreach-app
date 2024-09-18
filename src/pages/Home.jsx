import React from 'react'
import { Userbar, TrackCard } from '../components'
import droneimgdark from '/droneimgdark.png'
import vanimgdark from '/vanimgdark.png'
import scooterimgdark from '/scooterimgdark.png'
import bicycleimgdark from '/bicycleimgdark.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-screen w-screen p-2'>
      <Userbar/>
      <div className='mb-8'>
        <h3 className='mb-4'>My Orders</h3>
        <div className='flex gap-2 mb-4 overflow-x-scroll'>
          <TrackCard/>
        </div>
        <div className='flex items-center justify-center'>
          <Link to="/allorders" className=' bg-[#123524] text-white py-2 px-4 rounded-full'>
            <h3>View All Orders</h3>
          </Link>
        </div>
      </div>
      <div>
        <h5 className='font-semibold mb-4'>Book SwiftReach for</h5>
        <div className='pt-2'>
          <div className='flex justify-around items-center mb-12'>
            <div className='flex flex-col items-center border border-black rounded-3xl p-2 shadow-lg'>
              <img src={droneimgdark} alt="drone-image" className='w-40'/>
              <h5>Drone</h5>
            </div>
            <div className='flex flex-col items-center border border-black rounded-3xl p-2 shadow-lg'>
              <img src={vanimgdark} alt="van-image" className='w-40'/>
              <h5>Van</h5>
            </div>
          </div>  
          <div className='flex justify-around items-center'>
            <div className='flex flex-col items-center border border-black rounded-3xl p-2 shadow-lg'>
              <img src={scooterimgdark} alt="scooter-image" className='w-40'/>
              <h5>Scooter</h5>
            </div>            
          </div>
        </div>  
      </div> 
    </div>
  )
}

export default Home