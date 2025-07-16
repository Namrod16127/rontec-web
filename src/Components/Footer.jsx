import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosCall, IoLogoWhatsapp } from 'react-icons/io'
import { MdMailOutline } from 'react-icons/md'
import Banner1 from '/Banner1.avif'
import Rontec2 from '/rontec2.png'

const Footer = () => {
  return (
    <div className='h-75 w-full mb-2 relative'>
        <img className='h-full w-full object-cover' src={Banner1} alt="" />  
        <div className='bg-red-500/70 h-full w-full absolute top-0'>

          <div className='w-full flex flex-col md:flex-row h-full md:py-5 md:px-10 gap-3 md:gap-10 lg:gap-10'>

            <div className='w-full md:w-1/4 border-none md:border-r-2 md:border-white/30 px-2'>
              <div className='md:mb-4 lg:mb-4 flex flex-col  md:flex-none lg:flex-none items-center'>
                <img className='h-7 md:h-10' src={Rontec2} alt="rontec" />
                <p className=' text-white font-bold text-sm md:text-lg'>Rontec Phone and Computer Solutions</p>
              </div>
              <div className='text-white justify-center hidden md:block lg:block'>
                <p className=''>
                  Rontec Phone and Computer solutions is a modest company that boasts
                of highly technical personnel to handle various problems 
                related to electronics and web development.
                </p>
                
              </div>
            </div>

            <div className='flex gap-2 md:gap-5 lg;gap-5 w-screen md:w-3/4 lg:w-3/4 px-4 justify-between md:px-20 lg:px-20'>

              <div className='text-white flex flex-col gap-3 w-1/3'>
                <p className='md:text-xl lg:text-xl text-sm font-bold'>Browse</p>
                <div className='flex w-1/3 flex-col gap-2'>

                  <div>
                    <Link to={'/'}>
                      <button className='md:text-xl lg:text-xl text-[13px] hover:underline hover:cursor-pointer transition-all'>Home</button>
                    </Link>
                  </div>

                  <div>
                    <Link to={'/about'}>
                      <button className='md:text-xl lg:text-xl text-[13px] hover:underline hover:cursor-pointer transition-all'>About Us</button>
                    </Link>
                  </div>

                  <div>
                    <Link to={'/services'}>
                      <button className='md:text-xl lg:text-xl text-[13px] hover:underline hover:cursor-pointer transition-all'>Services</button>
                    </Link>
                  </div>

                  <div>
                    <Link to={'/contacts'}>
                      <button className='md:text-xl lg:text-xl text-[13px] hover:underline hover:cursor-pointer transition-all'>Contacts</button>
                    </Link>
                  </div>

                </div>
              </div>

              <div className='text-white w-1/3 flex flex-col gap-3'>
                <p className='md:text-xl lg:text-xl text-sm font-bold'>Services</p>

                <div className='flex flex-col gap-2 md:text-xl lg:text-xl text-[13px]'>
                  <p>- Phone repair</p>
                  <p>- Computer repair</p>
                  <p>- Web development</p>
                </div>
              </div>

              <div className='text-white flex flex-col gap-2 w-1/3 truncate'>
                <p className='md:text-xl lg:text-xl text-sm font-bold'>Contacts</p>
                <div className='py-2 flex flex-col gap-1 md:text-xl text-[12px]'>
                  <div className='flex items-center md:gap-2 lg:gap-2 gap-1'>
                    <span>
                      <IoLogoWhatsapp className='text-green-500 h-4 md:h-7 w-4 md:w-7' />
                    </span>
                    0704148111
                  </div>
    
                  <div className='flex items-center md:gap-2 lg:gap-2 gap-1'>
                    <span>
                      <IoIosCall className='text-blue-400 h-4 md:h-7 w-4 md:w-7' />
                    </span>
                    0394868144
                  </div>
    
                  <div className='flex items-center md:gap-2 lg:gap-2 gap-1 text-[10px]'>
                    <span>
                      <MdMailOutline className=' h-4 md:h-6 w-4 md:w-6' />
                    </span>
                    <a href="rollntopagency@gmail.com">
                      rollntopagency@gmail.com
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default Footer