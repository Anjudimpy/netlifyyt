import React from 'react'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Particle from '../footer/Particle'
import ProductCardList from './ProductCard'
const Product = () => {
  return (
    <div className='w-full xl:h-[700px] lg:h-[700px] xs:h-[103rem] bg-[#f5d1d1] py-20'>
     <div className='text-center'>
            <span className='lg:text-[25px] xl:text-[25px] xs:text-[15px] textShadow1 font-extrabold text-amp_blue'>Products</span>
            <span className='title-element'><FontAwesomeIcon icon={faShoppingCart}/></span>
            <h5 className='lg:text-4xl xl:text-4xl xs:text-[25px] font-bold text-amp_blue textShadow1'>Our Valuable Products</h5>
        </div>
        <div className="flex justify-center items-center py-14">
        <div >
        <ProductCardList />
      </div>
    </div>
        <Particle/>
    </div>
  )
}

export default Product
