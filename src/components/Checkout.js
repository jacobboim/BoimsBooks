import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://s3.us-east-2.amazonaws.com/cdn.platform.capitalc.co/media/10469/conversions/4t81ta48yewil2s4__Seforim-1800.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {!user?.email ? "Guest" : user?.email} </h3>
          <h2 className="checkout__title">
            {basket?.length === 0
              ? "Your shopping basket is empty"
              : "Your shopping basket"}
          </h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/* CheckoutProduct */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
