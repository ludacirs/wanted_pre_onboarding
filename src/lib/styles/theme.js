const size = {
  big: `992px`,
  small: `768px`,
};

const theme = {
  desktopS: `(max-width: ${size.small})`,
  desktopM: `(min-width: ${size.small}) and (max-width: ${size.big})`,
  desktopL: `(min-width: ${size.big})`,
  desktopMS: `(max-width: 991px)`,
};

export default theme;
