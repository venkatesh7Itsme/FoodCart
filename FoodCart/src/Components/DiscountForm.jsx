import React from "react";
import "../styles/DiscountForm.css";
 
const DiscountForm = () => {
  return (
    <div className="discount-container">
     
      <div className="discount-text-container">
        <h2 className="discount-title">
          Get <span className="highlight">25% Discount</span> on your first purchase
        </h2>
        <p className="discount-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa posuere.
        </p>
      </div>
 
     
      <div className="discount-form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
 
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="abc@mail.com" />
 
          <div className="checkbox-container">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe">Subscribe to the newsletter</label>
          </div>
 
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
 
export default DiscountForm;
 