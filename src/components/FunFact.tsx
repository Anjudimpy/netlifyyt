import React from 'react'
import { AiFillProduct } from 'react-icons/ai'
import { FaHeartbeat } from 'react-icons/fa'
import { IoMdHeart } from 'react-icons/io'
import { RiServiceFill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";

const FunFact = () => {
  return (
    <div className='pt-[3rem] w-full h-auto mt-20 '>
    <div className='justify-center text-center mb-10'>
            <span className='xl:text-[25px] lg:text-[25px] sm:text-[15px] xs:text-[15px] font-extrabold text-amp_light'>Funfact</span>
            <span className='title-element p-0 text-[25px]'><IoMdHeart/>
            <h5 className='xl:text-5xl lg:text-5xl sm:text-[25px] xs:text-[25px] font-bold text-white absolute xl:w-[17rem] lg:w-[17rem] sm:w-[8.7rem] xs:w-[8.7rem]  textShadow2 flex text-center top-12'>Our Funfact</h5>
            </span>
        
        </div>

        <div className='absolute w-full text-white lg:py-40'>
  <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2  lg:grid-cols-4 gap-8  text-center justify-center text-white mt-8'>
    
    <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className='group font-bold'>
      <div className='flex justify-center items-center'>
        <FaHeartbeat className='text-amp_red xs:text-[2rem] xl:text-[5rem] lg:text-[5rem] sm:text-[3rem] mx-12 group-hover:scale-x-90 group-hover:animate-bounce transition duration-300'/>
      </div>
      <span className='sm:text-amp_red xl:text-white xl:text-[2rem] sm:text-[1.2rem]'>150+</span><br></br>
      <span className='text-white xl:text-[1.5rem]'>Product Section</span>
    </div>

    <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" className='group font-bold'>
      <div className='flex justify-center items-center'>
        <AiFillProduct className='text-amp_red xs:text-[2rem] xl:text-[5rem] lg:text-[5rem] sm:text-[3rem] mx-12 group-hover:scale-x-90 group-hover:animate-bounce transition duration-300'/>
      </div>
      <span className='sm:text-amp_red xl:text-white xl:text-[2rem] sm:text-[1.2rem]'>150+</span><br></br>
      <span className='text-white xl:text-[1.5rem]'>Product Section</span>
    </div>

    <div data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic" className='group font-bold'>
      <div className='flex justify-center items-center'>
        <RiServiceFill className='text-amp_red xs:text-[2rem] xl:text-[5rem] lg:text-[5rem] sm:text-[3rem] mx-12 group-hover:scale-x-90 group-hover:animate-bounce transition duration-300'/>
      </div>
      <span className='sm:text-amp_red xl:text-white xl:text-[2rem] sm:text-[1.2rem]'>30+</span><br></br>
      <span className='text-white xl:text-[1.5rem]'>Kind Of Services</span>
    </div>

    <div data-aos="flip-right" data-aos-duration="4000" data-aos-easing="ease-out-cubic" className='group font-bold'>
      <div className='flex justify-center items-center'>
        <GiTrophyCup className='text-amp_red xs:text-[2rem] xl:text-[5rem] lg:text-[5rem] sm:text-[3rem] mx-12 group-hover:scale-x-90 group-hover:animate-bounce transition duration-300'/>
      </div>
      <span className='sm:text-amp_red xl:text-white xl:text-[2rem] sm:text-[1.2rem]'>100+</span><br></br>
      <span className='text-white xl:text-[1.5rem] sm:text-[15px]'>Awards Winning</span>
    </div>

  </div>
</div>

    </div>
  )
}

export default FunFact
