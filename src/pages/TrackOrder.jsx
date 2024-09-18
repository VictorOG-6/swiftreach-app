import React from 'react'
import { Userbar, Map, Slider } from '../components' 
import { IoNotifications } from "react-icons/io5";
import { Link } from 'react-router-dom';

const TrackOrder = () => {
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
                <Link to='/allorders' className='w-[40vw] py-2 rounded-3xl text-black text-center'>
                    <h3>List</h3>
                </Link>
                <Link to='/trackorder' className='w-[40vw] p-2 rounded-3xl bg-[#123524] text-white text-center'>
                    <h3>Tracker</h3>
                </Link>
            </div>
        </div>      
      <div className='h-[44vh]'>
        <Map/>
      </div>
      <div className='w-[90vw] p-4 rounded-3xl border border-black-200 shadow-md'>
        <div className='flex items-center justify-center rounded-3xl bg-[#FFC107] p-2'>
          <h1 className='font-bold'>SUR14592900</h1>
        </div>
        <div className='bg-white p-2 flex flex-col gap-2'>
          <div className='flex justify-between'>
            <div>
              <h5>Order Date</h5>
              <h1 className='font-bold'>Fri, 5 Jan 2024</h1>
            </div>
            <div>
              <h5>Estimated Date of Delivery</h5>
              <h1 className='font-bold text-right'>Sat, 27 Jan 2024</h1>
            </div>
          </div>
          <Slider value={50} color='#FFC107'/>
          <div className='flex justify-between'>
            <div>
              <h5>Pickup Address</h5>
              <h1 className='font-bold'>Surulere, Lagos</h1>
            </div>
            <div>
              <h5 className='text-right'>Delivery Address</h5>
              <h1 className='font-bold'>Gwarinpa, Abuja</h1>
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <h5>Package Contains</h5>
              <h1 className='font-bold'>Handle Well</h1>
            </div>
            <div className='text-center'>
              <h5>Package Quantity</h5>
              <h1 className='font-bold'>2</h1>
            </div>
          </div>
        </div>          
      </div>
    </div>
  )
}

export default TrackOrder