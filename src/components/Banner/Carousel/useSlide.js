import dummy from "../../../mock/dummy.json";
import { useCallback, useEffect, useRef } from "react";
import {
  CHANGE_BANNER_ITEMS,
  MOVE_NEXT_SLIDE,
  RESIZE_BANNER,
  useSlideDispatch,
  useSlideState,
} from "../../../contexts/SlideContext";
import throttleGenerator from "../../../lib/utils/throttleGenerator";

const DELAY_MS = 2500;

const useSlide = () => {
  const throttle = useCallback(throttleGenerator(500), []);
  const timerRef = useRef(null);

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

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, DELAY_MS);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentIndex]);

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
