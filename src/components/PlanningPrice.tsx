import React from 'react'
import { FaHeart } from 'react-icons/fa'
import PlanPricingCrad from './PlanPricingCrad'

function PlanningPrice() {
  return (
    <div className='w-full xl:h-[900px] lg:h-[900px] sm:h-[123rem] bg-gray-50 xl:py-20 lg:py-20 sm:py-10'>
    <div className='text-center'>
           <span className='xl:text-[25px] lg:text-[25px] sm:text-[15px] textShadow2 font-extrabold text-amp_blue'>Pricing</span>
           <span className='title-element'><FaHeart/></span>
           <h5 className='xl:text-4xl lg:text-4xl sm:text-[25px] font-bold text-amp_blue textShadow2'>Our Plan Pricing</h5>
       </div>
       <div className='flex justify-center'>
       <div className='xl:py-14 lg:py-14 sm:py-10 '>
          <PlanPricingCrad/>
       </div>
       </div>
      
   </div>
  )
}

export default PlanningPrice
