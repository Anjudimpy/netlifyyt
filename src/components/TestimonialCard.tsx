import React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactStars from 'react-stars';
import {MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1300, min: 900 },
    items: 2,
    slidesToSlide: 1, 
  },
  mobile: {
    breakpoint: { max:900, min: 0 },
    items: 1,
    slidesToSlide: 1, 
  },
};

const items = [
  {
    src: "/man.jpeg",
    title: "Manager",
    alt: 'Aanadi Aliraj',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '#00274df1', // Example background color
  },
  {
    src: "/shandhiya.jpeg",
    title: " Account Manager",
    alt: 'Shandhiya',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '#e71c52e1', // Example background color
  },
  {
    src: "/man.jpeg",
    title: "Manager",
    alt: 'Aanadi Aliraj',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '#00274df1', // Example background color
  },
  {
    src: "/shandhiya.jpeg",
    title: " Account Manager",
    alt: 'Shandhiya',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '#e71c52e1', // Example background color
  },
  {
    src: "/man.jpeg",
    title: "Manager",
    alt: 'Aanadi Aliraj',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '#00274df1', 
  },
  {
    src: "/shandhiya.jpeg",
    title: " Account Manager",
    alt: 'Shandhiya',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '#e71c52e1', // Example background color
  },
];

type CarouselItemProps = {
  src: string;
  title: string;
  alt: string;
  description: string;
  bgColor: string; 
};

const CarouselItem: React.FC<CarouselItemProps> = ({ src, alt, title, description, bgColor }) => {
        return (
          <div className="xl:w-[24rem] lg:w-[24rem] sm:w-[23.5rem] xs:w-[16rem] h-48">
            <div className="relative w-[24rem] sm:w-[23.5rem] xs:w-[17rem] bg-white h-[10.4rem] shadow-md shadow-red-400  rounded-full ">
          
              <div className="group absolute flex justify-between top-6 -left-4  w-28 h-28 rounded-full p-[11px]  text-center transition duration-500 cursor-pointer text-amp_blue "  style={{backgroundColor:bgColor}}>
              <Image src={src}  alt='' width={200} height={200} className="w-[5.6rem] h-[5.6rem] owlimg rounded-full bg-cover  bg-no-repeat " />
               </div>
           
            <div className='absolute felx w-fit items-center justify-center left-[6.6rem] top-5 '>
            <div className='w-full text-base text-amp_blue font-semibold' >
                  {alt}
              </div>
                <h1 className=" text-amp_red transition duration-500 cursor-pointer absolute font-bold">
                  {title}
                </h1>
            
                <p className='pt-7 text-[14px] xs:text-[12px] font-semibold italic text-amp_light'>
                  {description}
                </p>
                <span>
                <ReactStars
                size={24}
                color1={'#ffd700'}/>
        
                </span>
             
            </div>
          </div> </div>
        );
      };
      const CustomButtonGroup: React.FC<{
        next?: () => void;
        previous?: () => void;
        carouselState?: any;
      }> = ({ next, previous }) => {
        return (
          <div className="flex justify-center mt-4">
            <button onClick={previous} className="mx-2 p-2 text-[25px] font-bold bg-amp_blue text-white rounded-full hover:bg-amp_red">
           <MdKeyboardArrowLeft/>
            </button>
            <button onClick={next} className="mx-2 p-2 text-[25px]  bg-[#e71c52e1] text-white font-bold rounded-full hover:bg-amp_red">
                <MdKeyboardArrowRight/>
            </button>
          </div>
        );
      };

      const Testimonial: React.FC = () => (
        <div className="relative">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlaySpeed={5000}
            autoPlay={true}
            itemClass="flex items-center justify-center"
            arrows={false} 
            renderButtonGroupOutside={true}
            customButtonGroup={<CustomButtonGroup />}
          >
            {items.map((item, index) => (
              <CarouselItem key={index} title={item.title} src={item.src} alt={item.alt} description={item.description} bgColor={item.bgColor} />
            ))}
          </Carousel>
        </div>
      );
      
      export default Testimonial;