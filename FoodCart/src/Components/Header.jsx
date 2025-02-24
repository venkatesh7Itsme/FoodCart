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
  const [showPagesDropdown, setShowPagesDropdown] = useState(false);
  const [showDepartmentsDropdown, setShowDepartmentsDropdown] = useState(false);

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
            <option>Groceries</option>
            <option>Drinks</option>
            <option>Chocolates</option>
            
          </select>
          <input type="text" placeholder="Search for more than 20,000 products" className="search-input" />
          <FaSearch className="search-icon" />
        </div>
 
   
        <div className="support-cart">
  <div className="support-text">
    <span className="support-label">For Support?</span>
    <span className="support-number">+980-34984089</span>
  </div>
  <div className="icon-group">
    <FaUser className="icon" />
    <FaHeart className="icon" />
  </div>
  <div className="cart-container">
    <span className="cart-text">Your Cart</span>
    <span className="cart-amount">$1290.00</span>
  </div>
</div>

      </div>
 
     
      <div className="menu-bar">
      <div className="menu-container">
      <div 
            className="menu-item dropdown"
            onMouseEnter={() => setShowDepartmentsDropdown(true)}
            onMouseLeave={() => setShowDepartmentsDropdown(false)}
          >
            <span className="bold">Shop by Departments ▼</span>
            {showDepartmentsDropdown && (
              <ul className="dropdown-menu">
                <li><a href="#">Drinks</a></li>
                <li><a href="#">Groceries</a></li>
                <li><a href="#">Chocolates</a></li>
              </ul>
            )}
          </div>
          <span className="menu-item">Women</span>
          <span className="menu-item">Men</span>
          <span className="menu-item">Kids</span>
          <span className="menu-item">Accessories</span>

          <div 
            className="menu-item dropdown"
            onMouseEnter={() => setShowPagesDropdown(true)}
            onMouseLeave={() => setShowPagesDropdown(false)}
          >
            <span className="bold">Pages ▼</span>
            {showPagesDropdown && (
              <ul className="dropdown-menu">
                <li><a href="about.html">About Us</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="single-product.html">Single Product</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="single-post.html">Single Post</a></li>
                <li><a href="styles.html">Styles</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="thank-you.html">Thank You</a></li>
                <li><a href="account.html">My Account</a></li>
                <li><a href="404.html">404 Error</a></li>
              </ul>
            )}
          </div>
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
             
              <h3>20% Off</h3>
              <span className="sale-line"></span>
              <span>SALE</span>
              <h4>Fruits &<br /> Vegetables</h4>
              <a href="#" className="shop-link">Shop Collection →</a>
            </div>
            <img src="https://themewagon.github.io/FoodMart/images/ad-image-1.png" alt="Fruits" />
          </div>
          <div className="promo-banner bakery">
            <div className="promo-content">
 
              <h3>15% Off</h3>                      
             <span className="sale-line"></span>
             <span className="sale-text">SALE</span>
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
 