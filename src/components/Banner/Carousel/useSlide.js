import dummy from "../../../mock/dummy.json";
import { useEffect } from "react";
import useSlideReducer, {
  CHANGE_BANNER_ITEMS,
  RESIZE_BANNER,
} from "./useSlideReducer";

const useSlide = () => {
  const [state, dispatch] = useSlideReducer();
  const { bannerItems, initTranslateX, slickTrackWidth, bannerImageSize } =
    state;

  useEffect(() => {
    const data = dummy;

    dispatch({ type: CHANGE_BANNER_ITEMS, payload: { data } });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const width = window.innerWidth;
    dispatch({ type: RESIZE_BANNER, payload: { width } });
  };

  const nextSlide = () => {};
  const prevSlide = () => {};

  return {
    bannerItems,
    initTranslateX,
    slickTrackWidth,
    bannerImageSize,
    nextSlide,
    prevSlide,
  };
};

export default useSlide;
