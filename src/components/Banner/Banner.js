import React from "react";
import styled from "styled-components";
import ArrowButton from "./ArrowButton/ArrowButton";
import Carousel from "./Carousel/Carousel";

const BannerBlock = styled.div`
  position: relative;
  overflow: hidden;
  height: auto;
  margin-top: 20px;
`;

const Banner = () => {
  return (
    <BannerBlock>
      <Carousel />
      <ArrowButton position={"right"} />
      <ArrowButton position={"left"} />
    </BannerBlock>
  );
};

export default Banner;
