import { userInfo } from 'os';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaCircle } from 'react-icons/fa6';
import {  IoMdArrowDropdownCircle } from "react-icons/io";
import { MdCall, MdEmail } from 'react-icons/md';
import { SiWechat } from 'react-icons/si';
import Image from 'next/image';
import React, { useEffect } from 'react';
import logo from '../../images/ameee/amplogo.png';
import { FaSearch } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdHelpCircleOutline } from "react-icons/io";
import Link from 'next/link';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { stateProps } from '../../../type';
import { useSession, signIn, signOut } from 'next-auth/react';
import { addUser } from '@/store/nextSlice';


  

const Header = () => {
  const dispatch = useDispatch();
  const {productData, favoriteData, userInfo}= useSelector(
    (state:stateProps)=>state.next 
  );
  const{data:session} = useSession();
  
  useEffect(()=>{
    if(session){
      dispatch(addUser({
          name:session?.user?.name,
          email:session?.user?.email,
          image:session?.user?.image,
        })
      )};
  },[session]);
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
   {/* {userInfo?<div className='flex h-10 md:inline-flex items-center  gap-1 relative cursor-pointer pl-8 hover:text-amp_red hover:border p-2 rounded-sm duration-300 '>
          <img src={userInfo.image} alt='user Image' className='w-8 h-8 rounded-full object-cover'/>
          <div className='text-xs text-gray-100 flex flex-col justify-between'>
            <p className='text-white font-bold'>{userInfo.name}</p>
            <p>{userInfo.email}</p>
          </div>

        </div>:<div onClick={()=>signIn()} className='flex h-10 md:inline-flex items-center  gap-1 relative cursor-pointer pl-8 hover:text-amp_red hover:border p-2 rounded-sm duration-300 '>
            <span className=' text-2xl items-center justify-center  '><FaCircleUser/></span>
            <p className=' font-bold items-center justify-center'>Sign In </p>
            <span><IoMdArrowDropdown/></span>  </div>
            } */}
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
