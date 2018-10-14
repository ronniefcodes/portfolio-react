const _COLORS = {
  black: '#222',
  white: '#fff',
};

const _ZINDICES = {
  bottom: 1,
  middle: 5,
  top: 10,
};

const app = {
  fontColor: _COLORS.black,
};

const backgrounds = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  smallDesktop: {
    backgroundPosition: '0 50%',
  },
};

const buttons = {
  webkitAppearance: 'none',
  background: 'none',
  border: 'none',
  borderRadius: '0',
  boxShadow: 'none',
  margin: '0',
  padding: '0',
};

const carousel = {
  height: '100%',
  backgroundHeight: '100%',
  backgroundWidth: '100%',
};

const carouselContent = {
  position: 'absolute',
  positionLeft: '50%',
  positionTop: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

const carouselNavButtons = {
  position: 'absolute',
  positionTop: '50%',
  transform: 'translateY(-50%)',
  fontColor: _COLORS.black,
  fontColorMargin: '0.5em',
  fontColorPadding: '0.5em',
  fontColorZIndex: _ZINDICES.top,
  back: {
    positionLeft: '0',
  },
  next: {
    positionRight: '0',
  },
  smallDesktop: {
    back: {
      positionLeft: '1.5%',
    },
    next: {
      positionRight: '1.5%',
    },
  },
};

const fontFamilies = {};

const headers = {
  h1FontSize: '35px',
  h1TextTransform: 'uppercase',
  h3FontSize: '22px',
  mobile: {
    h1FontSize: '50px',
  },
  smallDesktop: {
    h1FontSize: '40px',
  },
};

const headerContainer = {
  position: 'absolute',
  positionBottom: '0',
  width: '100%',
  padding: '0.5em 0 2.5em',
  textAlign: 'center',
  zIndex: _ZINDICES.middle,
  smallDesktop: {
    positionRight: '0',
    padding: '1% 5% 5% 1%',
    textAlign: 'right',
  },
  desktop: {
    width: 'auto',
    height: 'auto',
    margin: '0 4% 4% 0',
    padding: '1%',
  },
};

const links = {
  fontColor: _COLORS.black,
  iconHeight: '40px',
  iconWidth: '40px',
  iconPadding: '5px',
  iconBorder: `2px solid ${_COLORS.black}`,
  iconBorderRadius: '100%',
  iconTransition: '0.25s all',
};

const theme = {
  app,
  backgrounds,
  buttons,
  carousel,
  carouselContent,
  carouselNavButtons,
  fontFamilies,
  headers,
  headerContainer,
  links,
};

export default theme;
