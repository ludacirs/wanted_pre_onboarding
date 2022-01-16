import { MOVE_NEXT_SLIDE } from "../../../contexts/SlideContext";
import { useState } from "react";

const useSwipe = (dispatch, currentIndex) => {
  const [isMouseClicking, setIsMouseClicking] = useState(false);
  const [coordinate, setCoordinate] = useState({
    startX: 0,
    distance: 0,
  });
  const { startX, distance } = coordinate;

  const handleTouchStart = (e) => {
    setIsMouseClicking(true);
    setCoordinate({ ...coordinate, startX: e.clientX });
  };
  const handleTouchMove = (e) => {
    if (!isMouseClicking) {
      return;
    }
    setCoordinate({ ...coordinate, distance: startX - e.clientX });
  };

  const handleTouchEnd = (e) => {
    setIsMouseClicking(false);
    if (Math.abs(distance) < 10) {
      const href = e.target.parentNode.href;

      href && window.location.assign(href);
      setCoordinate({ startX: 0, distance: 0 });
      return;
    }

    if (Math.abs(distance) < 350) {
      setCoordinate({ startX: 0, distance: 0 });
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

    setCoordinate({ startX: 0, distance: 0 });
  };

  const handleMouseLeave = (e) => {
    if (!isMouseClicking) {
      return;
    }
    handleTouchEnd(e);
  };
  return {
    distance,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseLeave,
  };
};

export default useSwipe;
