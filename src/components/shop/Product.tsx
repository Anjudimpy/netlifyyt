import React from "react";
import Image from "next/image";
import { images } from "@/utils/productStore";
import { ProductProps } from "../../../type"; 
import FormattedPrice from "./FormatedPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/nextSlice";

const Products = ({productData}:any) => {
 const dispatch =useDispatch();

  return (
    <div className="w-full   h-full my-20">
    
   
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  xl:grid-cols-4 gap-5">
      {productData.map(({
      id,
      title,
      price,
      description,
      category,
      image
      }:ProductProps)=>(
        <div key={id} className="w-full">
           <div className="w-[300px] h-[395px] sha cursor-pointer bg-white">

        <div className="grou ">
        <Image width={3000} height={3000} src={image} alt="hg"
              className="w-[300px] h-[250px] mb-2 object-cover scale-90 hover:scale-100"
    
            />
            <hr className="scale-90 group-hover:scale-100"></hr>
        </div>
            <div className="px-3 pt-2 text-amp_light font-bold">{title.substring(0,28)}</div>
            <p className="px-3 "><span className="font-semibold">
              <FormattedPrice amount={price}/></span>
            </p>
           <p className="text-gray-500 text-[12px] px-3 text-justify">     {description.substring(0,100)}</p>
           <div className="w-full flex justify-center">
           <button
             onClick={()=>dispatch(
              addToCart({
                  id:id,
                  title:title,
                  price:price,
                  description:description,
                  category: category,
                  image:image,
                  quantity:1,
              })
          )} 
           className="bg-amp_blue h-10 w-48 mt-[7%] rounded-none cursor-pointer btn hover:bg-amp_red text-white flex justify-center py-2 font-semibold">
             Add To Cart</button>
           </div>
           </div>
           
          </div>
        ))}
      </div>



    </div>
  );
};

export default Products;
