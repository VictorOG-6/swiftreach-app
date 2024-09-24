import React from 'react'
import { Map } from '../components'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";

const SignUp2 = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-end'>
      <div className='h-[80vh] bg-slate-400'>
        <Map/>
      </div>
      <div className='flex flex-col items-center'>
        <div className='w-screen flex items-center justify-between pt-4 px-[1.5rem] mb-4'>
          <div className='flex justify-between align-start gap-2'>
            <span className='text-3xl pt-2'><IoLocationOutline/></span>
            <div>
              <h1 className='text-xl font-bold'>Victoria Island</h1>
              <h5>Victoria Island, Lagos</h5>
            </div>
          </div>
          <div>
            <Link to='/signup1'>
              <h5 className='bg-[#80FFBA60] rounded-full py-2 px-4'>Change</h5>
            </Link>
          </div>
        </div>
        <Link to='/home' className='w-[90vw] bg-black text-white dark:bg-white dark:text-black p-4 flex items-center justify-center rounded-3xl mt-2 mb-12'>
          <h1>Confirm Location</h1>
        </Link>
      </div>
    </div>
  )
}

export default SignUp2