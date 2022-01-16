import dummy from "../../../mock/dummy.json";
import { useCallback, useEffect } from "react";
import {
  CHANGE_BANNER_ITEMS,
  MOVE_NEXT_SLIDE,
  RESIZE_BANNER,
  useSlideDispatch,
  useSlideState,
} from "../../../contexts/SlideContext";
import throttleGenerator from "../../../lib/utils/throttleGenerator";

const useSlide = () => {
  const throttle = useCallback(throttleGenerator(500), []);

  const { currentIndex } = useSlideState();
  const dispatch = useSlideDispatch();

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

  const nextSlide = () => {
    throttle(() => {
      dispatch({
        type: MOVE_NEXT_SLIDE,
        payload: { index: currentIndex + 1 },
      });
    });
  };
  const prevSlide = () => {
    throttle(() => {
      dispatch({
        type: MOVE_NEXT_SLIDE,
        payload: { index: currentIndex - 1 },
      });
    });
  };

  return { nextSlide, prevSlide };
};

export default useSlide;
