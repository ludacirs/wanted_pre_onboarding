import { MOVE_NEXT_SLIDE } from "../../../contexts/SlideContext";
import { useState } from "react";

const useSwipe = (dispatch, currentIndex) => {
  const [isMouseClicking, setIsMouseClicking] = useState(false);
  const [coordinate, setCoordinate] = useState({
    startX: 0,
    startY: 0,
    distance: 0,
  });
  const { startX, distance, startY } = coordinate;

  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    setIsMouseClicking(true);
    setCoordinate({ ...coordinate, startX: clientX, startY: clientY });
  };
  const handleMouseMove = (e) => {
    if (!isMouseClicking) {
      return;
    }
    setCoordinate({ ...coordinate, distance: startX - e.clientX });
  };

  const handleMouseEnd = (e) => {
    setIsMouseClicking(false);
    if (Math.abs(distance) < 10 && Math.abs(startY - e.clientY) < 10) {
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
    handleMouseEnd(e);
  };

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

  return {
    distance,
    handleMouseDown,
    handleMouseMove,
    handleMouseEnd,
    handleMouseLeave,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useSwipe;
