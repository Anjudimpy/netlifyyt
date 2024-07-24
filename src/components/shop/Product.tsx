import React from "react";
import Image from "next/image";
import { images } from "@/utils/productStore"; 

const Products = () => {


  return (
    <div className="w-full   h-full my-20">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  xl:grid-cols-4 gap-5">
        {images.map((pic, idx) => (
          <div className="w-full"
             key={idx}
          >
           <div className="w-[300px] h-[420px] sha cursor-pointer bg-white">

        <div className="group">
        <Image
              src={pic.src}
              alt={`Image ${idx}`}
              width={4000}
              height={4000}
              className="w-[300px] h-[250px] mb-2 object-cover scale-90 hover:scale-100"
    
            />
            <hr className="scale-90 group-hover:scale-100"></hr>
        </div>
            <div className="px-3 pt-2 text-amp_light font-bold">{pic.title}</div>
            <p className="px-3 "><span className="font-semibold">Rs. </span>{pic.price}</p>
           <p className="text-gray-500 text-[12px] px-3 text-justify">{pic.desc}</p>
           <div className="w-full flex justify-center">
           <div className="bg-amp_blue h-10 w-48 mt-[30px] cursor-pointer btn hover:bg-amp_red text-white flex justify-center py-2 font-semibold"> Add To Cart</div>
           </div>
           </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
