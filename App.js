import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import Slidder from "./components/slidder/Slidder";
import Testimonial from "./components/testimonial/Testimonial";
import Virtual from "./components/virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header/>
      <React.StrictMode>
      <Hero/>
      </React.StrictMode>
      <Slidder/>
      <Virtual/>
      <Products/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
