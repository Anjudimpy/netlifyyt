import Image from 'next/image'
import React from 'react'
import block from '../images/ameee/Calibration-Blocks.jpg';
import white from '../images/ameee/white_cal.jpg';
import blue from '../images/ameee/blue_couplant.jpg';
import { IoMdCheckmark } from 'react-icons/io';
import { MdShoppingCart } from 'react-icons/md';

const PlanPricingCrad = () => {
  return (
  
    <div className='xl:flex lg:flex gap-10 lg:mx-12 xl:mx-14 sm:mx-5'>
  <div data-aos="flip-left" data-aos-duration="2000"   data-aos-easing="ease-out-cubic"  className=' h-[39rem] w-[24rem] bg-white sm:mb-3  shadow-md shadow-red-300 '>
      <div className='group h-[21rem]   w-[20rem]  transition duration-500 transform ease-linear'>
      <Image src={white} alt='' className='h-[14rem] w-[24rem]  bg-no-repeat bg-center bg-cover' />
       <div className=' absolute top-0 h-[14rem] w-[23.4rem]  bg-[#06060643]'>
       <span className='flex justify-center items-center pt-[11.5rem] font-extrabold text-white font-serif text-[28px]'>WHITE COUPLANT</span>
        </div>
       <hr className='w-[23.4rem]'></hr>
       <p className='px-2 text-justify text-base  font-semibold text-gray-600 italic'>Factors to consider when choosing an ultrasonic couplant:</p>

       <hr className=' outline-1 mx-2 mt-1 text-amp_red w-[22.5rem] outline-dotted'></hr>
       <ul className=' font-semibold   px-3 text-amp_light gap-1 justify-center py-2'>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Industrial Standards</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Corrosion Protection</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Non-Toxic</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Price Point</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Highly Viscous</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Non-Sticky & Long Lasting</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Easy to Clean</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Hazard Free Material</li>
       </ul>
      
       {/* <hr className='  mx-2 mt-1 border-t-indigo-950 border-t-2 w-[21rem] '></hr> */}
       <span className='flex justify-center items-center mt-3 ml-12'>
        <button className='flex text-white font-semibold bg-amp_red py-2 px-3 rounded-sm'>Book Now | <MdShoppingCart className='text-[30px] p-1'/></button>
     </span>
      </div>
       </div>

         {/* third */}

         <div data-aos="flip-left" data-aos-duration="4000"   data-aos-easing="ease-out-cubic"  className=' h-[37.5rem] w-[24rem] bg-white sm:mb-3  shadow-md shadow-red-300 '>
      <div className='group h-[21rem]  w-[20rem]  transition duration-500 transform ease-linear'>
      <Image src={blue} alt='' className='h-[13rem] w-[24rem]  bg-no-repeat bg-center bg-cover' />
       <div className=' absolute top-0 h-[13rem] w-[23.4rem]   opacity-55 bg-blue-600'>


       <span className='flex justify-center items-center pt-[10.5rem] font-extrabold text-white font-serif text-[28px]'>BLUE COUPLANT</span>
        </div>
       <hr className='w-[23.4rem]'></hr>
       <p className='px-2 text-justify text-base  font-semibold text-gray-600 italic'>Factors to consider when choosing an ultrasonic couplant:</p>

       <hr className=' outline-1 mx-2 mt-1 text-amp_red w-[22.5rem] outline-dotted'></hr>
       <ul className=' font-semibold   px-3 text-amp_light gap-1 justify-center py-2'>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Industrial Standards</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Corrosion Protection</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Non-Toxic</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Price Point</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Non-Sticky</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/>Easy to Clean</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Long Lasting</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Hazard Free Material</li>
       </ul>

      
       {/* <hr className='  mx-2 mt-1 border-t-indigo-950 border-t-2 w-[21rem] '></hr> */}
       <span className='flex justify-center items-center mt-2 ml-12'>
        <button className='flex text-white font-semibold bg-amp_red py-2 px-3 rounded-sm'>Book Now | <MdShoppingCart className='text-[30px] p-1'/></button>
     </span>
      </div>
       </div>
{/* 
    second */}

<div data-aos="flip-left" data-aos-duration="8000"   data-aos-easing="ease-out-cubic"  className=' h-[35rem] w-[24rem] bg-white   shadow-md shadow-red-300 '>
      <div className='group h-[21rem]  w-[20rem]  transition duration-500 transform ease-linear'>
      <Image src={block} alt='' className='h-[12rem] w-[24rem]  bg-no-repeat bg-center bg-cover' />
       <div className=' absolute top-0 h-[12rem] w-[23.4rem]  opacity-65 bg-amp_red '>

       <span className='flex justify-center items-center pt-[9.5rem] font-extrabold text-white font-serif text-[28px]'>CALIBRATION BLOCK</span>
        </div>
       <hr className='w-[23.4rem]'></hr>
       <p className='px-2 text-justify text-base  font-semibold text-gray-600 italic'>Factors to consider when choosing a calibration block:</p>

       <hr className=' outline-1 mx-2 mt-1 text-amp_red w-[22.5rem] outline-dotted'></hr>
       <ul className=' font-semibold   px-3 text-amp_light gap-1 justify-center py-2'>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Material</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Geometry & Dimension</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Accuracy</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Surface Finish</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Accessibility</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Cost-Effectiveness</li>
       <li className='flex gap-1 py-1'><IoMdCheckmark className='text-amp_red text-[20px] '/> Compatibility</li>
       </ul>


       {/* <hr className='  mx-2 mt-1 border-t-indigo-950 border-t-2 w-[21rem] '></hr> */}
       <span className='flex justify-center items-center mt-3 ml-12'>
        <button className='flex text-white font-semibold bg-amp_red py-2 px-3 rounded-sm'>Book Now | <MdShoppingCart className='text-[30px] p-1'/></button>
     </span>
      </div>
       </div>

     


    </div>
  )
}

export default PlanPricingCrad
