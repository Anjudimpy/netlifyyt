import Input from 'postcss/lib/input';
import React from 'react'
import { GiLockedHeart } from "react-icons/gi";
import Form from 'react-bootstrap/Form';
import { FaUserTie } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMdChatboxes } from 'react-icons/io';

const Appointment = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='xl:h-[700px] lg:h-[700px] sm:h-[75rem]  w-full bgimage '>
    <div className='xl:h-[700px] lg:h-[700px] sm:h-[75rem]  w-full bgTransparent py-16'>
    <div className='text-center'>
            <span className='xl:text-[20px] lg:text-[20px] sm:text-[15px] shadow-lg textShadow font-extrabold text-white '>Appointment</span>
            <span className='title-element p-0 text-[25px]'><GiLockedHeart/></span>
            <h5 className='xl:text-4xl lg:text-4xl sm:text-[25px] font-bold text-white textShadow1'>Book Appointment</h5>
        </div>
{/*  form */}

<div className='flex justify-center'>
    <div className='xl:flex lg:flex sm:inline   justify-center items-center  py-10'>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"
         className='xl:flex lg:flex sm:m-3 xl:p-3 lg:p-3 outline outline-1 outline-slate-500 rounded-md h-auto  xl:w-[62%] lg:w-[62%] sm:w-[400px] xs:mx-2 xs:w-[300px]'>
           <div className='p-[25px]'>
          <Form>
         <div className='xl:flex'>
         <input 
  className='sm:w-[343px] xs:w-[238px]   text-white m-2 px-3 h-10 bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
  type='text'
  placeholder='First Name'
/>
<input 
  className='sm:w-[343px] xs:w-[238px] text-white m-2 px-3 h-10  bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
  type='text'
  placeholder='Last Name'
/>
         </div>
<input 
  className='sm:w-[343px] xs:w-[238px] text-white m-2 px-3 h-10 bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
  type='text'
  placeholder='Phone Number'
/>
<input 
  className='sm:w-[343px] xs:w-[238px] text-white px-3 h-10 m-2 bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
  type='text'
  placeholder='Email'
/>


<textarea className='xl:w-[705px] lg:w-[705px] sm:w-[343px] xs:w-[238px] mb-5 text-white px-3 h-32 m-2 mt-3 bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
placeholder='Enter Message'
/><br></br>
            <div data-aos="fade-up" data-aos-duration="5000" data-aos-anchor-placement="top-bottom">
            <span  className='text-white py-[10px]  text-[18px] font-semibold px-4 bg-amp_red rounded-3xl'>
              Send Message
            </span>
            </div>
            </Form>   


      
  
           </div>
           <div>
            
           </div>
        </div>
        <div data-aos="flip-left" data-aos-duration="2000"   data-aos-easing="ease-out-cubic"  className=' py-[44px] outline outline-1 outline-slate-500 rounded-md xl:mx-3  xl:h-[415px] sm:w-[400px] xs:w-[300px] xs:mx-2 xs:mt-2 sm:mx-3 lg:w-[32%] md:w-[32%] xl:w-[32%]'>
            <span className='flex items-center justify-center '>
<FaUserTie className='items-center border text-amp_red p-1 bg-white border-amp_red rounded-full  h-[120px] w-[120px] animate-bounce transition-transform ease-in-out duration-100 justify-center text-[30px]'/>
            </span>
            <span className='flex py-4 text-[35px] font-bold text-white items-center justify-center'>
            <IoCallSharp className='text-amp_red xl:text-[40px] xs:text-[30px] mt-3'/> <span className='xs:text-[30px]'>
              +91 8111077701
            </span>
              </span>
              <p className='text-sm px-2 text-justify mb-[19px]  text-white'>
              Velit libero repellendus, amet unde excepturi deleniti pariatur perspiciatis ipsam similique rerum, commodi eius? Voluptatem!
            </p>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom" className='w-full flex justify-center text-center'>
            <span className='text-white flex   py-[10px] text-[20px] font-semibold px-4 bg-amp_blue rounded-3xl'>
              Live Chat | <span>
            <IoMdChatboxes className='text-white text-[35px] pl-2'/>
            </span>
         
            
            </span>   </div>
        </div>
    </div>
</div>
       
      
    </div>
    </div>
    </div>
  )
}

export default Appointment
