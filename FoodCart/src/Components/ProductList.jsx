import React, { useRef } from "react";
import {  FiHeart, FiPlus, FiMinus } from "react-icons/fi";
import { FaStar,FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/ProductList.css";

const ProductList = () => {
  const products = [
    { id: 1, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoes.png", name: "Fresh Tomatoes", price: 18.0 },
    { id: 2, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoketchup.png", name: "Tomato Ketchup", price: 18.0 },
    { id: 3, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png", name: "Organic Bananas", price: 18.0 },
    { id: 4, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png", name: "Sunstar Fresh Bananas", price: 18.0 },
    { id: 5, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoketchup.png", name: "Sunstar Tomato Ketchup", price: 18.0 },
    { id: 6, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoes.png", name: "Sunstar Fresh Tomatoes", price: 18.0 },
    { id: 7, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png", name: "Sunstar Fresh Bananas", price: 18.0 },
    { id: 8, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png", name: "Sunstar Fresh Bananas", price: 18.0 },
  ];

  const productListRef = useRef(null);

  const scrollLeft = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
 
  const scrollRight = () => {
    if (productListRef.current) {
      productListRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="products-section">
      
      <div className="section-header">
    <h2 className="section-title">Most Popular Products</h2>
    <button className="view-collection">View All Categories →</button>
    <div className="nav-buttons">
          <button className="nav-button" onClick={scrollLeft}><FaChevronLeft /></button>
            <button className="nav-button" onClick={scrollRight}><FaChevronRight /></button>
    </div>
</div>


      <div className="products-list" ref={productListRef}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <button className="wishlist-btn"><FiHeart size={18} /></button>
            </div>

            <h3 className="product-name">{product.name}</h3>
            
            <div className="product-details">
                        <span>1 UNIT <FaStar color="gold" /> 4.5</span>
                        </div>
                        
                        <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="product-actions">

              <button className="quantity-btn"><FiMinus size={16} /></button>
              <span className="quantity">1</span>
              <button className="quantity-btn"><FiPlus size={16} /></button>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
