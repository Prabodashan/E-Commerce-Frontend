import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Offer from "../Components/Offer/Offer";
import Products from "../Components/Products/Products";
import SlideCard from "../Components/SlideCard/SlideCard";
import Testimonial from "../Components/Testimonial/Testimonial";
import Featured from "./../Components/Featured/Featured";
import Brands from "./../Components/Brands/Brands";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <Navbar />
          <SlideCard />
        </div>
      </div>
      <Featured />
      <Products />
      <Offer />
      <Testimonial />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
