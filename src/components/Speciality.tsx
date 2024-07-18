import React from 'react';
import {  faShoppingCart, faBalanceScale,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TbBrandSlack } from 'react-icons/tb';
import SpecialityList from './SpecialityCard';

const Speciality = () => {
  return (
    <div className='w-full xl:h-[700px] lg:h-[800px] md:[900px]  sm:[80rem] py-16 bg-slate-50'>
     <div className='text-center'>
            <span className='xl:text-[25px] lg:xl:text-[25px] xs:text-[15px] textShadow2 font-extrabold text-amp_light'>Feature</span>
            <span className='title-element p-0 text-[25px]'><TbBrandSlack/></span>
            <h5 className='lg:text-4xl xl:text-4xl xs:text-[25px]  font-bold text-amp_light textShadow2'>What is Our Speciality</h5>
        </div>
        <div className='xl:py-16 md:py-16 lg:py-16 sm:pb-0 sm:pt-10 xl:px-24 lg:px-16 md:px-12 sm:px-5 xs:px-5'>
           <SpecialityList/>
        </div>
   
    </div>
  )
}

export default Speciality
