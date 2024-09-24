import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa";
import visa from '/visa.png'
import applepay from '/applepay.png'
import paypal from '/paypal.png'
import googlepay from '/googlepay.png'
import opay from '/opay.png'

const CreateOrder4 = () => {
  return (
    <div className='w-screen p-4'>
       <div className='flex items-center mb-2'>
            <Link to='/createorder3' className='p-4 bg-[#123524] text-white rounded-full mr-32'><span><FaArrowLeft/></span></Link>
            <h1 className='font-bold'>Payment</h1>
        </div>
        <div className='h-[76.5vh] overflow-scroll pb-4'>
          <div className='mb-4'>
            <h1 className='font-bold mb-2'>Payment with card</h1>
            <div className='flex flex-col items-start justify-around border border-black-200 shadow-md rounded-3xl p-2 dark:bg-[#545454]'>
              <h1 className='font-bold text-md mb-4'>Add New Card</h1>
              <div className='w-[87vw] mb-4'>
                <div className='mb-2'>
                  <h3 className='mb-2'>Name On Card</h3>
                  <input className='bg-[#12352420] dark:bg-[#7f7f7f] w-[85vw] rounded-3xl p-4' type="text" placeholder='Enter name' required/>
                </div>
                <div className='mb-2'>
                  <h3 className='mb-2'>Card Number</h3>
                  <input className='bg-[#12352420] dark:bg-[#7f7f7f] w-[85vw] rounded-3xl p-4' type="number" placeholder='0000 0000 0000 0000' required/>
                </div>
                <div className='flex justify-between gap-4'>
                  <div>
                    <h3 className='mb-2'>Exp Date</h3>
                    <input className='w-[40vw] bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl p-4' type="date" required/>
                  </div>
                  <div>
                    <h3 className='mb-2'>CVV</h3>
                    <input className='w-[40vw] bg-[#12352420] dark:bg-[#7f7f7f] rounded-3xl p-4' type="number" placeholder='000' required/>
                  </div>
                </div>
              </div>
              <Link to='/createorder4' className='w-[85vw] bg-black text-white dark:bg-white dark:text-black p-4 flex items-center justify-center rounded-3xl mb-2'>
                <h1>Add & Pay</h1>
              </Link> 
            </div>
          </div>
          <div className='flex items-center justify-between border border-black-200 shadow-md rounded-3xl p-4 mb-2 dark:bg-[#545454]'>
            <div>
              <h1 className='font-bold mb-2'>8748 8373 8374 2847</h1>
              <div className='flex'>
                <div className='border-r-2 border-black-900 px-2 mr-2'>
                  <h5>06/25</h5>
                </div>
                <h5>John Doe</h5>
              </div>
            </div>
            <div>
              <img className='h-[3em]' src={visa} alt="visa-logo" />
            </div>
          </div>
          <div>
            <h1 className='font-bold mb-2'>Other payment methods</h1>
            <div className='flex flex-col items-center justify-center border border-black-200 shadow-md rounded-3xl p-2 dark:bg-[#545454]'>
              <div className='flex justify-between items-center gap-4 mb-2'>
                <div className='w-[42vw] h-[4em] flex items-center justify-center border border-black-200 shadow-md rounded-3xl py-2 px-4 dark:bg-[#7f7f7f]'>
                  <img className='w-[5em]' src={applepay} alt="ApplePay-logo" />
                </div>
                <div className='w-[42vw] h-[4em] flex items-center justify-center border border-black-200 shadow-md rounded-3xl py-2 px-4 dark:bg-[#7f7f7f]'>
                  <img className='w-[5em]' src={paypal} alt="Paypal-logo" />
                </div>
              </div>
              <div className='flex justify-between items-center gap-4'>
                <div className='w-[42vw] h-[4em] flex items-center justify-center border border-black-200 shadow-md rounded-3xl py-2 px-4 dark:bg-[#7f7f7f]'>
                  <img className='w-[5em]' src={googlepay} alt="ApplePay-logo" />
                </div>
                <div className='w-[42vw] h-[4em] flex items-center justify-center border border-black-200 shadow-md rounded-3xl py-2 px-4 dark:bg-[#7f7f7f]'>
                  <img className='w-[5em]' src={opay} alt="Paypal-logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateOrder4