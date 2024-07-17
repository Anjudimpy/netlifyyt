import React from 'react';
import { images } from "@/utils/constants";
import Image from 'next/image';
import { IoIosArrowDropdown, IoMdArrowDropleft, IoMdArrowDropright,} from 'react-icons/io';
import { motion } from 'framer-motion';
import { MdSlowMotionVideo } from 'react-icons/md';
import { TiMediaPlay } from 'react-icons/ti';


type Props = {
    clickNext: any,
    clickPrev: any,
    activeImgIndex: any
};

const Description = ({ clickNext, clickPrev, activeImgIndex }: Props) => {
  return (
    <div className=" w-[100%] bg-transparent relative left-[8%]">
      <div className=""></div>
      {images.map((elem, idx) => (
        <div className={`${
          idx === activeImgIndex
            ? 'block w-[100vh] h-[80vh] object-cover transition-all duration-500 ease-in-out'
            : 'hidden'
        }`} key={idx}>
          <motion.div
            key={`${elem.title}-${activeImgIndex}`} // Ensure unique key for each animation trigger
            initial={{
              opacity: 0,
              scale: 0.8,
              y: -1000, 
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0, 
            }}
            transition={{
              ease: "easeOut",
              duration: 1.5,
            }}
            className="w-full"
          >
            <div className="py-16 text-white w-full text-5xl font-extrabold">
              {elem.title}
            </div>
            
          </motion.div>
          <motion.div
            key={`${elem.desc}-${activeImgIndex}`} 
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 30, 
            }}
           
            className="w-full"
          >
          <div className="leading-relaxed text-white font-medium text-base tracking-wide h-40 italic ">
              {elem.desc}
            </div> 
            <button className='w-[24%] btn hover:bg-transparent h-12 pt-1 text-[18px] text-white font-semibold bg-amp_light p-2 border-none rounded-full mx-2  '>
            <div className='absolute btn1 w-[11rem] -top-2 -left-4 h-[10rem] pt-[10px]  text-[18px] text-white font-semibold border border-amp_blue   '>
          Get Started | +</div>
        </button>
        <button className='relative btn  w-[24%]  transition duration-500 h-12 left-0   text-[18px] text-white font-semibold border border-amp_blue  rounded-full mx-2 '>
           <div className='absolute btn1 w-[11rem] -top-2 -left-4 h-[10rem] pt-2  text-[18px] text-white font-semibold border border-amp_blue   '>
          Read More | +
          </div></button>
            </motion.div>
        <div>
        <div className='flex absolute bottom-[31%] left-[26%]'> 
        
         <span className=" vedio-button">
            <TiMediaPlay  className=' absolute bg-[#e03202]  h-10 p-1 w-10 rounded-full text-white' />
             </span>
             <p className='pt-2 px-2 text-white text-base font-semibold'>Get Free Delivery</p>
        </div>

         </div>
       
          {/* <div className="absolute bottom-1 w-full flex justify-center items-center">
            <div onClick={clickPrev} className="absolute bottom-2 right-10 cursor-pointer">
              <IoMdArrowDropright className="h-3 w-3" />
            </div>
            <div onClick={clickNext} className="absolute bottom-2 right-2 cursor-pointer">
              <IoMdArrowDropleft className="h-3 w-3" />
            </div>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Description;
