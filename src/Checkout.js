import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
// import CurrencyFormat from "react-currency-format";

function Checkout() {
 const [{ basket }] = useStateValue();
 console.log(basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
    <img 
    className="checkout__ad" 
    src="https://m.media-amazon.com/images/G/01/FireTV/Inline/IDB_RatingLabel_Approved._TTW_.jpg" alt="" />

    {basket?.length === 0 ? (
      <div>
        <h2>Your Shopping Basket is empty</h2>
        <p>
          You have no itms in your basket. To buy one or more itms, click "Add to basket" next to the item.
        </p>
      </div> 
    ) : (
      <div>
        <h2 className="checkout__title">Your Shopping Basket </h2>
        {/* list of all of the checkout product */}
        {basket?.map(item => (
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
          
          )

        )

        }
        
      </div>
   ) }
   </div>
   {basket.length > 0 && (
     <div className="checkout__right">
       {/* <h1>Subtotal</h1> */}
     {/* <Subtotal /> */}
      <Subtotal />
     </div>
   )}
    </div>
  );
}

export default Checkout;