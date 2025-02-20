import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaPlus, FaMinus } from "react-icons/fa";
import "../styles/JustArrived.css";
 
const allProducts = [
    {
        id: 1,
        name: "Sunstar Fresh Melon Juice",
        price: "$18.00",
        rating: 4.5,
        image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoketchup.png",
      },
      {
        id: 2,
        name: "Sunstar Fresh Melon Juice",
        price: "$18.00",
        rating: 4.5,
        image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
      },
      {
        id: 3,
        name: "Sunstar Fresh Melon Juice",
        price: "$18.00",
        rating: 4.5,
        image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
      },
      {
        id: 4,
        name: "Sunstar Fresh Melon Juice",
        price: "$18.00",
        rating: 4.5,
        image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoes.png",
      },
      {
        id: 5,
        name: "Sunstar Fresh Melon Juice",
        price: "$18.00",
        rating: 4.5,
        image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
      },
      {
        id: 6,
        name: "Sunstar Fresh Melon Juice",
        price: "$18.00",
        rating: 4.5,
        image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoketchup.png",
      },
    ];
   
 
 
const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
 
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
 
  return (
    <div className="product-card">
      <div className="favorite-icon" onClick={() => setIsFavorite(!isFavorite)}>
        <FaHeart color={isFavorite ? "red" : "gray"} />
      </div>
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <div className="product-info">
        <span className="product-rating">⭐ {product.rating}</span>
        <span className="product-price">{product.price}</span>
      </div>
      <div className="cart-controls">
        <div className="quantity-control">
          <button className="quantity-button" onClick={decreaseQuantity}>
            <FaMinus />
          </button>
          <span className="quantity">{quantity}</span>
          <button className="quantity-button" onClick={increaseQuantity}>
            <FaPlus />
          </button>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};
 
const ProductList = () => {
  const scrollRef = useRef(null);
 
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -220, behavior: "smooth" });
    }
  };
 
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: "smooth" });
    }
  };
 
  return (
    <div className="product-list-container">
      <div className="header">
        <h2 className="product-list-title">Just Arrived</h2>
        <div className="header-actions">
          <button className="view-collection">View All Categories →</button>
          <div className="navigation-buttons">
            <button className="nav-button" onClick={scrollLeft}>
              <FaChevronLeft />
            </button>
            <button className="nav-button" onClick={scrollRight}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="product-grid" ref={scrollRef}>
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
 
export default ProductList;