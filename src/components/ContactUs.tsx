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
       <div className='xl:h-[270px] lg:h-[270px] sm:h-[180px] xs:h[180px] w-full xl:py-16 lg:py-16 sm:py-10 xs:py-10 justify-center text-center bg-[#fad8d8]'>
            <span className='xl:text-[25px] lg:text-[25px] sm:text-[15px] xs:text-[15px] font-extrabold text-amp_light'>Contact</span>
            <span className='title-element p-0 text-[25px]'><IoMdContacts/>
            <h5 className='xl:text-[40px] lg:text-[40px] sm:text-[25px] font-bold text-white absolute xl:w-[19.1rem] lg:w-[19rem] sm:w-[12rem] xs:w-[10.5rem] xs:text-[22px] textShadow2 flex text-center top-12'>Contact With Us</h5>
            </span>
            </div>


            <div className='relative'>
                <Image src={con} alt='' className='xl:h-[210px] lg:h-[210px] sm:h-[150px] xs:h-[150px] my-20 md:w-[1250px] sm:w-[24.5rem] xs:w-[18.5rem] rounded-full'/>
                <div className="absolute top-0  md:w-[1250px] sm:w-[24.5rem] xs:w-[18.5rem xl:h-[210px] lg:h-[210px] sm:h-[150px] xs:h-[150px] bg-black opacity-80 rounded-full"></div>
               
                <div className='absolute xl:py-[4.5rem] lg:py-[4.5rem] sm:py-[1.5rem] xs:py-[1.8rem]  lg:px-10 xl:px-12 sm:px-7 text-white top-0 xl:flex items-center justify-between w-full lg:gap-14 xl:gap-14'>
                <div className='xs:px-11'>
                <div className='inline '>
                    <span className='text-amp_red font-bold xl:text-[1.1rem] lg:text-[1.1rem] sm:text-[15px]'>Need an Emergency Help?</span><br></br>
                    <span className='xl:text-[35px]  lg:text-[35px] font-bold '>We Care About You!</span>
                </div>
                </div>

                <div className='flex sm:mt-2 sm:-ml-3  xs:ml-10 xs:mt-1 '>
  <span className="vedio-button sm:text-[15px]">
            <MdCall  className=' absolute  bg-[#e03202]   h-10 p-1 w-10 rounded-full' />
          </span>
          <div className=' font-bold   xl:text-[27px] lg:text-[27px] text-amp_red sm:text-[16px] sm:mt-0.5 '>+918110977771</div>
<div className='xl:ml-10 xl:mr-5 lg:ml-10  lg:mr-5 xl:flex  xs:hidden'>
    <div className=' xl:h-[3.2rem] lg:h-[3.2rem] sm:text-[10px] xl:text-[1rem] lg:text-[1rem] sm:w-[8.4rem] btn btn1 xs:mt-1 sm:mt-1 hover:bg-amp_blue lg:w-[13.3rem] xl:w-[13.3rem] btn1 text-white lg:ml-5 lg:py-[11px] xl:ml-5 sm:ml-6 xl:py-[11px] font-bold rounded-full flex bg-amp_red justify-center text-center '>
    Make Appointment | +
    </div>
</div>
<div className='absolute bottom-2 mx-16 xl:hidden xs:flex '>
    <div className='  hover:bg-amp_blue  text-[8px] w-[7rem] btn h-[2rem] py-2 text-white font-bold rounded-full flex bg-amp_red justify-center text-center '>
    Make Appointment | +
    </div>
</div>
                </div>
               </div>

            </div>

            <div className='xl:h-[700px] lg:h-[700px] sm:h-[500px] xs:h-[500px] bg-[#fad8d8]'>
            <div className=' xl:h-[270px] lg:h-[270px] sm:h-[190px] xs:h-[190px] w-full xl:py-16 lg:py-16 sm:py-10 xs:py-10 justify-center text-center '>
            <span className='xl:text-[25px] lg:text-[25px]  sm:text-[15px] xs:text-[15px]   font-extrabold text-amp_light'>Testimonial</span>
            <span className='title-element p-0 text-[25px]'><FaHeartbeat/>
            <h5 className='xl:text-[40px] lg:text-[40px] sm:text-[25px]  xs:text-[25px]  font-bold text-white absolute xl:w-[19rem] lg:w-[19rem] sm:w-[11.7rem] xs:w-[11.7rem] textShadow2 flex text-center top-12'>Our Testimonial</h5>
            </span>
            </div>
         
         <div className='xl:mx-24 lg:mx-24 sm:mx-2'>
         <Testimonial/>
         </div>

            </div>
            
    </div>
  )
}

export default ContactUs
