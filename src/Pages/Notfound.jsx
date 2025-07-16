import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

const Notfound = () => {
  return (
    <div className='mt-10'>
        <div className='truncate'>
          <Header />
        </div>
        <div className='flex flex-col h-screen mt-[-80px] items-center justify-center'>
            <div className='md:text-2xl lg:text-2xl text-lg font-bold'>404 page not found</div>
            <div className='mt-8'>
                <Link to={"/"}>
                <button className='bg-slate-200 px-4 py-2 border-2 border-slate-200 rounded-2xl hover:border-slate-800
                                 hover:bg-slate-800 text-sm md:text-lg lg;text-lg transition-all hover:text-white'
                >
                  Go back to Home page
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Notfound