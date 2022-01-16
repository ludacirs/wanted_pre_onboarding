import { useEffect, useRef, useState } from "react";
import { useSlideState } from "../../contexts/SlideContext";

const DELAY_MS = 3000;

const useAutoSlide = (nextSlide) => {
  const [timerSwitch, setTimerSwitch] = useState(true);
  const { currentIndex } = useSlideState();
  const timerRef = useRef(null);

  useEffect(() => {
    if (!timerSwitch) {
      return;
    }

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, DELAY_MS);
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentIndex, timerSwitch]);

  const handleBannerEnter = () => {
    setTimerSwitch(false);
  };
  const handleBannerLeave = () => {
    setTimerSwitch(true);
  };

  return { handleBannerEnter, handleBannerLeave };
};

export default useAutoSlide;
