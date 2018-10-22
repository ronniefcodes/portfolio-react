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
  backgroundColor: _COLORS.black,
  fontColor: _COLORS.white,
};

// attributes for background elements
const backgrounds = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50%',
  transition: 'background-image 0.25s',
  smallDesktop: {
    backgroundPosition: '0 50%',
  },
};

// attributes for buttons
const buttons = {
  fontColor: _COLORS.white,
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
  backgroundColor: _COLORS.white,
  position: 'absolute',
  positionLeft: '20%',
  positionRight: '20%',
  positionBottom: '5%',
  minWidth: '50%',
  padding: '1em 2em',
  fontColor: _COLORS.black,
  textAlign: 'center',
  transition: 'opacity: 0.5s',
  zIndex: _ZINDICES.top,
  smallDesktop: {
    positionLeft: '50%',
    positionRight: 'auto',
    transform: 'translateX(-50%)',
  },
};

// attributes for carousel navigation buttons
const carouselNavButtons = {
  position: 'absolute',
  positionTop: '50%',
  transform: 'translateY(-50%)',
  fontColor: _COLORS.white,
  margin: '0.5em',
  padding: '0.5em',
  zIndex: _ZINDICES.top,
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

const chevrons = {
  activeAnimationDuration: '.5s',
  activeAnimationTimingFunction: 'ease-in-out',
  activeAnimationIterationCount: '2',
  armAnimationDuration: '.8s',
  armAnimationTimingFunction: 'ease-in-out',
  armLength: '30px',
  armWidth: '2px',
  armRotationAngle: '22deg',
  height: '60px',
  background: _COLORS.white,
};

const contactInformation = {
  margin: '1.5em 0 0',
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
  fontColor: _COLORS.white,
  iconHeight: '40px',
  iconWidth: '40px',
  iconPadding: '5px',
  iconBorder: `2px solid ${_COLORS.white}`,
  iconBorderRadius: '100%',
  iconTransition: '0.25s all',
  activeFontColor: _COLORS.black,
  activeIconBackgroundColor: _COLORS.white,
  activeIconBorderColor: _COLORS.black,
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
  contactInformation,
  chevrons,
  fontFamilies,
  headers,
  headerContainer,
  links,
  subheaders,
};

export default theme;
