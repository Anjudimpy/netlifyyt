import React from 'react'
import { AiFillProduct } from 'react-icons/ai'
import { FaHeartbeat } from 'react-icons/fa'
import { IoMdHeart } from 'react-icons/io'
import { RiServiceFill } from "react-icons/ri";
import { GiTrophyCup } from "react-icons/gi";

const FunFact = () => {
  return (
    <div className='pt-[3rem] mt-20'>
    <div className='justify-center text-center'>
            <span className='xl:text-[25px] lg:text-[25px] sm:text-[15px] xs:text-[15px] font-extrabold text-amp_light'>Funfact</span>
            <span className='title-element p-0 text-[25px]'><IoMdHeart/>
            <h5 className='xl:text-5xl lg:text-5xl sm:text-[25px] xs:text-[25px] font-bold text-white absolute xl:w-[17rem] lg:w-[17rem] sm:w-[8.7rem] xs:w-[8.7rem]  textShadow2 flex text-center top-12'>Our Funfact</h5>
            </span>
        
        </div>

        <div className='flex absolute xl:mt-[15rem]  lg:mt-[15rem] xs:mt-[5rem]  sm:mt-[6rem] xl:px-[6.8rem] lg:px-[6.8rem] sm:px-[1rem] text-center justify-center  xl:gap-40  lg:gap-40 text-white'>
            <div data-aos="fade-up"  data-aos-duration="1000"
     className='group font-bold'><FaHeartbeat className='text-amp_red xl:text-[5rem] lg:text-[5rem] sm:text-[3rem] xl:ml-16 lg:ml-16 sm:ml-7 xs:ml-7 group-hover:scale-x-90 group-hover:animate-bounce transition duration-300'/>
            <span className='sm:text-amp_red xl:text-white xl:text-[2rem] lg:text-[2rem] sm:text-[1.2rem]'>300+</span><br></br>
            <span className='text-white xl:text-[1.5rem] lg:text-[1.5rem]'>Satisfied Customers</span>
            </div>

            <div data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine"
            className='group font-bold'><AiFillProduct className='text-amp_red xl:text-[5rem] lg:text-[5rem] sm:text-[3rem] xl:ml-12 lg:ml-12 sm:ml-5 xs:ml-5 group-hover:scale-x-90 group-hover:animate-bounce transition duration-300'/>
            <span className='sm:text-amp_red xl:text-white xl:text-[2rem] sm:text-[1.2rem]'>150+</span><br></br>
            <span className='text-white xl:text-[1.5rem]'>Product Section</span>
            </div>

             <div data-aos="flip-left" data-aos-duration="2000"   data-aos-easing="ease-out-cubic"
              className='group font-bold'><RiServiceFill className='text-amp_red xl:text-[5rem] lg:text-[5rem] sm:text-[3rem] xl:ml-12 lg:ml-12 xs:ml-5 sm:ml-5 group-hover:scale-x-90 group-hover:animate-bounce transition duration-300 '/>
            <span className='sm:text-amp_red xl:text-white xl:text-[2rem] sm:text-[1.2rem]'>30+</span><br></br>
            <span className='text-white xl:text-[1.5rem]'>Kind Of Services</span>
            </div>

            <div data-aos="flip-right" data-aos-duration="4000"   data-aos-easing="ease-out-cubic"
            className='group font-bold'><GiTrophyCup className='text-amp_red xl:text-[5rem] lg:text-[5rem] sm:text-[3rem] xl:ml-12 lg:ml-12 sm:ml-5 xs:ml-5 group-hover:scale-x-90 group-hover:animate-bounce transition duration-300'/>
            <span className='sm:text-amp_red xl:text-white xl:text-[2rem] sm:text-[1.2rem]'>100+</span><br></br>
            <span className='text-white xl:text-[1.5rem] sm:text-[15px] '>Awards Winning</span>
            </div>

        </div>
    </div>
  )
}

export default FunFact
