import React, { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../styles/Newly.css";
 
const brandItems = [
    {
        id: 1,
        title: "Amber Jar",
        description: "Honey best nectar you wish to get",
        image: "https://themewagon.github.io/FoodMart/images/product-thumb-11.jpg",
      },
      {
        id: 2,
        title: "Amber Jar",
        description: "Honey best nectar you wish to get",
        image: "https://themewagon.github.io/FoodMart/images/product-thumb-12.jpg",
      },
      {
        id: 3,
        title: "Amber Jar",
        description: "Honey best nectar you wish to get",
        image: "https://themewagon.github.io/FoodMart/images/product-thumb-13.jpg",
      },
      {
        id: 4,
        title: "Amber Jar",
        description: "Honey best nectar you wish to get",
        image: "https://themewagon.github.io/FoodMart/images/product-thumb-14.jpg",
      },
      {
        id: 5,
        title: "Amber Jar",
        description: "Honey best nectar you wish to get",
        image: "https://themewagon.github.io/FoodMart/images/product-thumb-11.jpg",
      },
      {
        id: 6,
        title: "Amber Jar",
        description: "Honey best nectar you wish to get",
        image: "https://themewagon.github.io/FoodMart/images/product-thumb-12.jpg",
      },
    ];
   
 
const NewArrivals = () => {
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
    <div className="new-arrivals-container">
      <div className="header-row">
        <h2>Newly Arrived Brands</h2>
        <div className="right-controls">
          <button className="view-all">View All Categories →</button>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={scrollLeft}><FiChevronLeft size={20} /></button>
            <button className="nav-btn" onClick={scrollRight}><FiChevronRight size={20} /></button>
          </div>
        </div>
      </div>
 
      <div className="scroll-container">
        <div className="brand-list" ref={scrollRef}>
          {brandItems.map((item) => (
            <div key={item.id} className="brand-card">
              <img src={item.image} alt={item.title} className="brand-image" />
              <div className="brand-info">
                <h3 className="brand-title">{item.title}</h3>
                <p className="brand-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default NewArrivals;