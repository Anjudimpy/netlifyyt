import React from 'react'
import logo from '../../images/ameee/amplogo.png';
import Image from 'next/image';
import { IoMdCart, IoMdMenu, IoMdSearch } from 'react-icons/io';
import { CgMenuGridR } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiDotsVertical } from 'react-icons/hi';



const BottamHeader = () => {
  return (
    <div className='flex flex-col-1 bg-slate-50 w-full sticky top-0 z-50 h-[100px]  md:px-11 xl:px-11 lg:px-11 justify-between items-center'>
      <div>
        <Image src={logo} alt='logoimg' className=' w-[198px] h-16 '/>
        <span className='text-[12px] md:text-[12px] px-2 font-bold text-amp_red '>Ampee Engineering Tools & Fab</span>
      </div>
<div className='flex flex-col-1 gap-4 lg:hidden'>
<span className='font-bold mt-1'>
         <IoMdMenu className='text-[38px] p-1 bg-amp_blue text-white hover:bg-amp_red  ease-in-out transition-colors duration-300 '/>
        </span>
        <span className='font-bold mt-1'>
         <HiDotsVertical className='text-[38px] p-1 bg-amp_blue text-white hover:bg-amp_red  ease-in-out transition-colors duration-300  '/>
        </span>
</div>
      <div className='flex-col-1 text-amp_blue gap-4 font-bold hidden lg:flex'>
      
        
        <span className='mt-2 hover:text-amp_red'>Home</span>
        <span className='mt-2 hover:text-amp_red'>About</span>
        <span className='mt-2'>
        <select className="outline-none hover:text-amp_red">
  <option className="text-white">
    Services
  </option>
  <option className="text-gray-700">Option 1</option>
  <option className="text-gray-700">Option 2</option>
  <option className="text-gray-700">Option 3</option>
</select>

        </span>
        <span className='mt-2 hover:text-amp_red'>
            <select>
                <option>Product</option>
            </select>
        </span>
        <span className='mt-2 hover:text-amp_red'>
            <select>
                <option>Shop</option>
            </select>
        </span>
        <span className='mt-2 mr-5 hover:text-amp_red'>Contact</span>
        
        <span className='font-bold'>
        <IoMdSearch className="p-2  shadow-md shadow-red-300 text-[30px] h-10 w-10 font-bold rounded-full transition duration-500 ease-in-out hover:bg-amp_red hover:text-white" />
        </span>
        <span className='font-bold'>
         <IoMdCart className="p-2 shadow-red-300 shadow-md text-[30px] h-10 w-10 font-bold rounded-full transition duration-500 ease-in-out hover:bg-amp_red hover:text-white"/>
        </span>
        <span className='font-bold mt-1'>
         <CgMenuGridR className='text-[38px] hover:text-amp_red '/>
        </span>
        
        
      </div>

    
    </div>
  )
}

export default BottamHeader
