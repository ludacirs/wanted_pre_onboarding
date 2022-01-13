const throttleGenerator = (ms) => {
  let timerId;

  return (callback) => {
    if (timerId) {
      return;
    }

    callback();

    timerId = setTimeout(() => {
      clearTimeout(timerId);
      timerId = null;
    }, ms);
  };
};

export default throttleGenerator;
