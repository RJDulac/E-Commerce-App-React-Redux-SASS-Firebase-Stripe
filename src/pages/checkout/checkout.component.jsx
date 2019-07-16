import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import "./checkout.style.scss";

const Checkout = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block" />
      <span>Product</span>
      <div className="header-block" />
      <span>Description</span>
      <div className="header-block" />
      <span>Quanity</span>
      <div className="header-block" />
      <span>Price</span>
      <div className="header-block" />
      <span>Remove</span>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <div>TOTAL: ${total}</div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(Checkout);
