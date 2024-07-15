import React from 'react'
import WorkProcessCard from './WorkProcessCard'
import { RiServiceFill } from 'react-icons/ri'
import { HiArrowTrendingUp } from "react-icons/hi2";


const WorkProccess = () => {
  return (
    <div className='h-[600px] w-full bgimage1'>
        <div className='top-0 absolute left-0 w-full h-[700px] bg-black opacity-60'></div>
        <div className='text-center absolute w-full pt-16'>
            <span className='text-[25px] textShadow2 font-extrabold text-amp_light'>Process</span>
            <span className='title-element p-0 text-[25px]'><RiServiceFill/></span>
            <h5 className='text-4xl font-bold text-white '>Our Work Process</h5>
        </div>
        <div className= ' py-14  flex justify-between mx-20 px-24 w-full'>
           <WorkProcessCard  title="Emergency case" step='01' icon={ HiArrowTrendingUp}/>
          
           <WorkProcessCard  title="Emergency case" step='02' icon={ HiArrowTrendingUp}/>
      
           <WorkProcessCard  title="Emergency case" step='03' icon={ HiArrowTrendingUp}/>
       
           <WorkProcessCard  title="Emergency case" step='04'/>
        
        </div>
    </div>
  )
}

export default WorkProccess
