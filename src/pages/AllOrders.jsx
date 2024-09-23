import React from 'react'
import { IoNotifications } from "react-icons/io5";
import { OrderCard } from '../components';
import { Link } from 'react-router-dom';

const AllOrders = () => {
  return (
    <div className='w-screen p-4'>
        <div className='flex justify-end items-center gap-32 mb-8'>
            <h1 className='text-lg font-bold'>Parcel Tracking</h1>
            <div>
                <IoNotifications/>
            </div>
        </div>
        <div className='flex justify-center mb-4'>
            <div className='w-[85vw] bg-[#12352420] flex justify-center p-2 rounded-3xl'>
                <Link to='/allorders' className='w-[40vw] py-2 rounded-3xl bg-[#123524] text-white text-center'>
                    <h3>List</h3>
                </Link>
                <Link to='/trackorder' className='w-[40vw] p-2 rounded-3xl text-black text-center'>
                    <h3>Tracker</h3>
                </Link>
            </div>
        </div>
        <div className='h-[68vh] w-[93vw] flex flex-col items-center gap-4 overflow-y-scroll pb-4'>
            <OrderCard/>            
        </div>
    </div>
  )
}

export default AllOrders