import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosCall, IoLogoWhatsapp } from 'react-icons/io'
import { MdMailOutline } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='h-75 w-full mb-2 relative'>
        <img className='h-full w-full object-cover' src="/Banner1.avif" alt="" />  
        <div className='bg-red-500/70 h-full w-full absolute top-0'>

          <div className='w-full flex h-full py-5 px-10 gap-10'>

            <div className='w-1/4 border-r-2 border-white/30 px-2'>
              <div className='mb-4'>
                <img className='h-10' src="/rontec2.png" alt="" />
                <p className='text-white font-bold text-lg'>Rontec Phone and Computer Solutions</p>
              </div>
              <div className='text-white justify-center'>
                <p className=''>
                  Rontec Phone and Computer solutions is a modest company that boasts
                of highly technical personnel to handle various problems 
                related to electronics and web development.
                </p>
                
              </div>
            </div>

            <div className='flex gap-5 w-3/4 justify-between px-20'>

              <div className='text-white flex flex-col gap-3'>
                <p className='text-xl font-bold'>Browse</p>
                <div className='flex flex-col gap-2'>

                  <div>
                    <Link to={'/'}>
                      <button className='hover:underline hover:cursor-pointer transition-all'>Home</button>
                    </Link>
                  </div>

                  <div>
                    <Link to={'/about'}>
                      <button className='hover:underline hover:cursor-pointer transition-all'>About Us</button>
                    </Link>
                  </div>

                  <div>
                    <Link to={'/services'}>
                      <button className='hover:underline hover:cursor-pointer transition-all'>Services</button>
                    </Link>
                  </div>

                  <div>
                    <Link to={'/contacts'}>
                      <button className='hover:underline hover:cursor-pointer transition-all'>Contacts</button>
                    </Link>
                  </div>

                </div>
              </div>

              <div className='text-white flex flex-col gap-3'>
                <p className=' text-xl font-bold'>Services</p>

                <div className='flex flex-col gap-2'>
                  <p>- Phone repair</p>
                  <p>- Computer repair</p>
                  <p>- Web development</p>
                </div>
              </div>

              <div className='text-white flex flex-col gap-2'>
                <p className='text-xl font-bold'>Contacts</p>
                <div className='py-2 flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <span>
                      <IoLogoWhatsapp className='text-green-500 h-7 w-7' />
                    </span>
                    0704148111
                  </div>
    
                  <div className='flex items-center gap-2'>
                    <span>
                      <IoIosCall className='text-blue-400 h-7 w-7' />
                    </span>
                    0394868144
                  </div>
    
                  <div className='flex items-center gap-2'>
                    <span>
                      <MdMailOutline className='h-6 w-6' />
                    </span>
                    rollntopagency@gmail.com
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