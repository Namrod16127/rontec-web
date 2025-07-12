import React, { useEffect, useState } from 'react'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'



const ImageSlider = ({ images }) => {

  const [currentImage, setCurrentImage] = useState(0)

  function showNextImage (){
    
    setCurrentImage(currentImage === images.length -1 ? 0 : currentImage + 1)
  }

  function showPrevImage (){
    setCurrentImage(currentImage == 0 ? images.length - 1: currentImage - 1)
  }

  useEffect(() => {

    setTimeout(() => {
      setCurrentImage(currentImage === images.length -1 ? 0 : currentImage + 1)
    }, 50000)

    console.log("The current image is:", currentImage)

  }, [currentImage])
  
  return (
    <div>
      <div className='flex h-70 w-full bg-gray-200 relative'>
        <img src={images[currentImage]} alt="" className='h-70 w-full object-cover transition-all' />

        
        <div className='absolute flex flex-col items-center p-2 w-full h-full bg-white/20 gap-2'

        >
          <p className='text-lg font-bold text-black'>Looking for phone repair, computer maintenance or web development services</p>
          <Link to={'/contacts'}>
            <button className='bg-black/50 font-bold text-gray-200 px-2 py-1 rounded-lg hover:bg-black/70 transition-all
                                cursor-pointer'
            >
              Contact us
            </button>
          </Link>
        </div>
        <button className='block absolute top-0 bottom-0 p-1 cursor-pointer left-0 hover:{{}}
                          bg-black opacity-15 hover:opacity-30 transition-all'
                onClick={showPrevImage}
        >
          <MdArrowLeft  className='h-10 w-10 stroke-1 stroke-gray-300 text-gray-500' />
        </button>
        <button className='block absolute top-0 bottom-0 p-1 cursor-pointer right-0 hover:{{}}
                          bg-black opacity-15 hover:opacity-30 transition-all'
                onClick={showNextImage}
        >
          <MdArrowRight className='h-10 w-10 stroke-1 stroke-white text-black' />
        </button>
      </div>
    </div>
  )
}

export default ImageSlider