import React, { useState } from 'react'

const ServiceComponent = (props) => {

  return (
    <div>
      <div className='h-full md:h-40 lg:h-40 px-2 w-full bg-gray-200 border border-gray-500 rounded-sm'>
        
        <div className='flex flex-col items-center h-full w-full justify-center'>
          <p className='font-bold text-sm md:text-lg lg:text-lg'>{props.name}</p>
          
          <div className='flex items-center gap-3'>
            <div className='h-20 w-20'>
              <div className='flex items-center justify-center h-full'>
                   <props.Icon className={`h-7 w-7 md:h-15 md:w-15 text-red-500 `}/>
               </div>
            </div>

            <div className='text-sm md:text-lg lg:text-lg'>{props.description}</div>
          </div>
               
         </div>
      </div>
    
    </div>

  )
}

export default ServiceComponent