
import Products from '@/components/shop/Product';
import React from 'react';
import { ProductProps } from '../../type';



interface Props{
  productData:ProductProps
}
const shop = ({productData}:Props) => {
 
  return (
    <div className='flex justify-center w-full bg-gray-100 '>
    
   <div>
   <Products productData={productData} />
   </div>
    </div>
  )
}

 export default shop

 export const getServerSideProps = async () => {

  const res =await fetch("https://api-json-7y49.onrender.com/product");
  const productData= await res.json();
  return{props: {productData}};
 }



