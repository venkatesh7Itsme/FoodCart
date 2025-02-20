import React, { useState } from 'react';
import { FaSearch, FaUser, FaHeart } from "react-icons/fa";
import '../styles/Header.css';
 
const bannerSlides = [
  {
    tag: '100% Natural',
    title: 'Fresh Smoothie & Summer Juice',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.',
    imgSrc: 'https://themewagon.github.io/FoodMart/images/product-thumb-1.png',
  },
  {
    tag: '100% Natural',
    title: 'Heinz Tomato Ketchup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.',
    imgSrc: 'https://themewagon.github.io/FoodMart/images/product-thumb-2.png',
  },
  {
    tag: '100% Natural',
    title: 'Fresh Smoothie & Summer Juice',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.',
    imgSrc: 'https://themewagon.github.io/FoodMart/images/product-thumb-1.png',
  },
 
];
 
const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  return (
    <div>
 
    <div className="top-bar">
      <div className="container">
       
        <div className="logo">
          <img src="https://themewagon.github.io/FoodMart/images/logo.png" alt="FoodMart Logo" className="logo-img" />
         
        </div>
       
   
        <div className="search-bar">
          <select className="category-select">
            <option>All Categories</option>
          </select>
          <input type="text" placeholder="Search for more than 20,000 products" className="search-input" />
          <FaSearch className="search-icon" />
        </div>
 
   
        <div className="support-cart">
          <div className="support-text">
            <span className="support-label">For Support?</span>
            <span className="support-number">+980-34984089</span>
          </div>
          <FaUser className="icon" />
          <FaHeart className="icon" />
          <div className="cart-text">Your Cart <span className="cart-amount">$1290.00</span></div>
        </div>
      </div>
 
     
      <div className="menu-bar">
        <div className="menu-container">
          <span className="menu-item bold">Shop by Departments ▼</span>
          <span className="menu-item">Women</span>
          <span className="menu-item">Men</span>
          <span className="menu-item">Kids</span>
          <span className="menu-item">Accessories</span>
          <span className="menu-item bold">Pages ▼</span>
          <span className="menu-item">Brand</span>
          <span className="menu-item">Sale</span>
          <span className="menu-item">Blog</span>
        </div>
      </div>
    </div>
 
 
      <div className="hero">
        <div className="main-banner">
          <div className="banner-content">
            <span className="natural-tag">{bannerSlides[currentSlide].tag}</span>
            <h2>{bannerSlides[currentSlide].title}</h2>
            <p>{bannerSlides[currentSlide].description}</p>
            <button className="shop-btn">SHOP NOW</button>
          </div>
          <img src={bannerSlides[currentSlide].imgSrc} alt="Banner" className="banner-img" />
          <div className="slider-controls">
            {bannerSlides.map((_, index) => (
              <span key={index} className={`dot ${currentSlide === index ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
            ))}
          </div>
        </div>
        <div className="side-banners">
          <div className="promo-banner fruits">
            <div className="promo-content">
              <span>SALE</span>
              <h3>20% Off</h3>
              <h4>Fruits & Vegetables</h4>
              <a href="#" className="shop-link">Shop Collection →</a>
            </div>
            <img src="https://themewagon.github.io/FoodMart/images/ad-image-1.png" alt="Fruits" />
          </div>
          <div className="promo-banner bakery">
            <div className="promo-content">
              <span>SALE</span>
              <h3>15% Off</h3>
              <h4>Baked Products</h4>
              <a href="#" className="shop-link">Shop Collection →</a>
            </div>
            <img src="https://themewagon.github.io/FoodMart/images/ad-image-2.png" alt="Bakery" />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Header;
 