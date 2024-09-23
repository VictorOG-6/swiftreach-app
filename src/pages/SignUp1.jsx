import { React, useState } from 'react'
import mapimgdark from '/mapimgdark.png'
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BiTargetLock } from "react-icons/bi";
import { MdOutlineHistory, MdBusinessCenter } from "react-icons/md";
import { Link } from 'react-router-dom';

const SignUp1 = () => {
    const [selectLocation, setSelectLocation] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center h-screen overflow-hidden'>
        <div className='-mt-16'>
            <img src={mapimgdark} alt="map-img" />
        </div>
        <div className='text-center mt-12'>
            <h1 className='text-lg font-bold'>Grant Current Location</h1>
            <h5>This lets us estimate the delivery distance and know which drone is best for you</h5>
        </div>
        <div className='mt-8'>
            <Link to='/signup2' className='w-[90vw] bg-black text-white p-4 flex items-center justify-center rounded-3xl'>
                <h1>Use Current Location</h1>
            </Link>
        </div>
        <div className='mt-4'>
            <button onClick={() => setSelectLocation(true)} className='w-[90vw] bg-[#12352420] text-black p-4 flex items-center justify-center rounded-3xl'>
                <h1>Enter manually</h1>
            </button>
        </div>        
        <div className={`w-screen h-screen absolute bottom-0 bg-[#00000050] flex items-end transition-transform duration-500 ${selectLocation ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className='bg-white h-[93vh] w-screen rounded-t-3xl p-4'>
                <FaArrowLeft onClick={() => setSelectLocation(false)}/>
                <div className='mt-4 border-b border-black-900'>
                    <h1 className='font-bold mb-4'>Search for Location</h1>
                    <div className='bg-[#12352420] flex items-center p-2 mb-4'>
                        <span><IoSearch/></span>
                        <input className='pl-2' style={{ background: 'none'}} type="search" placeholder='e.g. BTM layout'/>
                    </div>
                    <Link to='/signup2' className='flex items-center gap-2 mb-4 text-black'>
                        <span className='text-2xl'><BiTargetLock/></span>
                        <h3 className='font-bold'>Use current location</h3>
                    </Link>
                </div>
                <div className='pt-8 border-b border-black-900'>
                    <h1 className='font-bold mb-4'>Recent Searches</h1>
                    <div className='flex flex-col gap-2 mb-4'>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'><MdOutlineHistory/></span>
                            <div>
                                <h3 className='font-bold'>Good Beach</h3>
                                <h5>Victoria Island, Lagos</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'><MdOutlineHistory/></span>
                            <div>
                                <h3 className='font-bold'>Bode Thomas</h3>
                                <h5>Bode Thomas, Surulere, Lagos</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <h1 className='font-bold mb-4'>Saved address</h1>
                    <div className='flex flex-col gap-2 mb-4'>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'><MdBusinessCenter/></span>
                            <div>
                                <h3 className='font-bold'>Office</h3>
                                <h5>Block 77, Mile 12, Gwarinpa, Abuja</h5>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'><FaHome/></span>
                            <div>
                                <h3 className='font-bold'>Home</h3>
                                <h5>12, Floor3, Magodo Phase 1, Lagos</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                
    </div>
  )
}

export default SignUp1