interface Props{
    amount: number;
}

const FormattedPrice =({amount}:Props)=>{
    const FormattedAmount =new Number(amount).toLocaleString(
        "en-us",{
            style:"currency",
            currency:"INR",
            minimumFractionDigits:0,
        }
    );
    return <span>{FormattedAmount}</span>

}
export default FormattedPrice