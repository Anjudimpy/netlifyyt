import React from 'react'
import logo from '../../images/ameee/amplogo.png';
import Image from 'next/image';
import { IoMdCart, IoMdMenu, IoMdSearch } from 'react-icons/io';
import { CgMenuGridR } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiDotsVertical } from 'react-icons/hi';
import { RiArrowDownSLine } from 'react-icons/ri';
import Link from 'next/link';
import {useDispatch, useSelector } from 'react-redux';
import {stateProps} from "../../../type";




const BottamHeader = () => {
  const dispatch = useDispatch();
  const {productData, favoriteData, userInfo}= useSelector(
    (state:stateProps)=>state.next 
  );

  return (
    <div className='flex  font-serif flex-col-1 bg-slate-50 w-full sticky top-0 z-50 h-[100px]  md:px-11 xl:px-11 lg:px-11 justify-between items-center'>
      <div>
        <Image src={logo} alt='logoimg' className=' lgl:w-[180px] lgl:h-14  xs:w-[150px] xs:h-12'/>
        <span className='lgl:text-[10px] xs:text-[8px] px-2 font-bold text-amp_red '>Ampee Engineering Tools & Fab</span>
      </div>
<div className='flex mx-2 gap-3 xl:hidden  lgl:hidden'>
<span className='font-bold mt-1'>
         <IoMdMenu className='text-[38px] p-1 bg-amp_blue text-white hover:bg-amp_red  ease-in-out transition-colors duration-300 '/>
        </span>
        <span className='font-bold mt-1'>
         <HiDotsVertical className='text-[38px] p-1 bg-amp_blue text-white hover:bg-amp_red  ease-in-out transition-colors duration-300  '/>
        </span>
</div>
      <div className='flex-col-1 text-amp_blue gap-4 font-bold hidden lgl:flex'>
      
        
        <Link href={'/'} className='mt-2 hover:text-amp_red'>Home</Link>
       
        <Link href={'/about'} className='mt-2 hover:text-amp_red'>About </Link>
           
         
           
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
        <div>
        <div className='group dropdown relative font-bold cursor-pointer mt-2 h-full nav-link  hover:text-amp_red'>
        <span className='flex'><span>Product</span><span><RiArrowDownSLine className='mt-1'/></span></span>
      <div className='absolute hidden cursor-pointer bg-white h-auto w-[20rem] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 -bottom-[17rem] group-hover:flex flex-col'>
        <div className='p-2 dropdown-content '>Gel</div>
        <hr className=''></hr>
        <div className='p-2 dropdown-content '>Consumables</div><hr className=''></hr>
        <div className='p-2 dropdown-content '>Calibration Block</div><hr className=''></hr>
        <div className='p-2 dropdown-content '>NDT Probes &amp; Accessories</div><hr className=''></hr>
        <div className='p-2 dropdown-content'>Safety Accessories</div><hr className=''></hr>
        <div className='p-2 dropdown-content '>Welding Equipment &amp; Accessories</div>
        </div>
      </div>


    
        </div>
        <div className='group dropdown relative font-bold cursor-pointer mt-2 h-full nav-link  hover:text-amp_red'>
        <Link href={'/shop'} className='flex'><span>Shop</span><span><RiArrowDownSLine className='mt-1'/></span></Link>
      <div className='absolute hidden cursor-pointer bg-white h-auto w-[13rem] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 -bottom-[10rem] group-hover:flex flex-col'>
      <Link href={'/shop'}><div className='p-2 dropdown-content '>Shop</div></Link><hr></hr>
        {/* <div className='p-2 dropdown-content '>Cart</div><hr></hr> */}
        <div className='p-2 dropdown-content '>Check Out</div><hr></hr>
        <div className='p-2 dropdown-content '>My Account</div>
        </div>
        </div>
        <span className='mt-2 mr-5 hover:text-amp_red'>Contact</span>
        
        <span className='font-bold'>
        <IoMdSearch className="p-2  shadow-md shadow-red-300 text-[30px] h-10 w-10 font-bold rounded-full transition duration-500 ease-in-out hover:bg-amp_red hover:text-white" />
        </span>
        <Link href={"/cart"} className=' relative font-bold'>
         <IoMdCart className="p-2 shadow-red-300 shadow-md text-[30px] h-10 w-10 font-bold rounded-full transition duration-500 ease-in-out hover:bg-amp_red hover:text-white"/>
         <span className='absolute text-amp_red text-sm -top-1 right-[13px]'>
         {productData ? productData.length : 0}
         </span>
        </Link>
        <span className='font-bold mt-1'>
         <CgMenuGridR className='text-[38px] hover:text-amp_red '/>
        </span>
        
        
      </div>

    
    </div>
  )
}

export default BottamHeader
