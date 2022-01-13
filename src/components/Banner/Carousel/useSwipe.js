import { MOVE_NEXT_SLIDE } from "../../../contexts/SlideContext";
import { useState } from "react";

const useSwipe = (dispatch, currentIndex) => {
  const [coordinate, setCoordinate] = useState({
    startX: 0,
    distance: 0,
  });
  const { startX, distance } = coordinate;

  const handleTouchStart = (e) => {
    setCoordinate({ ...coordinate, startX: e.touches[0].clientX });
  };
  const handleTouchMove = (e) => {
    setCoordinate({ ...coordinate, distance: startX - e.touches[0].clientX });
  };

  const handleTouchEnd = () => {
    if (Math.abs(distance) < 450) {
      setCoordinate({ ...coordinate, distance: 0 });
      return;
    }

    if (distance < 0) {
      dispatch({
        type: MOVE_NEXT_SLIDE,
        payload: { index: currentIndex - 1 },
      });
    }
    if (distance > 0) {
      dispatch({
        type: MOVE_NEXT_SLIDE,
        payload: { index: currentIndex + 1 },
      });
    }

    setCoordinate({ ...coordinate, distance: 0 });
  };

  return { distance, handleTouchStart, handleTouchMove, handleTouchEnd };
};

export default useSwipe;
