import React from 'react';
import { motion } from 'framer-motion';

type CarouselItemProps = {
  src: string;
  title: string;
  alt: string;
  description: string;
  bgColor: string;
  textColor: string;
  isMiddle?: boolean;
};

const CarouselItem: React.FC<CarouselItemProps> = ({ src, alt, textColor, title, description, bgColor, isMiddle }) => {
  const finalBgColor = isMiddle ? '#f05780e8' : bgColor;
  const finalTextColor = isMiddle ? '#fff' : textColor;

  return (
    <div className="h-[15.4rem] w-[25.3rem] sha bg-white">
      <div className="h-[15.4rem] w-[25.3rem]" style={{ backgroundColor: finalBgColor, color: finalTextColor }}>
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {description}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
