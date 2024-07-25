import { NextApiRequest, NextApiResponse } from "next";
import { StoreProduct } from "../../../type";

const stripe = require("stript")(process.env.STRIPE_SECRET_KEY);
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const{items, email} = req.body;
    const modifiedItem =items.map((item:StoreProduct)=>({
        quantity: item.quantity,
        price_data:{
            currency: "inr",
            unit_amount: item.price,
            produt_data:{
            name:item.title,
            description: item.description,
            images:[item.image],

            },
        },
    }));
    const session = await stripe.checkout.session.create({
        payment_method_types:["card"],
        shipping_address_collection:{
            allowed_countries:["IN","US","CA","GB","OM"]
        },
        line_items:modifiedItem,
        mode:"payment",
        success_url:`${process.env.NEXTAUTH_URL}/success`,
        cancle_url:`${process.env.NEXTAUTH_URL}/checkout`,
        metadata:{
            email,
            images: JSON.stringify(items.map((item:any)=>items.image

            )),
        },

    });
    res.status(200).json({
        id:session.id,
    })
}