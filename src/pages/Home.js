import React from "react";
import AllProducts from "../components/AllProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselHome from "../components/CarouselHome";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <AllProducts />
    </div>
  );
};

export default Home;
