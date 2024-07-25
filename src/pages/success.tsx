import { useDispatch } from "react-redux"
import React from "react";
import Link from "next/link";
import { resetCart } from "@/store/nextSlice";

const SuccessPage =()=>{

    const dispatch = useDispatch();
    return(
        <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-2xl  font-semibold">Thank you for shopping in Ampeet.</h1>
            <Link className="text-lg text-gray-500 hover:underline-offset-4 decoration-[1px] hover:text-amp_blue duration-300" 
            href={"/"} 
            onClick={()=>dispatch(resetCart())}>
                <p >Continue Shopping</p>
            </Link>
        </div>

    );

};
export default SuccessPage;