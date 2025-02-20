import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Category.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; 

const categories = [
    { name: "Fruits & Veges", img: "https://themewagon.github.io/FoodMart/images/icon-vegetables-broccoli.png" },
  { name: "Chicken", img: "https://themewagon.github.io/FoodMart/images/icon-animal-products-drumsticks.png" },
  { name: "Bread Flour", img: "https://themewagon.github.io/FoodMart/images/icon-bread-herb-flour.png" },
  { name: "Fruits & Veges", img: "https://themewagon.github.io/FoodMart/images/icon-vegetables-broccoli.png" },
  { name: "Breads & Sweets", img: "https://themewagon.github.io/FoodMart/images/icon-bread-baguette.png" },
  { name: "Soft Drinks", img: "https://themewagon.github.io/FoodMart/images/icon-soft-drinks-bottle.png" },
  { name: "Wines", img: "https://themewagon.github.io/FoodMart/images/icon-wine-glass-bottle.png" },

  { name: "Fruits & Veges", img: "https://themewagon.github.io/FoodMart/images/icon-vegetables-broccoli.png" },
  { name: "Fruits & Veges", img: "https://themewagon.github.io/FoodMart/images/icon-vegetables-broccoli.png" },
  { name: "Fruits & Veges", img: "https://themewagon.github.io/FoodMart/images/icon-vegetables-broccoli.png" },
  { name: "Fruits & Veges", img: "https://themewagon.github.io/FoodMart/images/icon-vegetables-broccoli.png" },
  { name: "Fruits & Veges", img: "https://themewagon.github.io/FoodMart/images/icon-vegetables-broccoli.png" },
];

const CategorySection = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector(".swiper-button-next")?.click();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="category-container">
      <div className="category-header d-flex flex-wrap justify-content-between mb-4">
        <h2 className="section-title">Category</h2>
        <div className="d-flex align-items-center">
          <a href="/categories" className="btn-link text-decoration-none">
            View All Categories →
          </a>

        
          <div className="swiper-buttons">
            <button className="swiper-prev category-carousel-prev">
              <FaAngleLeft />
            </button>
            <button className="swiper-next category-carousel-next">
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>

      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={6}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="category-slider"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 15 },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="category-card">
                <img src={category.img} alt={category.name} className="category-image" />
                <p>{category.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySection;
