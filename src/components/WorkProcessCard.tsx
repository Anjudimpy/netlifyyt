import React from 'react'
import { RiServiceFill } from 'react-icons/ri'
import { HiArrowTrendingUp } from "react-icons/hi2";

interface WorkProcessCardProps{
    title: string;
    step: string;
    icon?: React.ComponentType,
}


const WorkProcessCard = ({title,step, icon: Icon,}:WorkProcessCardProps) => {


  return (
    <div className='relative flex  xl:top-60 lg:top-60 sm:top-48  '>
     <div className='group  h-[220px] w-[220px]'>
     <div className='absolute  h-[220px] w-[220px]  -left-[15px] -top-[15px] group-hover:animate-slow-spin  processBoder1 group-hover:border-t-4 group-hover:border-[#e71c52ea]  rounded-full'>
     <span className=' absolute group-hover:h-[10px] w-[10px] bg-amp_red rounded-full top-[89px] -right-1 text-white flex justify-center '></span>
</div>

  <div className=' h-[184px] w-[184px] hover:h-[180px] outline outline-[0.6rem] outline-[#011f3d] group-hover:outline-none  hover:w-[180px] hover:ml-1 mt-1 rounded-full group-hover:bg-[#e71c52]   bg-[#02245070]'>
    <span className='text-white flex justify-center items-center font-semibold  text-[18px] py-20'>{title}</span>

    <div className=' group absolute  h-[200px] w-[200px]  -left-[9px] -top-[10.8px]  rounded-full group-hover:border-t-4 group-hover:border-[#e71c52ea] processBoder group-hover:animate-slow1-spin1'>
   
</div>
<div className=' absolute  h-[210px] w-[210px]  -left-[9px] -top-[10.8px]  group-hover:animate-slow2-spin2'>
    <span className=' absolute h-[54px] w-[54px] bg-red-600 rounded-full top-3 left-36 text-white flex group-hover:bg-amp_blue justify-center py-1 font-bold text-[27px] '>{step}</span>
</div>


  </div>

     </div>

     <div className='text-gray-200 mt-20  text-[60px]'>  {Icon ? <Icon/> : null}</div>
     
  
        
    </div>
  )
}

export default WorkProcessCard
