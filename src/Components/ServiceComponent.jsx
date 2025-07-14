import React, { useState } from 'react'

const ServiceComponent = (props) => {

  return (
    <div>
      <div className='h-full px-2 w-full bg-gray-200 border border-gray-500 rounded-sm'>
        
        <div className='flex flex-col items-center h-full w-full justify-center'>
          <p className='font-bold'>{props.name}</p>
          
          <div className='flex items-center gap-3'>
            <div className='h-20 w-20'>
              <div className='flex items-center justify-center h-full'>
                   <props.Icon className={`h-15 w-15 text-red-500 `}/>
               </div>
            </div>

            <div>{props.description}</div>
          </div>
               
         </div>
      </div>
    
    </div>

  //   {
      
  //     services.map((service) => (
        
  //       <div key={service.id} className='flex items-center w-full'>
          
  //           <div className='h-30 w-30 rounded-full bg-gray-400'>
  //             <div className='flex items-center justify-center h-full'>
  //                 {/* <MdPhonelinkSetup className='w-20 h-20' /> */}
  //                 {/* <TiHtml5 className='w-20 h-20' /> */}
  //                 {Icon === service.icon}
  //                 <Icon className="w-20 h-20" />
  //             </div>
  //         </div>
  //             <p>{service.name}</p>
  //       </div>
  //         ))
  //     }
  )
}

export default ServiceComponent