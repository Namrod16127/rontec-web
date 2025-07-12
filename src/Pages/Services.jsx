import React from 'react'
import Header from '../Components/Header'
import ServicesComponent from '../Components/ServicesComponent'
import IndepthServices from '../Components/IndepthServices'
import Footer from '../Components/Footer'

const Services = () => {
  return (
    <div>
      <Header />
      <div className='px-2 py-3 mt-9 h-[1400px]'>
        <div className='p-4 bg-gray-100 h-full'>
          <div className='bg-gray-200 h-50 flex flex-col rounded-lg'>
            <div className='flex justify-center py-4'>
              <p className='text-xl font-bold'>Introduction to our Services</p>
            </div>
            <div className='text-lg px-4'>
              We mainly provide phone repair, computer repair and web development services to our various customers.
              We provide other services for other electronics but the above three are our main services.
              We have provided these services for many years and we are very confident in our employee's
              skills.

            </div>
          </div>

          <div className='mt-20'>
            <ServicesComponent />
          </div>

          <div className='mt-20'>
            <IndepthServices />
          </div>
        </div>
        <div></div>

        <Footer />
      </div>
    </div>
  )
}

export default Services