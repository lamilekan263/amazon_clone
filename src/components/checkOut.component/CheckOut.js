import React from 'react'
import CheckoutProduct from '../checkOutProduct/CheckoutProduct';
import { useStateValue } from '../State/StateProvider';
import Subtotal from '../subtotal.component/Subtotal';

import './CheckOut.css'
function CheckOut() {
  const [ {basket}, dispatch ] = useStateValue()
    return (
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {
              basket.map(item => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image = { item.image}
                  price={item.price}
                  rating = { item.rating}
                  
                />
              ))
            }
          </div>
        </div>
        <div className="checkout__right">
          <h2>The subtotal will go here</h2>
          <Subtotal />
        </div>
      </div>
    );
}

export default CheckOut
