import React from "react";
import Header from './Components/Header';
import Category from './Components/Category';
import Newly from './Components/Newly';
import TrendingProduct from "./Components/TrendingProduct";
import PromoCard from "./Components/PromoCard";
import BestSelling from "./Components/BestSelling";
import DiscountForm from "../src/Components/DiscountForm";
import ProductList from "../src/Components/ProductList";
import JustArrived from "../src/Components/JustArrived";
const App = () => {
  return (
    <div>
      <Header />
      <Category/>
      <Newly/>
      <TrendingProduct/>
      <PromoCard/>
      <BestSelling/>
      <DiscountForm/>
     <ProductList/>
      <JustArrived/>
     
     
    </div>
  );
};
 
export default App;
 