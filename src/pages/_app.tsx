import RootLayout from "@/components/RootLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/globals.css";
import 'react-multi-carousel/lib/styles.css';
import type { AppProps } from "next/app";
import BottamHeader from "@/components/header/BottamHeader";

export default function App({ Component, pageProps }: AppProps) {
 
 
 return (
<div>
<RootLayout>
<Component {...pageProps} />
</RootLayout>
</div>
  );
}
