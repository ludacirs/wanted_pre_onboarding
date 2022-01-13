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
  const { distance, handleTouchStart, handleTouchMove, handleTouchEnd } =
    useSwipe(dispatch, currentIndex);

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
        initTranslateX={distance ? initTranslateX - distance : initTranslateX}
        force={forceMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
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
