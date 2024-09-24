import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const CreateOrder1 = () => {
  return (
    <div className='w-screen p-4'>
        <div className='flex items-center mb-2'>
            <Link to='/createorder' className='p-4 bg-[#123524] text-white rounded-full mr-20'><span><FaArrowLeft/></span></Link>
            <h1>Address Infromation</h1>
        </div>
        <div className='flex items-center justify-around border border-black-200 shadow-md rounded-3xl p-4 mb-4 dark:bg-[#545454]'>
            <div>
                <h3 className='mb-2'>Pick-up Date</h3>
                <input className='bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl p-2' type="date" required/>
            </div>
            <div>
                <h3 className='mb-2'>Pick-up Time</h3>
                <input className='bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl p-2' type="time" required/>
            </div>
        </div>
        <div className='mb-2'>
            <h3 className='mb-2'>From</h3>
            <div className='flex flex-col items-center justify-around border border-black-200 shadow-md rounded-3xl p-4 dark:bg-[#545454]'>
                <div className='flex gap-4'>
                    <div className='mb-4'>
                        <h3 className='mb-2'>Name</h3>
                        <input className='w-[41vw] bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl p-2' type="text" required/>
                    </div>
                    <div className='mb-4'>
                        <h3 className='mb-2'>Phone Number</h3>
                        <input className='w-[34vw] bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl p-2' type="text" required/>
                    </div>
                </div>
                <div className='w-[82vw]'>
                    <h3 className='mb-2'>Address</h3>
                    <input className='w-[80vw] bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl p-2' type="number" required/>
                </div>
            </div>
        </div>
        <div className='mb-2'>
            <h3 className='mb-2'>To</h3>
            <div className='flex flex-col items-center justify-around border border-black-200 shadow-md rounded-3xl p-4 dark:bg-[#545454]'>
                <div className='w-[82vw] mb-4'>
                    <h3 className='mb-2'>Name</h3>
                    <input className='w-[80vw] bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl p-2' type="text" required/>
                </div>
                <div className='w-[82vw]'>
                    <h3 className='mb-2'>Address</h3>
                    <input className='w-[80vw] bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl p-2' type="text" required/>
                </div>                
            </div>
        </div>
        <Link to='/createorder2' className='w-[90vw] bg-black text-white dark:bg-white dark:text-black p-4 flex items-center justify-center rounded-3xl'>
            <h1>Continue</h1>
      </Link>               
    </div>
  )
}

export default CreateOrder1