const _COLORS = {
  black: '#222',
  blue: '#003973',
  brown: '#c9bda7',
  white: '#fff',
};

const _FONT_FAMILIES = {
  header: 'Montserrat, sans-serif',
  body: '"Open Sans", sans-serif',
};

const _ZINDICES = {
  bottom: 1,
  middle: 5,
  top: 10,
};

const app = {
  backgroundColor: _COLORS.brown,
  backgroundImageUrl: '/media/code-mobile.jpg',
  fontColor: _COLORS.black,
  smallDesktop: {
    backgroundImageUrl: '/media/code.jpg'
  },
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

const fontFamilies = {
  googleFonts: [{
    name: 'Montserrat',
    weights: [
      500,
    ],
  }, {
    name: 'Open Sans',
    weights: [
      300,
    ]
  }]
};

const headerContainer = {
  position: 'absolute',
  positionBottom: '0',
  width: '100%',
  padding: '0.5em 0 2.5em',
  background: 'linear-gradient(179deg, rgba(255,255,255,0) 0%, rgba(239,236,230,0.5) 28%, rgba(229,224,214,0.8) 46%, rgba(217,209,193,1) 69%, rgba(201,189,167,1) 100%)',
  textAlign: 'center',
  transition: '0.5s background',
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
    background: 'none',
  },
};

const headers = {
  fontFamily: _FONT_FAMILIES.header,
  fontWeight: '500',
  letterSpacing: '0.05ch',
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

const links = {
  fontColor: _COLORS.blue,
  iconHeight: '40px',
  iconWidth: '40px',
  iconPadding: '5px',
  iconBorder: `2px solid ${_COLORS.blue}`,
  iconBorderRadius: '100%',
  iconTransition: '0.25s all',
  onActive: {
    fontColor: _COLORS.white,
    iconBackgroundColor: _COLORS.blue,
  }
};

const carousel = {
  height: '100%',
  backgroundHeight: '100%',
  backgroundWidth: '100%',
  contentPosition: 'absolute',
  contentPositionLeft: '50%',
  contentPositionTop: '50%',
  contentTransform: 'translate(-50%, -50%)',
  contentTextAlign: 'center',
  navButtonsPosition: 'absolute',
  navButtonsPositionTop: '50%',
  navButtonsTransform: 'translateY(-50%)',
  navButtonsFontColor: _COLORS.black,
  navButtonsFontColorMargin: '0.5em',
  navButtonsFontColorPadding: '0.5em',
  navButtonsFontColorZIndex: _ZINDICES.top,
  navButtons: {
    back: {
      positionLeft: '0',
    },
    next: {
      positionRight: '0',
    },
  },
  smallDesktop: {
    navButtons: {
      back: {
        positionLeft: '2%',
      },
      next: {
        positionRight: '2%',
      },
    },
  }
}

const theme = {
  app,
  backgrounds,
  buttons,
  carousel,
  fontFamilies,
  headerContainer,
  headers,
  links,
};

export default theme;
