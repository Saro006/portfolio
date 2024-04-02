import Link from 'next/link'
import React from 'react'

export const SideBar = () => {
    return (
        <div className='fixed left-0 bg-black w-[60px] text-gray-400 h-full text-lg flex flex-col items-center z-20'>
            <div className='font-bold text-2xl py-1 px-2 rounded-lg bg-gray-800 my-4'>A<span className='text-primary'>.</span></div>
            <div className=' w-full'>
                <div>
                    <Link href='/' className='text-up border-primary py-4 flex w-full items-center hover:border-r-2 hover:bg-gray-800 hover:text-white '>About</Link>
                </div>
                <div>
                    <Link href='/' className='text-up border-primary py-4  flex w-full items-center  hover:border-r-2 hover:bg-gray-800 hover:text-white '>Projects</Link>
                </div>
                <div>
                    <Link href='/' className='text-up border-primary py-8 flex w-full items-center  hover:border-r-2 hover:bg-gray-800 hover:text-white '>Exp. </Link>
                </div>
                <div>
                    <Link href='/' className='text-up border-primary py-4 flex w-full items-center  hover:border-r-2 hover:bg-gray-800 hover:text-white '>Contact</Link>
                </div>

            </div>
        </div>
    )
}
