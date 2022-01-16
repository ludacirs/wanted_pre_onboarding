import React from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton/ArrowButton";
import Carousel from "./Carousel/Carousel";
import useSlide from "./Carousel/useSlide";
import useAutoSlide from "./useAutoSlide";

const BannerBlock = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  margin-top: 20px;
`;

const Banner = () => {
  const { prevSlide, nextSlide } = useSlide();
  const { handleBannerEnter, handleBannerLeave } = useAutoSlide(nextSlide);

  return (
    <BannerBlock
      onMouseEnter={handleBannerEnter}
      onMouseLeave={handleBannerLeave}
      onTouchStart={handleBannerEnter}
      onTouchEnd={handleBannerLeave}
    >
      <Carousel />
      <ArrowButton position={"right"} handleClick={nextSlide} />
      <ArrowButton position={"left"} handleClick={prevSlide} />
    </BannerBlock>
  );
};

export default Banner;
