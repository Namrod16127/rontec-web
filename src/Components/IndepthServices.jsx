import React from 'react'

const IndepthServices = () => {
  return (
    
    <div className='h-65 w-full bg-gray-300 mt-3 p-2 rounded-lg'>

      <div className='py-2 flex justify-center items-center'>
        <p className='text-2xl font-bold'>Indepth Services</p>
      </div>

      <div className='flex w-full'>
        
        <div className='bg-gray-200 w-1/3 p-2 text-lg'>
          <p className='font-semibold'>Phone services</p>
          <div>
            <p>- Unlocking</p>
            <p>- Flashing</p>
            <p>- Screen replacement</p>
            <p>- Charging port replacement</p>
            <p>- Motherboard repair and replacement</p>
          </div>
        </div>

        <div className='bg-gray-100 w-1/3 p-2 text-lg'>
          <p className='font-semibold'>Computer services</p>
          <div>
            <p>- Operating system replacement</p>
            <p>- Virus removal</p>
            <p>- Motherboard repair</p>
            <p>- Installing programs</p>
            
          </div>
        </div>

        <div className='bg-gray-200 w-1/3 p-2 text-lg'>
          <p className='font-semibold'>Web development services</p>
          <div>
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