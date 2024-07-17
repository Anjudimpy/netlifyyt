import { useEffect, useRef } from 'react';
import $ from 'jquery';
import FunFact from './FunFact';
import ContactUs from './ContactUs';

const ContactBg = () => {
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
    <div className="relative ">
    <div
      className='bgContact bg-fixed'
      ref={containerRef}
      style={{
        backgroundColor: 'black',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '78rem',
      }}
    >
        <div className="absolute top-0 left-0 w-full h-[800px] bg-black opacity-40"></div>
    

{/* contain */}

<div className=' relative w-full
 '>
<ContactUs/>
      
</div>

</div>

    </div>
  );
};

export default ContactBg;
