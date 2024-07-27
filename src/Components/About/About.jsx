import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div
        className='h-screen bg-blue-500 flex justify-center items-center'
    >
        
        <div className='flex justify-between items-center bg-slate-500 p-6 w-[80%]'>
            <div className='w-[50%] bg-red-500'>
                <ul>
                    <li className='p-5'>
                        <Link to="front">Front</Link>
                    </li>
                    <li className='p-5'>
                        <Link to="back">Back</Link>
                    </li>
                </ul>
            </div>
            <div className='w-[50%] bg-blue-400'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
