import React from 'react';
import Head from 'next/head';
import Image, { StaticImageData } from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  
  lg: {
    breakpoint: { max: 1300, min: 1100 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  lap: {
    breakpoint: { max: 1100, min: 950 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  xl: {
    breakpoint: { max:950 , min: 700 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 700, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const items = [
  {
    src: "/ameee/gel1.jpg",
    alt: 'Anti-Spatter Gel',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
  },
  {
    src: "/ameee/goggles-3.jpg",
    alt: 'Consumables',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
  },
  {
    src: "/ameee/Calibration-Blocks.jpg",
    alt: 'Calibration Block',
    description: 'Calibration blocks ensure accurate measurement and standardization in testing.',
  },
  {
    src: "/ameee/ndtProps.jpg",
    alt: 'NDT Probes',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
  },
  {
    src: "/ameee/safety.jpg",
    alt: 'Safety Accessories',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
  },
  {
    src: "/ameee/welding.webp",
    alt: 'Welding Machine',
    description: 'Anti-Spatter Gel for torch nozzle in manual operations.',
  },
];

type CarouselItemProps = {
  src: string;
  alt: string;
  description: string;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ src, alt, description }) => {
  return (
    <div className="w-52 h-52">
      <div className="relative w-48 h-48 shadow-md shadow-red-400  rounded-full">
        <Image src={src} alt={alt} width={250} height={250} className="w-48 h-48 owlimg rounded-full bg-cover  bg-no-repeat " />
        <div className="group absolute top-0 w-48 h-48 rounded-full text-center hover:bg-[#e71c52b9] transition duration-500 cursor-pointer text-amp_blue justify-center border hover:border-blue-950 shadow-md shadow-red-400">
          <h1 className="text-[15px] py-[70px] group-hover:text-white text-transparent transition duration-500 cursor-pointer absolute font-semibold">
            {description}
          </h1>
        </div>
      </div>
    </div>
  );
};

const MyCarousel: React.FC = () => (
  <Carousel
    responsive={responsive}
    infinite={true}
    autoPlaySpeed={2000}
    autoPlay={true}
    itemClass="flex items-center justify-center"
  >
    {items.map((item, index) => (
      <CarouselItem key={index} src={item.src} alt={item.alt} description={item.description} />
    ))}
  </Carousel>
);



export default MyCarousel;
