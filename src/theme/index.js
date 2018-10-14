const _COLORS = {
  black: '#222',
  white: '#fff',
};

const _ZINDICES = {
  bottom: 1,
  middle: 5,
  top: 10,
};

// attributes for the app container
const app = {
  fontColor: _COLORS.black,
};

// attributes for background elements
const backgrounds = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  smallDesktop: {
    backgroundPosition: '0 50%',
  },
};

// attributes for buttons
const buttons = {
  fontColor: _COLORS.black,
  background: 'none',
  border: 'none',
  borderRadius: '0',
  boxShadow: 'none',
  margin: '0',
  padding: '0',
};

// attributes for carousel component
const carousel = {
  height: '100%',
  backgroundHeight: '100%',
  backgroundWidth: '100%',
};

// attributes for carousel content elements
const carouselContent = {
  position: 'absolute',
  positionLeft: '50%',
  positionTop: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

// attributes for carousel navigation buttons
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

// attributes for header elements (h1)
const headers = {
  fontSize: '35px',
  textTransform: 'uppercase',
  margin: '.25em 0',
  mobile: {
    fontSize: '50px',
  },
  smallDesktop: {
    fontSize: '40px',
  },
};

// attributes for header container component
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

// attributes for links
const links = {
  fontColor: _COLORS.black,
  iconHeight: '40px',
  iconWidth: '40px',
  iconPadding: '5px',
  iconBorder: `2px solid ${_COLORS.black}`,
  iconBorderRadius: '100%',
  iconTransition: '0.25s all',
};

// attributes for subheader elements (h2)
const subheaders = {
  fontSize: '22px',
  margin: '.25em 0',
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
  subheaders,
};

export default theme;
