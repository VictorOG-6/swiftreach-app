import React from 'react'
import swiftreach from '/swiftreach.png'
import { FaUserCircle, FaRegCreditCard, FaLock, FaInfoCircle, FaTrashAlt, FaHome, FaPlus } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { IoNotifications, IoTicket, IoKey,  IoLogOut } from "react-icons/io5"; 
import { IoMdHelpBuoy, IoMdGitNetwork } from "react-icons/io";
import { SiSubstack } from "react-icons/si";
import { MdBusinessCenter } from "react-icons/md";
import { Link } from 'react-router-dom';

const Settings = () => {
  return (
    <div className='w-screen flex flex-col items-center p-4'>
      <img className='w-20 mb-2' src={swiftreach} alt="logo" />
      <div className='w-[93vw] h-[75vh] overflow-y-scroll'>
        <div className='mb-2'>
          <h1 className='mb-2'>Account</h1>
          <div>
            <Link to='/userprofile' className='flex items-center border-t border-black-500 gap-2 py-2'>
              <span><FaUserCircle/></span>
              <h3>Personal Profile</h3>
            </Link>
            <Link className='flex items-center gap-2 py-2'>
              <span><FaGlobe/></span>
              <h3>Language</h3>
            </Link>
            <Link className='flex items-center gap-2 py-2'>
              <span><IoNotifications/></span>
              <h3>Notifications</h3>
            </Link>
          </div>
        </div>
        <div className='mb-2'>
          <h1 className='mb-2'>Payment & Billing</h1>
          <div>
            <Link className='flex items-center border-t border-black-500 gap-2 py-2'>
              <span><FaRegCreditCard/></span>
              <h3>Payment</h3>
            </Link>
            <Link className='flex items-center gap-2 py-2'>
              <span><IoTicket/></span>
              <h3>Transaction History</h3>
            </Link>
            <Link className='flex items-center gap-2 py-2'>
              <span><SiSubstack/></span>
              <h3>Subscription</h3>
            </Link>
          </div>
        </div>
        <div className='mb-2'>
          <h1 className='mb-2'>Saved Places</h1>
          <div>
            <Link className='flex items-center border-t border-black-500 gap-2 py-2'>
              <span><FaHome/></span>
              <h3>Add Home address</h3>
            </Link>
            <Link className='flex items-center gap-2 py-2'>
              <span><MdBusinessCenter/></span>
              <h3>Add Work address</h3>
            </Link>
            <Link className='flex items-center gap-2 py-2'>
              <span><FaPlus/></span>
              <h3>Add a place</h3>
            </Link>
          </div>
        </div>
        <div className='mb-2'>
          <h1 className='mb-2'>Security and Privacy</h1>
          <div>
            <Link className='flex items-center border-t border-black-500 gap-2 py-2'>
              <span><IoKey/></span>
              <h3>Change Password</h3>
            </Link>
            <Link className='flex items-center gap-2 py-2'>
              <span><IoMdGitNetwork/></span>
              <h3>Two-factor Authentication</h3>
            </Link>
            <Link className='flex items-center gap-2 py-2'>
              <span><FaLock/></span>
              <h3>Privacy Center</h3>
            </Link>
          </div>
        </div>
        <div>
          <h1 className='mb-2'>More info and support</h1>
          <div>
            <Link to='/contact' className='flex items-center border-t border-black-500 gap-2 py-2'>
              <span><IoMdHelpBuoy/></span>
              <h3>Help</h3>
            </Link>
            <Link className='flex items-center gap-2 py-2'>
              <span><FaInfoCircle/></span>
              <h3>About</h3>
            </Link>
          </div>
        </div>
        <div>
          <Link className='flex items-center border-t border-black-500 gap-2 py-2 text-red-700'>
            <span><IoLogOut/></span>
            <h3>Log out</h3>
          </Link>
          <Link className='flex items-center gap-2 py-2 text-blue-950'>
            <span><FaTrashAlt/></span>
            <h3>Delete Account</h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Settings