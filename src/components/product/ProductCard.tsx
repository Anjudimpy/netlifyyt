import React from 'react';
import { FaBottleWater } from 'react-icons/fa6';
import { AiFillProduct } from "react-icons/ai";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { FaToolbox } from "react-icons/fa";

type ProductCardProps = {
  title: string,
  description: string,
  icon: React.ComponentType,
  dataAos: string,
  dataAosDelay?: string,
}

const ProductCard = ({ title, description, icon: Icon, dataAos, dataAosDelay }: ProductCardProps) => {
  return (
    <div data-aos={dataAos} data-aos-delay={dataAosDelay} className='relative  h-[21rem] w-[20rem]  bg-white  rounded-md shadow-md shadow-red-300 mx-2'>
      <div className='group h-[21rem]  w-[20rem] rounded-lg dropdown-content transition duration-500 transform ease-linear'>
        <div className='flex text-center justify-center py-7'>
          <div className='text-[55px] group-hover:bg-white transition duration-300 bg-amp_red text-white rounded-full p-3 group-hover:scale-x-[-1]'>
            <span className='group-hover:text-amp_red'><Icon /></span>
          </div>
        </div>
        <div>
          <div className='absolute top-5 right-8 group-hover:opacity-35 text-[60px] group-hover:animate-bounce text-red-200'>
            <Icon />
          </div>
        </div>
        <h2 className='flex text-center justify-center group-hover:text-white text-amp_blue text-[20px] font-bold'>{title}</h2>
        <p className='flex text-center group-hover:text-white justify-center mt-2  w-[20rem] py-2 px-2 text-[15px] font-serif text-amp_light'>
          {description}
        </p>
        <span className='flex group-hover:text-white items-center justify-center cursor-pointer font-bold text-[17px] text-amp_red'>
          Read More
        </span>
      </div>
    </div>
  )
}

const ProductCardList = () => {
  const products = [
    {
      title: 'Gel',
      description: 'Ampeeet specializes in providing high-quality NDT gel, ensuring reliable and efficient non-destructive testing processes for various industries.',
      icon: FaBottleWater,
      dataAos: 'zoom-in-down',
      dataAosDelay: '300',
    },
    {
      title: 'Consumables',
      description: ' Ampeeet offers a comprehensive range of NDT consumables, delivering superior quality products designed for efficient and precise testing processes.',
      icon: AiFillProduct,
      dataAos: 'zoom-in-up',
      dataAosDelay: '600',
    },
    {
      title: 'Calibration Block',
      description: 'Ampeeet delivers top-quality NDT calibration blocks, ensuring the reliability and accuracy crucial for non-destructive testing applications.',
      icon: TfiLayoutMediaRightAlt,
      dataAos: 'zoom-in-left',
      dataAosDelay: '900',
    },
    {
      title: 'GDT Probes & Accessories',
      description: 'Ampeeet specializes in the distribution of high-quality NDT probes and accessories, catering to diverse industrial inspection needs.',
      icon: FaToolbox,
      dataAos: 'zoom-in-right',
      dataAosDelay: '1200',
    },
  ];

  return (
  <div className='w-full'>
  <div className='w-full xl:flex lg:flex xs:grid xs:gap-2  items-center gap-1 justify-between'>
      {products.map((product, idx) => (
        <ProductCard
          key={idx}
          title={product.title}
          description={product.description}
          icon={product.icon}
          dataAos={product.dataAos}
          dataAosDelay={product.dataAosDelay}
        />
      ))}
    </div>
  </div>
  );
}

export default ProductCardList;
