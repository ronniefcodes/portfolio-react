const _COLORS = {
  black: '#222',
  blue: '#003973',
  brown: '#c9bda7',
  white: '#fff',
};

const _FONT_FAMILIES = {
  header: 'Montserrat, Helvetica, Arial, sans-serif',
  base: '"Open Sans", Helvetica, Arial, sans-serif',
};

const app = {
  backgroundColor: _COLORS.black,
  fontFamily: _FONT_FAMILIES.base,
  fontColor: _COLORS.white,
};

const backgrounds = {
  filter: 'brightness(30%)',
};

const chevrons = {
  activeOutline: 'none',
  activeArmBoxShadow: '1px 1px 1px 1px red',
};

const carouselNavButtons = {
  activeOutline: 'none',
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
  positionTop: '50%',
  positionLeft: '50%',
  positionBottom: 'auto',
  positionRight: 'auto',
  transform: 'translate(-50%, -50%)',
  padding: '0',
  width: '100%',
  smallDesktop: {
    width: 'auto',
    height: 'auto',
    textAlign: 'center',
    margin: '0',
    padding: '0',
  },
  desktop: {
    margin: '0',
    padding: '0',
  }
};

const headers = {
  fontFamily: _FONT_FAMILIES.header,
  fontWeight: '500',
  letterSpacing: '0.05ch',
};

const subheaders = {
  fontFamily: _FONT_FAMILIES.base,
  fontSize: '16px',
  fontWeight: '500',
  letterSpacing: '0.05ch',
};

const theme = {
  app,
  backgrounds,
  chevrons,
  carouselNavButtons,
  fontFamilies,
  headerContainer,
  headers,
  subheaders,
};

export default theme;
