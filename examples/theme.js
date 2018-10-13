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
  h1: {
    fontSize: '35px',
    textTransform: 'uppercase',
  },
  h3: {
    fontSize: '22px',
  },
  mobile: {
    h1: {
      fontSize: '50px',
    },
  },
  smallDesktop: {
    h1: {
      fontSize: '40px',
    },
  },
};

const links = {
  fontColor: _COLORS.blue,
  icon: {
    height: '40px',
    width: '40px',
    padding: '5px',
    border: `2px solid ${_COLORS.blue}`,
    borderRadius: '100%',
    transition: '0.25s all',
  },
  onActive: {
    fontColor: _COLORS.white,
    icon: {
      backgroundColor: _COLORS.blue,
    }
  }
};

const carousel = {
  height: '100%',
  background: {
    height: '100%',
    width: '100%',
  },
  content: {
    position: 'absolute',
    positionLeft: '50%',
    positionTop: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  navButtons: {
    fontColor: _COLORS.black,
    margin: '0.5em',
    padding: '0.5em',
    zIndex: _ZINDICES.top,
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
