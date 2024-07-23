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
    <div className=" w-[100%] bg-transparent relative xl:left-[8%] xs:left-[7%]">
      <div className=""></div>
      {images.map((elem, idx) => (
        <div className={`${
          idx === activeImgIndex
            ? 'block w-[100vh] h-[80vh] object-cover transition-all duration-500 ease-in-out'
            : 'hidden'
        }`} key={idx}>
          <motion.div
            key={`${elem.title}-${activeImgIndex}`} 
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
            <div className="xl:py-16 xs:py-1  text-white w-full xl:text-5xl sm:text-2xl font-extrabold">
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
          <div className="leading-relaxed text-white xl:font-medium lg:font-medium   sm:text-[14px] xs:text-[13px] xl:text-[18px] lg:text-[18px] text-base tracking-wide xs:w-[17rem] sm:w-[20rem] md:w-[33rem] lg:w-full text-justify xl:h-40 xs:h-44 italic ">
              {elem.desc}
            </div> 
            <button className='xl:w-[23%] lg:w-[18%] xs:w-[7.5rem] xs:h-10 sm:w-[8rem] sm:h-11 btn hover:bg-transparent xl:h-12 pt-1 text-[18px] text-white font-semibold bg-amp_light p-2 border-none rounded-full mx-2  '>
            <div className='absolute btn1 xl:w-[12rem] xs:w-[11rem] xs:h-[11rem] lg:text-[15px] xs:text-[12px] xs:-top-1  xl:-top-2 xl:-left-4 xs:-left-[30px] h-[11rem] pt-[10px]  xl:text-[18px] text-white font-semibold  '>
          Get Started | +</div>
        </button>
        <button className='xl:w-[23%] lg:w-[18%] xs:w-[7.5rem] xs:h-10 sm:w-[8rem] sm:h-11  btn hover:bg-transparent xl:h-12 pt-1 text-[18px] text-white font-semibold bg-transparent p-2 border rounded-full mx-2  '>
            <div className='absolute btn1 xl:w-[12rem] xs:w-[11rem] lg:text-[15px] xs:h-[11rem] xs:text-[12px] xs:-top-1  xl:-top-2 xl:-left-4 xs:-left-[30px] h-[11rem] pt-[10px]  xl:text-[18px] text-white font-semibold  '>
          Read More | +
          </div></button>
            </motion.div>
        <div>
        <div className='flex absolute w-full md:-mt-3 xs:mt-12  xl:left-[28%] lgl:left-[27%] lg:left-[30%] mdl:left-[35%] md:left-[41%] left-0   '> 
                <span className=" vedio-button ">
            <TiMediaPlay  className=' absolute bg-[#e03202]  h-10 p-1 w-10 rounded-full text-white' />
             </span>
             <p className='pt-2 px-2  text-white text-base font-semibold'>Get Free Delivery</p>
       
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
