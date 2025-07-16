import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Rontec2 from '/rontec2.png'

const pages = [
  {id:1 , name:'Home'},
  {id:2 , name:'About Us'},
  {id:3 , name:'Services'},
  {id:4 , name:'Contacts'},
]



const Header = () => {


  return (
    <div className='px-4 md:py-2 lg:py-2 py-2 border-b border-gray-400 flex justify-between bg-red-400 fixed top-0 w-full z-50' >
        
        <div className='hidden md:block lg:block'>
          <Link to={'/'}>
            <img src={Rontec2} alt="rontec" className='h-7 cursor-pointer transition-all'/>
          </Link>
        </div>
       

        <div className='flex text-white'>
        
          <div className='px-2 border-r border-gray-200 hover:bg-gray-200/40 hover:rounded-lg transition-all  md:text-lg lg:text-lg text-sm'>
            <Link to={'/'}>
              <button className={`hover:cursor-pointer font-bold transition-all`}>Home</button>
            </Link>
          </div>
          
          <div className='px-2 border-r border-gray-200 hover:bg-gray-200/40 hover:rounded-lg transition-all  md:text-lg lg:text-lg text-sm'>
            <Link to={'/about'}>
              <button className='font-bold hover:cursor-pointer transition-all'>About Us</button>
            </Link>
          </div>
          <div className='px-2 border-r border-gray-200 hover:bg-gray-200/40 hover:rounded-lg transition-all md:text-lg lg:text-lg text-sm'>
            <Link to={'/services'}>
              <button className='hover:cursor-pointer font-bold transition-all'>Services</button>
            </Link>
          </div>
          <div className='px-2  hover:bg-gray-200/40 hover:rounded-lg transition-all md:text-lg lg:text-lg text-sm'>
            <Link to={'/contacts'}>
              <button className='hover:cursor-pointer font-bold transition-all'>Contacts</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Header