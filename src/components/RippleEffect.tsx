import { useEffect, useRef } from 'react';
import $ from 'jquery';
import FunFact from './FunFact';

const RippleEffect = () => {
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
    <div
      className='bgimage relative xl:h-[700px] lg:h-[700px] sm:h-[480px] xs:h-[430px]'
      ref={containerRef}
      style={{
        backgroundColor: 'black',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        
      }}
    >
        <div className="absolute top-0 left-0 w-full xl:h-[700px] lg:h-[700px] sm:h-[480px] xs:h-[430px] bg-black opacity-40"></div>
    

{/* contain */}

<div>
<FunFact/>
      
</div>


    </div>
  );
};

export default RippleEffect;
