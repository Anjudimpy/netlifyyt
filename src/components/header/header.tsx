import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { MdCall, MdEmail } from 'react-icons/md';
import { SiWechat } from 'react-icons/si';

const Header = () => {
  return (
    <div className='p-0 overflow-hidden '>
      <div className=' hidden text-white h-16 w-full  bg-amp_blue  lg:flex flex-col-1 px-10 py-3 font-semibold lg:text-sm md:text-xs lgl:text-[17px]  justify-between items-center'>
        <div className='flex flex-col-1 items-center justify-center'>
            <div className='px-2'>Find Near Us</div>
            <span className='px-2'>
                
               <select className="text-black py-1 px-3 w-[122.5px] rounded-2xl border border-white text-base hover:border-amp_red transition-transform duration-300 outline-none hover:outline-none">
  <option className='text-white'>Paddapai</option>
</select>

   </span>
   <span className='absolute left-[252px]'>  <IoMdArrowDropdownCircle className='text-4xl text-red-500'/></span>
        </div>

        <div className='felx flex-col '>
        <div  className=' flex-2 inline-flex items-center  cursor-pointer'>
        <span className='group flex'>
        <span className=' text-2xl items-center justify-center  text-amp_red group-hover:animate-bounce duration-300'><MdCall/></span>
        <p className="font-base items-center justify-center px-2"> Contact: +12 345 678 90 </p>
        </span>

      <span className='group flex '>
      <p className=' text-2xl items-center justify-center pl-3  text-amp_red group-hover:animate-bounce duration-300'><MdEmail/></p>
      <p className='px-2 text-white '>Email: ampeet@gamil.com</p>
      </span>

     <span className='group flex'>
     <p className=' text-2xl items-center justify-center pl-3  text-amp_red group-hover:animate-bounce duration-300'><SiWechat/></p>
      <p className='px-2 text-white '>Live chat</p>
     </span>
     
    <span className="vedio-button  ">
            <CiDeliveryTruck  className=' absolute bg-[#e03202]  h-10 p-1 w-10 rounded-full' />
          </span>
            </div>  
          
           
        
      
           
        </div>
      </div>
    </div>
  )
}

export default Header
