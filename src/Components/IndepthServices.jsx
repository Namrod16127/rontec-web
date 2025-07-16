import React from 'react'

const IndepthServices = () => {
  return (
    
    <div className='h-115 md:h-70 lg:h-70 w-full bg-gray-300 mt-3 p-2 rounded-lg'>

      <div className='py-2 flex justify-center items-center'>
        <p className='md:text-2xl lg:text-2xl text-sm font-bold'>Indepth Services</p>
      </div>

      <div className='flex flex-col md:flex-row w-full'>
        
        <div className='bg-gray-200 w-full md:w-1/3 p-2 text-lg'>
          <p className='font-semibold md:text-lg lg:text-lg text-sm'>Phone services</p>
          <div className='text-sm md:text-lg'>
            <p>- Unlocking</p>
            <p>- Flashing</p>
            <p>- Screen replacement</p>
            <p>- Charging port replacement</p>
            <p>- Motherboard repair and replacement</p>
          </div>
        </div>

        <div className='bg-gray-100 w-full md:w-1/3 p-2 text-lg'>
          <p className='font-semibold md:text-lg lg:text-lg text-sm'>Computer services</p>
          <div className='text-sm md:text-lg'>
            <p>- Operating system replacement</p>
            <p>- Virus removal</p>
            <p>- Motherboard repair</p>
            <p>- Installing programs</p>
            
          </div>
        </div>

        <div className='bg-gray-200 w-full md:w-1/3  p-2 text-lg'>
          <p className='font-semibold md:text-lg lg:text-lg text-sm'>Web development services</p>
          <div className='text-sm md:text-lg'>
            <p>- Frontend development</p>
            <p>- Backend development</p>
            <p>- API maintenance</p>
            <p>- Improving websites' responsiveness</p>
            <p>- Data management</p>
          </div>
        </div>

      </div>
</div>

  )
}

export default IndepthServices