import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const CreateOrder3 = () => {
  return (
    <div className='w-screen p-4'>
        <div className='flex items-center mb-4'>
            <Link to='/createorder2' className='p-4 bg-[#123524] text-white rounded-full mr-20'><span><FaArrowLeft/></span></Link>
            <h1 className='font-bold'>Payment Details</h1>
        </div>
        <div className='mb-4'>
          <h3 className='mb-2'>Select delivery medium </h3>
          <div className='flex flex-col items-center justify-around border border-black-200 shadow-md rounded-3xl p-4 dark:bg-[#545454]'>
            <div className='mb-2'>
              <h3>Based on the delivery medium, the rates will be shown in the total payment</h3>
            </div>
            <div className='w-[87vw]'>
              <div className='flex justify-between'>
                <div className='w-[42vw] flex items-center justify-between border border-black-200 shadow-md rounded-3xl gap-[0.3em] py-2 px-4 mb-4 dark:bg-[#7f7f7f]'>
                  <div>
                    <h3 className='whitespace-nowrap'>Drone Delivery</h3>
                    <h1 className='font-bold'>$19.99</h1>
                  </div>
                  <div className='h-4 w-4 rounded-full border border-black dark:border-white p-2'>
                    <div className='bg-[#80ffba] rounded-full'/>
                  </div>
                </div>
                <div className='w-[42vw] flex items-center justify-between border border-black-200 shadow-md rounded-3xl gap-[0.3em] py-2 px-4 mb-4 dark:bg-[#7f7f7f]'>
                  <div>
                    <h3 className='whitespace-nowrap'>Van Delivery</h3>
                    <h1 className='font-bold'>$10.99</h1>
                  </div>
                  <div className='h-4 w-4 rounded-full border border-black dark:border-white p-2'>
                    <div className='rounded-full'/>
                  </div>
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='w-[42vw] flex items-center justify-between border border-black-200 shadow-md rounded-3xl gap-[0.3em] py-2 px-4 mb-4 dark:bg-[#7f7f7f]'>
                  <div>
                    <h3 className='whitespace-nowrap'>Scooter Delivery</h3>
                    <h1 className='font-bold'>$8.99</h1>
                  </div>
                  <div className='h-4 w-4 rounded-full border border-black dark:border-white p-2'>
                    <div className='rounded-full'/>
                  </div>
                </div>
                <div className='w-[42vw] flex items-center justify-between border border-black-200 shadow-md rounded-3xl gap-[0.3em] py-2 px-4 mb-4 dark:bg-[#7f7f7f]'>
                  <div>
                    <h3 className='whitespace-nowrap'>Bicycle Delivery</h3>
                    <h1 className='font-bold'>$5.99</h1>
                  </div>
                  <div className='h-4 w-4 rounded-full border border-black dark:border-white p-2'>
                    <div className='rounded-full'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <h3 className='mb-2'>Invoice</h3>
          <div className='flex flex-col items-center justify-around border border-black-200 shadow-md rounded-3xl p-4 dark:bg-[#545454]'>
            <div className='w-[80vw] border-b border-black-500 pb-2'>
              <div className='flex items-center justify-between mb-2'>
                <div>
                  <h3>Total</h3>
                  <h5>($6.00 x 20 Medicines)</h5>
                </div>
                <h3 className='font-bold'>$120.00</h3>
              </div>
              <div className='flex items-center justify-between mb-2'>
                <div><h3>Drone Delivery</h3></div>
                <h3 className='font-bold'>$19.99</h3>
              </div>
              <div className='flex items-center justify-between mb-2'>
                <div><h3>Tax</h3></div>
                <h3 className='font-bold'>$12.86</h3>
              </div>
              <div className='flex items-center justify-between mb-2'>
                <div><h3>Service charge</h3></div>
                <h3 className='font-bold'>$3.00</h3>
              </div>
            </div>
            <div className='w-[80vw] flex justify-between items-center pt-4 pb-2'>
              <h3 className='font-semibold'>Total payable amount</h3>
              <h3 className='font-bold'>$155.85</h3>
            </div>
          </div>
        </div>
        <Link to='/createorder4' className='w-[90vw] bg-black text-white dark:bg-white dark:text-black p-4 flex items-center justify-center rounded-3xl'>
            <h1>Go To Payment</h1>
        </Link>               
    </div>
  )
}

export default CreateOrder3