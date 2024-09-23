import React from 'react'
import user from '/user.jpg'
import { IoMdNotifications } from "react-icons/io";
import swiftreach from '/swiftreach.png'
const Userbar = () => {
  return (
    <div className='w-screen flex items-center mb-4'>
        <div className='flex items-center gap-2 mr-2'>
            <img src={user} alt="user-profile" className='rounded-full w-[2.4em] h-[2.4em] object-cover'/>
            <div>
                <h5 className='font-bold text-sm'>Hello, Zuri</h5>
                <p className='w-[30vw] leading-4 text-sm'>Welcome to SwiftReach</p>
            </div>                
        </div>
        <img src={swiftreach} alt="logo" className='w-20 mr-24'/>
        <div className='text-3xl'><IoMdNotifications/></div>
    </div>
  )
}

export default Userbar