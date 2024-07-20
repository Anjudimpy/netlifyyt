import React from 'react'
import WorkProcessCard from './WorkProcessCard'
import { RiServiceFill } from 'react-icons/ri'
import { HiArrowTrendingUp } from "react-icons/hi2";

const WorkProccess = () => {
  return (
    <div className='relative xl:h-[600px] lg:h-[600px] sm:h-[70rem] xs:h-[70rem] w-full bgimage1'>
        <div className='absolute w-full xl:h-[600px] lg:h-[600px] sm:h-[70rem] xs:h-[70rem] bg-black opacity-60'></div>
        <div className='text-center absolute w-full xl:pt-16 lg:pt-16 sm:pt-10 xs:pt-10'>
            <span className='xl:text-[25px] lg:text-[25px] sm:text-[15px] xs:text-[15px] textShadow2 font-extrabold text-amp_light'>Process</span>
            <span className='title-element p-0 text-[25px]'><RiServiceFill/></span>
            <h5 className='xl:text-4xl lg:text-4xl sm:text-[25px] xs:text-[25px] font-bold text-white'>Our Work Process</h5>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-items-center w-full text-center lg:pt-20'>
           <WorkProcessCard title="Emergency case" step='01' icon={HiArrowTrendingUp}/>
           <WorkProcessCard title="Emergency case" step='02' icon={HiArrowTrendingUp}/>
           <WorkProcessCard title="Emergency case" step='03' icon={HiArrowTrendingUp}/>
          <div> <WorkProcessCard title="Emergency case" step='04' /></div>
        </div>
    </div>
  )
}

export default WorkProccess
