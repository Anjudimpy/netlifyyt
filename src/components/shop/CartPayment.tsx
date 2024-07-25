import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { StoreProduct, stateProps } from '../../../type';
import { SiMediafire } from 'react-icons/si';
import FormattedPrice from './FormatedPrice';
import {loadStripe} from '@stripe/stripe-js'
import {useSession} from 'next-auth/react';

const CartPayment = () => {
    const {productData, userInfo} = useSelector((state:stateProps)=>state.next);
    const[totalAmount, setTotalAmount] =useState(0);

    useEffect(()=>{
        let amount=0;
        productData.map((item:StoreProduct)=>{
            amount += item.price * item.quantity;
            return
        })
        setTotalAmount(amount)
    },[productData])

   
    const stripePromise=loadStripe(
       process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
    )
    const {data:session}= useSession();
    const handleCheckout =async()=>{
      const stripe =await stripePromise;
      const response =await fetch("/api/checkout",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({items:productData,email:session?.user?.email}),
      });
      const checkoutSession = await response.json();
      const result:any=await stripe?.redirectToCheckout({
        sessionId: checkoutSession.id,
      });
      if(result.error){
        alert(result?.error.message);
      }

    }
  return (
    <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex gap-2'>
          <span className='bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white
          flex items-center justify-center mt-1'>
            <SiMediafire/>
          </span>
          <p className='text-sm '>
            Your order is eligible for FREE Delivery. Continue for more details </p>
        </div>
      <p className='flex text-gray-700 items-center justify-between px-2 font-semibold'>
        Total Proce: {" "}
        <span className='font-bold text-xl text-black'>
            <FormattedPrice amount={totalAmount}/>
        </span>
      </p>
     {
        userInfo?(
            <div className='flex flex-col items-center ' >
                <button
                onClick={handleCheckout}
                className='w-full h-10 text-sm font-semibold bg-amp_red opacity-70  text-white rounded-lg hover:bg-amp_blue
                hover:text-white duration-300  '>
                    Proceed to Checkout
                </button>
            </div>
        ):(
            <div className='flex flex-col items-center '>
            <button className='w-full h-10 text-sm font-semibold bg-amp_red opacity-70 cursor-not-allowed text-white rounded-lg  '>
               Proceed to Checkout</button>
             <p className='text-xs mt-1 font-semibold animate-bounce text-green-700'>Please Login to Continue</p>
            </div> 
        )
     }
    </div>
  );
}

export default CartPayment;
