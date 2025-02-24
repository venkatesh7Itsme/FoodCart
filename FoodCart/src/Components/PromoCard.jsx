import React from "react";
import "../styles/PromoCard.css";
 
const PromoCards = () => {
  return (
    <div className="promo-container">
      <div className="promo-card pink-bg">
        <div className="promo-text">
          <p className="offer">Upto 25% Off</p>
          <h2 className="title">Luxa Dark Chocolate</h2>
          <p className="description">
            Very tasty & creamy vanilla flavour creamy muffins.
          </p>
          <button className="promo-btn">SHOW NOW</button>
        </div>
        <img
          src="https://themewagon.github.io/FoodMart/images/ad-image-3.png"
          alt="Dark Chocolate"
          className="promo-image"
        />
      </div>
 
      <div className="promo-card blue-bg">
        <div className="promo-text">
          <p className="offer">Upto 25% Off</p>
          <h2 className="title">Creamy Muffins</h2>
          <p className="description">
            Very tasty & creamy vanilla flavour creamy muffins.
          </p>
          <button className="promo-btn">SHOW NOW</button>
        </div>
        <img
          src="https://themewagon.github.io/FoodMart/images/ad-image-4.png"
          alt="Creamy Muffins"
          className="promo-image"
        />
      </div>
    </div>
  );
};
 
export default PromoCards;
 