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
    handleMouseDown,
    handleMouseMove,
    handleMouseEnd,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
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
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseEnd}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
      >
        {bannerItems.map((item, arrayIndex) => {
          // 현재 배너가 처음이거나 마지막일 때 클론해서 붙여넣은 아이템도 동일한 속성을 같게 하기 위한 로직
          if (isFirstORLast(currentIndex, arrayIndex, bannerItems.length)) {
            const props = { bannerImageSize, currentItem: true, ...item };
            return <BannerItem key={arrayIndex} {...props} />;
          }

          const props = {
            bannerImageSize,
            currentItem: currentIndex === arrayIndex,
            ...item,
          };
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

const isFirstORLast = (currentIndex, arrayIndex, totalSize) =>
  (currentIndex === 1 && arrayIndex === totalSize - 3) ||
  (currentIndex === totalSize - 2 && arrayIndex === 2);
