import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";

// todo 
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
    const {price} = useParams();
    console.log(price);
    return (
        <div>
            <h1 className="text-center text-3xl">Please Process payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;