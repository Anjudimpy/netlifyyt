import React from 'react'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Particle from '../footer/Particle'
import ProductCardList from './ProductCard'
const Product = () => {
  return (
    <div className='w-full h-[700px] bg-[#f5d1d1] py-20'>
     <div className='text-center'>
            <span className='text-[25px] textShadow1 font-extrabold text-amp_blue'>Products</span>
            <span className='title-element'><FontAwesomeIcon icon={faShoppingCart}/></span>
            <h5 className='text-4xl font-bold text-amp_blue textShadow1'>Our Valuable Products</h5>
        </div>
        <div className='py-14 px-20'>
            <ProductCardList/>
        </div>
        <Particle/>
    </div>
  )
}

export default Product
