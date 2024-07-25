import Image from "next/image";
import React from "react";
import FormattedPrice from "./FormatedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "@/store/nextSlice";

interface   Item{
    id:number;
    title:string;
    price: number;
    description:string;
    category:string;
    image:string;
    quantity:number;
}
interface CartProductProps{
    item:Item;
}

const CartProduct =({item}:CartProductProps)=>{
    const dispatch = useDispatch();
    return(
        <div className="bg-gray-100 flex rounded-lg items-center gap-4">
            <Image className="object-cover " width={150} height={150} src={item.image} alt="productImage"/>
            <div className="flex items-center px-2 gap">
                <div className="flex flex-col gap-1">
                    <p className="text-lg font-semibold text-amp_blue">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-sm font-semibold text-gray-600">Unit Price{" "} 
                    <span className="font-semibold text-amp_blue" >
                        <FormattedPrice amount={item.price}/></span></p>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-sm w-28
                            shadow-lg shadow-gray-500">
                                <span onClick={()=>{
                                    dispatch(
                                        increaseQuantity({
                                            id:item.id,
                                            title:item.title,
                                            price : item.price,
                                            description : item.description,
                                            category: item.category,
                                            image: item.image,
                                            quantity: 1,
                                        })
                                    )

                                }} className=" flex items-center text-amp_blue hover:text-amp_red cursor-pointer">
                                    <LuPlus/>
                                </span>
                                <span className="text-gray-500">
                                    {item.quantity}
                                </span>
                                <span onClick={()=>{
                                    dispatch(
                                        decreaseQuantity({
                                            id:item.id,
                                            title:item.title,
                                            price : item.price,
                                            description : item.description,
                                            category: item.category,
                                            image: item.image,
                                            quantity: 1,
                                        })
                                    )

                                }} className="flex items-center text-amp_red hover:text-amp_blue cursor-pointer">
                                
                                    <LuMinus/>
                                </span>
                            </div>
                            <div onClick={()=> dispatch(deleteProduct(item.id))}
                            className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300">
                             <IoMdClose/><p>remove</p>
                        </div> 
                         </div>
                </div>
                <div className="text-lg font-semibold text-amp_blue">
                    <FormattedPrice amount={item.price * item.quantity}/></div>
            </div>
        </div>
    )
}
export default CartProduct;