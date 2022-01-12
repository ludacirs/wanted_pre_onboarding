import { useReducer } from "react";

const BANNER_PADDING = 24;

export const CHANGE_BANNER_ITEMS = "CHANGE_BANNER_ITEMS";
export const RESIZE_BANNER = "RESIZE_BANNER";

const initialState = {
  bannerItems: [],
  initTranslateX: 0,
  slickTrackWidth: 0,
  bannerImageSize: 1060,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_BANNER_ITEMS: {
      const bannerItems = getSlides(payload.data);
      const windowWidth = window.innerWidth;
      const slickTrackWidth = bannerItems.length * windowWidth;
      const initTranslateX = getInitTranslateX(
        state.bannerImageSize,
        windowWidth
      );

      return { ...state, bannerItems, slickTrackWidth, initTranslateX };
    }
    case RESIZE_BANNER: {
      const windowWidth = payload.width;
      const bannerImageSize = windowWidth >= 1200 ? 1060 : windowWidth - 80;
      const slickTrackWidth = state.bannerItems.length * windowWidth;
      const initTranslateX = getInitTranslateX(bannerImageSize, windowWidth);
      return { ...state, bannerImageSize, initTranslateX, slickTrackWidth };
    }
    default:
      return;
  }
};

const useSlideReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};

export default useSlideReducer;

const getSlides = (data) => {
  if (data.length === 1) {
    return data;
  }

  return [
    data[data.length - 2],
    data[data.length - 1],
    ...data,
    data[data.length - 2],
    data[data.length - 1],
  ];
};

const getInitTranslateX = (bannerImageSize, windowWidth) => {
  const bannerSize = bannerImageSize + BANNER_PADDING;
  const gap = (windowWidth - bannerSize) / 2;
  return -(bannerSize * 2) + gap;
};
