import Image from 'next/image'
import React from 'react'

const navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'></div>
        <Image src="" alt='/'/>
    </div>
  )
}

export default navbar