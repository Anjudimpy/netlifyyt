import React, {ReactElement} from "react";
import Header from "./header/header";
import BottamHeader from "./header/BottamHeader";
import Footer from "./footer/Footer";


interface Props{
    children:ReactElement
} 
const RootLayout = ( {children}:Props) => {
  return (
<>
<Header/>
<BottamHeader/>
{children}
<Footer/>
</>
  );
};

export default RootLayout
