import React from "react";
import "../styles/Cart.css";


    
    const CartSidebar = ({ onClose }) => {
      return (
        <div className="cart-sidebar">
          <button className="cart-close-btn" onClick={onClose}>×</button>
          <h3 className="cart-title">Your Cart</h3>
          <div className="cart-items">
            <div className="cart-item">
              <p className="cart-item-name">Growers Cider</p>
              <span className="cart-item-price">$12</span>
            </div>
            <div className="cart-item">
              <p className="cart-item-name">Fresh Grapes</p>
              <span className="cart-item-price">$8</span>
            </div>
            <div className="cart-item">
              <p className="cart-item-name">Heinz Tomato Ketchup</p>
              <span className="cart-item-price">$5</span>
            </div>
          </div>
          <div className="cart-total">
            <p>Total: <span className="cart-total-price">$25</span></p>
          </div>
          <button className="cart-checkout-btn">Continue to Checkout</button>
        </div>
      );
    };
    
    export default CartSidebar;
    