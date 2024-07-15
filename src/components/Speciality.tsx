import React from 'react';
import {  faShoppingCart, faBalanceScale,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TbBrandSlack } from 'react-icons/tb';
import SpecialityList from './SpecialityCard';

const Speciality = () => {
  return (
    <div className='w-full h-[700px] py-16 bg-slate-50'>
     <div className='text-center'>
            <span className='text-[25px] textShadow2 font-extrabold text-amp_light'>Feature</span>
            <span className='title-element p-0 text-[25px]'><TbBrandSlack/></span>
            <h5 className='text-4xl font-bold text-amp_light textShadow2'>Our Valuable Products</h5>
        </div>
        <div className='py-14 px-24'>
           <SpecialityList/>
        </div>
   
    </div>
  )
}

export default Speciality
