"use client";

import React, { useEffect, useState } from 'react';
import { images } from "@/utils/constants";
import Image from 'next/image';
import Description from './Description';
import { motion } from 'framer-motion';
import Particle from './footer/Particle';

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage, clickNext]); 
  

  return (
    <div className="place-items-center w-full h-full xs:h-auto">
      <div className="w-full flex justify-center items-center  xl:h-[600px] xs:h-[400px] relative">
        {images.map((pic, idx) => (
          <div
            className={`${
              idx === activeImage
                ? 'w-full object-cover transition-all duration-500 ease-in-out h-full'
                : 'hidden'
            }`}
            key={idx}
          >
            <motion.div
              initial={{
                opacity: idx === activeImage ? 0 : 0.5,
                scale: idx === activeImage ? 0.5 : 0.3,
              }}
              animate={{
                opacity: idx === activeImage ? 1 : 0.5,
                scale: idx === activeImage ? 1 : 0.3,
              }}
              transition={{
                ease: 'linear',
                duration: 2,
                x: { duration: 1 },
              }}
              className="w-full h-full"
            >
              <Image
                src={pic.src}
                alt=""
                width={400}
                height={400}
                className="w-full xl:h-[700px] xs:h-[500px] "
              />
               
            </motion.div>
          <div className="absolute top-0 left-0 w-full xs:h-[500px] xl:h-[700px] bg-black opacity-65"></div>

          </div>
        ))}
        <div className="p-0 absolute w-full  top-16">
          <Description
            activeImgIndex={activeImage} clickNext={undefined} clickPrev={undefined}   
          />
        </div>
    
      </div>

    
    </div>
  );
};

export default Slider;
