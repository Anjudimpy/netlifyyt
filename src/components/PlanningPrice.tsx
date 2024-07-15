import React from 'react'
import { FaHeart } from 'react-icons/fa'
import PlanPricingCrad from './PlanPricingCrad'

function PlanningPrice() {
  return (
    <div className='w-full h-[900px] bg-gray-50 py-20'>
    <div className='text-center'>
           <span className='text-[25px] textShadow2 font-extrabold text-amp_blue'>Pricing</span>
           <span className='title-element'><FaHeart/></span>
           <h5 className='text-4xl font-bold text-amp_blue textShadow2'>Our Plan Pricing</h5>
       </div>
       <div className='py-14 px-20'>
          <PlanPricingCrad/>
       </div>
      
   </div>
  )
}

export default PlanningPrice
