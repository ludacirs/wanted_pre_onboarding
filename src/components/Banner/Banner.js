import React from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton/ArrowButton";
import Carousel from "./Carousel/Carousel";

const BannerBlock = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
`;

const Banner = () => {
  return (
    <BannerBlock>
      <Carousel />
      <ArrowButton />
      <ArrowButton />
    </BannerBlock>
  );
};

export default Banner;
