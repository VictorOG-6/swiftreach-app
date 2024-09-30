import React from 'react'
import { Link } from 'react-router-dom';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

const CreateOrder = () => {
  return (
    <div className='py-4 px-8 w-screen flex flex-col items-center'>
      <h1 className='text-[1.2em] mb-4'>Create Order</h1>
      <div className='mb-4'>
        <h3 className='mb-2'>Package Dimension</h3>
        <div className='h-[25.5vh] border border-black-200 dark:bg-[#545454] shadow-md rounded-3xl p-4'>
          <div className='flex w-[85vw] justify-around mb-4'>
            <div className='w-[20vw]'>
              <h3 className='mb-2 whitespace-nowrap'>Length <span>(cm)</span></h3>
              <input className='w-[18vw] p-4 rounded-3xl bg-[#12352420] dark:bg-[#7f7f7f]' type="number" placeholder='000.00' required/>
            </div>
            <div className='w-[20vw]'>
              <h3 className='mb-2 whitespace-nowrap'>Width <span>(cm)</span></h3>
              <input className='w-[18vw] p-4 rounded-3xl bg-[#12352420] dark:bg-[#7f7f7f]' type="number" placeholder='000.00' required/>
            </div>
            <div className='w-[20vw]'>
              <h3 className='mb-2 whitespace-nowrap'>Height <span>(cm)</span></h3>
              <input className='w-[18vw] p-4 rounded-3xl bg-[#12352420] dark:bg-[#7f7f7f]' type="number" placeholder='000.00' required/>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-[74vw] text-left'>
              <h3 className='mb-2'>Weight</h3>
            </div>
            <div className='flex bg-[#12352420] dark:bg-[#7f7f7f] w-[79vw] justify-between p-2 rounded-3xl'>
              <input style={{ background: "none"}} type="text" placeholder='000.00' required/>
              <div className='flex rounded-3xl bg-white dark:bg-[#545454]'>
                <div className='py-2 px-4 rounded-3xl bg-[#123524] text-white dark:bg-[#80ffba] dark:text-black'><h1>KG</h1></div>
                <div className='py-2 px-4 rounded-3xl'><h1>LBS</h1></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-4 md:mb-8'>
        <h3 className='mb-2'>Package Details</h3>
        <div className='h-[36vh] border border-black-200 dark:bg-[#545454] shadow-md rounded-3xl p-4'>
          <div className='w-[85vw] mb-4'>
            <h3 className='mb-2'>Package Contains</h3>
            <div className='bg-[#12352420] dark:bg-[#7f7f7f] flex justify-around items-center p-2 rounded-3xl'>
              <div className='w-[26vw] flex items-center justify-center p-2 rounded-3xl bg-[#123524] text-white dark:bg-[#80ffba] dark:text-black'><h5>Blood</h5></div>
              <div className='w-[26vw] flex items-center justify-center p-2 rounded-3xl'><h5>Drugs</h5></div>
              <div className='w-[26vw] flex items-center justify-center p-2 rounded-3xl'><h5>Vaccine</h5></div>
            </div>
          </div>
          <div className='flex justify-between items-center mb-4'>
            <h3>Package Quantity</h3>
            <div className='bg-[#12352420] dark:bg-[#7f7f7f] flex p-2 rounded-3xl'>
              <div className='bg-white dark:bg-black dark:text-white flex items-center justify-center p-4 rounded-3xl'><span><FaMinus/></span></div>
              <div className='text-[1.2em] py-2 px-[0.8em]'><h3>1</h3></div>
              <div className='bg-[#123524] flex items-center justify-center p-4 rounded-3xl text-white dark:bg-[#80ffba] dark:text-black'><span><FaPlus/></span></div>
            </div>
          </div>
          <div>
            <h3 className='mb-2'>Package Description</h3>
            <textarea className='w-[85vw] h-16 p-2 bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl' name="description" id="desc" placeholder='Type here...'></textarea>
          </div>
        </div>
      </div>
      <Link to='/createorder1' className='w-[90vw] bg-black text-white dark:bg-white dark:text-black p-4 flex items-center justify-center rounded-3xl'>
        <h1>Continue</h1>
      </Link>
    </div>
  )
}

export default CreateOrder