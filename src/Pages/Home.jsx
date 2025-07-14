import React from 'react'
import Header from '../Components/Header'
import ServiceComponent from '../Components/ServiceComponent'
import ServicesComponent from '../Components/ServicesComponent'
import ImageSlider from '../Components/ImageSlider'
import AboutHome from '../Components/AboutHome'
import Footer from '../Components/Footer'
import IndepthServices from '../Components/IndepthServices'
import Banner1 from '/Banner1.avif'
import Banner2 from '/Banner2.avif'
import Banner3 from '/Banner3.avif'

const Home = () => {

  const IMAGES = [
     Banner1,
     Banner2,
     Banner3
  ]

  return (
    <div className='mt-11'>
      <div className=''>
      <Header />

      
      <div className='bg-gray-200 p-2'>
        <div className='flex items-center justify-center'>
          <p className='text-2xl text-gray-800'><span className='font-bold'>RON<span className='text-red-500'>tec</span></span> Phone & Computer Solutions</p>
        </div>
        <div className='p-3 flex flex-col gap-10'>
          <ImageSlider images={IMAGES} />

          <AboutHome />

          <div className='h-70 w-full bg-gray-300 mt-5 p-2 rounded-lg'>
            <div className='p-2 flex items-center justify-center'>
              <p className='text-xl font-bold py-4'>Services we provide</p>
            </div>


            <div className='flex items-center justify-center'>
            
              <div className='flex justify-between w-full'>
                

                
                  <div className='flex h-full w-full items-center justify-center'>
                    <ServicesComponent />
                 
                  </div>
                
              </div>
              
            </div>
          </div>

          <div className='h-40 w-full bg-gray-100 mt-3'>
            <div className='flex flex-col justify-center items-center'>
              <div className='p-4 text-2xl font-bold'>Why you should come to us</div>
              <div className='text-lg px-3'>
                We are techinical and reliable in providing our services which is because
                of our many years of experience in this business. We get only the best parts
                for our repair business and have reliable developers for web development.
                We deliver quality services at affordable prices.
              </div>
            </div>
          </div>

          <IndepthServices />


        </div>
      </div>
      <Footer />
    </div>

    
    </div>
  )
}

export default Home