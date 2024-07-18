
import React from 'react'
import Image from 'next/image'
import logo from '../../images/ameee/amplogo.png';
import { FaLocationDot, FaRegCopyright } from 'react-icons/fa6';
import { MdAccessTime} from 'react-icons/md';
import { IoIosArrowForward, IoMdMail } from 'react-icons/io';
import { CiDeliveryTruck } from 'react-icons/ci';
import RoundImage from './roundImage';

const Footer = () => {
  return (
    <div className='w-full h-auto bg-amp_blue '>
   
      <div className='w-full grid grid-cols-1  md:grid-cols-2 md:h-[850px]  xl:grid-cols-4 xl:h-[540px] py-24 px-20 justify-between text-md font-semibold text-white'>
    
    {/* company */}

        <span className=' pr-7 pb-10 md:pb-0 lg:pb-0 xl:pb-0'>
        <Image src={logo} alt='logo' className='h-[100px] w-[240px]'/>
        <p className='py-3 text-justify text-[15px] italic font-base '>AMPEE Engineering Tools & Fab Specialized in Manufacturing & Supplier for NDT Equipment & Accessories and Welding Accessories, & Consumables in India.</p>
       
       <span className='hidden xl:inline md:inline'>
       <span className='group pt-5 flex relative   hover:text-amp_red transition duration-500  hover:underline scale-x-100'>
           <FaLocationDot className=' text-[22px] text-amp_red pr-2 group-hover:animate-bounce'/>
         <p className=''>
  Address :- {" "} Padappai, Tamil Nadu 601301

</p>
           </span>
           <p className=' group flex pt-2 relative  hover:text-amp_red transition duration-500 hover:underline scale-x-100'>
            <MdAccessTime className='text-[25px] text-amp_red pr-2 font-bold group-hover:animate-bounce'/> India +91 9920304051, 8110977771
           </p>
           <p className='group flex pt-2 relative  hover:text-amp_red transition duration-500  hover:underline scale-x-100'>

            <IoMdMail className='text-[25px] text-amp_red pr-2 font-bold group-hover:animate-bounce'/> ampeeet@gmail.com/ Sales@ampeeet.com

           </p>
       </span>
       </span> 
    

       {/* gallary */}

        <span className=' pr-7  md:py-0 lg:py-0 xl:py-0'>
        <h1 className="group text-2xl text-amp_red border-b-amp_red transition duration-500 hover:text-lime-200">
  Gallary
  <hr className="w-20 mt-1 border-t-2 border-amp_red transition duration-500 group-hover:border-lime-200" />
</h1>
<span className='hidden xl:inline md:inline lg:inline'>
<span className='flex gap-2'>
  <RoundImage/>
  <RoundImage/>
  <RoundImage/>
</span>
<span className='flex gap-2'>
  <RoundImage/>
  <RoundImage/>
  <RoundImage/>
</span>
<span className='flex gap-2'>
  <RoundImage/>
  <RoundImage/>
  <RoundImage/>
</span>
</span>

</span>

{/* link */}

 <span className=' pr-7 md:py-0 lg:py-0 xl:py-0'>
      <span>
      <h1 className="group text-2xl text-amp_red border-b-amp_red transition duration-500 hover:text-lime-200">
  Quick Link
  <hr className="w-28 mt-1 border-t-2 border-amp_red transition duration-500 group-hover:border-lime-200" />
</h1>
<span className='hidden xl:inline md:inline lg:inline'>
  <ul className='mt-7 text-[18px]'>
    <li className='flex py-1'><IoIosArrowForward className='m-1 font-bold'/> Home</li>
    <li className='flex py-1'><IoIosArrowForward className='m-1 font-bold'/> About</li>
    <li className='flex py-1'><IoIosArrowForward className='m-1 font-bold'/> Cart</li>
    <li className='flex py-1'><IoIosArrowForward className='m-1 font-bold'/> Shop</li>
    <li className='flex py-1'><IoIosArrowForward className='m-1 font-bold'/> Pricing Page</li>
    <li className='flex py-1'><IoIosArrowForward className='m-1 font-bold'/> Contact</li>
  </ul>
</span>
      </span>
        </span>

       {/*   time */}

        <span className='md:py-0 lg:py-0 xl:py-0'>
       <span className=''>
       <span className="group  text-2xl text-amp_red border-b-amp_red transition duration-500 hover:text-lime-200">
  We are Available
  <hr className="w-40 mb-7 mt-1 border-t-2  border-amp_red transition duration-500 group-hover:border-lime-200" />
</span>
       </span>
      <span className='hidden xl:inline md:inline lg:inline'>
       <span className='flex py-1 items-center justify-between text-[18px]'>
        <span> Monday:</span>
        <span> 10:00 - 19:00 </span></span>

        <span className='flex py-1 items-center justify-between text-[18px]'>
        <span> Tuesday:</span>
        <span> 10:00 - 19:00 </span></span>

        <span className='flex py-1 items-center justify-between text-[18px]'>
        <span> Wednesday:</span>
        <span> 10:00 - 19:00 </span></span>

        <span className='flex py-1 items-center justify-between text-[18px]'>
        <span> Thursday:</span>
        <span> 10:00 - 19:00 </span></span>

        <span className='flex py-1 items-center justify-between text-[18px]'>
        <span> Friday:</span>
        <span> 10:00 - 19:00 </span></span>

        <span className='flex py-1 items-center justify-between text-[18px]'>
        <span> Saturday:</span>
        <span> 10:00 - 19:00 </span></span>

        <span className='flex py-1 items-center justify-between text-[18px]'>
        <span> Sunday:</span>
        <span className='text-red-600 pr-11'> Closed </span></span>

        </span>

        </span>


      </div>

      {/* bottom */}
<hr className='text-gray-900'></hr>
      <div className='lg:h-[120px] xl:h-[120px] py-4 h-[180px]  text-white font-semibold'>
        <span className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-between  items-center  text-[17px]'>
          <span className='flex px-2 md:px-24 lg:px-24  xl:px-24 justify-center  items-center'>
          <span className="vedio-button  ">
            <CiDeliveryTruck className=' absolute  bg-[#e03202] p-1  h-10  w-10 rounded-full' />
          
          </span>
          <span>
          <p className=' text-[14px] md:text-[25px] lg:text-[25px] xl:text-[25px]'>+91 8116177771
                 </p> 
                  <p className='xl:px-5 lg:px-5 text-[10px] md:text-[17px] lg:text-[17px] xl:text-[17px]'>24*7 Call Us</p>
          </span>
          </span>
         <span className=' border-t-neutral-800 border-b-0  xl:border-none border-none'>
         <span className='flex gap-1 xl:py-0 lg:py-0 sm:py-5 text-center justify-center'>Copyright <FaRegCopyright className='mt-1 text-[15px]'/> 2014 | Pawered By <span className='text-amp_red'>Ampee</span> </span>
        </span>
         </span>
      </div>
     
    </div>
  )
}

export default Footer
