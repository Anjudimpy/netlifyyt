import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Product from "@/components/Product";
import {ProductProps} from '../../type'


// const inter = Inter({ subsets: ["latin"] });

interface Props{
  productData:ProductProps
}

export default function Home({productData}:Props) {
  return (
    <main>
      
      <div className="py-10 bg-gray-300">
      <Banner/>
      <Product productData={productData} />
      </div>
   
    </main>
  );
}

export const getServerSideProps = async () => {

 const res =await fetch("https://fakestoreapi.com/products");
 const productData= await res.json();
 return{props: {productData}};
}