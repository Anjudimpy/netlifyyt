import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const about = () => {
  return (
    <div className='min-h-full w-full'>
    <div>
      <Image src={'/bg.webp'} alt='' width={3000} height={3000} className='h-[19rem] w-full'/>
    </div>
    </div>
  )
}

export default about;
