import React from "react";
import { Carousel } from "react-bootstrap";
import SliderImage1 from "../asset/image/61lwJy4B8PL._SX3000_.jpg";
import SliderImage2 from "../asset/image/71U-Q+N7PXL._SX3000_.jpg";
import SliderImage3 from "../asset/image/71cvRGs+pPL._SX3000_.jpg";

export default function Slider() {
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={SliderImage1} alt="First slide" />
          <Carousel.Caption>
            <h1 className="text-secondary">Choose Your Own Style</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={SliderImage2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="text-secondary">Choose Your Own Style</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={SliderImage3} alt="Third slide" />
          <Carousel.Caption>
            <h1 className="text-secondary">Choose Your Own Style</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
