import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BannerItem from "./BannerItem/BannerItem";
import dummy from "../../../mock/dummy.json";
import { flexBox } from "../../../lib/styles/mixin";
import useSlide from "./useSlide";

const CarouselBlock = styled.div`
  position: relative;
  display: block;
  margin-bottom: 0;
  .slick-list {
    padding: 0 50px;
  }
`;

const SlickTrack = styled.div`
  display: flex;
  position: relative;
  left: 0;
  top: 0;

  ${({ width }) => `width: ${width}px`};
  transform: ${({ initTranslateX }) => `translateX(${initTranslateX}px)`};
`;

const Carousel = () => {
  const { bannerItems, initTranslateX, slickTrackWidth, bannerImageSize } =
    useSlide();

  return (
    <CarouselBlock>
      <SlickTrack width={slickTrackWidth} initTranslateX={initTranslateX}>
        {bannerItems.map((item, index) => {
          const props = { bannerImageSize, ...item };
          return <BannerItem key={index} {...props} />;
        })}
      </SlickTrack>
    </CarouselBlock>
  );
};

export default Carousel;
