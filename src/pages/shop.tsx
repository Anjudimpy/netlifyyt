
import Products from '@/components/shop/Product';
import React from 'react';




const shop = () => {
  const productData = 0;
  return (
    <div className='flex justify-center w-full bg-gray-100 '>
    
   <div>
   <Products  productData={productData} />
   </div>
    </div>
  )
}

 export default shop



