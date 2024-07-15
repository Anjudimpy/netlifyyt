import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import oil from '../images/ameee/Chain-Oil.jpg';
import belt from '../images/ameee/safetybelt-1.jpg';
import { TbHandClick } from "react-icons/tb";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 800 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 600, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const MyCarousel = () => (
    <Carousel
    responsive={responsive}
    infinite={true}
    autoPlaySpeed={5000}
     autoPlay={true}
    itemClass="flex items-center justify-center  "
 
 
  >
    <div className="w-52 h-52 ">
       <div className="w-48 h-48 shadow-md shadow-red-400  bg-amp_light  rounded-full">
       <div className="group w-48 h-48 rounded-full text-center  hover:bg-red-300 transition duration-500   cursor-pointer text-white justify-center p-2 border hover:border-blue-950  shadow-md shadow-red-400 ">
           <h1 className="pt-[55px] text-[20px] group-hover:animate-bounce px-[1.2rem] hover:text-gray-700 transition duration-500   cursor-pointer absolute font-bold
           textShadow ">ANTI SPATTER <br></br> AGENTS
           <br></br> FOR WELDING
            </h1>
          
        </div>
       </div>
    </div>
   

     <div className="w-52 h-52 ">
       <div className="w-48 h-48 shadow-md shadow-red-400  bg-amp_light  rounded-full">
       <div className="group w-48 h-48 rounded-full text-center  hover:bg-red-300 transition duration-500   cursor-pointer text-white justify-center p-2 border hover:border-blue-950  shadow-md shadow-red-400 ">
           <h1 className="pt-[55px] text-[20px] group-hover:animate-bounce  pr-11 hover:text-gray-700 transition duration-500   cursor-pointer absolute font-bold
           textShadow ">INDUSTRIAL MAINTENANCE   <br></br> PRODUCTS
           <br></br> 
            </h1>
          
        </div>
       </div>
    </div>

    <div className="w-52 h-52 ">
       <div className="w-48 h-48 shadow-md shadow-red-400  bg-amp_light  rounded-full">
       <div className="group w-48 h-48 rounded-full text-center  hover:bg-red-300 transition duration-500   cursor-pointer text-white justify-center p-2 border hover:border-blue-950  shadow-md shadow-red-400 ">
           <h1 className="pt-[69px] text-[20px] group-hover:animate-bounce px-2 hover:text-gray-700 transition duration-500   cursor-pointer absolute font-bold
           textShadow ">MOULD RELEASE <br></br> AGENTS
           <br></br>
            </h1>
          
        </div>
       </div>
    </div>

     <div className="w-52 h-52 ">
       <div className="w-48 h-48 shadow-md shadow-red-400  bg-amp_light  rounded-full">
       <div className="group w-48 h-48 rounded-full text-center  hover:bg-red-300 transition duration-500   cursor-pointer text-white justify-center p-2 border hover:border-blue-950  shadow-md shadow-red-400 ">
           <h1 className="pt-[60px] pr-12 text-[20px] group-hover:animate-bounce  hover:text-gray-700 transition duration-500   cursor-pointer absolute font-bold
           textShadow ">SPECIALITY LUBRICANTS<br></br>
            </h1>
          
        </div>
       </div>
    </div>
    <div className="w-52 h-52 ">
       <div className="w-48 h-48 shadow-md shadow-red-400  bg-amp_light  rounded-full">
       <div className="group w-48 h-48 rounded-full text-center  hover:bg-red-300 transition duration-500   cursor-pointer text-white justify-center p-2 border hover:border-blue-950  shadow-md shadow-red-400 ">
           <h1 className="pt-[65px] text-[20px] pr-11 group-hover:animate-bounce  hover:text-gray-700 transition duration-500   cursor-pointer absolute font-bold
           textShadow "> RTV SILICONE SEALANTS
            </h1>
          
        </div>
       </div>
    </div>
    <div className="w-52 h-52 ">
       <div className="w-48 h-48 shadow-md shadow-red-400  bg-amp_light  rounded-full">
       <div className="group w-48 h-48 rounded-full text-center  hover:bg-red-300 transition duration-500   cursor-pointer text-white justify-center p-2 border hover:border-blue-950  shadow-md shadow-red-400 ">
           <h1 className="pt-[45px] text-[20px] pr-10 group-hover:animate-bounce  hover:text-gray-700 transition duration-500   cursor-pointer absolute font-bold
           textShadow ">SILICON <br></br>EEMULSIONS, <br></br> FLUIDS AND DEFOAMERS 
           <br></br> 
          
            </h1>
          
        </div>
       </div>
    </div>
   
    
</Carousel>
);

export default MyCarousel;
