import React from 'react'
import { IoMdContacts } from 'react-icons/io'

const ContactUs = () => {
  return (
    <div>
       <div className='h-[600px] w-full py-20 justify-center text-center'>
            <span className='text-[25px] font-extrabold text-amp_light'>Funfact</span>
            <span className='title-element p-0 text-[25px]'><IoMdContacts/>
            <h5 className='text-5xl font-bold text-white absolute w-[17rem] textShadow2 flex text-center top-12'>Our Funfact</h5>
            </span>
        
        </div>
    </div>
  )
}

export default ContactUs
