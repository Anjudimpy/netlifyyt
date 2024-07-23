import React from 'react'
import { FaHeartbeat } from 'react-icons/fa'
import { GoCheckCircleFill } from "react-icons/go";
import { GiSpray, GiSuckeredTentacle, GiTripwire } from 'react-icons/gi';
import Image from 'next/image';
import { DiMootoolsBadge } from "react-icons/di";
import { RiToolsLine } from 'react-icons/ri';
import { CiSettings } from 'react-icons/ci';
import { PiPackageLight } from 'react-icons/pi';


const Features = () => {
  return (
    <div className='w-full xl:h-[800px] py-12'>
      <div className='text-center'>
            <span className='lg:text-[20px] xl:text-[20px] xs:text-[15px] textShadow1 font-bold text-amp_blue'>Feature</span>
            <span className='title-element'><FaHeartbeat/></span>
            <h5 className='lg:text-4xl xl:text-4xl xs:text-[25px] font-bold text-amp_blue textShadow1'>Why Choose Us Ampeet</h5>
        </div>


<div className='grid grid-cols-1 xl:grid-cols-3 text-center justify-center '>

    {/* fisrt */}
    <div className='flex justify-center items-center'>
      
      <div className=''>
      <div className='h-[110px] w-[19rem] sha rounded-md p-[17px] m-[30px]'>
        <ul>
                    <li className='flex py-1'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                   </ul>
        </div>

        <div className='h-[110px] w-[19rem] sha rounded-md p-[17px] m-[30px]'>
        <ul>
                    <li className='flex py-1'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                   </ul>
        </div>

        <div className='h-[110px] w-[19rem] sha rounded-md p-[17px] m-[30px]'>
        <ul>
                    <li className='flex py-1'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                   </ul>
        </div>

        <div className='flex  mx-[30px]'>
           <div className='h-[90px] w-[90px] sha rounded-full'>
           <GiSuckeredTentacle className='h-[90px] w-[90px]  p-3 text-amp_red rounded-full'/>
           </div>
 <div className=' px-4 py-2'>
  <div className='py-[9px] text-amp_blue font-bold text-[24px]'>30+ Years</div>
 <span className='text-amp_red font-semibold  text-[16px]'>Service Experienced</span>
 </div>
           </div>
      </div>

    </div>

    {/* second */}
    <div className='mt-10 flex justify-center'>

        <div className='relative h-[30rem] w-[30rem] flex justify-center py-[2.5rem] rounded-full outline outline-amp_red outline-2'>
       
        <div className='relative h-[25rem] w-[25rem] rounded-full outline outline-amp_red outline-2'>
        <div className='flex'>
            <Image src={'/mech_pro.jpg'} width={1000} height={1000} alt='' className='h-[25rem] w-[25rem] rounded-full'/>
           </div>
           <GiTripwire className='absolute p-1.5 flex justify-center top-20 left-3 bg-white text-yellow-500  h-[35px] w-[35px] rounded-full sha'/>
<FaHeartbeat className='absolute p-2 flex justify-center  right-0 top-28 bg-white text-yellow-500  h-[35px] w-[35px] rounded-full sha'/>
<PiPackageLight className='absolute p-1 flex justify-center  bottom-5 right-16 bg-white text-yellow-500  h-[35px] w-[35px] rounded-full sha'/>
</div>

<DiMootoolsBadge className='absolute flex justify-center  left-32 top-0 bg-white text-yellow-500  h-[35px] w-[35px] rounded-full sha'/>
<RiToolsLine className='absolute p-1 flex justify-center  right-16 bg-white text-yellow-500  h-[35px] w-[35px] rounded-full sha'/>
<CiSettings className='absolute p-1 flex justify-center bottom-3  left-28 bg-white text-yellow-500  h-[35px] w-[35px] rounded-full sha'/>
<GiSpray className='absolute flex p-1 justify-center bottom-[11rem]  -left-4 bg-white text-yellow-500  h-[35px] w-[35px] rounded-full sha'/>


        </div>


    </div>

    {/* third */}
    <div className='flex justify-center items-center'>
      
      <div className=''>
      <div className='h-[110px] w-[19rem] sha rounded-md p-[17px] m-[30px]'>
        <ul>
                    <li className='flex py-1'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                   </ul>
        </div>

        <div className='h-[110px] w-[19rem] sha rounded-md p-[17px] m-[30px]'>
        <ul>
                    <li className='flex py-1'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                   </ul>
        </div>

        <div className='h-[110px] w-[19rem] sha rounded-md p-[17px] m-[30px]'>
        <ul>
                    <li className='flex py-1'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                    <li className='flex py-2'><GoCheckCircleFill className='text-amp_red text-[25px]'/> 
                    <span className='text-amp_light font-bold px-2 text-base '>100% Expert Services</span>
                    </li>
                   </ul>
        </div>

        <div className='flex  mx-[30px]'>
           <div className='h-[90px] w-[90px] sha rounded-full'>
           <GiSuckeredTentacle className='h-[90px] w-[90px]  p-3 text-amp_red rounded-full'/>
           </div>
 <div className=' px-4 py-2'>
  <div className='py-[9px] text-amp_blue font-bold text-[24px]'>3000+</div>
 <span className='text-amp_red font-semibold  text-[16px]'>Service Successful</span>
 </div>
           </div>
      </div>

    </div>
</div>

    </div>
  )
}

export default Features
