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
            <span className='text-[25px] font-extrabold text-amp_light'>Funfact</span>
            <span className='title-element p-0 text-[25px]'><IoMdHeart/>
            <h5 className='text-5xl font-bold text-white absolute w-[17rem] textShadow2 flex text-center top-12'>Our Funfact</h5>
            </span>
        
        </div>

        <div className='flex absolute mt-[15rem] px-[6.8rem] text-center justify-center grid-cols-1 gap-40 text-white'>
            <div className='group font-bold'><FaHeartbeat className='text-amp_red text-[5rem] ml-16 group-hover:scale-x-90 group-hover:animate-bounce transition duration-300'/>
            <span className='text-white text-[2rem]'>300+</span><br></br>
            <span className='text-white text-[1.5rem]'>Satisfied Customers</span>
            </div>

            <div className='group font-bold'><AiFillProduct className='text-amp_red text-[5rem] ml-12 group-hover:animate-bounce'/>
            <span className='text-white text-[2rem]'>150+</span><br></br>
            <span className='text-white text-[1.5rem]'>Product Section</span>
            </div>

             <div className='group font-bold'><RiServiceFill className='text-amp_red text-[5rem] ml-11 group-hover:animate-bounce '/>
            <span className='text-white text-[2rem]'>30+</span><br></br>
            <span className='text-white text-[1.5rem]'>Kind Of Services</span>
            </div>

            <div className='group font-bold'><GiTrophyCup className='text-amp_red text-[5rem] ml-11 group-hover:animate-bounce'/>
            <span className='text-white text-[2rem]'>100+</span><br></br>
            <span className='text-white text-[1.5rem]'>Awards Winning</span>
            </div>

        </div>
    </div>
  )
}

export default FunFact
