import React from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton/ArrowButton";
import Carousel from "./Carousel/Carousel";
import useSlide from "./Carousel/useSlide";

const BannerBlock = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  margin-top: 20px;
`;

const Banner = () => {
  const { prevSlide, nextSlide } = useSlide();

  return (
    <BannerBlock>
      <Carousel />
      <ArrowButton position={"right"} handleClick={nextSlide} />
      <ArrowButton position={"left"} handleClick={prevSlide} />
    </BannerBlock>
  );
};

export default Banner;
