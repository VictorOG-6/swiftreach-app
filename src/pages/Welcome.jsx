import React from 'react'
import swiftreach from '/swiftreach.png'
import { Link } from 'react-router-dom'
import { Slides } from '../components'

const Welcome = () => {
  return (
    <div className='flex flex-col items-center h-screen p-4'>
        <img src={swiftreach} alt="logo" className='w-[28vw] mb-20'/>
        <Slides/>        
        <Link to='/signup' className='bg-[#123524] dark:bg-[#ff80ba] dark:text-black w-[60vw] rounded-full p-4 text-center text-white'>
            <h5>Get Started</h5>
        </Link>
    </div>
  )
}

export default Welcome