import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-[#4391DA]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 text-[#ff0303] text-xl font-bold'>
        <div>
            <ul>
                <Link href='/'>Home </Link>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar