import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
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
 
  const increment = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
 
  const decrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] > 1 ? prev[id] - 1 : 1 }));
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
            <p className="unit">{product.unit}</p>
            <p className="rating">⭐ {product.rating}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <div className="quantity-control">
              <button onClick={() => decrement(product.id)}><AiOutlineMinus /></button>
              <span>{quantities[product.id]}</span>
              <button onClick={() => increment(product.id)}><AiOutlinePlus /></button>
            </div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default ProductList;