import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

const Notfound = () => {
  return (
    <div className='mt-10'>
        <Header />
        <div className='flex flex-col h-screen mt-[-80px] items-center justify-center'>
            <div className='text-2xl font-bold'>404 page not found</div>
            <div className='mt-8'>
                <Link to={"/"}>
                <button className='bg-slate-200 px-4 py-2 border-2 border-slate-200 rounded-2xl hover:border-slate-800 hover:bg-slate-300'>Go back to Home page</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Notfound