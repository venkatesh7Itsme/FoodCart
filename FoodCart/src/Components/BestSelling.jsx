import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaHeart, FaPlus, FaMinus, FaStar } from "react-icons/fa";
import "../styles/BestSelling.css";
 
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
  { id: 3, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
   discount: "-15%",
   },
  { id: 4, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
   name: "Sunstar Fresh Melon Juice",
   price: 18.0,
    discount: "-15%",
   },
  { id: 5, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoketchup.png",
   name: "Sunstar Fresh Melon Juice",
   price: 18.0,
   },
  { id: 6, image: "https://themewagon.github.io/FoodMart/images/thumb-tomatoes.png",
   name: "Sunstar Fresh Melon Juice",
    price: 18.0 ,
  },
  { id: 7, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
   name: "Sunstar Fresh Melon Juice",
    price: 18.0,
     discount: "-15%" ,
    },  
  { id: 8, image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
    name: "Sunstar Fresh Melon Juice",
     price: 18.0,
      discount: "-15%",
     },
];
 
const ProductList = () => {
  const [quantities, setQuantities] = useState({});
  const productListRef = useRef(null);
 
  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };
 
  const handleDecrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 1) }));
  };
 
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
    <div className="product-list-container">
      <div className="header">
        <h2 className="product-list-title">Best Selling Products</h2>
        <div className="header-actions">
          <button className="view-collection">View All Categories →</button>
          <div className="navigation-buttons">
            <button className="nav-button" onClick={scrollLeft}><FaChevronLeft /></button>
            <button className="nav-button" onClick={scrollRight}><FaChevronRight /></button>
          </div>
        </div>
      </div>
 
      <div className="product-grid" ref={productListRef}>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {product.discount && <span className="discount">{product.discount}</span>}
            <FaHeart className="favorite-icon" />
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-info">
              <span>1 UNIT</span>
              <span className="rating"><FaStar color="gold" /> 4.5</span>
            </div>
            <p className="price">${product.price.toFixed(2)}</p>
            <div className="cart-controls">
              <div className="quantity-control">
                <button className="quantity-button" onClick={() => handleDecrement(product.id)}><FaMinus /></button>
                <span>{quantities[product.id] || 1}</span>
                <button className="quantity-button" onClick={() => handleIncrement(product.id)}><FaPlus /></button>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default ProductList;
 
