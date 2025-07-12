import React from 'react'
import Header from '../Components/Header'
import AboutHome from '../Components/AboutHome'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div className=' bg-gray-100 h-screen'>
      <Header />
      
      <div className='mt-10 p-2 bg-gray-100'>
        
        <div className='h-60 w-full bg-gray-200 mt-4 rounded-lg flex flex-col gap-5'>
        

        <div className='flex w-full h-full'>
            <div className='w-1/2 '>
                <img className='w-full h-full object-cover' src="/Banner2.avif" alt="" />
            </div>

            <div className='text-lg p-4 w-full flex flex-col h-full'>
            
              <div className='flex flex-col'>

                <div className='mb-2'>
                    <p className='text-2xl font-bold flex justify-center'>Introduction</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className=''>Rontec Phone and Computer solutions is a modest company that boasts
                    of highly technical personnel to handle various problems related to electronics and web development.
                    </p>
                    <p className=''>We consider our integrity and work ethic as our greatest strengths
                        which help us to provide reliable and quality services.
                    </p>
                </div>

                {/* <div className='mt-4 flex justify-center'>
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
                </div> */}
                
                

              </div>

            </div>

        </div>

        <div className='flex h-60 w-full bg-white/60 p-2 rounded-lg'>
          <div>
            <div className='flex justify-center items-center py-2'>
              <p className='text-xl font-bold'>Our History</p>
            </div>
            <div className='text-lg py-5'>
              Rontech was established in 2017 as primarily a phone repair business.
              It has since grown to also work on computer repair and we development.
              We believe our many years of experience, reliability and accountability 
              uniquely give us an edge in provision of the above services.
              
            </div>
          </div>
        </div>

        <div className='flex h-60 w-full bg-gray-200 p-2 rounded-lg'>
          <div>
            <div className='flex justify-center items-center py-2'>
              <p className='text-xl font-bold'>Our Values</p>
            </div>
            <div className='text-lg'>
              Here at Rontec we value integrity, reliability, work-ethic, professionalism and 
              continuous improvement of our services to ensure that we provide the best
              and most time efficient services for our customers and suppliers of our 
              spare parts.
              We make sure that all those employed by Rontec are screened extensively to make
              sure that they fit the above values
              
            </div>
          </div>
        </div>

        <div className='mt-100'>
          <Footer />
        </div>

      </div>
        

      </div>

      
    </div>
  )
}

export default About