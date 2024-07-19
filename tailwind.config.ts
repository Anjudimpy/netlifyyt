import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     screens:{
      xs:"320px",
      sm:"375px",
      sml:"500px",
      md:"667px",
      mdl:"768px",
      lg:"960px",
      lgl:"1098px",
      xl:"1280px"
     },
     colors:{
      amp_blue:"#00264d",
      amp_light:"#00274df1",
      amp_red:"#e71c52",
      lightText:"#ccc",
     },
     fontFamily:{
      bodyFont:["Poppins","sans-serif"]
     },
     animation: {
      'slow-spin': 'spin 6s linear infinite',
      'slow1-spin1': 'spin 4s linear infinite',
      'slow2-spin2': 'spin 7s linear infinite',
      
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      spin1: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      spin2: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      
    },
    

    
     
    },
  },
  plugins: [],
};
export default config;
