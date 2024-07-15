import Input from 'postcss/lib/input';
import React from 'react'
import { GiLockedHeart } from "react-icons/gi";
import Form from 'react-bootstrap/Form';
import { FaUserTie } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoMdChatboxes } from 'react-icons/io';

const Appointment = () => {
  return (
    <div className='h-[700px] w-full bgimage '>
    <div className='h-[700px] w-full bgTransparent py-16'>
    <div className='text-center'>
            <span className='text-[20px] shadow-lg textShadow font-extrabold text-white '>Appointment</span>
            <span className='title-element p-0 text-[25px]'><GiLockedHeart/></span>
            <h5 className='text-4xl font-bold text-white textShadow1'>Book Appointment</h5>
        </div>
{/*  form */}

<div>
    <div className='flex grid-cols-1 gap-4  justify-center items-center px-28 py-10'>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='flex grid-cols-1 p-2 outline outline-1 outline-slate-500 rounded-md h-auto w-[65%]'>
           <div className='p-[25px]'>
          <Form>
             <input 
  className='w-[343px] text-white  px-3 h-10 m-2 bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
  type='text'
  placeholder='First Name'
/>
<input 
  className='w-[343px] text-white px-3 h-10 m-3 bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
  type='text'
  placeholder='Last Name'
/>
<input 
  className='w-[343px] text-white  px-3 h-10 m-2 bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
  type='text'
  placeholder='Phone Number'
/>
<input 
  className='w-[343px] text-white px-3 h-10 m-3 bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
  type='text'
  placeholder='Email'
/>


<textarea className='w-[720px] mb-5 text-white px-3 h-32 m-2 bg-transparent outline outline-1 rounded-md outline-gray-300 placeholder:text-gray-300'
placeholder='Enter Message'
/><br></br>
            <div data-aos="fade-up" data-aos-duration="5000" data-aos-anchor-placement="top-bottom">
            <span  className='text-white py-[10px] text-[18px] font-semibold px-4 bg-amp_red rounded-3xl'>
              Send Message
            </span>
            </div>
            </Form>   


      
  
           </div>
           <div>
            
           </div>
        </div>
        <div data-aos="fade-left"  data-aos-duration="500" className=' py-[44px] outline outline-1 outline-slate-500 rounded-md  h-[425px] w-[32%] '>
            <span className='flex items-center justify-center '>
<FaUserTie className='items-center border text-amp_red p-1 bg-white border-amp_red rounded-full  h-[120px] w-[120px] animate-bounce transition-transform ease-in-out duration-100 justify-center text-[30px]'/>
            </span>
            <span className='flex py-4 text-[35px] font-bold text-white items-center justify-center'>
            <IoCallSharp className='text-amp_red text-[40px] mt-3'/> <span>
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
  )
}

export default Appointment
