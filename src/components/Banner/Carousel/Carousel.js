import React from "react";
import styled from "styled-components";
import BannerItem from "./BannerItem/BannerItem";
import {
  CHANGE_FORCE,
  FORCE_MOVE,
  useSlideDispatch,
  useSlideState,
} from "../../../contexts/SlideContext";
import useSwipe from "./useSwipe";

const Carousel = () => {
  const {
    slickTrackWidth,
    translateX,
    bannerImageSize,
    bannerItems,
    currentIndex,
    forceMove,
  } = useSlideState();
  const dispatch = useSlideDispatch();
  const {
    distance,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseLeave,
  } = useSwipe(dispatch, currentIndex);

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
    <CarouselBlock onTransitionEnd={handleTransitionEnd} draggable={false}>
      <SlickTrack
        width={slickTrackWidth}
        translateX={distance ? translateX - distance : translateX}
        force={forceMove}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleTouchStart}
        onMouseUp={handleTouchEnd}
        onMouseMove={handleTouchMove}
      >
        {bannerItems.map((item, arrayIndex) => {
          const props = { bannerImageSize, arrayIndex, ...item };
          return <BannerItem key={arrayIndex} {...props} />;
        })}
      </SlickTrack>
    </CarouselBlock>
  );
};

const CarouselBlock = styled.div`
  position: relative;
  display: block;
  margin-bottom: 0;
  min-width: 500px;

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
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
  transition: ${({ force }) => (force ? `0` : `0.45`)}s;
`;

export default Carousel;
