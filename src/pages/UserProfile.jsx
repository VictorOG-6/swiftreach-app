import React from 'react'
import { FaArrowLeft, FaUserCircle, FaUser, FaPlus } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div className='w-screen h-screen p-4'>
        <Link to='/settings' className='text-2xl'><FaArrowLeft/></Link>
        <h1 className='text-2xl font-bold my-4'>Personal Info</h1>
        <div className='flex flex-col items-center border border-black-200 shadow-md rounded-3xl p-8 mb-4 dark:bg-[#545454]'>
            <div className='relative bg-[#12352420] flex items-center justify-center rounded-full w-16 h-16 mb-2 dark:bg-black'>
                <span className='text-2xl'><FaUser/></span>
                <div className='absolute bg-[#123524] text-white dark:bg-[#80ffba] dark:text-black rounded-3xl -top-[6px] -right-[11px] p-2'><FaPlus/></div>
            </div>
            <h1 className='text-center font-semibold'>Add a profile photo for user recognition through swiftreach personnels</h1>
        </div>
        <div className='text-xl'>
            <div className='flex items-center justify-between pb-4 border-b border-black-500'>
                <div className='flex items-center gap-4'>
                    <span><FaUserCircle/></span>
                    <h1>Audu Zuriel</h1>
                </div>
                <h3 className='text-[#123524] font-semibold'>Edit</h3>
            </div>
            <div className='flex items-center justify-between py-4 border-b border-black-500'>
                <div className='flex items-center gap-4'>
                    <span><IoPhonePortrait/></span>
                    <h1>N/A</h1>
                </div>
                <h3 className='text-[#123524] font-semibold'>Edit</h3>
            </div>
            <div className='flex items-center justify-between py-4 border-b border-black-500'>
                <div className='flex items-center gap-4'>
                    <span><MdEmail/></span>
                    <h1>auduzuriel@gmail.com</h1>
                </div>
                <h3 className='text-[#123524] font-semibold'>Edit</h3>
            </div>
        </div>
    </div>
  )
}

export default UserProfile