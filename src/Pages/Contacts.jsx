import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { IoIosCall, IoLogoWhatsapp } from 'react-icons/io'
import { MdMailOutline } from 'react-icons/md'

const Contacts = () => {
  return (
    <div>
        <Header />
        <div className='p-2'>
          <div className='px-2 py-3 mt-10 bg-gray-100 h-[1000px]'>
          <div className='flex flex-col bg-gray-200 px-4 rounded-lg'>
            <p className='font-bold md:text-xl lg:text-xl text-sm py-4'>Contact info</p>
            <div className='md:text-lg lg:text-lg text-sm py-2 flex flex-col gap-3'>
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
          <Footer />
        </div>
    </div>
  )
}

export default Contacts