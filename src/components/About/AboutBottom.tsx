import Image from 'next/image';
import React from 'react'

import { GiSuckeredTentacle } from 'react-icons/gi';
import { GoCheckCircleFill } from "react-icons/go";
import FunFact from '../FunFact';

const AboutBottom = () => {
  return (
    <div className='xl:h-[530px] lg:h-[550px] md:h-[58rem] xs:h-[57rem] '>
      <div className='grid grid-cols-1 lg:grid-cols-2 px-10 py-14'>
           <div>
           <span className='text-red-500 font-bold md:text-[19px] sm:text-[14px]'># About Our Ampeet</span>
           <div className='text-amp_blue lgl:text-[37px] xs:text-[18px] text-[25px] font-bold'>Our Clients Are Priority, We Offer Quality Mechnical Service Of 
           <span className='text-amp_red'> Specialists</span></div>
           <p className='text-amp_light font-light md:text-[18px] xs:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatibus sint veliil autem doloremque ipsum odit neque beatae laboriosam?</p>
{/* ... */}
           <div className='grid md:grid-cols-2 grid-cols-1 py-4'>
            <div className=''>
                <ul>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_blue font-semibold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_blue font-semibold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_blue font-semibold px-2 text-base '>100% Expert Services</span>
                    </li>
                </ul>
            </div>
          
            <div className=''>
                <ul>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_blue font-semibold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_blue font-semibold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_blue font-semibold px-2 text-base '>100% Expert Services</span>
                    </li>
                </ul>
            </div>

           </div>
{/* ... */}
           <div className='grid grid-cols-1 md:grid-cols-2'>
           <div className='flex   p-2'>
           <div className='h-[100px] w-[100px] sha rounded-full'>
           <GiSuckeredTentacle className='h-[100px] w-[100px]  p-3 text-amp_red rounded-full'/>
           </div>
 <div className=' px-4 py-2'>
  <div className='py-[9px] text-amp_blue font-bold text-[24px]'>30+ Years</div>
 <div className='text-amp_red font-semibold text-[16px]'>Service Experienced</div>
 </div>
           </div>

           <div className='flex p-2'>
           <div className='relative h-[100px] w-[100px] sha rounded-full'>
            <GiSuckeredTentacle className='h-[100px] w-[100px]  p-3 text-amp_red rounded-full'/>
           </div>
 <div className=' px-4 py-2'>
  <div className='py-[9px] text-amp_blue font-bold text-[24px]'>30000+</div>
 <div className='text-amp_red font-semibold text-[16px]'>Service Successful</div>
 </div>
           </div>
           </div>


           </div>
           <div className='flex lg:justify-end'>
            <Image src={'/mech_pro.jpg'} width={1000} height={1000} alt='' className='md:h-[500px] md:w-[550px]'/>
           </div>
      </div>
       </div>
  )
}

export default AboutBottom
