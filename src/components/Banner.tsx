import React from "react";
import { Carousel } from 'react-responsive-carousel';
import ship from '../images/ameee/ship.jpg';
import shoe from '../images/ameee/shoe.jpg';
import slideimage from '../images/ameee/slideimage.jpg';
import Image from "next/image";
import { motion } from 'framer-motion';

const Banner = () => {
  const variants = {
    hidden: { opacity: 0, y: 0.5},
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative">
      <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} interval={2000} className="">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            ease : "linear",
            duration: 2,
            x: {duration:1},
        }}
        >
          <Image priority src={ship} alt="sliderImg" className="h-[600px] w-full" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{
            ease : "linear",
            duration: 2,
            x: {duration:1},
        }}
        >
          <Image src={shoe} alt="sliderImg" className="h-[600px] w-full" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <Image src={slideimage} alt="sliderImg" className="h-[600px] w-full" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <Image priority src={ship} alt="sliderImg" className="h-[600px] w-full" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <Image src={shoe} alt="sliderImg" className="h-[600px] w-full" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <Image src={slideimage} alt="sliderImg" className="h-[600px] w-full" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <Image src={shoe} alt="sliderImg" className="h-[600px] w-full" />
        </motion.div>
      </Carousel>
      <div className="w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20"></div>
    </div>
  );
};

export default Banner;
