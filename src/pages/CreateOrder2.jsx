import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const CreateOrder2 = () => {
  return (
    <div className='w-screen p-4'>
        <div className='flex items-center mb-2'>
            <Link to='/createorder1' className='p-4 bg-[#123524] text-white rounded-full mr-20'><span><FaArrowLeft/></span></Link>
            <h1 className='font-bold'>Confirm Your Details</h1>
        </div>
        <div className='flex flex-col items-center justify-around border border-black-200 shadow-md rounded-3xl p-4 dark:bg-[#545454]'>
            <div className='flex justify-between w-[85vw] pb-2 border-b border-black-500'>
                <div>
                    <h3>Package Contains</h3>
                    <h1 className='font-bold'>Medicine</h1>
                </div>
                <div>
                    <h3>Package Quantity</h3>
                    <h1 className='text-right font-bold'>20</h1>
                </div>
            </div>
            <div className='w-[85vw] flex justify-between pb-2 border-b border-black-500'>
                <div>
                    <h3>Length</h3>
                    <h1 className='font-bold text-center'>10cm</h1>
                </div>
                <div>
                    <h3>Width</h3>
                    <h1 className='font-bold text-center'>6cm</h1>
                </div>
                <div>
                    <h3>Height</h3>
                    <h1 className='font-bold text-center'>50cm</h1>
                </div>
                <div>
                    <h3>Weight</h3>
                    <h1 className='font-bold text-center'>5kg</h1>
                </div>
            </div>
            <div>
                <h3>Package Description</h3>
                <h3 className='font-bold'>Volatile medicines. Please take care of them. Avoid liquid contact</h3>
            </div>
        </div>
        <div className='mb-2'>
            <h3>Pick Up And Delivery</h3>
            <div className='flex flex-col items-center justify-around border border-black-200 shadow-md rounded-3xl p-2 dark:bg-[#545454]'>
                <div className='mb-2'>
                    <h5 className='text-center'>Pick-up date and time</h5>
                    <h3 className='font-bold'>Wed, 10 Jan 2024, 10:00AM</h3>
                </div>
                <div className='border border-black-200 shadow-md rounded-3xl py-2 px-4 mb-2 dark:bg-[7f7f7f]'>
                    <h5>From</h5>
                    <h3 className='font-bold'>Audu Zuriel</h3>
                    <h5>28 Vikas Marg, Swasthybmya Vhar, Delhi 110092 </h5>
                    <h5>+91 9243165432</h5>
                </div>
                <div className='border border-black-200 shadow-md rounded-3xl py-2 px-4 dark:bg-[7f7f7f]'>
                    <h5>To</h5>
                    <h3 className='font-bold'>Ode Christopher</h3>
                    <h5>Bobst Library, 70 Washington Square, NY 10012, US.</h5>
                    <h5>+1 (684) 555-0102</h5>
                </div>
            </div>
        </div>
        <Link to='/createorder3' className='w-[90vw] bg-black text-white dark:bg-white dark:text-black p-4 flex items-center justify-center rounded-3xl'>
            <h1>Confirm</h1>
        </Link>               
    </div>
  )
}

export default CreateOrder2