import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
import BottamHeader from "@/components/header/BottamHeader";
import Footer from "@/components/footer/Footer";
import Banner from "@/components/Banner";
import Slider from "@/components/Slider";
import BasicExample from "@/components/tree";
import Product from "@/components/product/Product";
import Speciality from "@/components/Speciality";
import Appointment from "@/components/Appointment";
import PlanningPrice from "@/components/PlanningPrice";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import RippleEffect from "@/components/RippleEffect";
import WorkProccess from "@/components/WorkProccess";
import ContactUs from "@/components/ContactUs";
import ContactBg from "@/components/ContactsBg";


export default function Home() {

useEffect(()=>{
  
  AOS.init({
  
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
},[])

  return (
    <main className="w-full overflow-hidden bg-white">
      <div className="xl:h-[700px] xs:h-[500px] bgimage relative z-[1]">
        
        <Slider/>
      </div>
        <div className="relative z-[1]">
        <BasicExample/>
        </div>
         <Product/>
         <Speciality/>
         <Appointment/>
         <PlanningPrice/>
      <div className="bg-white">
      <RippleEffect/>
      </div>
         <ContactBg/>
         <div className="relative z-[1]">
         <WorkProccess/>
          </div>
         

      
   
 
    </main>
  );
}

