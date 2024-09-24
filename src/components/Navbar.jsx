import React from 'react'
import { FaHome, FaFolderOpen } from "react-icons/fa";
import { IoSettings, IoFolderOpenSharp } from "react-icons/io5";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { TbTrack } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); 

  const isActive = (path) => location.pathname === path;

  return (
    <div className='text-white fixed bottom-0 flex w-screen h-16 justify-around items-center'>
    <Link 
      to='/home' 
      className={`flex items-center justify-center w-[3em] h-16 text-3xl ${
        isActive('/home') ? 'bg-white text-[#123524] dark:bg-black dark:text-[#80ffba] border-2 border-[#123524] dark:border-[#80ffba]' : 'bg-[#123524] text-white dark:bg-[#80ffba] dark:text-black'
      }`}
    >
      <FaHome />
    </Link>
    
    <Link 
      to='/allorders' 
      className={`flex items-center justify-center w-[3em] h-16 text-3xl ${
        isActive('/allorders') ? 'bg-white text-[#123524] border-2 border-[#123524] dark:bg-black dark:text-[#80ffba] dark:border-[#80ffba]' : 'bg-[#123524] text-white dark:bg-[#80ffba] dark:text-black'
      }`}
    >
      <TbTrack />
    </Link>

    <div>
      <div className={`relative -left-[1px] p-4 rounded-full text-4xl z-10 -mb-[0.4em] ${ isActive('/contact') ? 'bg-white text-[#123524] border border-[#123524] -bottom-[14px] dark:bg-black dark:text-[#80ffba] dark:border-[#80ffba]' : 'bg-[#123524] text-white dark:bg-[#80ffba] dark:text-black'}`}>
        <Link to='/contact'><MdOutlineMarkUnreadChatAlt /></Link>
      </div>
      <div className='bg-[#123524] dark:bg-[#80ffba] h-[7.8em] relative'>
        <div className='w-[4.6em] absolute bg-white dark:bg-[#242424] h-[5em] rounded-full -top-[53px] -left-[3px]' />
      </div>
    </div>

    <Link 
      to='/createorder' 
      className={`flex items-center justify-center w-[3em] h-16 text-3xl ${
        isActive('/createorder') || window.location.pathname.startsWith('/createorder') ? 'bg-white text-[#123524] border-2 border-[#123524] dark:bg-black dark:text-[#80ffba] dark:border-[#80ffba]' : 'bg-[#123524] text-white dark:bg-[#80ffba] dark:text-black'
      }`}
    >
      <FaFolderOpen />
    </Link>
    
    <Link 
      to='/settings' 
      className={`flex items-center justify-center w-[3em] h-16 text-3xl ${
        isActive('/settings') ? 'bg-white text-[#123524] border-2 border-[#123524] dark:bg-black dark:text-[#80ffba] dark:border-[#80ffba]' : 'bg-[#123524] text-white dark:bg-[#80ffba] dark:text-black'
      }`}
    >
      <IoSettings />
    </Link>
  </div>
  )
}

export default Navbar