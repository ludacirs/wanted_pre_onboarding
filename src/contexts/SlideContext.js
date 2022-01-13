import { createContext, useContext, useReducer } from "react";

const BANNER_PADDING = 24;

export const CHANGE_BANNER_ITEMS = "CHANGE_BANNER_ITEMS";
export const RESIZE_BANNER = "RESIZE_BANNER";
export const MOVE_NEXT_SLIDE = "MOVE_NEXT_SLIDE";
export const MOVE_PREV_SLIDE = "MOVE_PREV_SLIDE";
export const FORCE_MOVE = "FORCE_MOVE";
export const CHANGE_FORCE = "CHANGE_FORCE";

const initialState = {
  bannerItems: [],
  initTranslateX: 0,
  slickTrackWidth: 0,
  bannerImageSize: 1060,
  currentIndex: 2,
  forceMove: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_BANNER_ITEMS: {
      const { bannerImageSize, currentIndex } = state;
      const bannerItems = getSlides(payload.data);
      const windowWidth = window.innerWidth;
      const slickTrackWidth = bannerItems.length * windowWidth;
      const initTranslateX = getInitTranslateX(
        bannerImageSize,
        windowWidth,
        currentIndex
      );

      return { ...state, bannerItems, slickTrackWidth, initTranslateX };
    }
    case RESIZE_BANNER: {
      const windowWidth = payload.width;
      const bannerImageSize = windowWidth >= 1200 ? 1060 : windowWidth - 80;
      const slickTrackWidth = state.bannerItems.length * windowWidth;
      const initTranslateX = getInitTranslateX(
        bannerImageSize,
        windowWidth,
        state.currentIndex
      );
      return { ...state, bannerImageSize, initTranslateX, slickTrackWidth };
    }
    case MOVE_NEXT_SLIDE: {
      const { bannerImageSize } = state;
      const targetIndex = payload.index;
      const initTranslateX = getInitTranslateX(
        bannerImageSize,
        window.innerWidth,
        targetIndex
      );
      return { ...state, currentIndex: targetIndex, initTranslateX };
    }
    case FORCE_MOVE: {
      const { bannerImageSize } = state;
      const targetIndex = payload.index;
      const initTranslateX = getInitTranslateX(
        bannerImageSize,
        window.innerWidth,
        targetIndex
      );
      return {
        ...state,
        currentIndex: targetIndex,
        initTranslateX,
        forceMove: true,
      };
    }
    case CHANGE_FORCE: {
      return {
        ...state,
        forceMove: false,
      };
    }
    default:
      return;
  }
};

const SlideStateContext = createContext(null);
const SlideDispatchContext = createContext(null);

export const SlideProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SlideStateContext.Provider value={state}>
      <SlideDispatchContext.Provider value={dispatch}>
        {children}
      </SlideDispatchContext.Provider>
    </SlideStateContext.Provider>
  );
};

export const useSlideState = () => {
  const state = useContext(SlideStateContext);
  if (!state) {
    throw new Error("slide state context error");
  }
  return state;
};

export const useSlideDispatch = () => {
  const dispatch = useContext(SlideDispatchContext);
  if (!dispatch) {
    throw new Error("slide dispatch context error");
  }
  return dispatch;
};

const getSlides = (data) => {
  if (data.length === 1) {
    return data;
  }

  return [
    data[data.length - 2],
    data[data.length - 1],
    ...data,
    data[0],
    data[1],
  ];
};

const getInitTranslateX = (bannerImageSize, windowWidth, targetIndex = 2) => {
  const bannerSize = bannerImageSize + BANNER_PADDING;
  const gap = (windowWidth - bannerSize) / 2;
  return -(bannerSize * targetIndex) + gap;
};
