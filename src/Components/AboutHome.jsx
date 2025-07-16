import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Banner2 from '/Banner2.avif'

const AboutHome = () => {
  return (
    <div className='h-75 w-full bg-gray-300 mt-5 rounded-lg'>
        

        <div className='flex w-full h-full'>
            <div className='w-1/2 hidden md:block '>
                <img className='w-full h-full object-cover' src={Banner2} alt="" />
            </div>

                <div className='text-lg p-4 w-full flex flex-col h-full'>
                
                    <div className='flex flex-col'>

                        <div className='mb-2'>
                            <p className='text-lg md:text-2xl lg:text-2xl font-bold flex justify-center'>About Us</p>
                        </div>

                        <div className='flex flex-col gap-2 text-sm md:text-lg lg:text-lg'>
                            <p className=''>Rontec Phone and Computer solutions is a modest company that boasts
                            of highly technical personnel to handle various problems related to electronics and web development.
                            </p>
                            <p className=''>We consider our integrity and work ethic as our greatest strengths
                                which help us to provide reliable and quality services.
                            </p>
                        </div>

                        <div className='mt-4 flex justify-center'>
                            <Link to={'/about'}>
                                <button className='px-4 py-2 text-sm bg-gray-300 hover:bg-gray-100 transition-all rounded-lg font-semibold border'>
                                    <div className='flex items-center'>
                                        <div className='mr-2'>
                                            Click Here to Learn more
                                        </div>
                                        <div>
                                            <FaArrowRightLong />
                                        </div>
                                    </div>
                                </button>

                            </Link>
                        </div>

                    </div>

                </div>

        </div>
    </div>
  )
}

export default AboutHome