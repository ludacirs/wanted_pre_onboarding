import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import BannerItem from "./BannerItem/BannerItem";
import useSlide from "./useSlide";
import {
  CHANGE_FORCE,
  FORCE_MOVE,
  MOVE_NEXT_SLIDE,
  useSlideDispatch,
  useSlideState,
} from "../../../contexts/SlideContext";

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
  transition: ${({ force }) => (force ? `0` : `0.45`)}s;
`;

const Carousel = () => {
  const {
    slickTrackWidth,
    initTranslateX,
    bannerImageSize,
    bannerItems,
    currentIndex,
    forceMove,
  } = useSlideState();
  const dispatch = useSlideDispatch();

  const handleTransitionEnd = () => {
    if (currentIndex === bannerItems.length - 2) {
      dispatch({ type: FORCE_MOVE, payload: { index: 2 } });
    }
    if (currentIndex === 1) {
      dispatch({
        type: FORCE_MOVE,
        payload: { index: bannerItems.length - 3 },
      });
    }
    setTimeout(() => {
      dispatch({ type: CHANGE_FORCE });
    }, 0);
  };

  return (
    <CarouselBlock onTransitionEnd={handleTransitionEnd}>
      <SlickTrack
        width={slickTrackWidth}
        initTranslateX={initTranslateX}
        force={forceMove}
      >
        {bannerItems.map((item, arrayIndex) => {
          const props = { bannerImageSize, arrayIndex, ...item };
          return <BannerItem key={arrayIndex} {...props} />;
        })}
      </SlickTrack>
    </CarouselBlock>
  );
};

export default Carousel;
