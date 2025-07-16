import React from 'react'
import ServiceComponent from './ServiceComponent'
import { HiMiniComputerDesktop } from 'react-icons/hi2'
import { MdPhonelinkSetup } from 'react-icons/md'
import { TiHtml5 } from 'react-icons/ti'

const services = [
  { id:1, 
    name:'Phone repair', 
    Icon:MdPhonelinkSetup,
    color:'red',
    description:' We deal with all phone hardware and software issues',
  },
  { id:2, 
    name:'Computer repair', 
    Icon:HiMiniComputerDesktop,
    color:'green',
    description:' We deal with all computer hardware and software issues',
  },
  { id:1, 
    name:'Web development', 
    Icon:TiHtml5,
    color:'blue',
    description:' We develop all kinds of websites for business and personal use',
  },
]

const ServicesComponent = () => {
   
  return (
    <div className='flex flex-col md:flex-row lg:flex-row h-70 w-full items-center justify-between gap-3'>
        {
            services.map((service) => (
                <ServiceComponent name={service.name} description={service.description} Icon={service.Icon} color={service.color} />
            ))
        }
        
    </div>
  )
}

export default ServicesComponent