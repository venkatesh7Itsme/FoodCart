import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart, FiPlus, FiMinus } from "react-icons/fi";
import "../styles/ProductList.css";
 
const App = () => {
  const products = [
    { id: 1, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoes.png",
      name: "Sunstar Fresh Melon Juice",
      price: 18.0,
      discount: "-15%",
      },
    { id: 2, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoketchup.png",
      name: "Sunstar Fresh Melon Juice",
      price: 18.0,
      discount: "-15%",
    },
 
    {
      id: 3, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
      name: "Sunstar Fresh Melon Juice",
      price: 18.0,
      discount: "-15%",
    },
    {
       id: 4, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
     name: "Sunstar Fresh Melon Juice",
      price: 18.0,
      discount: "-15%" ,
    },
 
    {
       id: 5, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoketchup.png",
      name: "Sunstar Fresh Melon Juice",
      price: 18.0 ,
    },
 
    { id: 6, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoes.png",
      name: "Sunstar Fresh Melon Juice",
       price: 18.0 ,
      },
   
    {
       id: 7, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
      name: "Sunstar Fresh Melon Juice",
      price: 18.0, discount: "-15%",
     },
     
    {
      id: 8, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
    name: "Sunstar Fresh Melon Juice",
     price: 18.0,
     discount: "-15%" ,
    },
  ];
 
  const productListRef = useRef(null);
 
 
 
 
  const scrollLeft = () => {
    productListRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
 
  const scrollRight = () => {
    productListRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
 
  return (
    <div className="products-section">
      <div className="section-header">
        <a href="#" className="view-all">View Collection</a>
        <h2>Most Popular Products</h2>
        <div className="nav-buttons">
          <button className="nav-btn" onClick={scrollLeft}><FiChevronLeft size={20} /></button>
          <button className="nav-btn" onClick={scrollRight}><FiChevronRight size={20} /></button>
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
 
export default App;