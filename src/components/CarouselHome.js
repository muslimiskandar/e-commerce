import React from "react";
import { Carousel } from "react-bootstrap";
import menoutfit from "../Images/menoutfit.webp";
import womenoutfit from "../Images/womenoutfit.jpeg";
import jewellery from "../Images/jewellery.jpeg";
import techgadgets from "../Images/techgadgets.jpeg";

const CarouselHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={menoutfit}
            alt="First slide"
            height="550px"
          />
          <Carousel.Caption>
            <h3>Best men outfits</h3>
            <p>Start wearing stylish from now</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={womenoutfit}
            alt="Second slide"
            height="550px"
          />
          <Carousel.Caption>
            <h3>Women collection</h3>
            <p>It is a time to buy nice dresses</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={jewellery}
            alt="Third slide"
            height="550px"
          />
          <Carousel.Caption>
            <h3>Our shining jewellery</h3>
            <p>They are silver and you'll be shine as sun</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={techgadgets}
            alt="Third slide"
            height="550px"
          />
          <Carousel.Caption>
            <h3>Tech gadgets</h3>
            <p>Let's start to enhance power of your technical devices</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
