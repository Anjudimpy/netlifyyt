import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';
import { TbArrowWaveRightDown } from "react-icons/tb";

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
    breakpoint: { max: 900, min: 0 },
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
    bgColor: '',
    textColor: ''
  },
  {
    src: "/shandhiya.jpeg",
    title: "Account Manager",
    alt: 'Shandhiya',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '',
    textColor: ''
  },
  {
    src: "/man.jpeg",
    title: "Manager",
    alt: 'Aanadi Aliraj',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '',
    textColor: ''
  },
  {
    src: "/shandhiya.jpeg",
    title: "Account Manager",
    alt: 'Shandhiya',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '',
    textColor: ''
  },
  {
    src: "/man.jpeg",
    title: "Manager",
    alt: 'Aanadi Aliraj',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '',
    textColor: ''
  },
  {
    src: "/shandhiya.jpeg",
    title: "Account Manager",
    alt: 'Shandhiya',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
    bgColor: '',
    textColor: ''
  },
];

type CarouselItemProps = {
  src: string;
  title: string;
  alt: string;
  description: string;
  bgColor: string;
  textColor: string;
  quote:string;
  isMiddle?: boolean;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ src, alt,quote, textColor, title, description, bgColor, isMiddle }) => {
  const finalBgColor = isMiddle ? '#f05780e8' : bgColor;
  const finalTextColor = isMiddle ? '#fff' : textColor;
  const quoteBgColor = isMiddle ? '#00274df1' : quote;

  return (
  <div className='group relative h-[20rem] pt-10'>
     <div className='h-12 w-12  absolute top-6 left-5 group-hover:bg-amp_light bg-amp_red text-white p-[12px]  rounded-full flex justify-center' style={{ backgroundColor: quoteBgColor}}>
          <FaQuoteLeft className=' text-[22px] '/>
        </div>
      <div className="  h-[15.4rem] w-[25.3rem] sha  bg-white">
      <div className=" group h-[15.4rem] w-[25.3rem] text-amp_light   hover:bg-[#f05780e8] hover:text-white hover:transition-all hover:duration-500 hover:ease-in-out" style={{ backgroundColor: finalBgColor, color: finalTextColor }}>
       
        <div className="px-[25px] py-[40px] ">
          <div className='text text-justify py-2 text-[16px] font-mono'>
            Lorem, ipsum dolor  adipisicing elit. Provident
            {description}
          </div>
          
          <div className='flex mt-4'>
          <div className='outline rounded-full text-white w-[3rem]   h-[3rem]'>
          <Image src={src}  alt='' width={200} height={200} className="w-[3rem]   h-[3rem] owlimg rounded-full bg-cover  bg-no-repeat " />
          </div>
          <div className='block text-start px-4'>
             <h3 className="text-lg font-bold ">{alt}</h3>
             <p className='text-amp_red group-hover:text-white' style={{color:finalTextColor}}>{title}</p>
          </div>
          </div>
             

        </div>
      </div>
    </div>
  </div>
  );
};

const CustomButtonGroup: React.FC<{
  next?: () => void;
  previous?: () => void;
  carouselState?: any;
}> = ({ next, previous }) => {
  return (
    <div className="group relative flex justify-center">
  
      <div onClick={previous} className="mx-2  font-bold outline text-white rounded-full h-12 w-12 hover:bg-amp_red">
      <Image src='/shandhiya.jpeg' alt='' width={100} height={100} className='rounded-full h-12 w-12'/>
      </div>
      <div onClick={previous} className="-ml-6  font-bold outline text-white rounded-full h-12 w-12 hover:bg-amp_red">
      <Image src='/man.jpeg' alt='' width={1000} height={1000} className='rounded-full h-12 w-12'/>
      </div>
      <div onClick={previous} className="-ml-4  font-bold outline text-white rounded-full h-12 w-12 hover:bg-amp_red">
      <Image src='/shandhiya.jpeg' alt='' width={1000} height={1000} className='rounded-full h-12 w-12'/>
      </div>
    
      <div className='  text-white -mt-6 pl-4 font-thin'>
        <TbArrowWaveRightDown className='text-[80px] font-thin '/>
        </div>
        <div className='group mt-6 text-amp_blue font-semibold text-[18px] '>
         <span className='cursor-pointer hover:text-amp_red dotted-underline1'> More FeedBack</span>
        </div>
     
    </div>
  );
};

const AboutTestimonialCrd: React.FC = () => (
  <div className="relative justify-center">
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
      {items.map((item, index) => {
        // Determine if this item is the middle item in its group of 3
        const isMiddle = (index % 3) === 1;
        return (
          <CarouselItem
            key={index}
            title={item.title}
            src={item.src}
            alt={item.alt}
            description={item.description}
            bgColor={item.bgColor}
            quote={item.alt}
            textColor={item.textColor}
            isMiddle={isMiddle}
          />
        );
      })}
    </Carousel>
    <div>
      
    </div>
  </div>
);

export default AboutTestimonialCrd;
