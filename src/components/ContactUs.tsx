import Image from 'next/image'
import React from 'react'
import { IoMdContacts,} from 'react-icons/io'
import con from '../images/ameee/contactBg.jpg';
import { MdCall } from 'react-icons/md';
import { FaHeartbeat } from 'react-icons/fa';
import Testimonial from './TestimonialCard';

const ContactUs = () => {
  return (
    <div className=' w-full'>
       <div className='h-[270px] w-full py-16 justify-center text-center bg-[#fad8d8]'>
            <span className='text-[25px] font-extrabold text-amp_light'>Contact</span>
            <span className='title-element p-0 text-[25px]'><IoMdContacts/>
            <h5 className='text-[40px] font-bold text-white absolute w-[19.1rem] textShadow2 flex text-center top-12'>Contact With Us</h5>
            </span>
            </div>


            <div className='relative mx-28'>
                <Image src={con} alt='' className='h-[210px] my-20  w-[80rem] rounded-full'/>
                <div className="absolute top-0  w-[80rem] h-[210px] bg-black opacity-80 rounded-full"></div>
               
                <div className='absolute py-[4.5rem] px-10 text-white top-0 flex grid-cols-1 items-center justify-between w-full gap-14'>
                <div className='inline '>
                    <span className='text-amp_red font-bold text-[1.1rem]'>Need an Emergency Help?</span><br></br>
                    <span className='text-[35px] font-bold '>We Care About You!</span>
                </div>

                <div className=' flex'>
  <span className="vedio-button">
            <MdCall  className=' absolute  bg-[#e03202]  h-10 p-1 w-10 rounded-full' />
          </span>
          <div className=' font-bold text-[27px] text-amp_red '>+91 8110977771</div>
<div className='ml-10 mr-5'>
    <div className=' h-[3.2rem] btn btn1 hover:bg-amp_blue w-[13.3rem] btn1 text-white ml-5 py-[11px] font-bold rounded-full flex bg-amp_red justify-center text-center '>
    Make Appointment | +
    </div>
</div>
                </div>
               </div>

            </div>

            <div className='h-[700px] bg-[#fad8d8]'>
            <div className=' h-[270px] w-full py-16 justify-center text-center '>
            <span className='text-[25px] font-extrabold text-amp_light'>Testimonial</span>
            <span className='title-element p-0 text-[25px]'><FaHeartbeat/>
            <h5 className='text-[40px] font-bold text-white absolute w-[19rem] textShadow2 flex text-center top-12'>Our Testimonial</h5>
            </span>
            </div>
         
         <div className='mx-28'>
         <Testimonial/>
         </div>

            </div>
            
    </div>
  )
}

export default ContactUs
