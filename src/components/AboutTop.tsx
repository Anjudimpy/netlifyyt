import { useEffect, useRef } from 'react';
import $ from 'jquery';
import { IoHome } from 'react-icons/io5';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Product from '@/components/product/Product';

const AboutTop = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      import(('jquery.ripples')as any).then((module) => {
        const ripples = module.default;
        if (containerRef.current) {
            ($(containerRef.current) as any).ripples({
          resolution: 256,
          perturbance: 0.03,
          dropRadius: 20,
        });

        return () => {
          if (containerRef.current) {
            $(containerRef.current).ripples('destroy');
          }
        };
    }
      });
    }
  }, []);

  return (
 
      <div className='relative bgimage h-[19rem] w-full'
      ref={containerRef}
      style={{
        backgroundColor: 'black',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        
      }}
    >
        <div className="absolute top-0 left-0 w-full h-[19rem] bg-black opacity-50"></div>
    
        <div className='grid grid-cols-1 md:grid-cols-2 px-20 text-center justify-center w-full text-white absolute bottom-0 md:h-[90px] sm:h-[150px] bg-[#00274de1]'>
  <div className='flex justify-start items-center w-[10rem] text-[35px] font-semibold'>
    About
  </div>
  <div className='flex justify-end  items-center '>
    <div className='md:w-[13.9rem] sm:w-full flex text-center py-3 font-semibold justify-between px-[30px] bg-amp_red sm:h-[3.5rem] xs:h-[3rem] xs:mb-2 rounded-full'>
    <span className='flex '><IoHome className='text-[25px] mx-1'/>
     Home</span>
      <FaLongArrowAltRight className='text-[20px] my-1'/>
      <span>About</span>
    </div>
  </div>



</div>
 </div>





  
  );
};

export default AboutTop;



