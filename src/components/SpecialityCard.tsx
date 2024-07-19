
import React from 'react'
import { FaSprayCanSparkles } from "react-icons/fa6";
import { TfiSpray } from "react-icons/tfi";
import { SiMoleculer } from "react-icons/si";
import { FcElectronics } from "react-icons/fc";
import { FaShieldVirus } from "react-icons/fa6";
import { GiSpray, GiPaintRoller, GiGreaseTrap, GiBarbedCoil } from "react-icons/gi";
import { PiSprayBottleFill } from "react-icons/pi";

type SpecialityCardProps = {
  title: string,
  icon: React.ComponentType,
  dataAos: string,
  dataAosDelay?: string,
}

const SpecialityCard = ({ title, icon: Icon, dataAos, dataAosDelay }: SpecialityCardProps) => {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
      className='relative xl:h-[11rem] xl:w-[15rem] md:h-[11rem] md:w-[15rem] lg:h-[10rem] lg:w-[13rem] xs:h-[8.2rem] xs:w-[18.3rem]  sm:h-[8rem] sm:w-[11.6rem] bg-white shadow-md shadow-red-200 mx-[13px] sm:mx-0'
    >
      <div className='group xl:h-[11rem] xl:w-[15rem] md:h-[11rem] md:w-[15rem] lg:h-[10rem] lg:w-[13rem]   xs:h-[8.2rem] xs:w-[18.3rem]  sm:h-[8rem] sm:w-[11.6rem] spacality transition duration-500 transform ease-linear'>
        <span className='flex items-center group-hover:scale-x-[-1] justify-center xl:text-[80px] lg:text-[80px] md:text-[80px] xs:text-[60px] sm:text-[60px] text-amp_red rounded-full p-3 group-hover:text-white transform transition-transform duration-500 '>
          <Icon />
        </span>
        <h2 className='flex text-center px-2 justify-center dotted-underline group-hover:text-white text-amp_blue xl:text-[17px] lg:text-[16px] md:text-[14px] sm:text-[12px] font-semibold'>
          {title}
        </h2>
      </div>
    </div>
  )
}


const SpecialityList = () => {
    const Speciality = [
      {
        title: 'Rust Remover',
        icon: FaSprayCanSparkles,
        dataAos: 'fade-up',
        dataAosDelay: '1',
      },
      {
        title: 'Anti Spatter',
        icon: FaShieldVirus,
        dataAos: 'fade-down',
        dataAosDelay: '400',
      },
      {
        title: 'Zinc Spray',
        icon: GiSpray,
        dataAos: 'fade-left',
        dataAosDelay: '900',
      },
      {
        title: 'Grease',
        icon: GiGreaseTrap,
        dataAos: 'fade-right',
        dataAosDelay: '1200',
      },
      {
        title: 'Chain Oil Spray',
        icon: GiBarbedCoil,
        dataAos: 'flip-left',
        dataAosDelay: '1500',
      },
      {
        title: 'Mole Spray',
        icon: SiMoleculer,
        dataAos: 'flip-right',
        dataAosDelay: '1600',
      },
      {
        title: 'Corrogard Wax Spray',
        icon: TfiSpray,
        dataAos: 'zoom-in',
        dataAosDelay: '2100',
      },
      {
        title: 'Electrical Contact Cleaner Spray',
        icon: FcElectronics,
        dataAos: 'zoom-out',
        dataAosDelay: '2400',
      },
      {
        title: 'Paint & Gasket Remover',
        icon: GiPaintRoller,
        dataAos: 'fade-up',
        dataAosDelay: '2700',
      },
      {
        title: 'Leak Detector Spray',
        icon: PiSprayBottleFill,
        dataAos: 'fade-down',
        dataAosDelay: '3000',
      },
    ]
  
    return (
      <div className='grid grid-cols-1 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2  xl:grid-cols-5 gap-6'>
        {Speciality.map((product, idx) => (
          <SpecialityCard
            key={idx}
            title={product.title}
            icon={product.icon}
            dataAos={product.dataAos}
            dataAosDelay={product.dataAosDelay}
          />
        ))}
      </div>
    )
  }
  
  export default SpecialityList;
  
