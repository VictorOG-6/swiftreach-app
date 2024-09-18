import React from 'react'
import { Link } from 'react-router-dom'
import swiftreach from '/swiftreach.png'

const SignIn = () => {
  return (
    <div className='h-screen w-[96vw] pt-8'>
        <div className='flex flex-col gap-8'>
          <div className='flex gap-20 pl-4'>
            <Link to='/' className='bg-[#12352420] py-2 px-4'>&#10094;</Link>
            <div className='flex gap-4 text-sm'>
              <span className='p-2 bg-[#12352405] rounded-full'>Sign Up</span>
              <span className='bg-[#123524] text-white p-2 rounded-full'>Sign In</span>
            </div>  
          </div>
          <div className='flex flex-col items-center'>
            <img src={swiftreach} alt="logo" className='w-[19vw] mb-8'/>
            <div className='mb-4 w-[65vw]'>
              <h3 className='font-bold mb-2'>Sign In</h3>
              <p>Enter your personal information</p>
            </div>
            <form action="" className='w-[65vw]'>
              <div className='flex flex-col mb-4'>
                <label htmlFor="" className='font-bold mb-2'>Username</label>
                <input type="text" className='pl-2 h-8 bg-[#12352420] border border-beige' required/>
              </div>
              <div className='flex flex-col mb-4'>
                <label htmlFor="" className='font-bold mb-2'>Password</label>
                <input type="password" className='pl-2 h-8 bg-[#12352420] border border-beige' required/>
              </div>          
            </form>
            <div className='w-[64vw] text-right mb-12'><a href='/signup'>Not Registered</a></div>
            <button className='bg-[#123524] w-[60vw] rounded-full p-4 text-center text-white'>
              <h5>Sign In</h5>
            </button>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default SignIn