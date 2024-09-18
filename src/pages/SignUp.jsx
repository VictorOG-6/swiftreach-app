import React from 'react'
import { Link } from 'react-router-dom'
import swiftreach from '/swiftreach.png'

const SignUp = () => {
  return (
    <div className='h-screen w-[96vw] flex flex-col gap-8 pt-8'>
      <div className='flex gap-20 pl-4'>
        <Link to='/' className='bg-[#12352420] py-2 px-4'>&#10094;</Link>
        <div className='flex gap-4 text-sm'>
          <span className='bg-[#123524] text-white p-2 rounded-full'>Sign Up</span>
          <span className='p-2 bg-[#12352405] rounded-full'>Sign In</span>
        </div>  
      </div>
      <div className='flex flex-col items-center'>
        <img src={swiftreach} alt="logo" className='w-[19vw] mb-8'/>
        <div className='mb-4 w-[65vw]'>
          <h3 className='font-bold mb-2'>Sign Up</h3>
          <p>Enter your personal information</p>
        </div>
        <form action="" className='w-[65vw]'>
          <div className='flex flex-col mb-4'>
            <label htmlFor="" className='font-bold mb-2'>Full Name / Business Name</label>
            <input type="text" placeholder='Enter Full Name' className='pl-2 h-8 bg-[#12352420] border border-beige' required/>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="" className='font-bold mb-2'>Email Address</label>
            <input type="email" placeholder='Enter Email Address' className='pl-2 h-8 bg-[#12352420] border border-beige' required/>
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor="" className='font-bold mb-2'>Password</label>
            <input type="password" placeholder='Password must be at least 8 characters' className='pl-2 h-8 bg-[#12352420] border border-beige' required/>
          </div>
          <div className='flex flex-col mb-2'>
            <label htmlFor="" className='font-bold mb-2'>Confirm Password</label>
            <input type="password" placeholder='Confirm your password' className='pl-2 h-8 bg-[#12352420] border border-beige' required/>
          </div>
        </form>
        <div className='w-[64vw] text-right mb-12'>
          <Link to='/signin'>Already Registered. SignIn </Link>
        </div>
        <Link to='/signup1' className='bg-[#123524] w-[60vw] rounded-full p-4 text-center text-white'>
          <h5>Sign Up</h5>
        </Link>
      </div>
    </div>
  )
}

export default SignUp