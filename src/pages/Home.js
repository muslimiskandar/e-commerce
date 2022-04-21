import React from "react";
import AllProducts from "../components/AllProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarTop from "../components/NavbarTop";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Track from "./Track";
import Men from "./collection/Men";
import Women from "./collection/Women";

const Home = () => {
  return (
    <div>
      {/* <NavbarTop /> */}
      <AllProducts />
    </div>
  );
};

export default Home;
