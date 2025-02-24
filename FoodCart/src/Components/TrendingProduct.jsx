import React, { useState } from "react";
import { FaHeart, FaRegHeart,FaStar,FaPlus, FaMinus, } from "react-icons/fa";

import "../styles/TrendingProduct.css";
 
const products = [
  {
    id: 1,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
    discount: "30%",
  },
  {
    id: 2,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-biscuits.png",
    discount: "30%",
  },
  {
    id: 3,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-cucumber.png",
  },
  {
    id: 4,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-milk.png",
  },
  {
    id: 5,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-bananas.png",
    discount: "30%",
  },
  {
    id: 6,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-biscuits.png",
    discount: "30%",
  },
  {
    id: 7,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-cucumber.png",
  },
  {
    id: 8,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-milk.png",
  },
  {
    id: 9,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-cucumber.png",
  },
  {
    id: 10,
    name: "Sunstar Fresh Melon Juice",
    price: 18.0,
    rating: 4.5,
    unit: "1 UNIT",
    image: "https://themewagon.github.io/FoodMart/images/thumb-milk.png",
  },
 
 
 
];
 
const categories = ["All", "Fruits & Veges", "Juices"];
 
const ProductList = () => {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [wishlist, setWishlist] = useState({});
 
  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max((prev[id] || 1) - 1, 1) }));
  };

 
  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };
 
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
 
  return (
    <div className="product-container">
      <h2>Trending Products</h2>
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="trending-product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            {product.discount && <span className="discount">{product.discount}</span>}
            <span className="wishlist-icon" onClick={() => toggleWishlist(product.id)}>
              {wishlist[product.id] ? <FaHeart color="red" /> : <FaRegHeart color="#888" />}
            </span>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>

            <div className="product-details">
                        <span>1 UNIT <FaStar color="gold" /> 4.5</span>
                        </div>
                        <p className="product-price">${product.price.toFixed(2)}</p>

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